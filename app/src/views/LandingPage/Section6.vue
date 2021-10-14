<template>
    <div class="section6">
        <div class="section-content">
            <div class="content-container">
                <div class="info">
                    <div class="logo-subtitle">
                        <div class="logo-container">
                            <h2>G.P <sushi class="image-4" /> C.P</h2>
                        </div>
                        <p>5,555 unique and wonderful pigs</p>
                    </div>
                    <p>©2021 TallGrass Studios. All rights reserved.</p>
                </div>
            </div>
            <div class="nav-container">
                <div class="nav">
                    <opensea class="social-media" />
                    <a href="https://discord.gg/bT9q7r2vaT" target="_blank"
                        ><discord class="social-media"
                    /></a>
                    <a href="https://twitter.com/GPCP_community"><twitter class="social-media"/></a>
                </div>
            </div>
        </div>
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
import opensea from '@/assets/svg/opensea.svg';
import twitter from '@/assets/svg/twitter.svg';
import discord from '@/assets/svg/discord.svg';
import sushi from '@/assets/svg/sushi.svg';

// import Button from '@/components/generics/Button.vue';
export default {
    name: 'Section6',
    computed: {
        ...mapGetters(['ST_getAll', 'Address', 'TOKEN_balanceOf'])
    },
    methods: {
        ...mapActions(['TOKENS_balanceOf'])
    },
    components: {
        opensea,
        twitter,
        discord,
        sushi
    }
};
</script>
<style lang="scss">
@import '@/styles';

.section6 {
    position: relative;
    background: var(--background-color);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 6;
    width: 100%;
    padding-bottom: 50px;
    flex-direction: column;

    .image-4 {
        height: 50px;
        width: 30px;
    }
    .section-content {
        width: 1500px;
        height: 200px;
        margin-top: 50px;
        display: flex;
        justify-content: space-between;
        align-items: space-between;

        .nav-container {
            height: 100%;
            display: flex;
            align-items: flex-end;
            justify-content: flex-end;

            .nav {
                display: flex;
                justify-content: center;
                align-items: center;

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
        }
        .content-container {
            display: flex;
            height: 100%;

            .info {
                flex-direction: column;
                text-align: left;
                display: flex;
                justify-content: space-between;
                align-items: flex-start;
                color: white;

                .logo-subtitle {
                    display: flex;
                    justify-content: flex-start;
                    align-items: flex-start;
                    flex-direction: column;
                }
                .logo-container {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    img {
                        height: 50px;
                    }
                    h2 {
                        font-size: 26pt;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                    }
                }
                p {
                    color: var(--offset-white);
                    margin-top: 0;
                    font-weight: 400;
                }
                .text {
                    display: flex;
                    flex-direction: column;
                }
            }
            h2 {
                color: white;

                span {
                    color: var(--button-color);
                }
            }

            button {
                width: 300px;
            }
        }
    }
}
</style>
