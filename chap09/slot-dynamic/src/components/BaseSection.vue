<script setup lang="ts">
import { computed, inject } from 'vue';
import OneMember from "./OneMember.vue";
import type { Member } from "../interfaces";

const memberList = inject('memberList') as Map<number, Member>;

const totalPoints = computed(() => {
    let total = 0;
    memberList.forEach((member) => {
        total += member.points;
    });
    return total;
});
</script>

<template>
    <h1>会員リスト</h1>
    <p>全会員の保有ポイントの合計: {{ totalPoints }}</p>
    <OneMember v-for="id in memberList.keys()" v-bind:key="id" v-bind:id="id" />
</template>

<style sceped>
section {
    border: orange 1px dashed;
    margin: 10px;
}
</style>