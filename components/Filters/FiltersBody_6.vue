<template>
  <div class="filters-item-content__body">
    <div class="block-title-blue">Сколько туристов?</div>
    <div class="tourists">
      <div class="tourists__row">
        <div class="tourists__left">Взрослыее</div>
        <c-select :numbers="10"></c-select>
      </div>
      <div class="tourists__row">
        <div class="tourists__left">Дети</div>
        <c-select :numbers="10"></c-select>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    name: "c-filters-body6"
  }
</script>
<style scoped lang="scss">
  .tourists{
    margin-top: 15px;
    &__row{
      display: flex;
      justify-content: space-between;
      margin-bottom: 10px;
    }
    &__left{
    }
  }
  .filters-item-content__body{
    width: 300px;
  }
</style>
