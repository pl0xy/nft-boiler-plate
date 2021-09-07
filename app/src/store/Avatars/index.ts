import { Module } from 'vuex';
import { RootState, Avatars } from '../types';

export const state: Avatars = {
    balance: '',
    tokens: {}
};

import { getters } from './getters';
import { actions } from './actions';
import { mutations } from './mutations';

const namespaced = false;

export const avatars: Module<Avatars, RootState> = {
    namespaced,
    state,
    getters,
    mutations,
    actions
};
