<template>
  <div class="partner-view">
    <h1 class="title">Партнеры</h1>
    <div class="partner-view-container">
      <c-partner-item v-for="partner in partners" :key="partner.id" :partner="partner" />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    partners: {
      type: Array
    }
  }
}
</script>

<style lang="scss" scoped src="@/assets/scss/components/partner/view.scss">
</style>
