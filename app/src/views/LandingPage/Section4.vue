<template>
    <div class="section4">
        <div class="section-content">
            <div class="info">
                <div class="text">
                    <h2>
                        THE TEAM
                    </h2>
                    <p class="sub-title">
                        We have a dedicated team bringing your the cutest and chunkiest<br />
                        Guinea Pigs available today!
                    </p>
                </div>
            </div>
            <div class="team">
                <div class="item" v-for="(item, index) in team" :key="index">
                    <img :src="require(`@/assets/img/` + item.image)" />
                    <div class="name-info">
                        <h3>{{ item.name }}</h3>
                        <twitter />
                    </div>
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
import twitter from '@/assets/svg/twitter.svg';

// import Button from '@/components/generics/Button.vue';
export default {
    name: 'Section4',
    data() {
        return {
            team: [
                {
                    name: 'James',
                    twitter: 'www.twitter.com',
                    image: 'james-guineapig.png'
                },
                {
                    name: 'Rami',
                    twitter: 'www.twitter.com',
                    image: 'Guineapig-1.jpg'
                },
                {
                    name: 'Andrew',
                    twitter: 'www.twitter.com',
                    image: 'Guineapig-2.jpg'
                },
                {
                    name: 'Gareth',
                    twitter: 'www.twitter.com',
                    image: 'Guineapig-3.jpg'
                }
            ]
        };
    },
    computed: {
        ...mapGetters(['ST_getAll', 'Address', 'TOKEN_balanceOf'])
    },
    methods: {
        ...mapActions(['TOKENS_balanceOf'])
    },
    components: {
        twitter
    }
};
</script>
<style lang="scss">
@import '@/styles';

.section4 {
    position: relative;
    background: var(--foreground-color);
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
        display: flex;
        justify-content: center;
        align-items: flex-start;
        flex-direction: column;
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
                color: white;
            }
        }

        .team {
            display: grid;
            margin-top: 100px;
            width: 100%;
            grid-gap: 50px 100px;
            align-items: center;
            justify-content: center;
            grid-template-columns: repeat(3, 1fr);
            .item {
                display: flex;
                flex-direction: column;

                img {
                    height: 300px;
                    width: 300px;
                }
                .name-info {
                    margin-top:10px;
                    width: 300px;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    svg {
                        height: 50px;
                        width: 50px;
                    }
                }
            }
        }
        h2 {
            color: var(--button-color);
            font-size: 55pt;
            line-height: 30px;

            span {
                color: var(--button-color);
            }
        }

        button {
            width: 300px;
        }
    }
    section {
        background: white;
    }
}
</style>
