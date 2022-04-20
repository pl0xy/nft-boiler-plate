<template>
    <Box>
        <div slot="boxContent" class="card">
            <header>
                <h2 class="title">{{ title }}</h2>
            </header>
            <p>{{ description }}</p>
        </div>
    </Box>
</template>

<script lang="ts">
import { mapGetters } from 'vuex';
import { Component, Prop, Vue } from 'vue-property-decorator';
import Box from '@/components/generics/Box.vue';

@Component({
    props: ['description', 'title'],
    components: {
        Box,
    },
})
export default class ItemDescription extends Vue {}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import '@/styles';

.card {
    position: relative;
    display: flex;
    top: 0;
    flex-direction: column;
    justify-content: start;
    overflow: hidden;
    align-items: center;
    border-radius: 12px;
    text-align: left;

    header {
        width: 100%;
        .title {
            text-align: left;
            width: 100%;
        }
    }
}
</style>
