<script setup lang="ts">
import { ref, computed, reactive } from 'vue';

const radiusInit = Math.round(Math.random() * 10);

// const PI = ref(3.14);
// const radius = ref(radiusInit);

const data = reactive({
  PI: 3.14,
  radius: radiusInit
});

const area = computed(() => {
  return data.radius * data.radius * data.PI;
});

setInterval(() => {
  data.radius = Math.round(Math.random() * 10);
}, 1000);
</script>

<template>
  <p>半径{{ data.radius }}の円の面積を円周率{{ data.PI }}で計算すると、{{ area }}</p>
</template>
