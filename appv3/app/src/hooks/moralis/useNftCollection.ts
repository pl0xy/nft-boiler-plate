import { addressZero } from '@/utils/index';
import { ChainList } from '@/types';
import { verifyMetadata } from './useMetadata';
import { ref, watchEffect, Ref } from 'vue';
import Moralis from 'moralis';

export const useNftCollection = (address: Ref<string>, chainId?: ChainList) => {
    const collection: Ref<any[]> = ref([]);
    const error: Ref<null | Error> = ref(null);
    function fetchCollection() {
        if (address.value == addressZero) {
            collection.value = [];
            return;
        }
        Moralis.Web3API.token
            .getAllTokenIds({ chain: chainId ? chainId : 'eth', address: address.value })
            .then((nfts: any) => {
                console.log(nfts);
                collection.value = nfts?.result.map((result: any) => verifyMetadata(result));
            })
            .catch((e: Error) => { error.value = e })
    }

    watchEffect(fetchCollection);

    return { collection, error, address, fetchCollection }
}

