<template>
  <div class="filters-item">
    <div class="filters-item-body" @click="toggleModal">
      <img :src="require(`@/static/icons/filters/${data.iconPath}.svg`)" :alt="data.title" class="filters-item-body__img">
      <div class="filters-item-body__title">{{data.title}}</div>
      <img :src="require('@@/static/icons/control/arrow-down.svg')" alt="" class="filters-item-body__control">
    </div>

  
    <div v-if="isOpen" class="filters-item__overlay fadeIn"></div>
    <div
      v-if="isOpen"
      v-click-outside="toggleModal"
      class="filters-item-content fadeIn"
    >
      <div class="filters-item-content__inner">
        
        <div class="filters-item-content__close" @click="toggleModal">
          <div class="filters-item-content__close-inner">
            <span></span><span></span>
          </div>
        </div>
        
        <div v-if="type==='box-1'" class="filters-item-content__body">
<!--          &times;-->
          
          
<!--          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab, et.-->
        </div>
      </div>
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
      type: {
        type: String,
        required: true
      }
    },
    data: ()=>({
      isOpen: false
    }),
    methods: {
      toggleModal(){
        this.isOpen = !this.isOpen
      }
    },
  }
</script>
<style scoped lang="scss">
  @import '../../assets/scss/vars';
  .filters{
    &-item{
      position: relative;
      flex-grow: 1;
      margin: 0 $filters-item-margin 15px;
      &:last-child{
        margin-right: 0;
      }
      &__overlay{
        display: none;
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: hsla(0,0%,100%,.3);
        z-index: 2;
        @media screen and (max-width: $phone-size-big){
          display: block;
        }
      }
      &-body{
        padding: 10px 3px 10px 10px;
        display: flex;
        justify-content: space-around;
        max-width: 180px;
        align-items: center;
        box-shadow: 0px 0px 5px #A5C6FF;
        border: 1px solid rgba(165, 198, 255, 0.5);
        border-radius: 25px;
        background-color: #fff;
        z-index: 3;
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
      &-content{
        border-radius: 15px;
        background-color: #fff;
        box-shadow: 0px 0px 30px rgba(74, 85, 105, 0.3);
        position: absolute;
        top: calc(100% + 15px);
        left: 0;
        height: 400px;
        width: 400px;
        z-index: 3;
        &__inner{
        
        }
        &__close{
          position: absolute;
          right: 10px;
          top: 10px;
          cursor: pointer;
          &-inner{
            width: 26px;
            height: 26px;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            position: relative;
            cursor: pointer;
            span{
              width: 100%;
              height: 1px;
              background-color: #202020;
              position: absolute;
              top: 13px;
              &:first-child{
                transform: Rotate(45deg);
              }
              &:last-child{
                transform: Rotate(-45deg);
              }
            }
          }
        }
        &__body{
        
        }
      }
    }
  }
</style>
