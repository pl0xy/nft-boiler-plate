<template>
    <div class="nft-balance">Here</div>
</template>

<script lang="ts">
import { Vue, Options } from 'vue-class-component';
import { Prop, Model, Ref } from 'vue-property-decorator';
import router from '@/router';
import { addressZero } from '@/utils';

export default class NftBalance extends Vue {
    tokenAddress: string = addressZero;
    navigateTo(path: string) {
        router.push({ path });
    }
    mounted() {
        this.tokenAddress = this.$route.params.address as string;
    }
}
</script>
<style lang="scss">
.nft-balance {
    position: relative;
    display: grid;
    justify-items: center;
    align-items: center;
    flex-direction: column;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(3, auto);
    grid-gap: 50px;

    p {
        margin-top: 50px;
    }
}
</style>
