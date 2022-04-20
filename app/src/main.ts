import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

import Moralis from 'moralis';
Vue.config.productionTip = false;
const serverUrl = process.env.VUE_APP_MORALIS_SERVER_URL;
const appId = process.env.VUE_APP_MORALIS_APPLICATION_ID;
console.log(serverUrl, appId);
Moralis.start({ serverUrl, appId });
new Vue({
    router,
    store,
    render: (h) => h(App),
}).$mount('#app');

import '@/styles/index.scss';
import '@/utils/filters';
import * as Utils from '@/utils';
Object.defineProperty(Vue.prototype, '$utils', { value: Utils });
declare global {
    interface Window {
        ethereum: any;
        web3: any;
    }
}
