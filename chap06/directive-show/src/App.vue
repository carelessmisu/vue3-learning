<script setup lang="ts">
import { ref, computed } from 'vue';

const number = ref(80);
const showOrNot = computed(() => {
  let showOrNot = false;
  const rand = Math.round(Math.random() * 100);
  if (rand >= 50) {
    showOrNot = true;
  }
  return showOrNot;
});
</script>

<template>
  <section>
    v-ifを利用
    <p v-if="showOrNot">条件に合致したので表示</p>
  </section>
  <section>
    v-showを利用
    <p v-show="showOrNot">条件に合致したので表示</p>
  </section>
</template>

