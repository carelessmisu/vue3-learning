import { defineStore } from 'pinia';
import axios from 'axios';

export interface City {
  name: string;
  q: string;
}

interface State {
  cityList: Map<string, City>;
  selectedCity: City;
  isLoading: boolean;
  weatherDescription: string;
}

export const useWeatherStore = defineStore('weather', {
  state: (): State => {
    return {
      cityList: new Map<string, City>(),
      selectedCity: {
        name: '',
        q: '',
      },
      isLoading: true,
      weatherDescription: '',
    };
  },
  getters: {},
  actions: {
    prepareCityList() {
      this.cityList.set('Osaka', {
        name: '大阪',
        q: 'Osaka',
      });
      this.cityList.set('Kobe', {
        name: '神戸',
        q: 'Kobe',
      });
      this.cityList.set('Himeji', {
        name: '姫路',
        q: 'Himeji',
      });
    },
    async reciveWeatherInfo(id: string) {
      this.selectedCity = this.cityList.get(id) as City;
      // weather API
      const weatherInfoUrl = 'http://api.openweathermap.org/data/2.5/weather';
      const param: {
        lang: string;
        q: string;
        appid: string;
      } = {
        lang: 'ja',
        q: this.selectedCity.q,
        appid: '66dd47bd6e422aa4fc228daf7c9d81fa',
      };
      const queryParam = new URLSearchParams(param);
      const urlFull = `${weatherInfoUrl}?${queryParam}`;
      // URLに非同期でアクセスしてデータを取得
      // const response = await fetch(urlFull);
      const response = await axios.get(urlFull);
      // 取得したデータを非同期でJSONに変換
      // const weatherInfoJSON = await response.json();
      const weatherInfoJSON = response.data;
      // 天気情報JSONから天気データを取得し、ステートに格納
      const weatherArray = weatherInfoJSON.weather;
      const weather = weatherArray[0];
      this.weatherDescription = weather.description;
      // isLoadingをfalseにする
      this.isLoading = false;
    },
  },
});
