<script setup lang="ts">
import { ref, computed } from 'vue';

interface Cocktail {
  name: string;
  price: number;
}

const cocktailDataListInit = new Map<number, Cocktail>();
cocktailDataListInit.set(1, { name: 'ホワイトレディ', price: 1200 });
cocktailDataListInit.set(2, { name: 'ブルーハワイ', price: 1500 });
cocktailDataListInit.set(3, { name: 'ニューヨーク', price: 1100 });
cocktailDataListInit.set(4, { name: 'マティーニ', price: 1500 });
const cocktailDataList = ref(cocktailDataListInit);

const cocktailNo = ref(1);
const priceMsg = computed(
  (): string =>{
    const cocktail = cocktailDataList.value.get(cocktailNo.value);
    let msg = "該当カクテルはありません。";
    if (cocktail != undefined) {
      msg = `該当するカクテルは${cocktail.name}で、値段は${cocktail.price}円です。`;
    }
    return msg;
  }
);

setInterval(
  ():void =>{
    cocktailNo.value = Math.round(Math.random() * 3) + 1;
  },1000
)

</script>

<template>
  <p>現在のカクテル番号: {{ cocktailNo }}</p>
  <p>{{ priceMsg }}</p>
</template>
