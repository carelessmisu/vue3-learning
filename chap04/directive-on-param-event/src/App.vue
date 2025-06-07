<script setup lang="ts">
import { ref } from 'vue';

const mousePointerX = ref(0);
const mousePointerY = ref(0);
const onImgMouseMove = (event: MouseEvent) => {
  mousePointerX.value = event.offsetX;
  mousePointerY.value = event.offsetY;
};
</script>

<template>
  <section>
    <img src="./assets/logo.svg" alt="Vue Logo"
         width="200" v-on:mousemove="onImgMouseMove">
    <p>Mouse Pointer Position: X: {{ mousePointerX }}, Y: {{ mousePointerY }}</p>
  </section>
</template>
