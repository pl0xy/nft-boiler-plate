import { addressZero } from '@/utils/index';
import { ref } from 'vue';
import Moralis from 'moralis';
import { useUserStore } from '@/store/useUserStore';
export const useUser = () => {
    const address = ref(addressZero);
    const userStore = useUserStore();
    function login() {
        Moralis.authenticate({ signingMessage: 'Log in using Moralis' })
            .then((user) => {
                address.value = user.get('ethAddress');
                userStore.setAddress(address.value);
            })
            .catch((error) => console.log(error));
    }

    function logout() {
        Moralis.User.logOut().then((user: unknown) => {
            address.value = addressZero
            userStore.setAddress(addressZero);
        });
    }
    return { address, login, logout }
}

