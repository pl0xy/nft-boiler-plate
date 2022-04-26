import { addressZero } from '@/utils/index';
import { ChainList } from '@/types';
import { verifyMetadata } from './useMetadata';
import { ref, watchEffect, Ref, computed } from 'vue';
import Moralis from 'moralis';

export const useFetchNftMetadata = (address: Ref<string>, tokenId: Ref<string>, chainId?: ChainList) => {
    const nft: Ref<any> = ref(null);
    const error: Ref<null | Error> = ref(null);
    function fetchMetadata() {
        if (address.value == addressZero) {
            nft.value = null;
            return;
        }
        Moralis.Web3API.token
            .getTokenIdOwners({ chain: chainId ? chainId : 'eth', address: address.value, token_id: tokenId.value })
            .then((nfts: any) => {
                nft.value = nfts?.result.map((result: any) => verifyMetadata(result))[0];
                console.log(nft.value);
            })
            .catch((e: Error) => { error.value = e })
    }

    watchEffect(fetchMetadata);

    return { nft: computed(() => nft.value), error, address, fetchMetadata }
}

