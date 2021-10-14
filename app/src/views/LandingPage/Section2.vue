<template>
    <div class="section2">
        <div class="section-content">
            <div class="content-container">
                <img src="@/assets/gif/Guineapig.gif" />
                <div class="info">
                    <div class="text">
                        <h2>
                            <span>5,555</span> unique and <br />
                            wonderful pigs
                        </h2>
                        <p class="sub-title">
                            You have been invited to the party of the century. Grab your <br />
                            Guinea Pig and their favourite outfit and prepare to get down and boogie.
                        </p>
                    </div>
                    <a href="https://discord.gg/bT9q7r2vaT" target="_blank"
                        ><Button buttonStyle="primary" title="JOIN DISCORD"
                    /></a>
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
    height: 100vh;
    flex-direction: column;
    .section-content {
        width: 1500px;
        display: flex;
        justify-content: center;
        align-items: flex-start;
        flex-direction: column;

        .content-container {
            display: flex;
            .info {
                display: flex;
                flex-direction: column;
                height: 100%;
                text-align: left;
                padding-left: 50px;
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
    section {
        background: white;
    }
}
</style>
