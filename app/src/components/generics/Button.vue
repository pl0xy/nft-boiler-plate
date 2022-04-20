<template>
    <button class="button" :class="buttonStyle" @click="submit">
        {{ title }}
    </button>
</template>

<script>
export default {
    name: 'Button',
    props: ['title', 'buttonStyle'],
    methods: {
        submit: function() {
            this.$emit('clicked');
        }
    }
};
</script>

<style scoped lang="scss">
@import '@/styles';
.button {
    margin: 40px 0 10px 0;
    width: 100%;
    border: none;
    padding: 15px;
    border-radius: 12px;
    background: var(--main);
    transition: 0.1s;
    @include FS_Super_Bold;
    font-size: 24pt;
    outline: none;
    &:hover {
        cursor: pointer;
        transform: translateY(-5px);
    }
}

.danger {
    background: #f43;
    color: white;
    &:hover {
        background: darken(#f43, 33%);
    }
}

.primary {
    background: var(--main);
    color: white;
    &:hover {
    }
}
</style>
