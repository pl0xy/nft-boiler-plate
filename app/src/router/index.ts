import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';
import Trade from '../views/Trade.vue';
import NftBalance from '../views/NftBalance.vue';
import NftItem from '../views/NftItem.vue';
import NftCollection from '../views/NftCollection.vue';

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
    {
        path: '/',
        name: 'NftBalance',
        component: NftBalance,
        meta: {
            title: 'MetaBook',
        },
    },
    {
        path: '/nft/:address/:tokenID',
        name: 'NftItem',
        component: NftItem,
        meta: {
            title: 'MetaBook',
        },
    },
    {
        path: '/nft/:address',
        name: 'NftCollection',
        component: NftCollection,
        meta: {
            title: 'MetaBook',
        },
    },
];

const router = new VueRouter({
    routes,
});

router.beforeEach((to, from, next) => {
    document.title = to.meta.title;
    next();
});

export default router;
