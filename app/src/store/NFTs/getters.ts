import { GetterTree } from 'vuex';
import { RootState, NFTs } from '../types';

export const getters: GetterTree<NFTs, RootState> = {
    NFT_getUserBalance: (state) => state.balance,
    NFT_getUsersTokenByID: (state) => (tokenAddress: string, tokenID: string) => {
        const found = state.balance.filter((result: any) => {
            return result.token_address == tokenAddress && result.token_id == tokenID;
        });
        return found?.length == 1 ? found[0] : false;
    },
    NFT_getTokensByCollection: (state) => (collectionAddress: string) => {
        return Object.values(state.tokens[collectionAddress]);
    },
    NFT_getTokenByID: (state) => (tokenAddress: string, tokenID: string) => {
        const found = Object.values(state.tokens[tokenAddress]).filter((result: any) => {
            return result.token_address == tokenAddress.toLowerCase() && result.token_id == tokenID;
        });
        return found?.length == 1 ? found[0] : false;
    },
};
