<template>
  <div class="search-result fadeIn shadow">
    <div class="search-head" v-waves>
      <div class="search-head-item">
        <span>Город</span>
      </div>
      <div class="search-head-item">
        <span>Отель</span>
      </div>
      <div class="search-head-item">
        <span>Отправление</span>
      </div>
      <div class="search-head-item">
        <span>
          <icon name="star" color="#202020" />
        </span>
      </div>
      <div class="search-head-item">
        <span>
          <icon name="food" color="#202020" />
        </span>
      </div>
      <div class="search-head-item">
        <span>
          <icon name="date" color="#202020" />
        </span>
      </div>
      <div class="search-head-item">
        <span>
          <icon name="moon" color="#202020" />
        </span>
      </div>
      <div class="search-head-item">
        <span>Тип номера</span>
      </div>
      <div class="search-head-item">
        <span>Цены</span>
      </div>
    </div>
    <div class="search-body">
      <div class="search-body-item fadeIn" v-for="(item, index) in paginator" :key="index">
        <span>{{ item.CityTitle }}</span>
        <span>{{ item.Hotel_name }}</span>
        <span>{{ item.flightForward && item.flightForward.departureCity ? item.flightForward.departureCity : '' }}</span>
        <span>{{ Number.parseInt(item.Hotel_stars) }} <img src="icons/small_star.svg"></span>
        <span>{{ item.Meal_name }}</span>
        <span>{{ String(item.date).replace('T00:00:00', '') }}</span>
        <span>{{ item.stay }}</span>
        <span>De Luxe</span>
        <span>{{ item.Price }}</span>
      </div>
    </div>
    <div class="search-foo">
      <div class="search-foo-pagination">
        <icon name="arrow_left" v-waves @click="lastPage" />
        <div class="pagination-container">
          <div class="orange">{{ currentPage }}</div>
          <span>/</span>
          <span>{{ Math.floor(list.length / 10) }}</span>
        </div>
        <icon name="arrow_right" v-waves @click="nextPage" />
      </div>
      <c-button title="Бронировать" class="round bg-orange" />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    list: {
      type: Array
    }
  },
  data: () => ({
    currentPage: 1,
    start: 0
  }),
  computed: {
    paginator () {
      return this.list.slice(this.start, 10 * this.currentPage);
    }
  },
  methods: {
    nextPage () {
      this.currentPage++;
      this.start += 10;
      if (this.currentPage > (this.list.length / 10)) {
        this.currentPage = this.list.length / 10;
        this.start = this.list.length - this.list.length / 10;
      }
    },
    lastPage () {
      this.currentPage--;
      this.start -= 10;
      if (this.currentPage < 1) {
        this.currentPage = 1;
        this.start = 0;
      }
    }
  }
}
</script>

<style lang="scss" scoped src="@/assets/scss/components/search-result.scss">
</style>