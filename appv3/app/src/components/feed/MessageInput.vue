<template>
    <div slot="boxContent" class="feed">
        <input />
    </div>
</template>

<script setup lang="ts"></script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import '@/styles';

.feed {
    position: relative;
    display: flex;
    width: inherit;
    top: 0;
    flex-direction: column;
    justify-content: start;
    overflow: hidden;
    align-items: center;
    border-radius: 12px;
    input {
        max-width: 100%;
        width: inherit;
        height: 150px;
        max-height: 100%;
    }
}
</style>
