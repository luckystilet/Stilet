<template>
  <div class="filters-item-content__body">
    <c-chips
      :data="selectedCities"
      @removeChip="removeChip($event)"
    ></c-chips>
    <c-search placeholder="Введите название города или курорта"></c-search>
    <div class="content-field">
      <div class="block-title-blue">Город</div>
      <ul class="filters-item-content-city__list scroll">
        <li
          class="filters-item-content-city__item"
          v-for="(city, i) in citiesFrom" :key="i"
        >
          <c-checkbox
            class="black"
            @checking="toggleCity($event, city)"
            :checked="selectedCities.find(c => c.id === city.id)"
          >{{city.name}}
          </c-checkbox>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'c-filters-body_2',
    data: ()=>({
      citiesFrom: [
        {id: 3, name: 'Киев'},
        {id: 64, name: 'Одесса'},
        {id: 7, name: 'Львов'},
        {id: 2, name: 'Запорожье'},
        {id: 27, name: 'Днепр'},
        {id: 4, name: 'Харьков'},
      ],
      selectedCities: []
    }),
    methods: {
      toggleCity(e, city) {
        let checked = e || false
        if(checked){
          this.selectedCities.push({name: city.name, id: city.id})
        }else{
          this.selectedCities = this.selectedCities.filter(c=>c.id!==city.id)
        }
      },
      removeChip(e){
        this.selectedCities = this.selectedCities.filter(c=>+c.id!==+e.id)
      },
    },
  }
</script>
<style scoped lang="scss">
  @import '../../assets/scss/vars';
  .content-field{
    display: flex;
    justify-content: space-between;
    margin-top: 15px;
  }
  .filters-item-content{
    .content-field{
      justify-content: flex-start;
      flex-direction: column;
    }
    &-city{
      &__list{
        margin-top: 15px;
        max-height: 160px;
        width: 270px;
      }
      &__item{
        margin-bottom: 6px;
        &:last-child{
          margin-bottom: 0;
        }
      }
    }
  }
</style>
