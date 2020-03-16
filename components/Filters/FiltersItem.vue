<template>
  <div class="filters-item">
    <div class="filters-item-top" @click="popupHandler" ref="top">
      <img :src="require(`@/static/icons/filters/${data.iconPath}.svg`)" :alt="data.title"
           class="filters-item-top__img">
      <div class="filters-item-top__title">{{data.title}}</div>
      <img :src="require('@@/static/icons/control/arrow-down.svg')" alt="" class="filters-item-body__control">
    </div>
    <div
      v-show="isOpen"
      class="filters-item__overlay fadeIn"
      @mousedown="popupHandler"
    ></div>
    <div
      class="filters-item-content fadeIn"
      v-show="isOpen"
      ref="popupBody"
    >
      <div class="filters-item-content__close" ref="close">
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
      popupHandler() {
        const popup = this.$refs.popupBody
        const close = this.$refs.close
        const top = this.$refs.top
        let togglePopup = () => {
          this.isOpen = !this.isOpen
        }
        togglePopup()
        function clickHandler(e) {
          const target = e.target
          console.log("clickHandler")
          let its_close = target === close || close.contains(target)
          let its_top = top === close || top.contains(target)
          let its_popup = target === popup || popup.contains(target)
          if ((!its_popup && !its_top) || its_close) {
            togglePopup()
            document.removeEventListener('click', clickHandler)
          }
        }
        setTimeout(() => {
          document.addEventListener('click', clickHandler)
        }, 0)
      }
    },
  }
</script>
<style scoped lang="scss"></style>
