<script setup lang="ts">
import { ref } from 'vue';
import OneSection from './components/OneSection.vue';

</script>

<template>
	<section>
		<OneSection>
			<template v-slot:default="slotProps">
				<dl>
					<dt>スロットの名前</dt>
					<dd>{{ slotProps.memberInfo.name }}</dd>
					<dt>スロットの値</dt>
					<dd>{{ slotProps.memberInfo.state }}</dd>
				</dl>
			</template>
		</OneSection>
	</section>
</template>
