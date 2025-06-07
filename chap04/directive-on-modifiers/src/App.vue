<script setup lang="ts">
import { ref } from 'vue';

const msg = ref('まだです!');

const onEnterKey =() => {
  msg.value = 'Enterキーが押されました。';
}

const onRightButtonClick = () => {
  msg.value = 'ボタンが右クリックされました。';
}

const onShiftClick = () => {
  msg.value = 'Shiftキーが押しながらクリックされました。';
}
</script>

<template>
  <p>{{ msg }}</p>
  <input type="text" v-on:keydown.enter="onEnterKey"><br>
  <button v-on:click.right="onRightButtonClick">右クリック</button><br>
  <button v-on:click.shift="onShiftClick">Shiftを押しながらクリック</button><br>

</template>
