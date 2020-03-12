<template>
  <form class="c-search" autocomplete="off">
    <label>
      <input
        type="text"
        name="search"
        :placeholder="placeholder">
    </label>
  </form>
</template>
<script>
  export default {
    name: "c-search",
    props: {
      placeholder: {
        type: String,
        default: ''
      }
    },
  }
</script>
<style scoped lang="scss">
  @import '../assets/scss/vars';
  label{
    input{
      width: 100%;
      border: solid 1px $search-bd;
      padding: 12px;
      outline: none;
      border-radius: 10px;
      &plceholder{
        color: $gray;
      }
    }
  }
</style>
