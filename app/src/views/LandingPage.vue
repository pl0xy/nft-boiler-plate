<template>
    <div class="landing-page">
        <Section1 />
        <Section2 />
        <Section3 />
        <Section4 />
        <Section5 />
        <Section6 />
    </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue';
import { mapActions } from 'vuex';
import { mapGetters } from 'vuex';
import web3 from 'Web3';
import Button from '@/components/generics/Button.vue';
import Section1 from '@/views/LandingPage/Section1.vue';
import Section2 from '@/views/LandingPage/Section2.vue';
import Section3 from '@/views/LandingPage/Section3.vue';
import Section4 from '@/views/LandingPage/Section4.vue';
import Section5 from '@/views/LandingPage/Section5.vue';
import Section6 from '@/views/LandingPage/Section6.vue';

// import Button from '@/components/generics/Button.vue';
export default {
    name: 'LandingPage',
    computed: {
        ...mapGetters(['ST_getAll', 'Address', 'TOKEN_balanceOf'])
    },
    methods: {
        ...mapActions(['TOKENS_balanceOf'])
    },
    components: {
        Section1,
        Section2,
        Section3,
        Section4,
        Section5,
        Section6
    }
};
</script>
<style lang="scss">
.landing-page {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: start;
    width: 100%;
    flex-direction: column;

    p {
        margin-top: 50px;
    }
}
</style>
