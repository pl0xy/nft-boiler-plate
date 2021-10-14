<template>
    <div class="section3" ref="section3">
        <div class="roadmap">
            <div ref="title" class="roadmap-title">
                <h2>Roadmap</h2>
                <p>
                    This roadmap outlines our goals and where we want to take. We have a lot of ideas and
                    concepts that we are working on. It may evolve over time and hopefully become even better!
                </p>
            </div>
            <RoadmapArticle
                class="roadmap-item"
                v-for="(item, index) in roadmap"
                :key="index"
                :currentId="index"
                :title="item.title"
                :reached="item.reached"
                :description="item.description"
                :ref="'article' + index"
            />
            <div class="roadmap-end">
                <h2>THEN WE KEEP EXPLORING THE GUINEA PIG PARTY!</h2>
            </div>
            <div class="progress-bar">
                <div class="circle"></div>
            </div>
            <div ref="progressBar" :style="{ height: progressHeight }" class="progress-bar-green"></div>
        </div>
        <div
            class="image-chain"
            ref="imageChain"
            :style="{ transform: 'translateY(' + imageChainPos + 'px)' }"
        >
            <img
                v-for="(item, index) in imageChain"
                :ref="'GuineaPig' + index"
                :key="index"
                :src="require(`@/assets/img/` + item)"
            />
        </div>
    </div>
</template>

<script lang="ts">
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue';
import { mapActions } from 'vuex';
import { mapGetters } from 'vuex';
import web3 from 'Web3';
import RoadmapArticle from '@/components/generics/RoadmapArticle.vue';

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
        RoadmapArticle
    },
    mounted() {
        setInterval(() => {
            this.imageChainPos -= 0.5;
        }, 5);
        setInterval(() => {
            for (let i = 0; i < this.imageChain.length; i++) {
                const element = this.$refs['GuineaPig' + i][0].getBoundingClientRect();
                const section = this.$refs.section3.getBoundingClientRect();
                if (element.top + element.height < section.top) {
                    const currentMargin = parseInt(
                        window.getComputedStyle(this.$refs.imageChain).getPropertyValue('margin-top')
                    );
                    this.$refs.imageChain.style.marginTop = currentMargin + element.height + 'px';
                    this.imageChain.push(this.imageChain.shift());
                }
            }
        }, 1000);

        const passed = this.roadmap.filter(item => item.reached);
        const latest = passed[passed.length - 1];
        const index = passed.indexOf(latest);
        const article = `article${index}`;
        const element = this.$refs[article][0].$el;
        var elHeight = element.offsetHeight;
        elHeight += parseInt(window.getComputedStyle(element).getPropertyValue('margin-top'));
        elHeight += parseInt(window.getComputedStyle(element).getPropertyValue('margin-bottom'));
        this.progressHeight = elHeight * (index + 1) + 'px';
    },
    data() {
        return {
            intervalid1: null,
            imageChainPos: 0,
            progressHeight: 0,
            imageChain: [
                '1.png',
                '2.png',
                '3.png',
                '4.png',
                '5.png',
                '6.png',
                '7.png',
                '8.png',
                '9.png',
                '10.png',
                '11.jpg',
                '12.jpg',
                '13.jpg',
                '14.jpg',
                'jamesavatar.jpg'
            ],
            roadmap: [
                {
                    title: 'DEVELOP INITIAL GUINEA PIGS',
                    reached: true,
                    description:
                        'You have been invited to the party of the century. Grab your Guinea Pig and their favourite outfit and prepare to get downand boogie.'
                },
                {
                    title: 'RELEASE 5,555 GENISIS TOKENS',
                    reached: false,
                    description:
                        'You have been invited to the party of the century. Grab your Guinea Pig and their favourite outfit and prepare to get downand boogie.'
                },
                {
                    title: 'DEVELOP "PEA FLAKE" ERC-20 TOKEN',
                    reached: false,
                    description:
                        'You have been invited to the party of the century. Grab your Guinea Pig and their favourite outfit and prepare to get downand boogie.'
                },
                {
                    title: 'CREATE CUSTOMISABLE MARKETPLACE',
                    reached: false,
                    description:
                        'You have been invited to the party of the century. Grab your Guinea Pig and their favourite outfit and prepare to get downand boogie.'
                }
            ]
        };
    }
};
</script>
<style lang="scss">
@import '@/styles';

