<script setup lang="ts">
import { reactive } from 'vue';

const memberInfo = reactive({
    name: '山田太郎',
    state: '問題ありません。'
})
</script>

<template>
    <section>
        <slot v-bind:memberInfo="memberInfo">
            <h1>{{ memberInfo.name }}さんの状況</h1>
            <p>{{ memberInfo.state }}</p>
        </slot>
    </section>
</template>

<style>
.box {
    border: green 1px solid;
    margin: 10px;
}
</style>