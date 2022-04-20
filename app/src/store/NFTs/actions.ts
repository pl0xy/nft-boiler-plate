import { ActionTree, ActionContext } from 'vuex';
import { RootState, NFTs } from '../types';
import Web3 from 'web3';
import Moralis from 'moralis';
import { verifyMetadata } from '@/utils/metadata';

export const actions: ActionTree<NFTs, RootState> = {
    NFTs_userBalance(context: ActionContext<NFTs, RootState>, payload: { address: string }) {
        const { Avatars, Address } = context.getters;
        return Moralis.Web3API.account.getNFTs({ chain: 'eth', address: Address }).then((nfts: any) => {
            nfts.result = nfts?.result.map((result: any) => verifyMetadata(result));
            context.commit('SET_USER_NFT_BALANCE', nfts.result);
        });
    },
    NFTs_balanceOf(context: ActionContext<NFTs, RootState>, payload: { address: string }) {
        const { Avatars, Address } = context.getters;
    },
    NFTs_fetchTokenIDs(context: ActionContext<NFTs, RootState>, payload: { address: string; chainId?: any }) {
        return Moralis.Web3API.token
            .getAllTokenIds({ chain: payload.chainId ? payload.chainId : 'eth', address: payload.address })
            .then((nfts: any) => {
                nfts.result = nfts?.result.map((result: any) => verifyMetadata(result));
                context.commit('SET_ADDRESS_TOKEN_IDS', { nfts: Object.values(nfts.result), tokenAddress: payload.address });
            });
    },
    NFTs_fetchTokensMetadata(
        context: ActionContext<NFTs, RootState>,
        payload: { address: string; chainId?: any }
    ) {
        return Moralis.Web3API.token
            .getAllTokenIds({ chain: payload.chainId ? payload.chainId : 'eth', address: payload.address })
            .then((nfts: any) => {
                nfts.result = nfts?.result.map((result: any) => verifyMetadata(result));
                context.commit('SET_ADDRESS_TOKEN_IDS', { nfts, tokenAddress: payload.address });
            });
    },
    NFTs_fetchTokenMetadata(
        context: ActionContext<NFTs, RootState>,
        payload: { address: string; token_id: string, chainId?: any }
    ) {
        return Moralis.Web3API.token
            .getTokenIdOwners({ chain: payload.chainId ? payload.chainId : 'eth', address: payload.address, token_id: payload.token_id })
            .then((nfts: any) => {
                nfts.result = nfts?.result.map((result: any) => verifyMetadata(result));
                context.commit('SET_ADDRESS_TOKEN_ID', { token: nfts.result[0], tokenAddress: payload.address });
            });
    },
};
