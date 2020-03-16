<template>
  <div class="filters-item-content__body">
    <div class="content-field">
      <div class="block-title-blue">Определить бюджет тура</div>
      <VueSlider
        v-model="value"
        :interval="10"
        :useKeyboard="true"
        :max="max"
      ></VueSlider>
      <div class="controls-line">
        <c-input
          :value="fromRange"
          class="blue"
          @inputed="fromRange = parseInt($event) || 0"
          :onlyNumbers="true"
        >мин.цена
        </c-input>
        <c-input
          :value="toRange"
          class="blue"
          @inputed="toRange = parseInt($event) || 0"
          :onlyNumbers="true"
        >макс.цена
        </c-input>
      </div>
    </div>
  </div>
</template>
<script>
  import VueSlider from 'vue-slider-component/dist-css/vue-slider-component.umd.min.js'
  import 'vue-slider-component/dist-css/vue-slider-component.css'
  import 'vue-slider-component/theme/default.css'
  
  export default {
    name: 'c-filters-body3',
    data: () => ({
      fromRange: 0,
      toRange: 10000,
      max: 50000
    }),
    computed: {
      value: {
        get: function () {
          // Проверка, чтоб небыло больше макс
          if (this.fromRange > this.max) {
            this.fromRange = this.max
          }
          if (this.toRange > this.max) {
            this.toRange = this.max
          }
          // Проверка, чтоб небыло меньше 0
          if (this.fromRange < 0) {
            this.fromRange = 0
          }
          if (this.toRange < 0) {
            this.toRange = 0
          }
          return [this.fromRange, this.toRange]
        },
        set: function (newVal) {
          let fromRange = newVal[0]
          let toRange = newVal[1]
          if (!fromRange) {
            this.fromRange = 0
          }
          if (!toRange) {
            this.toRange = 0
          }
          if (fromRange < toRange) {
            this.fromRange = fromRange
            this.toRange = toRange || 0
          } else {
            this.fromRange = toRange || 0
            this.toRange = fromRange || 0
          }
        }
      }
    },
    components: {VueSlider},
  }
</script>
<style scoped lang="scss">
  @import '../../assets/scss/vars';
  .block-title-blue{
    margin-bottom: 15px;
  }
  .content-field{
    display: flex;
    justify-content: space-between;
    width: 400px;
  }
  .filters-item-content{
    .content-field{
      justify-content: flex-start;
      flex-direction: column;
    }
  }
  .controls-line{
    margin-top: 15px;
    display: flex;
    justify-content: space-between;
  }
</style>
