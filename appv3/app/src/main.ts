import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import Moralis from 'moralis';
import '@/styles/index.scss';
import { createPinia } from 'pinia'
const serverUrl = process.env.VUE_APP_MORALIS_SERVER_URL;
const appId = process.env.VUE_APP_MORALIS_APPLICATION_ID;
Moralis.start({ serverUrl, appId });


// @ts-ignore
import VueSvgInlinePlugin from 'vue-svg-inline-plugin';

// import polyfills for IE if you want to support it
import 'vue-svg-inline-plugin/src/polyfills';

const app = createApp(App);

app.use(createPinia())
app.use(router);
// use Vue plugin without options
app.use(VueSvgInlinePlugin);

// use Vue plugin with options
app.use(VueSvgInlinePlugin, {
    attributes: {
        data: ['src'],
        remove: ['alt'],
    },
});
app.mount('#app');
