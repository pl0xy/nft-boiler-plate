import { MutationTree } from 'vuex';
import { Avatars, Avatar } from '../types';

export const mutations: MutationTree<Avatars> = {

    SET_AVATAR_BALANCE: (state: Avatars, payload: { tokenAddress: string; balance: string }) => {
        state.balance = payload.balance;
    },
    SET_AVATAR_TOKEN: (state: Avatars, payload: { address: string; index: string; token: string }) => {
        state.tokens = {
            ...state.tokens,
            [payload.token]: {
                name: '',
                id: payload.token,
                pendingRoyalties: ''
            }
        }
        console.log(state);
    },
    SET_PENDING_ROYALTIES: (state: Avatars, payload: { tokenID: string, pendingRoyalties: string }) => {
        state.tokens = {
            ...state.tokens,
            [payload.tokenID]: {
                ...state.tokens[payload.tokenID],
                pendingRoyalties: payload.pendingRoyalties
            }
        }
        console.log(state);
    },
};
