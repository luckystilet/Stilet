<template>
  <div>
    <label v-if="label">{{ label }}</label>
    <input
      :type="type"
      :placeholder="placeholder"
    />
  </div>
</template>

<script>
export default {
  props: {
    type: {
      type: String,
      default: 'text'
    },
    placeholder: {
      type: String,
      default: ''
    },
    label: {
      type: String,
      default: ''
    }
  }
}
</script>

<style lang="scss" scoped src="@/assets/scss/components/input.scss">
</style>