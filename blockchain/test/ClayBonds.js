import { takeSnapshot, revertSnapshot, advanceTime } from './_utils/evm';
import truffleAssert from 'truffle-assertions';
const AvatarsC = artifacts.require('Avatars.sol');

contract('ClayBonds', async accounts => {
    // Accounts
    const [Owner, UserA] = accounts;
    const YEAR = 31622400;
    const BN = web3.utils.toBN;
    let Contracts = {};
    let Avatars;
    // State snapshotting
    let snapshotId;
    beforeEach(async () => {
        snapshotId = await takeSnapshot(web3);
    });
    afterEach(async () => {
        await revertSnapshot(web3, snapshotId);
    });

    // Setup
    before(async () => {
        Avatars = await AvatarsC.new(
            'Avatars',
            'AVA',
            web3.utils.toWei('0.5', 'ether'),
            web3.utils.toWei('0.01', 'ether'),
            5000
        );
    });
    describe('Avatars', async () => {
        //50538
        // await advanceTime(YEAR - 100000);
        it('should mint()', async () => {
            const balance = await Avatars.balanceOf(Owner);
            const tx = await Avatars.buy({ value: web3.utils.toWei('0.4', 'ether') });
            const balance1 = await Avatars.balanceOf(Owner);
            console.log(balance.toString(), balance1.toString());
            assert.ok(balance1.toString() == balance.toNumber() + 1);
        });
        it('should mint() multi tokens', async () => {
            const balance = await Avatars.balanceOf(Owner);
            const amount = 5;
            const tx = await Avatars.buyMulti(amount, {
                from: Owner,
                value: web3.utils.toWei('2.1', 'ether')
            });
            const balance1 = await Avatars.balanceOf(Owner);
            console.log(balance1.toString(), balance.toNumber() + amount);
            assert.ok(balance1.toString() == balance.toNumber() + amount);

            // assert.ok(balance.toString() == web3.utils.toWei('20000', 'ether'));
        });
        it('should claim() a single claim', async () => {
            const amount = web3.utils.toWei('10', 'ether');
            const pending = await Avatars.pendingRoyalties(1);
            await Avatars.sendTransaction({ from: Owner, value: amount });
            const pending1 = await Avatars.pendingRoyalties(1);
            const share = await Avatars.avatars.call(1);
            const totalRoyalties = await Avatars.totalRoyalties.call();
            assert.equal(
                web3.utils
                    .toBN(totalRoyalties.toString())
                    .div(web3.utils.toBN(100))
                    .mul(web3.utils.toBN(share.tokenShare.toString()))
                    .div(web3.utils.toBN(web3.utils.toWei('1', 'ether')))
                    .toString(),
                web3.utils.toBN(pending1.toString()).toString()
            );
            await Avatars.claim(1);
        });
        it('should fail after claim()', async () => {
            const amount = web3.utils.toWei('10', 'ether');
            const pending = await Avatars.pendingRoyalties(1);
            await Avatars.sendTransaction({ from: Owner, value: amount });
            const pending1 = await Avatars.pendingRoyalties(1);
            const share = await Avatars.avatars.call(1);
            const totalRoyalties = await Avatars.totalRoyalties.call();
            assert.equal(
                web3.utils
                    .toBN(totalRoyalties.toString())
                    .div(web3.utils.toBN(100))
                    .mul(web3.utils.toBN(share.tokenShare.toString()))
                    .div(web3.utils.toBN(web3.utils.toWei('1', 'ether')))
                    .toString(),
                web3.utils.toBN(pending1.toString()).toString()
            );
            await Avatars.claim(1);
            await truffleAssert.fails(Avatars.claim(1), truffleAssert.ErrorType.revert, 'Nothing to claim');
            await Avatars.sendTransaction({ from: Owner, value: amount });
            await Avatars.claim(1);
        });
        // describe('Reverts', async () => {
        //     it('amount 0', async () => {
        //         await truffleAssert.fails(
        //             Contracts.bonds.mint(0, 0),
        //             truffleAssert.ErrorType.revert,
        //             'Amount must be greater than zero'
        //         );
        //     });
        //     it('maturation not reached', async () => {
        //         const amount = web3.utils.toWei('20000', 'ether');
        //         const tx = await Contracts.bonds.mint(0, amount);
        //         const id = tx.receipt.logs[0].args.id.toString();
        //         await truffleAssert.fails(
        //             Contracts.bonds.claim(id, amount),
        //             truffleAssert.ErrorType.revert,
        //             'Bond has not complete'
        //         );
        //     });
        // });
    });
});
