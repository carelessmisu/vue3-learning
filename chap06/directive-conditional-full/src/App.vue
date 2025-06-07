<script setup lang="ts">
import { ref, computed } from 'vue';

const randomNumber = computed(() => {
  return Math.round(Math.random() * 100);
});
</script>

<template>
  <p>
    点数は{{ randomNumber }}点で
  <span v-if="randomNumber >= 80">優です。</span>
  <span v-else-if="randomNumber >= 70">良です。</span>
  <span v-else-if="randomNumber >= 60">可です。</span>
  <span v-else="randomNumber">不可です。</span>
  </p>
</template>
