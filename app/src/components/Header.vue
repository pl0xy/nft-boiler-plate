<template>
    <header class="header-nav">
        <div class="content">
            <div class="logo-container">
                <a @click.prevent="navigateHome()"><h2>MetaBook</h2></a>
            </div>
            <SearchBar class="search-bar" @selected="searchCollection" />
            <div class="nav">
                <a class="social-media" href="https://discord.gg/bT9q7r2vaT" target="_blank"
                    ><opensea class="social-media"
                /></a>
                <a class="social-media" href="https://discord.gg/bT9q7r2vaT" target="_blank"><discord /></a>
                <a class="social-media" href="https://twitter.com/GPCP_community"><twitter /></a>
                <button v-if="Address == emptyAddress" class="connect" @click="connectWallet()">
                    Connect
                </button>
                <button v-if="Address != emptyAddress" class="address" @click="logout()">
                    {{ Address | shortAddress }}
                    <img class="blockie" :src="blockie(Address)" />
                </button>
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
import SearchBar from '@/components/generics/SearchBar.vue';
import makeBlockie from 'ethereum-blockies-base64';
import router from '../router';

export default {
    name: 'Header',
    components: {
        opensea,
        twitter,
        discord,
        SearchBar
    },
    methods: {
        ...mapActions(['login', 'logout']),
        async connectWallet() {
            await this.login();
        },
        blockie(address) {
            return makeBlockie(address);
        },
        navigateHome() {
            router.push({ path: `/` });
        },
        searchCollection(address) {
            router.push({ path: `/nft/${address}` });
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
    height: 100px;
    display: flex;
    justify-content: center;
    background-color: var(--first-shade);
    padding: 0 1%;
    .search-bar {
        width: 700px;
    }
    .blockie{
        height: 35px;
        width: 35px;
        border-radius: 50%;
    }
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
        .nav .social-media{
            display: none;
        }
        }
    }
    @include breakpoint(tablet) {
        .content {
            .nav {
                display: none;
            }
        }
    }
    @include breakpoint(phablet) {
        .content {
            .nav {
                display: none;
            }
        }
    }

    @include breakpoint(laptop) {

    }
    @include breakpoint(desktop) {

    }
    .content {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        top: 0;
        margin:: 0 10px;
        .logo-container {
            display: flex;
            justify-content: center;
            align-items: center;
            margin-right: 100px;
            svg {
                height: 50px;
                width: 40px;
            }
            h2 {
                line-height: 20px;
                display: flex;
                justify-content: center;
                color: var(--main);
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
                    path {
                            fill: var(--background-color);
                        }
                    &:hover {
                        cursor: pointer;
                        path {
                            fill: var(--main);
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
            color: var(--background-color);
            border: 3px solid var(--main);
            background: var(--main);
            font-weight: 700;
            outline: none;
            display: flex;
            justify-content: center;
            align-items: center;
            &:hover {
                cursor: pointer;
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
            justify-content: center;
        }
    }
}
</style>
