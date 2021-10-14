<template>
    <article class="roadmapArticle">
        <div class="container">
            <span
                class="circle"
                :class="{
                    'highlight-circle': reached
                }"
                >0{{ currentId + 1 }}</span
            >
        </div>
        <div class="info">
            <div>
                <h3 class="title">{{ title }}</h3>
            </div>
            <p>{{ description }}</p>
        </div>
    </article>
</template>

<script>
export default {
    name: 'RoadmapArticle',
    props: ['title', 'description', 'currentId', 'reached']
};
</script>

<style scoped lang="scss">
@import '@/styles';
.roadmapArticle {
    display: flex;
    height: 300px;
    justify-content: flex-start;
    align-items: flex-start;
    background: var(--foreground-color);
    padding: 30px;

    .info {
        display: flex;
        flex-direction: column;
        padding-left: 50px;
        text-align: left;

        p {
            color: var(--offset-white);
            font-size: 18pt;
        }
        & > div {
            display: flex;
            height: 100px;
            justify-content: flex-start;
            align-items: center;
            text-align: left;

            .title {
                @include FS_Super_Bold;

                font-size: 25pt;
            }
        }
    }

    .container {
        width: 110px;
        color: white;
    }
    .circle {
        height: 90px;
        width: 100px;
        border-radius: 70px;
        background: var(--background-color);
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 30pt;
        @include FS_Bold;
    }

    .highlight-circle {
        background: var(--button-color);
        color: white;
    }
}
</style>
