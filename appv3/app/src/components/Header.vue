<script lang="ts" setup>
import SearchBar from '@/components/generics/SearchBar.vue';
import makeBlockie from 'ethereum-blockies-base64';
import router from '@/router';
import { Address } from '@/types';
import { addressZero, shortAddress } from '@/utils';
import store from '@/store/';
import { useUser } from '@/hooks/moralis/useUser';
import { ref, watch } from 'vue';
const { address, login, logout } = useUser();
function blockie(address: Address) {
    return makeBlockie(address);
}
function navigateHome(): void {
    router.push({ path: `/` });
}
function searchCollection(address: Address): void {
    router.push({ path: `/nft/${address}` });
}
</script>

<template>
    <header class="header-nav">
        <div class="content">
            <div class="logo-container">
                <a @click.prevent="navigateHome()"><h2>MetaBook</h2></a>
            </div>
            <SearchBar class="search-bar" @selected="searchCollection" />
            <div class="nav">
                <a class="social-media" href="https://discord.gg/bT9q7r2vaT" target="_blank">
                    <img v-svg-inline class="icon" src="@/assets/svg/opensea.svg" alt="example svg image" />
                </a>
                <a class="social-media" href="https://discord.gg/bT9q7r2vaT" target="_blank">
                    <img v-svg-inline class="icon" src="@/assets/svg/discord.svg" alt="example svg image" />
                </a>
                <a class="social-media" href="https://twitter.com/GPCP_community">
                    <img v-svg-inline class="icon" src="@/assets/svg/twitter.svg" alt="example svg image" />
                </a>
                <button v-if="address == addressZero" class="connect" @click="login()">Connect</button>
                <button v-if="address != addressZero" class="address" @click="logout()">
                    {{ shortAddress(address) }}
                    <img class="blockie" :src="blockie(address)" />
                </button>
            </div>
        </div>
    </header>
</template>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import '@/styles';
.header-nav {
    height: 75px;
    display: flex;
    justify-content: center;
    background-color: var(--first-shade);
    padding: 0 1%;
    .search-bar {
        width: 700px;
    }
    .blockie {
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
            .nav .social-media {
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
        margin: 0 10px;
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
                .icon {
                    width: 100px;
                    fill: var(--background-color) !important;
                    &:hover {
                        cursor: pointer;
                        fill: var(--main) !important;
                    }
                }

                & > * {
                    padding: 5px;
                    height: 35px;
                    width: 35px;
                    margin-right: 40px;
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
