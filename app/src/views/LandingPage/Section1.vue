<template>
    <div class="section1">
        <Header />
        <section>
            <div class="header">
                <h1>
                    GUINEA PIG<br />
                    COSTUME PARTY
                </h1>
                <p class="sub-title">
                    You have been invited to the party of the century. Grab your Guinea Pig and their
                    favourite outfit and prepare to get down and boogie.
                </p>
                <a href="https://discord.gg/bT9q7r2vaT" target="_blank"
                    ><Button buttonStyle="primary" title="JOIN DISCORD"
                /></a>
            </div>
        </section>
        <side1 class="side1" />
        <side2 class="side2" />
    </div>
</template>

<script lang="ts">
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue';
import { mapActions } from 'vuex';
import { mapGetters } from 'vuex';
import web3 from 'Web3';
import Box from '@/components/generics/Box.vue';
import Button from '@/components/generics/Button.vue';
import Header from '@/components/Header.vue';
import side1 from '@/assets/svg/Guineapig-side1.svg';
import side2 from '@/assets/svg/Guineapig-side2.svg';
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
        Button,
        Header,
        side1,
        side2
    }
};
</script>
<style lang="scss">
@import '@/styles';

.section1 {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: start;
    width: 100%;
    flex-direction: column;
    z-index: 4;

    background: radial-gradient(
        circle,
        rgba(18, 20, 48, 1) 0%,
        rgba(8, 9, 25, 1) 73%,
        rgba(8, 9, 25, 1) 100%
    );
    @include breakpoint(mobileonly) {
        .side2 {
            display: none;
        }
        .side1 {
            display: none;
        }
        .header {
            width: 400px;
        }
    }
    @include breakpoint(tablet) {
        .side1 {
            height: 40%;
            bottom: -20px;
            left: -100px;
        }
        .side2 {
            height: 40%;
            bottom: -20px;
            right: -100px;
        }
        .header {
            width: 500px;
        }
    }
    @include breakpoint(phablet) {
        .side1 {
            height: 40%;
            bottom: -20px;
            left: -100px;
        }
        .side2 {
            height: 40%;
            bottom: -20px;
            right: -100px;
        }
        .header {
            width: 500px;
        }
    }

    @include breakpoint(laptop) {
        .side2 {
            height: 60%;
            bottom: -20px;
            right: -100px;
        }
        .header {
            width: 500px;
        }

        .side1 {
            height: 60%;
            bottom: -20px;
            left: -100px;
        }
    }
    @include breakpoint(desktop) {
        .side2 {
            height: 70%;
            bottom: -20px;
            right: -100px;
        }
        .side1 {
            height: 70%;
            bottom: -20px;
            left: -100px;
        }
        .header {
            width: 800px;
        }
    }
    section {
        height: 100vh;
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .side1 {
        position: absolute;
    }
    .side2 {
        position: absolute;
    }
    .header {
        height: inherit;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;

        button {
            width: 300px;
            margin-top: 50px;
        }
    }

    .sub-title {
        color: var(--offset-white);
    }
}

.arrow {
    margin-top: 10px;
    transform: scale(0.6);
    path {
        fill: var(--button-color);
    }
}
</style>
