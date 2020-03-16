<template>
  <div class="filters-item-content__body">
    <div class="content-field">
      <div class="block-title-blue">Количество ночей</div>
      <div class="nights">
        <div class="nights__container">
          <ul class="nights__list">
            <li
              class="nights__item"
              v-for="(el, i) in seven" :key="i"
              @click="selection"
            >{{el}}
            </li>
          </ul>
          <ul class="nights__list">
            <li
              class="nights__item"
              v-for="(el, i) in fourteen" :key="i"
              @click="selection($event)"
            >{{el}}
            </li>
          </ul>
        </div>
        <div class="nights__row">
          <div class="nights__item" @click="selection($event)">15+</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    name: "c-filters-body5",
    data: ()=>({
      seven: [1,2,3,4,5,6,7],
      fourteen: [8,9,10,11,12,13,14]
    }),
    methods: {
      selection(e){
        e.target.classList.toggle('active')
      }
    },
  }
</script>
<style scoped lang="scss">
  @import '../../assets/scss/vars';
  .content-field{
    width: 370px;
  }
  .nights{
    margin-top: 15px;
    &__container{
      overflow: hidden;
      border: solid 1px $alto-2;
      border-radius: 15px;
      margin-bottom: 15px;
    }
    &__list{
      display: flex;
      border-bottom: solid 1px $alto-2;
      &:last-child{
        border-bottom: none;
      }
    }
    &__item{
      flex-grow: 1;
      height: 45px;
      width: 45px;
      display: flex;
      align-items: center;
      justify-content: center;
      border-right: solid 1px $alto-2;
      cursor: pointer;
      &:last-child{
        border-right: none;
      }
      &.active{
        background: linear-gradient(180deg, #04FFFF 0%, #4A8DFF 100%);
      }
    }
    &__row{
      display: flex;
      justify-content: center;
      margin-bottom: 15px;
      .nights__item{
        flex-grow: 0;
        border-radius: 15px;
      }
    }
  }
</style>
