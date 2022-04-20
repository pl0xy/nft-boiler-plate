import { Module } from 'vuex';
import { RootState, NFTs } from '../types';

export const state: NFTs = {
    balance: {},
    tokens: {}
};

import { getters } from './getters';
import { actions } from './actions';
import { mutations } from './mutations';

const namespaced = false;

export const nfts: Module<NFTs, RootState> = {
    namespaced,
    state,
    getters,
    mutations,
    actions,
};
