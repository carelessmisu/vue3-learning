<script setup lang="ts">
import { ref } from 'vue';

const htmlStr = ref(`<a href="https://vuejs.org">Vue.js のTOPページ</a>`);
</script>

<template>
  <section>{{ htmlStr }}</section>
  <section v-html="htmlStr"></section>
</template>
