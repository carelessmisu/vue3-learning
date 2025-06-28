<script setup lang="ts">
import { ref } from 'vue';

const inputNameModel = ref('田中太郎');
</script>

<template>
    <section>
        <input type="text" v-model="inputNameModel" />
        <p>{{ inputNameModel }}</p>
    </section>
</template>