import { MutationTree } from 'vuex';
import { NFTs } from '../types';

export const mutations: MutationTree<NFTs> = {
    SET_USER_NFT_BALANCE: (state: NFTs, payload: any) => {
        state.balance = payload;
    },
    SET_ADDRESS_TOKEN_IDS: (state: NFTs, payload: { nfts: any; tokenAddress: string }) => {
        state.tokens = {
            ...state.tokens,
            [payload.tokenAddress]: payload.nfts.reduce((obj, nft) => Object.assign(obj, { [nft.token_id]: nft }), {})
        };
    },
    SET_ADDRESS_TOKEN_ID: (state: NFTs, payload: { token: any; tokenAddress: string }) => {
        const token = {
            [payload.token.token_id]: {
                ...payload.token
            }
        }
        state.tokens = {
            ...state.tokens,
            [payload.tokenAddress]: {
                ...state.tokens[payload.tokenAddress],
                ...token
            }
        };
    },
};
