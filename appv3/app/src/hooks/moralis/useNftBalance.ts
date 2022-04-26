import { addressZero } from '@/utils/index';
import { Address, ChainList } from '@/types';

import { verifyMetadata } from './useMetadata';
import { ref, unref, watchEffect, isRef, Ref, watch } from 'vue';
import Moralis from 'moralis';

const balance: Ref<any> = ref(null);
export const useNftBalance = (address: Ref<string>, chainId?: ChainList) => {
    const error: Ref<null | Error> = ref(null);
    function fetchBalance() {
        if (address.value == addressZero) {
            balance.value = null;
            return;
        }
        Moralis.Web3API.account
            .getNFTs({ chain: chainId ? chainId : 'eth', address: address.value })
            .then((nfts: any) => {
                balance.value = nfts?.result.map((result: any) => verifyMetadata(result));
            })
            .catch((e: Error) => { error.value = e })
    }

    watchEffect(fetchBalance);

    return { balance, error, address, fetchBalance }
}

