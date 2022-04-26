import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import NftBalance from '../views/NftBalance.vue';
import NftItem from '../views/NftItem.vue';
import NftCollection from '../views/NftCollection.vue';
import Feed from '../views/Feed.vue';

const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        name: 'Feed',
        component: Feed,
        meta: {
            title: 'MetaBook',
        },
    },
    {
        path: '/account',
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
        }
    }
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
});

export default router;
