import { addressZero } from '@/utils';
import { Address } from '@/types';
import { defineStore } from 'pinia'

export const useUserStore = defineStore('loggedInUser', {
    state: () => ({
        balance: {},
        address: addressZero
    }),
    getters: {
        getBalance: (state) => state.balance,
        getAddress: (state) => state.address
    },
    actions: {
        setAddress(address: Address): void { this.address = address },
        setBalance(balance: object): void { this.balance = balance },
    },
});
