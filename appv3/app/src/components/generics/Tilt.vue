<script setup lang="ts">
import VanillaTilt from 'vanilla-tilt';
import type { Ref } from 'vue';
import { ref } from 'vue';
const props = defineProps<{ options: Object; parallax: false }>();
const tiltRef: Ref<HTMLElement> = ref(new HTMLElement());
VanillaTilt.init(tiltRef.value, props.options);
</script>

<template>
    <div :class="parallax ? 'preserve' : ''" id="tiltMe" ref="tiltRef">
        <slot></slot>
    </div>
</template>

<style>
.preserve {
    transform-style: preserve-3d;
}
</style>
