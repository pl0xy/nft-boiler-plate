import { state } from './index';
import { ActionTree, ActionContext } from 'vuex';
import { RootState, Network } from '../types';
import Moralis from 'moralis';

import { addressZero } from '@/utils';

export const actions: ActionTree<Network, RootState> = {
    async bootstrap(context: ActionContext<Network, RootState>) {
        const { Address } = context.getters;
        const user: Moralis.User | undefined = Moralis.User.current();
        if (user) {
            context.commit('SET_ADDRESS', user.get('ethAddress'));
            context.dispatch('NFTs_userBalance');
        }
    },

    async login(context: ActionContext<Network, RootState>, payload: { address: string }) {
        const user: Moralis.User | undefined = Moralis.User.current();
        if (!user) {
            await Moralis.authenticate({
                signingMessage: 'Log in using Moralis',
            })
                .then((user) => {
                    context.commit('SET_ADDRESS', user.get('ethAddress'));
                    context.dispatch('NFTs_userBalance');
                })
                .catch(function (error) {
                    console.log(error);
                });
        }
    },

    async logout(context: ActionContext<Network, RootState>) {
        await Moralis.User.logOut();
        context.commit('SET_ADDRESS', addressZero);
        console.log('logged out');
    },
};

interface Networks {
    [key: string]: Record<string, any>;
}
