<template>
  <div class="hotel-item" v-waves:color="'#f5f5f5'">
    <img :src="`img/${hotel.img}`" :title="hotel.title">
    <div class="hotel-item-desc">
      <h3>{{ hotel.title }}</h3>
      <div class="hotel-item-desc-bottom">
        <div class="hotel-item-desc-bottom-stars">
          <div v-for="(s, index) in hotel.stars" :key="index">
            <icon name="star_filled" color="orange" />
          </div>
        </div>
        <small>от {{ hotel.price }}</small>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    hotel: {
      type: Object,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped src="@/assets/scss/components/hotel/item.scss">
</style>