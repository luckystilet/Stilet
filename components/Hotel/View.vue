<template>
  <div class="hotel-view fadeIn">
    <c-hotel-item
      v-for="(hotel, index) in hotels"
      :key="index"
      :hotel="hotel"
    />
  </div>
</template>

<script>
export default {
  props: {
    hotels: {
      type: Array,
      // required: true
    }
  }
}
</script>

<style lang="scss" scoped src="@/assets/scss/components/hotel/view.scss">
</style>