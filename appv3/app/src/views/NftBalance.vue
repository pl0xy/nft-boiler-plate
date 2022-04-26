<template>
    <div>
        <div class="nft-balance" v-if="balance == null">Not logged in</div>
        <div class="nft-balance" v-if="balance">
            <Card
                v-for="(item, index) in balance"
                :title="item.name"
                :key="index"
                :image="item.image"
                @click.native="navigateToItem(item)"
            />
        </div>
    </div>
</template>

<script setup lang="ts">
import { useNftBalance } from '@/hooks/moralis/useNftBalance';
import { useUserStore } from '@/store/useUserStore';
import { ref } from 'vue';
import Card from '@/components/generics/Card.vue';
import router from '@/router';
const userStore = useUserStore();
const address = ref(userStore.getAddress);
const { balance } = useNftBalance(address);

userStore.$subscribe((mutation, state) => {
    address.value = userStore.getAddress;
});
function navigateToItem(item: any): void {
    router.push({ path: `/nft/${item.token_address}/${item.token_id}` });
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
