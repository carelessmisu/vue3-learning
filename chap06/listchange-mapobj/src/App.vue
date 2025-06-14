<script setup lang="ts">
import { ref, computed } from 'vue';

interface Cocktail {
  id: number;
  name: string;
  price: number;
}

const cocktailDataListInit = new Map<number, Cocktail>();
cocktailDataListInit.set(2345, { id: 2345, name: 'ホワイトレディ', price: 1200 });
cocktailDataListInit.set(4412, { id: 4412, name: 'ブルーハワイ', price: 1500 });
cocktailDataListInit.set(6792, { id: 6792, name: 'ニューヨーク', price: 1100 });
cocktailDataListInit.set(8429, { id: 8429, name: 'マティーニ', price: 1500 });
const cocktailDataList = ref(cocktailDataListInit);

const cocktail1500 = computed(
  ():Map<number, Cocktail> =>{
    const newList = new Map<number, Cocktail>();
    cocktailDataList.value.forEach(
      (value: Cocktail, key: number):void => {
        if(value.price === 1500) {
          newList.set(key, value);
        }
      }
    )
    return newList;
  });

const changewhiteLadyPriceInList = ():void =>{
  const whiteLady = cocktailDataList.value.get(2345) as Cocktail;
  whiteLady.price = 1500;
}

</script>

<template>
  <section>
    全てのカクテルリスト
    <ul>
      <li v-for="[id, cocktailItem] of cocktailDataList"
      v-bind:key="id">
      {{ cocktailItem.name }}の値段は{{ cocktailItem.price }}円
    </li>
    </ul>
  </section>
  <section>
    値段が1500円のカクテルリスト
    <ul>
      <li v-for="[id, cocktailItem] of cocktail1500"
      v-bind:key="'cocktail1500'+ id">
      {{ cocktailItem.name }}の値段は{{ cocktailItem.price }}円
    </li>
    </ul>
  </section>
  <p>
    cocktailDataList内のホワイトレディの値段を1500円に
    <button v-on:click="changewhiteLadyPriceInList">
      変更
    </button>
  </p>
</template>
