<template>
  <div class="container">
    <nav class="navbar">
      
      <!-- logo -->
      <nuxt-link to="/" tag="div" class="navbar-logo">
        <img src="img/logo.png" title="Choother">
        <span class="fadeIn">choother</span>
      </nuxt-link>

      <!-- menu -->
      <div class="navbar-menu fadeIn">
        <div class="navbar-menu-top">
          <ul>
            <li>
              <a
                href="#"
                class="border-blue round">Чартеры</a>
            </li>
            <li>
              <a
                href="#"
                class="border-blue round">Отели</a>
            </li>
            <li>
              <a href="#">Как мы работаем</a>
            </li>
            <li>
              <a href="#">Вопросы</a>
            </li>
            <li>
              <a href="#">Поиск</a>
            </li>
          </ul>
        </div>
        <div class="navbar-menu-bottom">
          <div class="navbar-menu-bottom-left">
            <div class="language">
              <span class="active">RU</span>
              <span>EN</span>
            </div>
            <icon name="hearth" color="orange" class="fadeIn" />
          </div>
          <div class="navbar-menu-bottom-right">
            <c-button
              v-waves:color="'#fff'"
              title="Личный кабинет"
              class="bg-blue-gradient round"
              icon="person"
              @click="showModal('login')" />
            <c-button
              v-waves:color="'#fff'"
              title="Connector"
              class="bg-orange-gradient round" />
          </div>
        </div>
      </div>

      <!-- mobile menu -->
      <div class="navbar-menu-mobile">
        <!-- overlay -->
        <div 
          v-if="showMenu"
          class="overlay slideUp" 
          @click="toggleMenu"></div>

        <c-button title="" icon="search" class="bg-grey-light circle mr-1" />
        <c-button title="" icon="person" class="bg-blue-gradient circle mr-3" @click="showModal('login')" />
        <div class="burger fadeIn" @click="toggleMenu">
          <span></span>
          <span></span>
          <span></span>
        </div>

        <div
          class="navbar-menu-mobile-container"
          :class="{ active: showMenu }">

          <div class="navbar-menu-mobile-container-top">
            <div class="burger-close fadeIn" @click="toggleMenu">
              <span></span>
              <span></span>
            </div>
          </div>

          <div class="navbar-menu-mobile-container-list">
            <ul>
              <li class="active"><a href="#">Главная</a></li>
              <li><a href="#">Чартеры</a></li>
              <li><a href="#">Отели</a></li>
              <li><a href="#">Как мы работаем</a></li>
              <li><a href="#">Вопросы</a></li>
            </ul>
          </div>
          
          <div class="navbar-menu-mobile-container-foo">
            <c-switcher />
          </div>
        </div>
      </div>

    </nav>

    <!-- Modals -->
    <c-modal :show="modalShow" :type="modalType" @close="closeModal" @switch="switchModal" />
  </div>
</template>

<script>
export default {
  data: () => ({
    showMenu: false,
    modalType: '',
    modalShow: false
  }),
  methods: {
    toggleMenu () {
      this.showMenu = !this.showMenu;
    },
    showModal (type) {
      this.modalType = type;
      this.modalShow = true;
    },
    closeModal () {
      this.modalShow = false;
    },
    switchModal (type) {
      this.modalShow = false;
      this.modalType = type;
      setTimeout(() => {
        this.modalShow = true;
      }, 50);
    }
  }
}
</script>

<style lang="scss" scoped src="@/assets/scss/components/navbar.scss">
</style>