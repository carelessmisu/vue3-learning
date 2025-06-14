<script setup lang="ts">
import { ref, watch, watchEffect } from 'vue';

interface Cocktail {
  id: number;
  name: string;
  price: number;
}

const cocktailNo = ref(1);
const priceMsg = ref("");
// watchEffect(
//   (): void =>{
//     priceMsg.value = getCocktailInfo(cocktailNo.value);
//   }
// )

// 初回起動時にコールバック関数は実行されない
// watch(cocktailNo,
//   (): void =>{
//     priceMsg.value = getCocktailInfo(cocktailNo.value);
//   }
// )

watch(cocktailNo,
  (): void =>{
    priceMsg.value = getCocktailInfo(cocktailNo.value);
  },
  { immediate: true } // 初回起動時にコールバック関数を実行するオプション
)

setInterval(
  ():void =>{
    cocktailNo.value = Math.round(Math.random() * 3) + 1;
  },1000
);

function getCocktailInfo(cocktailNo: number): string {
  const cocktailDataListInit = new Map<number, Cocktail>();
	cocktailDataListInit.set(1, {id: 1, name: "ホワイトレディ", price: 1200});
	cocktailDataListInit.set(2, {id: 2, name: "ブルーハワイ", price: 1500});
	cocktailDataListInit.set(3, {id: 3, name: "ニューヨーク", price: 1100});
	cocktailDataListInit.set(4, {id: 4, name: "マティーニ", price: 1500});
	//カクテル番号に該当するカクテルデータを取得。
	const cocktail = cocktailDataListInit.get(cocktailNo);
	//カクテル番号に該当する情報がない場合のメッセージを用意。
	let msg = "該当カクテルはありません。";
	//カクテル番号に該当する情報があるなら…
	if(cocktail != undefined) {
		//カクテル番号に該当するカクテルの名前と金額を表示する文字列を生成。
		msg = `該当するカクテルは${cocktail.name}で、価格は${cocktail.price}円です。`;
	}
	//表示文字列をリターン。
	return msg;
};
</script>

<template>
  <p>現在のカクテル番号: {{ cocktailNo }}</p>
  <p>{{ priceMsg }}</p>
</template>
