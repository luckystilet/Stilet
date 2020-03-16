<template>
  <label class="c-checkbox">
    <input type="checkbox" @change="changeHandler($event)" :checked="checked">
    <span></span><slot></slot>
  </label>
</template>

<script>
export default {
  name: "c-checkbox",
  props: {
    checked: {
      default: false
    }
  },
  methods: {
    changeHandler(e){
      this.$emit('checking',e.target.checked)
    }
  },
}
</script>

<style scoped lang="scss">
  @import '../assets/scss/vars';
  
  .c-checkbox{
    position: relative;
    display: inline-flex;
    align-items: center;
    cursor: pointer;
    user-select: none;
    white-space: nowrap;
    &.back{
      color: #000;
    }
    span{
      position: relative;
      display: inline-block;
      height: 16px;
      width: 16px;
      border: 1px solid $cobalt;
      border-radius: 3px;
      margin-right: 8px;
      &:after{
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-repeat: no-repeat;
        background-position: center center;
        background-image: none;
      }
    }
    input{
      position: absolute;
      opacity: 0;
      cursor: pointer;
      height: 0;
      width: 0;
      &:checked ~ span:after{
        background-image: url('../static/icons/v.svg');
      }
    }
    &.black{
      span{
        border: 1px solid #000000;
      }
    }
  }
</style>
