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
                    You have been invited to the party of the century. Grab your <br />
                    Guinea Pig and their favourite outfit and prepare to get down and boogie.
                </p>
                <a href="https://discord.gg/bT9q7r2vaT" target="_blank"
                    ><Button buttonStyle="primary" title="JOIN DISCORD"
                /></a>
            </div>
        </section>
        <img class="image-3" src="@/assets/img/bob_no_bg.png" />
        <img class="image-4" src="@/assets/img/dragon_no_bg.png" />
        <img class="image-2" src="@/assets/img/warrior_no_bg.png" />
        <img class="image-7" src="@/assets/img/king_no_bg.png" />
        <img class="image-6" src="@/assets/img/hoody_no_bg.png" />
        <img class="image-5" src="@/assets/img/sushi_no_bg.png" />
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
        Header
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
    section {
        height: 100vh;
        width: 100%;
    }

    .image-2 {
        height: 1000px;
        left: -200px;
        bottom: -300px;
        position: absolute;
    }
    .image-3 {
        height: 700px;
        left: -250px;
        bottom: 370px;
        position: absolute;
    }
    .image-4 {
        height: 800px;
        left: -200px;
        bottom: 50px;
        position: absolute;
    }
    .image-5 {
        height: 900px;
        right: -200px;
        bottom: -300px;
        position: absolute;
        transform: scaleX(-1);
    }
    .image-6 {
        height: 800px;
        right: -200px;
        bottom: 50px;
        position: absolute;
        transform: scaleX(-1);
    }
    .image-7 {
        height: 700px;
        right: -250px;
        bottom: 300px;
        position: absolute;
        transform: scaleX(-1);
    }
    .header {
        height: inherit;
        width: inherit;
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
