<template>
    <div class="section5">
        <div class="section-content">
            <div class="content-container">
                <div class="info">
                    <div class="text">
                        <h2>Join the <span>community</span> and prepare for the party</h2>
                        <p class="sub-title">
                            You have been invited to the party of the century. Grab your Guinea Pig and their
                            favourite outfit and prepare to get down and boogie.
                        </p>
                    </div>
                    <a href="https://discord.gg/bT9q7r2vaT" target="_blank"
                        ><Button buttonStyle="primary" title="JOIN DISCORD"
                    /></a>
                </div>
            </div>
        </div>
        <side3 class="side3" />
    </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue';
import { mapActions } from 'vuex';
import { mapGetters } from 'vuex';
import web3 from 'Web3';
import Button from '@/components/generics/Button.vue';
import side3 from '@/assets/svg/Guineapig-side3.svg';

// import Button from '@/components/generics/Button.vue';
export default {
    name: 'Section5',
    computed: {
        ...mapGetters(['ST_getAll', 'Address', 'TOKEN_balanceOf'])
    },
    methods: {
        ...mapActions(['TOKENS_balanceOf'])
    },
    components: {
        Button,
        side3
    }
};
</script>
<style lang="scss">
@import '@/styles';

.section5 {
    position: relative;
    background: white;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 5;
    height: 100%;
    width: 100%;
    padding-bottom: 150px;
    flex-direction: column;
    .section-content {
        width: 1500px;
        margin-top: 200px;
        position: relative;
        display: flex;
        justify-content: center;
        align-items: flex-start;
        flex-direction: column;

        .content-container {
            display: flex;

            .info {
                display: flex;

                flex-direction: column;
                height: 600px;
                text-align: left;
                justify-content: space-between;

                .text {
                    display: flex;
                    flex-direction: column;
                }
                p {
                    margin-top: 50px;
                    color: var(--background-color);
                }
            }
            h2 {
                color: var(--background-color);
                font-size: 55pt;
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

    .side3 {
        position: absolute;
        height: 1100px;
        right: -250px;
        bottom: -30px;
    }
    section {
        background: white;
    }

    @include breakpoint(mobileonly) {
        .section-content {
            width: 100%;
            justify-content: center;
            align-items: center;
            margin-top: 50px;
            margin-bottom: 50px;
            .content-container {
                h2 {
                    font-size: 47pt;
                }
                .info {
                    width: 350px;
                    text-align: center;
                }
            }
        }
        .side3 {
            z-index: -5000;
            opacity: 0;
        }
    }
    @include breakpoint(tablet) {
        .section-content {
            width: 100%;
            justify-content: center;
            align-items: center;
            .content-container {
                .info {
                    width: 800px;
                    text-align: center;
                }
            }
        }
        .side3 {
            z-index: -5000;
            opacity: 0;
        }
    }
    @include breakpoint(phablet) {
        .section-content {
            width: 100%;
            justify-content: center;
            align-items: center;
            .content-container {
                .info {
                    width: 500px;
                    margin-left: 50px;
                    text-align: center;
                }
            }
        }
        .side3 {
            z-index: -5000;
            opacity: 0;
        }
    }

    @include breakpoint(laptop) {
        .section-content {
            width: 1000px;
            justify-content: flex-start;
            align-items: flex-start;
            .content-container {
                .info {
                    width: 666px;
                    margin-left: 0;
                    text-align: left;
                }
            }
        }
        .side3 {
            position: absolute;
            height: 1000px;
            right: -250px;
            bottom: -30px;
            z-index: 6;
            opacity: 1;
        }
    }
    @include breakpoint(desktop) {
        .section-content {
            width: 1400px;
            justify-content: flex-start;
            align-items: flex-start;
            .content-container {
                .info {
                    width: 1000px;
                    margin-left: 0;
                    text-align: left;
                }
            }
        }
        .side3 {
            position: absolute;
            height: 1100px;
            right: -250px;
            bottom: -30px;
            opacity: 1;
        }
    }
}
</style>
