<template>
    <header class="header-nav">
        <div class="content">
            <div class="logo-container">
                <h2>G.P <img src="@/assets/img/hoody_no_bg.png" /> C.P</h2>
            </div>
            <div class="nav">
                <opensea class="social-media" />
                <a href="https://discord.gg/bT9q7r2vaT" target="_blank"><discord class="social-media"/></a>
                <a href=""><twitter class="social-media"/></a>
                <button v-if="Address == emptyAddress" class="connect" @click="connectWallet()">
                    Connect
                </button>
                <button v-if="Address != emptyAddress" class="address">{{ Address | shortAddress }}</button>
            </div>
        </div>
    </header>
</template>

<script lang="ts">
// <div v-if="Address != emptyAddress" class="balance-wallet">
//     <h4>SIG: {{ SIG_getBalance | fromWeiToReadable | toFixed(4) }}</h4>
// </div>
import { mapGetters, mapActions } from 'vuex';
import { Component, Prop, Vue } from 'vue-property-decorator';
import DepositForm from '@/components/forms/DepositForm.vue';
import Button from '@/components/generics/Button.vue';
import opensea from '@/assets/svg/opensea.svg';
import twitter from '@/assets/svg/twitter.svg';
import discord from '@/assets/svg/discord.svg';

@Component({
    components: {
        DepositForm,
        Button,
        opensea,
        twitter,
        discord
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
})
export default class Header extends Vue {
    @Prop() private msg!: string;
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.header-nav {
    width: 100%;
    height: 100px;
    display: flex;
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
        .dot {
            color: var(--button-color);
        }
        .finance {
            color: var(--main-secondary);
        }
    }

    .content {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: inherit;
        top: 0;

        .logo-container {
            display: flex;
            margin-left: 300px;
            justify-content: center;
            align-items: center;

            img {
                height: 50px;
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
            margin-right: 300px;

            .social-media {
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
