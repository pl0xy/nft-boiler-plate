<template>
    <header class="header-nav">
        <div class="content">
            <div class="logo-container">
                <h2>G.P <sushi /> C.P</h2>
            </div>
            <div class="nav">
                <a class="social-media" href="https://discord.gg/bT9q7r2vaT" target="_blank"
                    ><opensea class="social-media"
                /></a>
                <a class="social-media" href="https://discord.gg/bT9q7r2vaT" target="_blank"><discord /></a>
                <a class="social-media" href="https://twitter.com/GPCP_community"><twitter /></a>
                <button v-if="Address == emptyAddress" class="connect" @click="connectWallet()">
                    Connect
                </button>
                <button v-if="Address != emptyAddress" class="address">{{ Address | shortAddress }}</button>
            </div>
        </div>
    </header>
</template>

<script>
// <div v-if="Address != emptyAddress" class="balance-wallet">
//     <h4>SIG: {{ SIG_getBalance | fromWeiToReadable | toFixed(4) }}</h4>
// </div>
import { mapGetters, mapActions } from 'vuex';
import { Component, Prop, Vue } from 'vue-property-decorator';
import opensea from '@/assets/svg/opensea.svg';
import twitter from '@/assets/svg/twitter.svg';
import discord from '@/assets/svg/discord.svg';
import sushi from '@/assets/svg/sushi.svg';

export default {
    components: {
        opensea,
        twitter,
        discord,
        sushi
    },
    methods: {
        ...mapActions(['bootstrapContracts']),
        async connectWallet() {
            await this.bootstrapContracts();
        }
    },
    computed: {
        ...mapGetters(['Address'])
    },

    data() {
        return {
            emptyAddress: '0x0000000000000000000000000000000000000000'
        };
    }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import '@/styles';
.header-nav {
    width: 100%;
    height: 100px;
    display: flex;
    justify-content: center;
    .balance-wallet {
        position: absolute;
        right: 300px;
        height: 55px;
        background: var(--main-font);
        display: flex;
        z-index: 9;
        padding: 0 20px;
        top: 60px;
        align-items: center;
        justify-content: center;
        border-radius: 15px;

        h4 {
            color: var(--button-color);
            font-size: 12pt;
        }
    }

    h2 {
        font-size: 26pt;
    }
    @include breakpoint(mobileonly) {
        .content {
            width: 100% !important;
        .nav .social-media{
            display: none;
        }
        }
    }
    @include breakpoint(tablet) {
        .content {
            width: 100% !important;
            .nav {
                display: none;
            }
        }
    }
    @include breakpoint(phablet) {
        .content {
            width: 100% !important;
            .nav {
                display: none;
            }
        }
    }

    @include breakpoint(laptop) {
        .content {
            width: 1000px !important;
        }
    }
    @include breakpoint(desktop) {
        .content {
            width: 1500px !important;
        }
    }
    .content {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: inherit;
        top: 0;
        margin:: 0 10px;
        .logo-container {
            display: flex;
            justify-content: center;
            align-items: center;

            svg {
                height: 50px;
                width: 40px;
            }
            h2 {
                line-height: 20px;
                display: flex;
                justify-content: center;
                align-items: center;
            }
        }
        .logo {
            margin-right: 10px;
            top: 10px;
            height: 28px;
        }

        .nav {
            display: flex;
            justify-content: center;
            align-items: center;

            .social-media {

                & > * {

                padding: 5px;
                height: 35px;
                width: 35px;
                margin-right: 40px;

                &:hover {
                    cursor: pointer;
                    path {
                        fill: var(--button-color);
                    }
                }
                }
            }
        }
        .connect,
        .address {
            width: 100px;
            border: none;
            padding: 10px;
            margin: 0 0 0 50px;
            border-radius: 12px;
            background: transparent;
            transition: 0.2s;
            font-size: var(--md-font);
            color: var(--button-color);
            border: 3px solid var(--button-color);
            font-weight: 700;
            outline: none;
            &:hover {
                cursor: pointer;
                background: var(--button-color);
                color: white;
            }
        }

        .address {
            width: auto;
            color: white;
            background: var(--button-color);
        }
        a {
            font-weight: bold;
            color: #2c3e50;
            text-decoration: none;
            display: flex;
            font-size: var(--md-font);
            align-items: center;
            height: 50px;
            min-width: 100px;

            padding: 0 10px;
            padding-top: 9px;
            justify-content: center;
        }
    }
}
</style>
