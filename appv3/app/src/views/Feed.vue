<template>
    <MessageInput class="feed" />
</template>

<script setup lang="ts">
import MessageInput from '@/components/feed/MessageInput.vue';
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
.feed {
    width: 70%;
}
</style>
