<template>
  <form
    class="box content order-list fade-in"
    ref="component"
    @submit.prevent=""
  >
    <table class="custom-table orders-custom-table">
      <thead>
      <tr>
        <th class="hotel">Отель</th>
        <th class="star icon"></th>
        <th class="food icon"></th>
        <th class="date icon"></th>
        <th class="time icon"></th>
        <th class="price">Цена<span class="currency">EUR</span></th>
        <th class="cash-back">cash<span class="currency">EUR</span></th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="item in 10" :key="item">
        <td
          @click="linkHandler"
        >{{tourName}}
        </td>
        <td>
          <div class="hotel-stars"><span></span><span></span><span></span><span></span><span></span></div>
        </td>
        <td>All</td>
        <td>01.01.2020</td>
        <td>6</td>
        <td>700</td>
        <td>75</td>
      </tr>
      </tbody>
    </table>
    <div class="bottom">
      <AppButton class="btn" type="submit">Отправить</AppButton>
      <AppButton class="btn btn--yellow">Аннулировать</AppButton>
    </div>
  </form>
</template>
<script>
  export default {
    name: "order-list",
    data: () => ({
      tourName: "Renata Boutique Hotel Sisli"
    }),
    methods: {
      linkHandler() {
        this.$router.push({
          name: 'cabinetOrderInfo',
          params: {orderName: this.tourName.toLocaleLowerCase().replace(/[ ]/g, '-')}
        })
      }
    },
  }
</script>
<style scoped></style>
