<template>
  <div class="icon">
    <a :href="name === 'phone' ? 'tel:380666908131' : false">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="32"
        height="32"
        fill="none"
        @click="handleClick">
        <path
          v-for="(p, index) in path"
          :d="p.path"
          :key="index"
          :stroke="color"
          :stroke-width="p.strokeWidth"
          :fill="p.fill ? color : 'none'"
          :stroke-linecap="p.strokeLinecap"
          :stroke-linejoin="p.strokeLinejoin"
          :stroke-miterlimit="p.strokeMiterlimit"
          :clip-rule="p.clipRule ? p.clipRule : 'none'"
          :fill-rule="p.fillRule ? p.fillRule : 'none'"/>
      </svg>
    </a>
  </div>
</template>

<script>
import { icons } from '../config';

export default {
  props: {
    name: String,
    color: {
      type: String,
      default: '#202020'
    }
  },
  methods: {
    handleClick () {
      this.$emit('click');
    }
  },
  computed: {
    path () {
      return icons[this.name]
    }
  }
}
</script>

<style lang="scss" scoped>
</style>