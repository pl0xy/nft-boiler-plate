import { state } from './index';
import { ActionTree, ActionContext } from 'vuex';
import { RootState, Network } from '../types';
import Web3 from 'web3';
// import EMP from '@/../../blockchain/build/contracts/ExpiringMultiParty.json';
import ERC20 from '@/../../blockchain/build/contracts/ERC20.json';
import Avatars from '@/../../blockchain/build/contracts/Avatars.json';
import { addressZero } from '@/utils';

export const actions: ActionTree<Network, RootState> = {
    setupWeb3(context: ActionContext<Network, RootState>) {
        let web3;
        if (window.ethereum) {
            web3 = new Web3(window.ethereum);
            window.ethereum.enable().then((enabled: boolean) => console.log(enabled));
            web3.eth.ens;
        } else if (window.web3) {
            web3 = new Web3(window.web3.currentProvider);
        } else {
            // TODO better handle of metamask
            window.alert('Non-Ethereum browser detected. You should consider trying MetaMask!');
        }
        context.commit('SET_WEB3', web3);
    },
    async getNetworkData(context: ActionContext<Network, RootState>) {
        const { Web3, Address } = context.getters;
        const network = await Web3.eth.net.getNetworkType();
        const networkId = await Web3.eth.net.getId();
        const currentBlock = await Web3.eth.getBlockNumber();
        context.commit('SET_NETWORK_DATA', {
            network,
            networkId,
            currentBlock
        });

        if (Address == addressZero)
            await context.dispatch('setAddress', { address: Web3.currentProvider.selectedAddress });

    },
    async setAddress(context: ActionContext<Network, RootState>, payload: { address: string }) {
        context.commit('SET_ADDRESS', payload.address);
    },

    async bootstrapContracts(context: ActionContext<Network, RootState>) {
        const { Address } = context.getters;
        await context.dispatch('setupWeb3');
        await context.dispatch('getNetworkData');
        await context.dispatch('NETWORK_setupAvatars', { address: '0x7F71541f34e2C04ad7d42b2FA1c11Fad188503af' });

    },

    async NETWORK_setupAvatars(context: ActionContext<Network, RootState>, payload: { address: string }) {
        const { Web3, NetworkId, Address } = context.getters;
        const AVATAR_CONTRACT = new Web3.eth.Contract(Avatars.abi, payload.address);
        await context.commit('SET_AVATAR_CONTRACT', AVATAR_CONTRACT);
        await context.dispatch('AVATARS_setup');
    },
};

interface Networks {
    [key: string]: Record<string, any>;
}
