<template>
  <div class="box-item">
    <div v-waves class="box bg-blue-gradient" @click="handleClick">
      <img :src="icon">
      <div class="box-title">{{ title }}</div>
    </div>
    <icon class="fadeIn" v-if="plane" :name="plane" color="orange" />
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: 'title'
    },
    icon: {
      type: String,
      default: ''
    },
    plane: {
      type: String,
      default: ''
    }
  },
  methods: {
    handleClick () {
      this.$emit('click');
    }
  }
}
</script>

<style lang="scss" scoped src="@/assets/scss/components/box/item.scss">
</style>