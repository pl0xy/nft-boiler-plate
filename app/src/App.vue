<template>
    <div id="app">
        <Header :class="ShowModal ? 'blur' : ''" />
        <div class="router-wrapper">
            <router-view class="router" :class="ShowModal ? 'blur' : ''" />
        </div>
        <Modal v-if="ShowModal" @close="UIM_closeModal" />
    </div>
</template>
<script>
import { mapActions } from 'vuex';
import { mapGetters } from 'vuex';
import Modal from '@/components/modals/Modal.vue';
import Header from '@/components/Header.vue';
export default {
    name: 'App',
    computed: {
        ...mapGetters(['ShowModal'])
    },
    components: {
        Modal,
        Header
    },
    methods: {
        ...mapActions(['bootstrap', 'bootstrapContracts'])
    },

    async mounted() {
        this.bootstrap();
    }
};
</script>
<style lang="scss">
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    height: 100vh;
    width: 100vw;
    background-color: var(--background-color);
    overflow: scroll;
    overflow-x: hidden;
    /* Increase/decrease this value for cross-browser compatibility */
    box-sizing: content-box;
    /* So the width will be 100% + 17px */
}
.router-wrapper {
    margin-top: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    .router {
        max-width: 60%;
    }
}
.blur {
    filter: blur(8px);
    -webkit-filter: blur(8px);
}
</style>