.section3 {
    position: relative;
    background: white;
    background: var(--bacground-color);
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding-bottom: 300px;

    .image-chain {
        position: absolute;
        display: flex;
        flex-direction: column;
        top: -100px;

        img {
            height: 300px;
        }
    }
    .roadmap {
        display: flex;
        position: relative;
        z-index: 5;

        flex-direction: column;
    }

    @include breakpoint(mobileonly) {
        .roadmap {
            width: 100%;
            justify-content: center;
            align-items: center;
            .roadmap-title {
                width: 300px;
                margin-top: 100px;
                justify-self: flex-end;
                align-self: center;
                h2 {
                    color: var(--button-color);
                    font-size: 55pt;
                    line-height: 80px;
                }

                p {
                    margin-top: 25px;
                    color: var(--offset-white);
                }
            }
        }
        .image-chain {
            opacity: 0;
        }
        .roadmap-item {
            margin-top: 100px;
            position: relative;
            width: 80%;
            z-index: 5;
            height: 100%;
        }

        .roadmap-end {
            height: 300px;
            position: relative;
            display: flex;
            align-items: flex-end;
            width: 100%;
            .title {
                @include FS_Super_Bold;

                font-size: 25pt;
            }
        }
    }
    @include breakpoint(tablet) {
        .roadmap {
            width: 100%;
            justify-content: center;
            align-items: center;
            .roadmap-title {
                width: 500px;
                margin-top: 100px;
                justify-self: center;
                align-self: center;
                h2 {
                    color: var(--button-color);
                    font-size: 55pt;
                    line-height: 80px;
                }

                p {
                    margin-top: 25px;
                    color: var(--offset-white);
                }
            }
        }
        .image-chain {
            opacity: 0;
        }
        .roadmap-item {
            margin-top: 100px;
            position: relative;
            width: 90%;
            z-index: 5;
        }
        .roadmap-end {
            height: 300px;
            position: relative;
            display: flex;
            align-items: flex-end;
            justify-content: center;
            width: 100%;
            .title {
                @include FS_Super_Bold;

                font-size: 25pt;
            }
        }
    }
    @include breakpoint(phablet) {
        .roadmap {
            width: 100%;
            justify-content: center;
            align-items: center;
            .roadmap-title {
                width: 500px;
                margin-top: 100px;
                justify-self: flex-end;
                align-self: center;
                h2 {
                    color: var(--button-color);
                    font-size: 55pt;
                    line-height: 80px;
                }

                p {
                    margin-top: 25px;
                    color: var(--offset-white);
                }
            }
        }
        .image-chain {
            opacity: 0;
        }
        .roadmap-item {
            margin-top: 100px;
            position: relative;
            width: 80%;
            z-index: 5;
            height: 100%;
        }

        .roadmap-end {
            height: 300px;
            position: relative;
            display: flex;
            align-items: flex-end;
            justify-content: center;
            width: 100%;
            .title {
                @include FS_Super_Bold;

                font-size: 25pt;
            }
        }
    }

    @include breakpoint(laptop) {
        .roadmap {
            width: 1000px;
            justify-content: flex-start;
            align-items: flex-start;
            .roadmap-title {
                width: 500px;
                margin-top: 100px;
                justify-self: center;
                align-self: center;
                h2 {
                    color: var(--button-color);
                    font-size: 55pt;
                    line-height: 80px;
                }

                p {
                    margin-top: 25px;
                    color: var(--offset-white);
                }
            }

            .progress-bar {
                position: absolute;
                height: 100%;
                width: 10px;
                top: 0;
                left: 74px;
                z-index: 2;
                background: var(--sub-foreground-color);

                .circle {
                    height: 100px;
                    width: 100px;
                    position: absolute;
                    top: 96%;
                    left: -45px;
                    border-radius: 100px;
                    background: var(--sub-foreground-color);
                }
            }
            .progress-bar-green {
                position: absolute;
                height: 100%;
                width: 10px;
                top: 0;
                left: 74px;
                z-index: 4;
                background: var(--button-color);
            }
        }
        .image-chain {
            opacity: 1;
            right: 50px;
            img {
                height: 200px;
            }
        }
        .roadmap-item {
            margin-top: 100px;
            position: relative;
            width: 70%;
            z-index: 5;
        }

        .roadmap-end {
            height: 300px;
            position: relative;
            display: flex;
            justify-content: flex-start;
            margin-left: 150px;
            align-items: flex-end;
            width: 100%;
            @include FS_Super_Bold;
            width: 500px;
            font-size: 25pt;
        }
    }
    @include breakpoint(desktop) {
        .roadmap {
            width: 1500px;

            .roadmap-title {
                width: 600px;
                margin-top: 100px;
                justify-self: center;
                align-self: center;
                h2 {
                    color: var(--button-color);
                    font-size: 55pt;
                    line-height: 80px;
                }

                p {
                    margin-top: 25px;
                    color: var(--offset-white);
                }
            }
        }
        .image-chain {
            opacity: 1;
            right: 50px;
            img {
                height: 300px;
            }
        }
    }
}
</style>
