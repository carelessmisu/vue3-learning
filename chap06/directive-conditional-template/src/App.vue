<script setup lang="ts">
import { ref, computed } from 'vue';

const randomNumber = computed(() => {
  return Math.round(Math.random() * 100);
});
</script>

<template>
  <p>
    点数は{{ randomNumber }}点で
  <template v-if="randomNumber >= 80">
    優です。
    <span style="color:red">すばらしい!</span>
  </template>
  </p>
</template>
