import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import NftBalance from '../views/NftBalance.vue';
// import NftItem from '../views/NftItem.vue';
// import NftCollection from '../views/NftCollection.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'NftBalance',
    component: NftBalance,
    meta: {
      title: 'MetaBook',
    },
  },
  // {
  //   path: '/nft/:address/:tokenID',
  //   name: 'NftItem',
  //   component: NftItem,
  //   meta: {
  //     title: 'MetaBook',
  //   },
  // },
  // {
  //   path: '/nft/:address',
  //   name: 'NftCollection',
  //   component: NftCollection,
  //   meta: {
  //     title: 'MetaBook',
  //   },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
