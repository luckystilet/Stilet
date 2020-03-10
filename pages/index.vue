<template>
  <div class="container">
    <section class="search-container">
      <h1>Найди свой пакетный тур в Египет</h1>
      <c-progress-bar :progress="progress" />
      <!-- <c-box-view @nextStep="nextStep" /> -->
      <c-filters-view />
      <c-button v-waves:color="'blue'" title="Поиск предложений" class="bg-white btn-large shadow round-15" @click="SearchData"/>
    </section>

    <section class="search-results-container">
      <c-search-result :list="searched" v-if="searched.length" />
      <div class="preloader" v-if="startSearching && !searched.length">
        <h1 style="text-align: center">Loading...</h1>
      </div>
    </section>

    <section class="partner-container">
      <c-partner-view :partners="partners" />
      <c-special />
    </section>

    <section class="last-container">
      <h1 class="title">Недавно просматриваемые отели</h1>
      <c-hotel-view :hotels="hotels" />
    </section>
  </div>
</template>

<script>
import axios from 'axios';
import { Countries, Search } from '../services/search.service';

export default {
  data: () => ({
    hotels: [
      {
        id: 1,
        title: 'Rixos Sharm El Sheikh Ultra All Inclusive',
        price: 12400,
        img: 'hotel.jpg',
        stars: 5
      },
      {
        id: 2,
        title: 'Rixos Sharm El Sheikh Ultra All Inclusive',
        price: 13400,
        img: 'hotel2.jpg',
        stars: 4
      },
      {
        id: 3,
        title: 'Rixos Sharm El Sheikh Ultra All Inclusive',
        price: 11400,
        img: 'hotel3.jpg',
        stars: 4
      },
      {
        id: 4,
        title: 'Rixos Sharm El Sheikh Ultra All Inclusive',
        price: 11400,
        img: 'hotel4.jpg',
        stars: 5
      }
    ],
    partners: [
      { id: 1, img: 'mono.png', title: 'Monobank' },
      { id: 2, img: 'privat.png', title: 'Privatbank' },
      { id: 3, img: 'visa.png', title: 'Visa' }
    ],
    searched: [],
    progress: 23,
    searchPackage: {},
    startSearching: false
  }),
  methods: {
    nextStep (data) {
      this.progress += 12.5;
      if (this.progress >= 100) this.progress = 100;

      this.searchPackage = {...this.searchPackage, ...data.package};
    },
    SearchData () {
      let pack = this.searchPackage;
      this.startSearching = true;
      console.log(pack);

      Search(pack.Country, pack.City, pack.citiesFrom[0], pack.DateFrom, pack.DateTo, pack.Adults, pack.Currency, pack.Meals, pack.HotelCategory).then((data) => {
        this.searched = data.result;
        this.startSearching = false;
      }).catch((err) => {
        console.log(err);
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.search-container {
  margin-top: 2em;
  button {
    margin-top: 5em;
    left: calc(30%);
  }
  h1 {
    font-size: 2em;
    font-weight: 500;
    text-align: center;
    margin: 1em 0;
  }
}
.partner-container {
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  justify-content: space-between;
  height: 100%;
  align-items: center;
}

@media screen and (max-width: 500px) {
  .search-container {
    button {
      margin-top: 4em;
      width: 100%;
      left: 0;
      height: 50px;
      font-size: 0.75em !important;
    }
  }
}
</style>
