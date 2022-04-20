<template>
    <div class="nft-balance">
        <Card
            v-for="(item, index) in NFT_getUserBalance"
            :title="item.name"
            :key="index"
            :image="item.image"
            @click.native="navigateToItem(item)"
        />
    </div>
</template>

<script>
import { mapActions } from 'vuex';
import { mapGetters } from 'vuex';
import Card from '@/components/generics/Card.vue';
import web3 from 'Web3';
import router from '../router';

export default {
    name: 'NftBalance',
    computed: {
        ...mapGetters(['NFT_getUserBalance', 'Address', 'TOKEN_balanceOf'])
    },
    methods: {
        ...mapActions(['TOKENS_balanceOf', 'UIM_openModal']),
        navigateToItem(item, index) {
            router.push({ path: `/nft/${item.token_address}/${item.token_id}` });
        }
    },
    mounted() {
        this.token_address = this.$route.params.address;
    },
    components: { Card }
};
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
