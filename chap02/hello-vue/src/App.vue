<script setup lang="ts">
import { computed, ref } from 'vue';

// const url = ref('https://vuejs.org/');

// const isSendButtonDisabled = ref(true);

// const widthOrHeight = ref("height");
// const widthOrHeightValue = ref(100);

// const imageAttributes = ref({
//   src: '/images/logo.svg',
//   alt: 'VueLogo',
//   width: 75,
//   height: 75
// });

const msg = ref('Hello! World');
const msgTextRed = ref('red');
const msgTextColor = ref('white');
const msgBgColor = ref('black');
const msgStyles = ref({
  color: 'white',
  backgroundColor: 'black'
});
const msgStyles2 = ref({
  fontSize: '24pt'
});
const msgStyles3 = ref({
  color: 'pink',
  fontSize: '24pt'
});
const textSize = computed(() => {
  const size = Math.floor(Math.random() * 25) + 10; // 16ptから25ptのランダムなフォントサイズ
  return `${size}pt`;
});

</script>

<template>
  <!-- <p><a v-bind:href="url" target="_blank">Vue.js のサイト</a></p>
  <p><a :href="url" target="_blank">Vue.js のサイト(省略系)</a></p>
  <p><a v-bind:href="url + 'guide/introduction.html'" target="_blank">Vue.js ガイドのページ</a></p>

  <p><button type="button" v-bind:disabled="isSendButtonDisabled">送信</button></p>
 -->
  <!-- <p><img alt="VueLogo" src="./assets/logo.svg" v-bind:[widthOrHeight]="widthOrHeightValue"></p> -->

  <!-- <p><img v-bind="imageAttributes"></p>
  <p><img v-bind="imageAttributes" title="ロゴです!"></p>
  <p><img v-bind="imageAttributes" alt="ロゴです!"></p> -->

  <p v-bind:style="{ color: msgTextRed }">
    {{ msg }}
  </p>
  <p v-bind:style="{ color: 'pink' }">
    {{ msg }}
  </p>
  <p v-bind:style="{ fontSize: textSize }">
    {{ msg }}
  </p>
  <p v-bind:style="{ color: msgTextColor, backgroundColor: msgBgColor }">
    {{ msg }}
  </p>
  <p v-bind:style="{ color: msgTextColor, 'background-color': msgBgColor }">
    {{ msg }}
  </p>
  <p v-bind:style="msgStyles">
    {{ msg }}
  </p>
  <p v-bind:style="[msgStyles, msgStyles2]">
    {{ msg }}
  </p>
  <p v-bind:style="[msgStyles, msgStyles3]">
    {{ msg }}
  </p>
  <p v-bind:style="[msgStyles3, msgStyles]">
    {{ msg }}
  </p>
</template>
