<template>
  <div class="filters">
    <c-filters-item
      v-for="(el, i) in filtersData" :key="i"
      :data="el"
      :type="'box-'+(i+1)"
    ></c-filters-item>
  </div>
</template>
<script>
  export default {
    data: () => ({
      filtersData: [
        {
          title: 'Египет',
          iconPath: '1'
        }, {
          title: 'Киев',
          iconPath: '2'
        }, {
          title: 'Бюджет',
          iconPath: '3'
        }, {
          title: '13.04',
          iconPath: '4'
        }, {
          title: '3-7 ночей',
          iconPath: '5'
        }, {
          title: '1 турист',
          iconPath: '6'
        }, {
          title: '5*',
          iconPath: '7'
        }, {
          title: 'all',
          iconPath: '8'
        }, {
          title: 'Пожелания',
          iconPath: '9'
        },
      ]
    }),
  }
</script>
<style scoped lang="scss">
  @import '../../assets/scss/vars';
  .filters{
    display: flex;
    flex-wrap: wrap;
    margin: 0 -$filters-item-margin;
  }
</style>
