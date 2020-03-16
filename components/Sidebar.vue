<template>
  <aside class="box sidebar">
    <ul class="sidebar__list">
      <nuxt-link
        tag="li"
        class="sidebar-item"
        v-for="(item, i) in sidebarData" :key="i"
        :to="{name: item.linkTo}"
        active-class="active"
      >
        <a
          href="javascript: void false;"
          class="sidebar-item__link"
        >
          <img
            class="sidebar-item__img"
            :src="require(`@@/static/icons/sidebar/${item.imgPath}.svg`)"
            :alt="item.title"
          >
          <span class="sidebar-item__text">{{item.title}}</span>
        </a>
      </nuxt-link>
    </ul>
  </aside>
</template>
<script>
  export default {
    name: "c-sidebar",
    props: {
      sidebarData: {
        type: Array,
        required: true
      }
    },
    data: () => ({}),
    methods: {},
  }
</script>
<style scoped lang="scss">
  @import '../assets/scss/vars';
  .sidebar{
    display: flex;
    flex-direction: column;
    background: $sidebarBG;
    width: 24rem;
    padding: 2.5rem 2rem;
    margin-right: 25px;
    flex-shrink: 0;
    &.orange{
      background: $sidebarBG-orange;
    }
    @media screen and (max-width: $tablet-size){
      width: 46px;
      padding: 0;
      align-items: center;
      overflow: hidden;
      margin-right: 10px;
      border-radius: 0 10px 10px 0;
      margin-left: -20px;
    }
    @media screen and (max-width: $phone-size-small){
      margin-left: -5px;
    }
    &__list{
      width: 100%;
    }
    &-item{
      margin-bottom: 2rem;
      @media screen and (max-width: $tablet-size){
        width: 100%;
        margin-bottom: 0;
        padding: 13px 0;
      }
      &.active{
        a{
          text-decoration: underline;
          @media screen and (max-width: $tablet-size){
            width: 100%;
            text-decoration: none;
          }
        }
        @media screen and (max-width: $tablet-size){
          background-color: $dodger-blue;
        }
      }
      &:last-child{
        bottom: 0;
      }
      &__link{
        display: flex;
        align-items: center;
        width: 100%;
        color: $mine-shaft;
        font-size: 15px;
        font-weight: bold;
        line-height: 1;
        @media screen and (max-width: $tablet-size){
          justify-content: center;
        }
      }
      &__img{
        width: 20px;
        height: 20px;
        margin-right: 15px;
        user-select: none;
        @media screen and (max-width: $tablet-size){
          margin-right: 0;
        }
      }
      &__text{
        @media screen and (max-width: $tablet-size){
          display: none;
        }
      }
    }
  }
</style>
