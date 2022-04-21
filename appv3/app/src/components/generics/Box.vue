<template>
    <div class="box">
        <div v-if="boxName" class="names">
            <div class="panelB">
                {{ boxName }}
            </div>
        </div>
        <div class="slots">
            <slot class="slot" name="boxContent"></slot>
        </div>
    </div>
</template>

<script lang="ts">
import { Vue, Options } from 'vue-class-component';
import { Prop, Model, Ref } from 'vue-property-decorator';
@Options({
    props: ['boxName'],
})
export default class Box extends Vue {}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import '@/styles';

.box {
    position: relative;
    display: flex;
    background-color: var(--first-shade);
    top: 0;
    flex-direction: column;
    justify-content: center;
    overflow: hidden;
    align-items: center;
    border-radius: 12px;
    padding: 5px;
    @include box-shadow();

    .names {
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 10px;

        & div {
            width: 100%;
            height: 60px;
            display: flex;
            align-items: center;
            @include FS_Bold;

            justify-content: center;
            font-size: var(--lg-font);
            font-weight: 700;
            color: var(--main-font);
        }

        .inactive {
            background: var(--sub-foreground-color);
            color: var(--main-secondary);

            &:hover {
                cursor: pointer;
                color: var(--main-font);
            }
        }
    }

    .slots {
        width: 100%;

        & > * {
            padding: 20px;
        }
    }
}
</style>
