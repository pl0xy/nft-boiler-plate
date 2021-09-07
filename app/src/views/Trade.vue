<template>
    <div class="trade">
        <Box boxName="Starting project" class="content">
            <div slot="boxContent">
                <h3>This is a starting off point for any crypto project</h3>
                <div class="prices">
                    <Button buttonStyle="primary" @clicked="AVATARS_buy" title="MINT A BEAN"></Button>
                </div>
            </div>
        </Box>
        <div class="bean-grid">
            <Box v-for="(item, index) in AVATARS_getTokens" :key="index" :boxName="index">
                <div slot="boxContent">
                    {{ item.key }}
                    <h2>ETH: {{ item.pendingRoyalties | fromWeiToReadable }}</h2>
                </div>
            </Box>
        </div>
    </div>
</template>

<script lang="ts">
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue';
import { mapActions } from 'vuex';
import { mapGetters } from 'vuex';
import Box from '@/components/generics/Box.vue';
import Button from '@/components/generics/Button.vue';
import PriceView from '@/components/generics/PriceView.vue';

// import Button from '@/components/generics/Button.vue';
export default {
    name: 'Trade',
    data() {
        return {
            numbers: []
        };
    },
    computed: {
        ...mapGetters(['AVATARS_getBalance', 'Address', 'AVATARS_getTokens']),
        balance() {
            return this.AVATARS_getBalance.length ? new Array(parseInt(this.AVATARS_getBalance)) : [];
        }
    },
    methods: {
        ...mapActions(['AVATARS_buy', 'AVATARS_tokenOfOwnerByIndex'])
    },
    components: {
        Box,
        Button
    }
};
</script>
<style lang="scss">
.trade {
    display: grid;
    justify-content: center;
    width: auto;
    align-items: start;
    margin: 150px 300px 0 300px !important;
    grid-template-columns: repeat(3, 1fr);
    grid-row-gap: 50px;
    grid-column-gap: 100px;
    padding-bottom: 100px;
    .prices {
        display: flex;
        justify-content: space-evenly;
        margin-top: 50px;
    }
}

.arrow {
    margin-top: 10px;
    transform: scale(0.6);
    path {
        fill: var(--button-color);
    }
}
</style>
