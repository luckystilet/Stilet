<template>
  <button
    v-waves:white
    :type="type"
    :class="{'btn--submit': type==='submit'}"
  >
    <AppIcon
      v-if="i"
      :i="i"
    ></AppIcon>
    <slot>{{type==='submit'?'Сохранить':''}}</slot>
  </button>
</template>
<script>
  export default {
    name: "AppButton",
    props: {
      type: {
        type: String,
        default: ''
      },
      i: {
        type: String,
        default: ''
      }
    }
  }
</script>
<style scoped lang="scss">
  @import '../assets/scss/vars';
  .btn{
    border-radius: $bdrs;
    display: flex;
    align-items: center;
    padding: 0 36px;
    max-width: 25rem;
    &--blue{
      background: linear-gradient(270deg, #4597FF 0%, #2E72D9 98.51%);
      color: #fff;
    }
    &--gold{
      background: linear-gradient(180deg, #FCA311 28.77%, #FFE15A 100%);
      box-shadow: 0px 0px 15px rgba(74, 141, 255, 0.15);
      color: #fff;
    }
    &--yellow{
      padding: 16px 55px;
      background-color: $golden-tainoi;
      height: auto;
      font-size: 18px;
      line-height: 1;
      color: $mine-shaft;
      @media screen and (max-width: $tablet-size){
        padding: 14px 40px;
        font-size: 17px;
      }
      @media screen and (max-width: $phone-size-big){
        padding: 12px 30px;
        font-size: 16px;
      }
      @media screen and (max-width: $phone-size-small){
        padding: 11px 25px;
        font-size: 15px;
      }
    }
    &--blue{
      background: linear-gradient(180deg, #4DBDED 0%, #4A93FC 100%);
    }
    &--onahau{
      background-color: $onahau;
    }
    &--continue{
      background-color: $anakiwa;
      color: $cobalt;
      font-size: 18px;
      line-height: 25px;
      padding: 18px 100px;
      box-shadow: 0px 4px 15px rgba(74, 141, 255, 0.15);
    }
    &--submit{
      font-size: 18px;
      background-color: $aquamarine;
      padding: 16px 80px;
      color: $mine-shaft;
      font-weight: 600;
      @media screen and (max-width: $tablet-size){
        padding: 16px 60px;
      }
      @media screen and (max-width: $tablet-size){
        padding: 15px 50px;
      }
      @media screen and (max-width: $phone-size-small){
        padding: 14px 40px;
      }
    }
    &--small{
      font-size: 13px;
      line-height: 13px;
      padding: 10px 30px;
    }
    &-control{
      border-radius: 50%;
      width: 32px;
      height: 32px;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    &.center{
      margin: 0 auto;
    }
    &.right{
      margin-left: auto;
    }
  }
</style>
