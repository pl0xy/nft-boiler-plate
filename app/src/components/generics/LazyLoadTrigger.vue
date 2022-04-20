<template>
    <div class="lazy-load-trigger">
        <Search class="search-icon" />
        <input
            @focus="searchFocused = true"
            @blur="searchFocused = false"
            placeHolder="0x0c2E57EFddbA8c768147D1fdF9176a0A6EBd5d83"
            v-on:keyup.enter="onEnter"
            v-model="address"
        />
    </div>
</template>

<script lang="ts">
import { mapGetters } from 'vuex';
import { Component, Prop, Vue, Ref } from 'vue-property-decorator';
import Search from '@/assets/svg/search.svg';
import { ISocialMedia } from '@/store/types/types.ts';

@Component({
    components: {
        Search
    }
})
export default class SearchBar extends Vue {
    public searchFocused = false;
    public onEnter() {
        this.$emit('selected', this.address);
    }
}
</script>
<style scoped lang="scss">
@import '@/styles';
.lazy-load-trigger {
    position: relative;
    display: flex;
    align-items: center;
    input {
        width: 100%;
        border-radius: 8px;
        background: var(--background-color);
        box-sizing: border-box;
        padding: 15px;
        padding-left: 75px;
        color: var(--second-shade);
        border: 1px solid var(--background-color);
        @include FS_Super_Bold;
        font-size: 13pt;
        max-width: 700px;
        transition: 0.2s;
        &:active,
        &:focus {
            -webkit-box-shadow: 0px 0px 10px 1px rgba(0, 0, 0, 0.68);
            box-shadow: 0px 0px 10px 1px rgba(0, 0, 0, 0.68);
            border: 1px solid var(--first-shade);
        }
    }
    .search-icon {
        position: absolute;
        left: 10px;
        path {
            fill: var(--first-shade);
        }
    }
}
</style>
