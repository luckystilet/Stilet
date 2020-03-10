<template>
  <div class="partner-item">
    <img :src="`img/${partner.img}`" :title="partner.title">
  </div>
</template>

<script>
export default {
  props: {
    partner: {
      type: Object
    }
  }
}
</script>

<style lang="scss" scoped src="@/assets/scss/components/partner/item.scss">
</style>