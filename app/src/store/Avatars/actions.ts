import { getTxEventParams, SYSTEM_TYPES_IDS } from '@/utils/index';
import { ActionTree, ActionContext } from 'vuex';
import { RootState, Avatars } from '../types';
import Web3 from 'web3';

export const actions: ActionTree<Avatars, RootState> = {
    async AVATARS_balanceOf(context: ActionContext<Avatars, RootState>, payload: { address: string }) {
        const { Avatars, Address } = context.getters;
        try {
            const balance = await Avatars.methods
                .balanceOf(payload.address)
                .call({ from: Address });
            context.commit('SET_AVATAR_BALANCE', { address: payload.address, balance });

        } catch (err) {
            console.log(err);
        }
    },
    async AVATARS_setup(context: ActionContext<Avatars, RootState>) {
        const { Avatars, Address } = context.getters;
        try {
            await context.dispatch('AVATARS_balanceOf', { address: Address });

            const { AVATARS_getBalance } = context.getters;
            await context.dispatch('AVATARS_tokenOfOwnerByIndex', { address: Address, indexes: Array.from(Array(parseInt(AVATARS_getBalance)).keys()) });

            const { AVATARS_getTokens } = context.getters;
            for (let i = 0; i < Object.keys(AVATARS_getTokens).length; i++) {
                await context.dispatch('AVATARS_pendingRoyalties', { tokenID: Object.keys(AVATARS_getTokens)[i] });
            }

        } catch (err) {
            console.log(err);
        }
    },
    async AVATARS_tokenOfOwnerByIndex(context: ActionContext<Avatars, RootState>, payload: { address: string, indexes: string[] }) {
        const { Avatars, Address } = context.getters;

        try {
            const tokenOfOwnerByIndexP = [];
            for (let i = 0; i < payload.indexes.length; i++) {
                tokenOfOwnerByIndexP[i] = Avatars.methods
                    .tokenOfOwnerByIndex(Address, payload.indexes[i]).call({ from: Address });
            }

            const tokens = await Promise.all(tokenOfOwnerByIndexP);
            for (let i = 0; i < payload.indexes.length; i++) {
                context.commit('SET_AVATAR_TOKEN', { address: payload.address, index: i, token: tokens[i] });
            }

        } catch (err) {
            console.log(err);
        }
    },
    async AVATARS_buy(context: ActionContext<Avatars, RootState>) {
        const { Avatars, Address, Web3 } = context.getters;
        try {
            console.log('here');
            await Avatars.methods
                .buy().send({ from: Address, value: Web3.utils.toWei('0.4', 'ether') });
            await context.dispatch('AVATARS_setup');

        } catch (err) {
            console.log(err);
        }
    },
    async AVATARS_buyMulti(context: ActionContext<Avatars, RootState>, payload: { amount: string }) {
        const { Avatars, Address } = context.getters;
        try {
            await Avatars.methods
                .buyMulti(payload.amount).call({ from: Address });

        } catch (err) {
            console.log(err);
        }
    },
    async AVATARS_claim(context: ActionContext<Avatars, RootState>, payload: { tokenID: string }) {
        const { Avatars, Address } = context.getters;
        console.log('here');
        try {
            await Avatars.methods
                .claim(payload.tokenID).send({ from: Address });
            console.log('here2');
        } catch (err) {
            console.log(err);
        }
    },
    async AVATARS_claimMulti(context: ActionContext<Avatars, RootState>, payload: { tokenIDs: string[] }) {
        const { Avatars, Address } = context.getters;
        try {
            await Avatars.methods
                .claimMulti(payload.tokenIDs).call({ from: Address });
        } catch (err) {
            console.log(err);
        }
    },
    async AVATARS_pendingRoyalties(context: ActionContext<Avatars, RootState>, payload: { tokenID: string }) {
        const { Avatars, Address } = context.getters;
        try {
            const pendingRoyalties = await Avatars.methods
                .pendingRoyalties(payload.tokenID).call({ from: Address });

            context.commit('SET_PENDING_ROYALTIES', { tokenID: payload.tokenID, pendingRoyalties });
        } catch (err) {
            console.log(err);
        }
    },


    //     function claim(uint256 tokenID) public {
    //         require(ownerOf(tokenID) == msg.sender, 'Must be the owner');
    // uint256 amount = totalRoyalties.mul(avatars[tokenID].tokenShare).div(100 ether);
    // payable(msg.sender).transfer(amount);
    //     }

    // function claimMulti(uint256[] memory tokenIDs) external {
    //     for (uint256 i = 0; i < tokenIDs.length; i++) {
    //         claim(tokenIDs[i]);
    //     }
    // }

    // function buy() external payable returns(uint256) {
    //     require(msg.value > 0.33 ether);
    //     totalRoyalties += 0.0495 ether; // each purchase sends 15% of royalties to the pool
    //     return mint(msg.sender);
    // }

    // function buyMulti(uint256 amount) external payable {
    //     require(amount <= 5, 'Can only mint 5 at a time');
    //     require(msg.value > uint256(0.33 ether).mul(amount));
    //     totalRoyalties += uint256(0.0495 ether).mul(amount); // each purchase sends 15% of royalties to the pool
    //     for (uint256 i = 0; i < amount; i++) {
    //         mint(msg.sender);
    //     }
    // }

    // function pendingRoyalties(uint256 tokenID) external view returns(uint256) {
    //     uint256 amount = totalRoyalties.mul(avatars[tokenID].tokenShare).div(100 ether);
    //     return amount;
    // }
};
