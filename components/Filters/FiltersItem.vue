<template>
  <div class="filters-item">
    <img :src="require(`@/static/icons/filters/${data.iconPath}.svg`)" :alt="data.title" class="filters-item__img">
    <div class="filters-item__title">{{data.title}}</div>
    <img :src="require('@/static/icons/control/arrow-down.svg')" alt="" class="filters-item__control">
  </div>
</template>
<script>
  export default {
    props: {
      data: {
        type: Object,
        required: true
      },
    },
  }
</script>
<style scoped lang="scss">
  .filters{
    &-item{
      flex-grow: 1;
      display: flex;
      justify-content: space-around;
      /*min-width: 150px;*/
      max-width: 180px;
      align-items: center;
      margin: 0 5px 15px;
      padding: 10px 3px 10px 10px;
      box-shadow: 0px 0px 5px #A5C6FF;
      border: 1px solid rgba(165, 198, 255, 0.5);
      border-radius: 25px;
      background-color: #fff;
      &:last-child{
        margin-right: 0;
      }
      &__img{
        margin-right: 12px;
        user-select: none;
      }
      &__title{
        white-space: nowrap;
        font-size: 14px;
        
      }
      &__control{
        margin-left: 6px;
        padding: 6px;
        cursor: pointer;
        user-select: none;
      }
    }
  }
</style>
