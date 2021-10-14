import { GetterTree } from 'vuex';
import { RootState, Avatars } from '../types';

export const getters: GetterTree<Avatars, RootState> = {
    AVATARS_getBalance: state => state.balance,
    AVATARS_getTokens: state => state.tokens,
    AVATARS_getPendingRoyalties: state => (tokenId: string) => {
        return state.tokens[tokenId].pendingRoyalties;
    }

};
