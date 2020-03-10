<template>
  <div class="container">
    <footer class="footer">
      <div class="container">
        <div class="footer__left">
            <ul class="footer-social__list">
                <li class="footer-social__item">
                    <c-button v-waves:color="'#fff'" icon="phone" class="bg-blue-gradient circle" title="" />
                </li>
                <li class="footer-social__item">
                    <c-button v-waves:color="'#fff'" icon="facebook" class="bg-blue-gradient circle" title="" />
                </li>
                <li class="footer-social__item">
                    <c-button v-waves:color="'#fff'" icon="instagram" class="bg-blue-gradient circle" title="" />
                </li>
                <li class="footer-social__item">
                    <c-button v-waves:color="'#fff'" icon="phone" class="bg-blue-gradient circle" title="" />
                </li>
            </ul>
            <a href="#" class="footer__privacy-politic">
                Политика конфиденциальности 2020 &copy;
            </a>
          </div>
          <div class="footer__right">
            <ul class="footer-menu__list fadeIn">
              <li class="footer-menu__item">
                  <a href="" class="footer-menu__link">Отели</a>
              </li>
              <li class="footer-menu__item">
                  <a href="" class="footer-menu__link">Как мы работаем</a>
              </li>
              <li class="footer-menu__item">
                  <a href="" class="footer-menu__link">Чартерные рейсы</a>
              </li>
              <li class="footer-menu__item">
                  <a href="" class="footer-menu__link">Вопросы</a>
              </li>
              <li class="footer-menu__item">
                  <a href="" class="footer-menu__link">Поиск</a>
              </li>
            </ul>
            <div class="footer__logo">
              <img src="img/logo.png" alt="coother" class="footer__logo-img">
            </div>
          </div>  
      </div>
    </footer>
  </div>
</template>

<script>
  export default {
    name: "Footer"
  }
</script>

<style scoped lang="scss" src="@/assets/scss/components/footer.scss">
</style>
