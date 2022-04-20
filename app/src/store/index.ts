import Vue from 'vue';
import Vuex from 'vuex';
import { nfts } from './NFTs/';
import { network } from './Network';
import { tokens } from './Tokens';
import { user } from './User';
import { userInterfaceManager } from './UserInterfaceManager';
Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        version: '1.0.0' // a simple property
    },
    mutations: {},
    actions: {},
    modules: {
        network,
        tokens,
        nfts,
        user,
        userInterfaceManager,
    },
    plugins: []
});
