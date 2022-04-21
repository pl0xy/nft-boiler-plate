<template>
    <div :class="parallax ? 'preserve' : ''" id="tiltMe" :ref="tiltRef">
        <slot></slot>
    </div>
</template>
<script lang="ts">
import VanillaTilt from 'vanilla-tilt';
import { Component, Prop Ref } from 'vue-property-decorator';
import { Vue } from 'vue-class-component';
export default class Tilt extends Vue {
    @Prop({ required: true }) readonly options: object = {};
    @Prop({ required: true }) readonly parallax = false;
    @Ref('tiltRef') tiltRef!: HTMLElement;

    mounted() {
        VanillaTilt.init(this.tiltRef, this.options);
    }
}
</script>

<style>
.preserve {
    transform-style: preserve-3d;
}
</style>
