<script setup lang="ts">
import { ref } from 'vue';

const name = ref('名無し');
</script>

<template>
  <section>
    <p>{{ name }} さんですね!</p>
    <input type="text" v-model="name" />
  </section>
</template>

<style scoped>
section {
    border: orange dashed 1px;
    margin: 10px;
}
</style>
