<template>
    <div class="image-controller">
        <div class="container">
            <div class="image-container" :style="{ width: imageWidth }">
                <img :ref="imageContainer" :src="image" />
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { Vue, Options } from 'vue-class-component';
import { Prop, Model, Ref } from 'vue-property-decorator';
import Box from '@/components/generics/Box.vue';
import { resolveLink } from '@/utils/ipfs';

@Options({
    components: {
        Box,
    },
})
export default class ImageController extends Vue {
    @Ref('imageContainer') readonly imageContainer!: HTMLElement;
    @Prop({ required: true }) readonly image: string = '';
    public imageWidth = '';
    public imageWidthCss(): string {
        return this.imageContainer.clientWidth + 'px !important';
    }
    mounted() {
        this.imageWidth = this.imageWidthCss();
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import '@/styles';
.image-controller {
    cursor: pointer;
    max-height: 1000px;
    width: 100%;
    min-height: 200px;
    border-radius: inherit;
    .container {
        min-height: inherit;
        width: 100%;
        position: relative;
        display: block;
        overflow: hidden;
        border-radius: inherit;
        .image-container {
            flex-grow: 2;
            max-height: 1000px;
            width: 1000px;
            height: 100%;
            -webkit-box-align: center;
            align-items: center;
            display: flex;
            -webkit-box-pack: center;
            justify-content: center;
            max-height: 100%;
            max-width: 100%;
            overflow: hidden;
            position: relative;
            align-items: center;
            justify-content: center;
            flex-direction: column;
        }

        img {
            width: auto;
            height: auto;
            max-width: 100%;
            max-height: 100%;
            border-radius: initial;
            object-fit: contain;
        }
    }
}
</style>
