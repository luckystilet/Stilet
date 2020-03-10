<template>
  <div class="switcher-container">
    <div class="lang">
      <span class="fadeIn" :class="{ active: !switcher }">RU</span>
      <span class="fadeIn" :class="{ active: switcher }">EN</span>
    </div>
    <div class="switcher" @click="toggle">
      <div class="circle" :class="!switcher ? 'left' : 'right'"></div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    active: { type: Boolean, default: false },
    activeBg: { type: String, default: 'orange' }
  },
  data: () => ({
    switcher: false
  }),
  methods: {
    toggle () {
      this.switcher = !this.switcher;
    }
  }
}
</script>

<style lang="scss" scoped src="@/assets/scss/components/switcher.scss">
</style>