<template>
  <button
    @click="handleClick"
    v-waves:color="'#fff'"
    class="btn"
    :disabled="disabled"
    :style="fullWidth ? 'width: 100%' : ''">
    <icon v-if="icon" :name="icon" :color="iconColor" class="fadeIn" />
    <span>{{ title }}</span>
  </button>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: 'title'
    },
    disabled: {
      type: Boolean,
      default: false
    },
    icon: {
      type: String,
      default: ''
    },
    iconColor: {
      type: String,
      default: 'white'
    },
    fullWidth: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    handleClick (e) {
      this.$emit('click');
    }
  }
}
</script>

<style lang="scss" scoped src="@/assets/scss/components/btn.scss">
</style>