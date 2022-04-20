<template>
    <div class="social-media">
        <Box v-for="(social, index) in socials" :key="index" @click.native="selected(social)">
            <div slot="boxContent" class="social-icon">
                <Twitter v-if="social.name == 'twitter'" />
                <Discord v-if="social.name == 'discord'" />
            </div>
        </Box>
    </div>
</template>

<script lang="ts">
import { mapGetters } from 'vuex';
import { Component, Prop, Vue, Ref } from 'vue-property-decorator';
import Box from '@/components/generics/Box.vue';
import Discord from '@/assets/svg/discord.svg';
import Twitter from '@/assets/svg/twitter.svg';
import { ISocialMedia } from '@/store/types/types.ts';

@Component({
    props: ['image'],
    components: {
        Box,
        Discord,
        Twitter
    }
})
export default class SocialMedia extends Vue {
    public socials: ISocialMedia[] = [
        {
            name: 'twitter',
            url: 'https://twitter.com'
        },
        {
            name: 'facebook',
            url: 'https://facebook.com'
        },
        {
            name: 'email',
            url: 'https://twitter.com'
        },
        {
            name: 'discord',
            url: 'https://twitter.com'
        }
    ];

    public selected(social: ISocialMedia) {
        this.$emit('selected', social);
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import '@/styles';
.social-media {
    display: flex;
    flex-wrap: wrap;
    & > * {
        margin-right: 50px;
        transition: 0.1s;
        &:hover {
            transform: translateY(-5px);
            cursor: pointer;
        }
    }
    .social-icon {
        height: 50px;
        width: 50px;
    }
}
</style>
