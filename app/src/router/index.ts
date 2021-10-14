import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';
import Trade from '../views/Trade.vue';
import LandingPage from '../views/LandingPage.vue';

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [

    {
        path: '/',
        name: 'LandingPage',
        component: LandingPage,
        meta: {
            title: 'Guinea Pig Costume Party'
        }
    },


];

const router = new VueRouter({
    routes
});

router.beforeEach((to, from, next) => {
    document.title = to.meta.title
    next()
})

export default router;
