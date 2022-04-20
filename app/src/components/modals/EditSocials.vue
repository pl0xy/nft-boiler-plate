<template>
    <div class="edit-socials">
        <h3>
            {{ socialInfo.name | capitilise }}
        </h3>
        <form class="textPoll">
            <div class="form-row">
                <input v-model="title" />
                <label>URL</label>
            </div>

            <Button :title="`Update ${socialInfo.name}`" @clicked="submit" buttonStyle="primary" />
        </form>
    </div>
</template>

<script lang="ts">
import { mapGetters } from 'vuex';
import { Component, Prop, Vue } from 'vue-property-decorator';
import { ISocialMedia } from '@/store/types/types.ts';
import Button from '@/components/generics/Button.vue';

@Component({
    components: { Button }
})
export default class EditSocials extends Vue {
    @Prop({ required: true }) readonly socialInfo: ISocialMedia;
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import '@/styles';
.edit-socials {
    max-height: 1000px;
    padding: 20px;
    min-height: 200px;
    border-radius: inherit;
    .container {
        min-height: inherit;
        width: 100%;
        position: relative;
        display: block;
        overflow: hidden;
        border-radius: inherit;
        .image-container {
            flex-grow: 2;
            max-height: 1000px;
            width: 1000px;
            height: 100%;
            -webkit-box-align: center;
            align-items: center;
            display: flex;
            -webkit-box-pack: center;
            justify-content: center;
            max-height: 100%;
            max-width: 100%;
            overflow: hidden;
            position: relative;
            align-items: center;
            justify-content: center;
            flex-direction: column;
        }

        img {
            width: auto;
            height: auto;
            max-width: 100%;
            max-height: 100%;
            border-radius: initial;
            object-fit: contain;
        }
    }
}
</style>
