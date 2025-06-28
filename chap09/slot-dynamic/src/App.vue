<script setup lang="ts">
import { ref } from 'vue';
import OneSection from './components/OneSection.vue';

const taroProblemInit: string[] = ["電話が通じません。", "留守です。"];
const taroProblems = ref(taroProblemInit);
const taro = ref('田中太郎');
const jiro = ref('鈴木二郎');
</script>

<template>
	<section>
		<h2>Slot の利用</h2>
		<OneSection v-bind:name="taro">
			<ul>
				<li v-for="problem in taroProblems" v-bind:key="problem">
					{{ problem }}
				</li>
			</ul>
		</OneSection>
		<OneSection v-bind:name="jiro" />
	</section>
</template>
