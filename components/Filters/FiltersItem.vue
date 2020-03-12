<template>
  <div class="filters-item">
    <div class="filters-item-top" @click="toggleModal">
      <img :src="require(`@/static/icons/filters/${data.iconPath}.svg`)" :alt="data.title"
           class="filters-item-top__img">
      <div class="filters-item-top__title">{{data.title}}</div>
      <img :src="require('@@/static/icons/control/arrow-down.svg')" alt="" class="filters-item-body__control">
    </div>
    <div v-if="isOpen" class="filters-item__overlay fadeIn"></div>
    <div
      class="filters-item-content fadeIn"
      v-if="isOpen"
      v-click-outside="toggleModal"
    >
      <div class="filters-item-content__close" @click="toggleModal">
        <div class="filters-item-content__close-inner">
          <span></span><span></span>
        </div>
      </div>
      <component :is="currentFiltersBody" :isOpen="isOpen"></component>
    </div>
  </div>
</template>
<script>
  export default {
    props: {
      data: {
        type: Object,
        required: true
      },
      id: {
        type: Number,
        required: true
      }
    },
    data: () => ({
      isOpen: false
    }),
    computed: {
      currentFiltersBody() {
        return `c-filters-body_${this.id}`
      }
    },
    methods: {
      toggleModal() {
        this.isOpen = !this.isOpen
      }
    },
  }
</script>
<style scoped lang="scss">
  .filters-item-content{
    width: 420px;
  }
</style>
