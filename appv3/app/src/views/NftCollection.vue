<template>
    <div class="nft-collection" v-if="collection">
        <h2>{{ collection[0].name }}</h2>
        <div class="nft-balance">
            <Card
                v-for="(item, index) in lazyLoadSlice()"
                :title="item.name"
                :key="index"
                :image="item.image"
                @click.native="navigateToItem(item)"
            />
        </div>
        <div @click="moveLazy()">Move</div>
    </div>
</template>

<script setup lang="ts">
import Card from '@/components/generics/Card.vue';
import router from '../router';
import { useNftCollection } from '@/hooks/moralis/useNftCollection';
import { ref } from 'vue';
import { useRoute } from 'vue-router';
import { useEventListener } from '@/hooks/core/events/userEventListener';
const route = useRoute();
const token_address = ref(route.params.address as string);
const lazyLoadPosition = ref(0);
const sliceAmount = ref(15);
const step = ref(15);

function lazyLoadSlice() {
    return collection?.value.slice(0, lazyLoadPosition.value * step.value + sliceAmount.value);
}
const { collection } = useNftCollection(token_address);

function navigateToItem(item: any) {
    router.push({ path: `/nft/${token_address.value}/${item.token_id}` });
}
function moveLazy() {
    lazyLoadPosition.value++;
}

useEventListener(window, 'scroll', () => {
    if (window.pageYOffset + window.innerHeight >= document.documentElement.scrollHeight - 50) {
        moveLazy();
    }
});
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
