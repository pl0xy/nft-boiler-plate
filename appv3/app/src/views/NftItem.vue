<template>
    <div class="nft-item">
        {{ nft }}
        <div class="left-column">
            <Tilt :options="tiltOptions">
                <ImageController data-tilt ref="imageRef" class="image" :image="nft.image" />
            </Tilt>
            <ItemDescription :description="nft.metadata.description" title="Description" />
        </div>
        <div class="right-column">
            <div class="details">
                <h3>
                    <a @click.prevent="navigateToCollection(token_address)">{{ nft.name }}</a>
                </h3>
                <h1>{{ nft.metadata.name }}</h1>
                <h4>Owner: {{ nft.owner_of }}</h4>
            </div>
            <SocialMedia @selected="handleSocialSelection" />
        </div>
    </div>
</template>

<script setup lang="ts">
import Tilt from '@/components/generics/Tilt.vue';
import SocialMedia from '@/components/generics/SocialMedia.vue';
import ImageController from '@/components/generics/ImageController.vue';
import ItemDescription from '@/components/items/ItemDescription.vue';
import { useRoute } from 'vue-router';
import { Address } from '@/types';

import router from '@/router';
const route = useRoute();

const tiltOptions = {
    reverse: true, // reverse the tilt direction
    max: 7, // max tilt rotation (degrees)
    startX: 0, // the starting tilt on the X axis, in degrees.
    startY: 0, // the starting tilt on the Y axis, in degrees.
    perspective: 1000, // Transform perspective, the lower the more extreme the tilt gets.
    scale: 1, // 2 = 200%, 1.5 = 150%, etc..
    speed: 300, // Speed of the enter/exit transition
    transition: true, // Set a transition on enter/exit.
    axis: null, // What axis should be disabled. Can be X or Y.
    reset: true, // If the tilt effect has to be reset on exit.
    easing: 'cubic-bezier(.03,.98,.52,.99)', // Easing on enter/exit.
    glare: true, // if it should have a "glare" effect
    'max-glare': 0.1, // the maximum "glare" opacity (1 = 100%, 0.5 = 50%)
    'glare-prerender': false, // false = VanillaTilt creates the glare elements for you, otherwise
    // you need to add .js-tilt-glare>.js-tilt-glare-inner by yourself
    'mouse-event-element': null, // css-selector or link to HTML-element what will be listen mouse events
    // you need to add .js-tilt-glare>.js-tilt-glare-inner by yourself
    gyroscope: true, // Boolean to enable/disable device orientation detection,
    gyroscopeMinAngleX: -45, // This is the bottom limit of the device angle on X axis, meaning that a device rotated at this angle would tilt the element as if the mouse was on the left border of the element;
    gyroscopeMaxAngleX: 45, // This is the top limit of the device angle on X axis, meaning that a device rotated at this angle would tilt the element as if the mouse was on the right border of the element;
    gyroscopeMinAngleY: -45, // This is the bottom limit of the device angle on Y axis, meaning that a device rotated at this angle would tilt the element as if the mouse was on the top border of the element;
    gyroscopeMaxAngleY: 45, // This is the top limit of the device angle on Y axis, meaning that a device rotated at this angle would tilt the element as if the mouse was on the bottom border of the element;
};

const token_address = route.params.address;
const token_id = route.params.tokenID;

await this.NFTs_fetchTokenMetadata({
    address: token_address,
    token_id: token_id,
});
const nft = this.NFT_getTokenByID(token_address, token_id);

function handleSocialSelection(social: Object) {
    this.UIM_openModal({
        show: true,
        content: 'edit-socials',
        data: {
            ...social,
        },
    });
}
function navigateToCollection(token_address: Address) {
    router.push({ path: `/nft/${token_address}/` });
}
</script>
<style lang="scss">
@import '@/styles';
.nft-item {
    position: relative;
    display: flex;
    p {
        margin-top: 50px;
    }
    .left-column {
        flex: 0 0 0%;
        flex-direction: column;
        row-gap: 20px;
        max-width: 43%;
        .image {
            border-radius: 10px;
            @include box-shadow();
        }
        & > :not(:first-child) {
            margin-top: 50px;
        }
    }

    .right-column {
        flex: 1 0 0%;
        display: flex;
        padding: 50px;
        padding-top: 0px;
        flex-direction: column;

        & > :not(:first-child) {
            margin-top: 50px;
        }
    }

    .details {
        text-align: left;
        display: flex;
        flex-direction: column;
        width: 100%;
        column-gap: 50px;
        & > :not(:first-child) {
            margin-top: 20px;
        }
    }
}
</style>
