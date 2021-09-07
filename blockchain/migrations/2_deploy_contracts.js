const Avatars = artifacts.require('Avatars.sol');
module.exports = async function(deployer, _network, accounts) {
    await deployer.deploy(
        Avatars,
        'Avatars',
        'AVA',
        web3.utils.toWei('0.04', 'ether'),
        web3.utils.toWei('0.001', 'ether'),
        5000
    );
    const avatars = await Avatars.deployed();
};
