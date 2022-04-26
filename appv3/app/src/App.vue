<template>
    <div id="app">
        <Header :class="ui.getIsModalAwake ? 'blur' : ''" />
        <div class="router-wrapper">
            <router-view class="router" :class="ui.getIsModalAwake ? 'blur' : ''" />
        </div>
        <Modal v-if="ui.getIsModalAwake" @close="ui.closeModal()" />
    </div>
</template>

<script lang="ts" setup>
import Modal from '@/components/modals/Modal.vue';
import Header from '@/components/Header.vue';
import { useUi } from '@/store/ui';
const ui = useUi();
</script>

<style lang="scss">
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background-color: var(--background-color);
    height: 100%;

    /* Increase/decrease this value for cross-browser compatibility */
    /* So the width will be 100% + 17px */
}
.router-wrapper {
    margin-top: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    .router {
        max-width: 60%;
    }
}
.blur {
    filter: blur(8px);
    -webkit-filter: blur(8px);
}
</style>
