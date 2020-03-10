<template>
  <div class="box-view">
    <img src="img/pointer.png" alt="">
    <div class="box-view-top">
      <c-box-item
        @click="showModal('box1')"
        :title="titles['box1']"
        plane="airup"
        icon="icons/icon.svg" />
      <c-box-item
        @click="showModal('box2')"
        title="Откуда"
        plane="airdown" 
        icon="icons/icon1.svg" />
      <c-box-item
        @click="showModal('box3')"
        title="Когда"
        plane="airup" 
        icon="icons/icon2.svg" />
      <c-box-item
        @click="showModal('box4')"
        title="Туристы"
        icon="icons/icon3.svg" />
    </div>

    <div class="box-view-bottom">
      <c-box-item
        @click="showModal('box5')"
        title="Отель"
        plane="airup" 
        icon="icons/icon4.svg" />
      <c-box-item
        @click="showModal('box6')"
        title="Питание"
        plane="airdown" 
        icon="icons/icon5.svg" />
      <c-box-item
        @click="showModal('box7')"
        title="Сервис"
        plane="airup" 
        icon="icons/icon6.svg" />
      <c-box-item
        @click="showModal('box8')"
        title="Валюта"
        icon="icons/icon7.svg" />
    </div>

    <!-- Modals -->
    <c-modal :countries="countries" @handleNext="handleNext" :show="modalShow" :type="modalType" @close="closeModal" />
  </div>
</template>

<script>
import { Countries }from '../../services/search.service';

export default {
  data: () => ({
    modalShow: false,
    modalType: '',
    countries: [],
    titles: {
      'box1': 'Куда'
    }
  }),
  methods: {
    closeModal () {
      this.modalShow = false;
    },
    showModal (type) {
      if (type === 'box1') {
        Countries()
          .then((data) => {
            this.countries = data.countries;
          }).catch((err) => {
            console.log(err);
          });
      }
      this.modalType = type;
      this.modalShow = true;
    },
    handleNext (data) {
      if (data.type === 'box1') {
        let t = data.citiesNamed;
        this.titles['box1'] = t;
      }
      this.$emit('nextStep', { package: data.package });
      let str = (String(this.modalType).replace('box', ''));
      let num = Number(str);
      num = num + 1;
      let nextModal = `box${num}`;
      if (num <= 8) {
        this.showModal(nextModal);
      } else {
        this.modalShow = false;
      }
    }
  }
}
</script>

<style lang="scss" scoped src="@/assets/scss/components/box/view.scss">
</style>