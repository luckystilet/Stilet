<template>
  <ul class="chips__list">
    <li
      class="chips__item"
      v-for="(el, i) in data" :key="i"
      @click="clickHandler(el)"
    >{{el.name}}<span>&times;</span></li>
  </ul>
</template>
<script>
  export default {
    name: "Chips",
    props: {
      data: {
        type: Array,
        required: true
      },
    },
    methods: {
      clickHandler(el){
        this.$emit('removeChip',el)
      }
    },
  }
</script>
<style scoped lang="scss">
  @import '../assets/scss/vars';
  .chips{
    &__list{
      display: flex;
      flex-wrap: wrap;
      margin: 0 -3px 5px;
      min-height: 29px;
      width: calc(100% - 20px);
    }
    &__item{
      margin: 0 3px 5px;
      padding: 2px 5px;
      border-radius: 5px;
      border: solid 1px rgba($alto-2,.3);
      display: flex;
      align-items: center;
      user-select: none;
      cursor: pointer;
      color: $dodger-blue;
      font-size: 12px;
      &:last-child{
        margin-right: 0;
      }
      span{
        font-size: 18px;
        margin-left: 3px;
        color: #000;
      }
    }
  }
</style>
