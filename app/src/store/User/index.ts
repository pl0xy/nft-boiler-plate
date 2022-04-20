import { Module } from 'vuex';
import { RootState, User } from '../types';

export const state: User = {
    balance: {},
    tokens: {
        nfts: [],
        address: ""
    }
};

import { getters } from './getters';
import { actions } from './actions';
import { mutations } from './mutations';

const namespaced = false;

export const user: Module<User, RootState> = {
    namespaced,
    state,
    getters,
    mutations,
    actions,
};
