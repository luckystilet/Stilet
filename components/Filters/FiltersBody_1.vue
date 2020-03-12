<template>
  <div class="filters-item-content__body">
    <c-chips
      :data="selectedCities"
      @removeChip="removeChip($event)"
    ></c-chips>
    <c-search placeholder="Введите название города или курорта"></c-search>
    <div class="filters-item-content-checkbox__group">
      <div class="filters-item-content-checkbox__side">
        <div class="filters-item-content-checkbox__line">
          <img src="../../static/icons/airplane.svg" alt="">
          Авиа
          <c-checkbox></c-checkbox>
        </div>
        <div class="filters-item-content-checkbox__line">
          <img src="../../static/icons/bus.svg" alt="">
          Автобусный
          <c-checkbox></c-checkbox>
        </div>
      </div>
      <div class="filters-item-content-checkbox__side">
        <div class="filters-item-content-checkbox__line">
          <img src="../../static/icons/excursion.svg" alt="">
          Экскурсионный
          <c-checkbox></c-checkbox>
        </div>
        <div class="filters-item-content-checkbox__line">
          <img src="../../static/icons/beach.svg" alt="">
          Пляжный отдых
          <c-checkbox></c-checkbox>
        </div>
      </div>
    </div>
    <div class="content-field">
      <div class="filters-item-content-country">
        <div class="block-title-blue">Страна</div>
        <ul class="filters-item-content-country__list scroll">
          <li
            class="filters-item-content-country__item"
            v-for="(country, i) in fetchedCountries" :key="i"
          >
            <span v-if="i===0" class="filters-item-content-country__unknown">?</span>
            <img v-else :src="`flags/${country.tpg_id}.png`" alt=""
                 class="filters-item-content-country__img">
            {{country.name}}
          </li>
        </ul>
      </div>
      <div class="filters-item-content-city">
        <div class="block-title-blue">Город</div>
        <ul class="filters-item-content-city__list scroll">
          <li
            class="filters-item-content-city__item"
            v-for="(city, i) in cities" :key="i"
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
  </div>
</template>
<script>
  import {Countries} from '../../services/search.service'

  export default {
    name: 'c-filters-body_1',
    props: {
      isOpen: {
        type: Boolean,
        default: false
      }
    },
    data: () => ({
      countries: [
        {
          imgPath: '1',
          country: 'Любая'
        }, {
          imgPath: '14',
          country: 'Андорра'
        }, {
          imgPath: '3',
          country: 'Венгрия'
        }, {
          imgPath: '4',
          country: 'Греция'
        }, {
          imgPath: '5',
          country: 'Египет'
        }, {
          imgPath: '6',
          country: 'Израиль'
        }, {
          imgPath: '7',
          country: 'Иордания'
        }, {
          imgPath: '8',
          country: 'Австрия'
        }, {
          imgPath: '9',
          country: 'Греция'
        }, {
          imgPath: '10',
          country: 'Египет'
        }, {
          imgPath: '11',
          country: 'Израиль'
        }, {
          imgPath: '12',
          country: 'Иордания'
        }, {
          imgPath: '13',
          country: 'Австрия'
        }
      ],
      cities: [
        {
          name: 'Мерса-Мартух',
          id: 1
        }, {
          name: 'Макади Бей',
          id: 2
        }, {
          name: 'Марса-Алам',
          id: 3
        }, {
          name: 'Сафага',
          id: 4
        }, {
          name: 'Сома Бей',
          id: 5
        }, {
          name: 'Хургада',
          id: 6
        }, {
          name: 'Эль Гуна',
          id: 7
        }, {
          name: 'Мерса-Мартух',
          id: 8
        }, {
          name: 'Макади Бей',
          id: 9
        }, {
          name: 'Марса-Алам',
          id: 10
        }, {
          name: 'Сафага',
          id: 11
        }, {
          name: 'Сома Бей',
          id: 12
        }, {
          name: 'Хургада',
          id: 13
        }, {
          name: 'Эль Гуна',
          id: 14
        }
      ],
      selectedCities: [],
      fetchedCountries: []
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
        console.log("removeChip",       );
        this.selectedCities = this.selectedCities.filter(c=>+c.id!==+e.id)
      }
    },
    
    
    
    mounted(){
      Countries()
        .then((data) => {
          this.fetchedCountries = data.countries;
        }).catch((err) => {
        console.log(err);
      });
      setTimeout(()=>{
        console.log("fetchedCountries",   this.fetchedCountries);
      },1000)
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
    &-checkbox{
      &__group{
        display: flex;
        margin-top: 25px;
        margin-bottom: 30px;
        padding: 0 6px;
      }
      &__side{
        width: 50%;
        padding-right: 30px;
      }
      &__line{
        display: flex;
        align-items: center;
        color: $cobalt;
        font-size: 12px;
        font-weight: 500;
        margin-bottom: 15px;
        &:last-child{
          margin-bottom: 0;
        }
        img{
          margin-right: 10px;
        }
        .c-checkbox{
          margin-left: auto;
        }
      }
    }
    &-country{
      width: 50%;
      &__list{
        display: flex;
        flex-direction: column;
        padding-left: 20px;
        max-height: 160px;
        overflow-y: scroll;
        margin-top: 15px;
      }
      &__item{
        display: flex;
        align-items: center;
        margin-bottom: 8px;
        &:last-child{
          margin-bottom: 0;
        }
      }
      &__img{
        margin-right: 5px;
        width: 25px;
        height: 16px;
      }
      &__unknown{
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: $anakiwa;
        width: 25px;
        height: 16px;
        margin-right: 5px;
      }
    }
    &-city{
      width: 45%;
      &__list{
        margin-top: 15px;
        max-height: 160px;
        overflow-y: scroll;
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
