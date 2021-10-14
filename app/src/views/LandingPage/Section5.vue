<template>
    <div class="section5">
        <div class="section-content">
            <div class="content-container">
                <div class="info">
                    <div class="text">
                        <h2>
                            Join the <span>community</span> and prepare<br />
                            for the party
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
        <img class="image-1" src="@/assets/img/sushi_no_bg.png" />
        <img class="image-3" src="@/assets/img/king_no_bg.png" />
        <img class="image-4" src="@/assets/img/hoody_no_bg.png" />
        <img class="image-2" src="@/assets/img/warrior_no_bg.png" />
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
    name: 'Section5',
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

.section5 {
    position: relative;
    background: white;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 5;
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

    .image-1,
    .image-2,
    .image-4,
    .image-3 {
        position: absolute;
        transform: scaleX(-1);
    }

    .image-1 {
        height: 800px;
        right: -200px;
        top: -500px;
    }

    .image-2 {
        height: 1300px;
        right: -250px;
        bottom: -500px;
    }

    .image-3 {
        height: 900px;
        right: -200px;
        bottom: 300px;
    }
    .image-4 {
        height: 1000px;
        right: -200px;
        bottom: 0px;
    }
    section {
        background: white;
    }
}
</style>
