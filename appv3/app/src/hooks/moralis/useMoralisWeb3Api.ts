
import Moralis from 'moralis';
import { ref } from 'vue';


export const useMoralisWeb3Api = (moralis: Promise<any>) => {
    const data = ref(null);
    const error = ref(null);

    const request = moralis
        .then((res) => res.json())
        .then((json) => (data.value = json))
        .catch((err) => (error.value = err));


    return { data, error, request };
}
