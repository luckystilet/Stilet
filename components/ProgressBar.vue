<template>
  <div class="progress-bar">
    <div class="progress-bar-line"></div>
    <div class="progress-bar-status fadeIn" :style="`width: ${progress}%`"></div>
  </div>
</template>

<script>
export default {
  props: {
    progress: {
      type: [Number, String],
      default: 90
    }
  }
}
</script>

<style lang="scss" scoped src="@/assets/scss/components/progress-bar.scss">
</style>