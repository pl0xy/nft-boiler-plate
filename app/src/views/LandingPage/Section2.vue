<template>
    <div class="section2">
        <div class="section-content">
            <div class="content-container">
                <img class="guineapig-gif" src="@/assets/gif/Guineapig.gif" />
                <div class="info">
                    <div class="text">
                        <h2><span>5,555</span> unique and wonderful pigs</h2>
                        <p class="sub-title">
                            There will be 5,555 invitations sent out to join the party. The guinea pigs will
                            come sporting some of the best fashion and costumes know to the Guinea Pig World.
                            Which one do you want?
                        </p>
                    </div>
                    <a class="discord-button" href="https://discord.gg/bT9q7r2vaT" target="_blank"
                        ><Button buttonStyle="primary" title="JOIN DISCORD"
                    /></a>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue';
import { mapActions } from 'vuex';
import { mapGetters } from 'vuex';
import web3 from 'Web3';
import Button from '@/components/generics/Button.vue';

// import Button from '@/components/generics/Button.vue';
export default {
    name: 'Section2',
    computed: {
        ...mapGetters(['ST_getAll', 'Address', 'TOKEN_balanceOf'])
    },
    methods: {
        ...mapActions(['TOKENS_balanceOf'])
    },
    components: {
        Button
    }
};
</script>
<style lang="scss">
@import '@/styles';

.section2 {
    position: relative;
    background: white;
    display: flex;
    justify-content: center;
    align-items: center;
    background: white;
    z-index: 5;
    width: 100%;
    flex-direction: column;
    @include breakpoint(mobileonly) {
        height: 100%;
        padding: 0 0 50px 0;
        .section-content {
            .guinepig-gif {
                height: 200px;
            }
            .content-container {
                flex-direction: column;
                justify-content: center;
                align-items: center;
                h2 {
                    font-size: 40pt;
                    text-align: center;
                    margin-top: 20px;
                }

                p {
                    text-align: center;
                }
                .guineapig-gif {
                    height: 100%;
                    width: 100%;
                }

                .text {
                    justify-content: center;
                    align-items: center;
                }
                .sub-title {
                    width: 400px;
                }
                .discord-button {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    text-decoration: none;
                }
            }
            .nav {
                display: none;
            }
        }
    }
    @include breakpoint(tablet) {
        height: 100%;
        padding: 0 0 50px 0;
        .section-content {
            .guinepig-gif {
                height: 200px;
            }
            .content-container {
                flex-direction: column;
                justify-content: center;
                align-items: center;
                h2 {
                    font-size: 50pt;
                    text-align: center;
                    margin-top: 20px;
                }

                p {
                    text-align: center;
                }
                .guineapig-gif {
                    height: 400px;
                    width: 400px;
                }
                .text {
                    justify-content: center;
                    align-items: center;
                }
                .sub-title {
                    width: 600px;
                }
                .discord-button {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    text-decoration: none;
                }
            }
            .nav {
                display: none;
            }
        }
    }
    @include breakpoint(phablet) {
        height: 100%;
        padding: 0 0 50px 0;
        .section-content {
            .guinepig-gif {
                height: 200px;
            }
            .content-container {
                flex-direction: column;
                justify-content: center;
                align-items: center;

                .text {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    h2 {
                        font-size: 50pt;
                        text-align: center;
                        width: 500px;
                        margin-top: 20px;
                    }
                    .text {
                        justify-content: center;
                        align-items: center;
                    }
                    .sub-title {
                        width: 500px;
                    }
                    p {
                        text-align: center;
                    }
                }
                .guineapig-gif {
                    height: 100%;
                    width: 100%;
                }

                .discord-button {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    text-decoration: none;
                }
            }
            .nav {
                display: none;
            }
        }
    }

    @include breakpoint(laptop) {
        height: 100vh;

        .section-content {
            width: 1000px;

            .content-container {
                justify-content: flex-start;
                align-items: flex-start;
                flex-direction: row;

                .text {
                    display: flex;
                    align-items: flex-start;
                    justify-content: flex-start;
                    h2 {
                        font-size: 50pt;
                        text-align: left;
                        margin: 0;
                    }

                    p {
                        text-align: left;
                    }
                }
                .guineapig-gif {
                    height: 500px;
                    width: 500px;
                }
                .info {
                    padding-left: 50px;
                }
                .discord-button {
                    display: flex;
                    align-items: flex-start;
                    justify-content: flex-start;
                    text-decoration: none;
                }
            }
        }
    }
    @include breakpoint(desktop) {
        .section-content {
            width: 1300px;

            .content-container {
                flex-direction: row;

                h2 {
                    font-size: 55pt;
                    text-align: left;
                }

                .guineapig-gif {
                    height: 600px;
                    width: 600px;
                }
            }
        }
    }
    .section-content {
        display: flex;
        justify-content: center;
        align-items: flex-start;
        flex-direction: column;
        height: 100%;
        .content-container {
            display: flex;

            .info {
                display: flex;
                flex-direction: column;
                height: 100%;
                text-align: left;
                justify-content: space-between;

                .text {
                    display: flex;
                    flex-direction: column;
                }
                p {
                    color: var(--background-color);
                }
            }
            h2 {
                color: var(--background-color);
                line-height: 80px;

                span {
                    color: var(--button-color);
                }
            }

            button {
                width: 300px;
            }
        }
    }
    section {
        background: white;
    }
}
</style>
