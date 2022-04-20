<template>
    <div class="nft-collection">
        <h2>{{ NFT_getTokensByCollection(token_address)[0].name }}</h2>
        <div class="nft-balance">
            <Card
                v-for="(item, index) in lazyLoadSlice"
                :title="item.name"
                :key="index"
                :image="item.image"
                @click.native="navigateToItem(item)"
            />
        </div>
    </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue';
import { mapActions } from 'vuex';
import { mapGetters } from 'vuex';
import Card from '@/components/generics/Card.vue';
import web3 from 'Web3';
import router from '../router';

// import Button from '@/components/generics/Button.vue';
export default {
    name: 'NftCollection',
    computed: {
        ...mapGetters(['NFT_getTokensByCollection']),
        lazyLoadSlice() {
            console.log(this.NFT_getTokensByCollection(this.token_address));
            return this.NFT_getTokensByCollection(this.token_address)?.slice(
                this.lazyLoadPosition * this.step,
                this.lazyLoadPosition * this.step + this.sliceAmount
            );
        }
    },
    data() {
        return {
            token_address: null,
            lazyLoadPosition: 0,
            sliceAmount: 15,
            step: 15
        };
    },
    methods: {
        ...mapActions(['NFTs_fetchTokenIDs', 'UIM_openModal']),
        navigateToItem(item, index) {
            router.push({ path: `/nft/${this.token_address}/${item.token_id}` });
        }
    },
    watch: {
        '$route.params.address': {
            handler: function(search) {
                this.token_address = this.$route.params.address;
                this.NFTs_fetchTokenIDs({ address: this.token_address });
            },
            deep: true,
            immediate: true
        }
    },
    components: { Card }
};
</script>
<style lang="scss">
.nft-collection {
    h2 {
        margin-bottom: 50px;
    }
}
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
