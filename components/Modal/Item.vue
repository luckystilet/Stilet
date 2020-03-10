<template>
  <div class="modal-container" v-if="show">

    <div class="modal-overlay" @click="close"></div>

    <!-- Login modal -->
    <div class="modal round-8 fadeIn" v-if="type === 'login'">
      <header class="modal-header">
        <h1>{{ modal.title }}</h1>
        <div class="modal-close" @click="close">
          <span></span><span></span>
        </div>
      </header>
      <section class="modal-body fadeIn">

        <div class="modal-body-inputs">
          <c-input label="Введите E-mail" v-validate:email />
          <c-input label="Пароль" type="password" v-validate:password />
          <div class="error fadeIn"></div>
        </div>

        <div class="modal-body-buttons">
          <c-button
            v-waves
            title="Войти"
            :fullWidth="true"
            class="bg-blue-gradient round"/>

          <c-button
            v-waves:color="'#4293FB'"
            title="Регистрация"
            :fullWidth="true"
            @click="handleSwitch('register')"
            class="round bg-grey-light"/>
        </div>

        <div class="modal-body-privacy">
          <input id="privacy" type="checkbox">
          <label for="privacy">Ознакомлен (а) c правилами сервиса</label>
        </div>
        
      </section>
      <header class="modal-footer"></header>
    </div>

    <!-- Register modal -->
    <div class="modal round-8 fadeIn" v-if="type === 'register'">
      <header class="modal-header">
        <h1>{{ modal.title }}</h1>
        <div class="modal-close" @click="close">
          <span></span><span></span>
        </div>
      </header>

      <section class="modal-body fadeIn">
        <div class="modal-body-inputs">
          <c-input label="Введите E-mail" />
          <c-input label="Имя" />
          <c-input label="Пароль" type="password" />
        </div>

        <div class="modal-body-buttons">
          <c-button
            v-waves
            title="Войти"
            :fullWidth="true"
            @click="handleSwitch('login')"
            class="bg-blue-gradient round"/>

          <c-button
            v-waves:color="'#4293FB'"
            title="Регистрация"
            :fullWidth="true"
            class="round bg-grey-light"/>
        </div>

        <div class="modal-body-privacy">
          <input id="privacy" type="checkbox">
          <label for="privacy">Ознакомлен (а) c правилами сервиса</label>
        </div>
      </section>
    </div>

    <!-- Box 1 modal -->
    <div class="modal modal-box-1 round-8" v-if="type === 'box1'">
      <header class="modal-header">
        <div class="modal-body-title">
          <h1>{{ modal.title }}</h1>
        </div>
        <div class="modal-close" @click="close">
          <span></span><span></span>
        </div>
      </header>

      <nav class="modal-selected fadeIn">
        <div class="modal-selected-item fadeIn" v-for="(city, index) in selectedCities" :key="index" @click="removeFromList(city)">
          <span>{{ city.name }}</span>
          <span>&times;</span>
        </div>
      </nav>

      <div class="modal-search">
        <c-input placeholder="Введите название города или отеля" />
      </div>

      <section class="modal-tabs">
        <div class="modal-tabs-item" :class="{ active: activeTab === 'country' }" v-waves @click="activeTab = 'country'">Страна</div>
        <div class="modal-tabs-item" :class="{ active: activeTab === 'city' }" v-waves @click="activeTab = 'city'">Город</div>
      </section>

      <section class="modal-body" v-if="isMobile">
          <div class="modal-body-countries" v-if="activeTab === 'country'">
            <ul>
              <li
                v-for="(country, index) in countries"
                :key="index"
                @click="getCities(country.tpg_id, country.name)"
              >
                <img :src="`flags/${country.tpg_id}.png`" :title="country.name">
                <span>{{ country.name }}</span>
              </li>
            </ul>
          </div>
          <div class="modal-body-cities fadeIn" v-if="activeTab === 'city'">
            <ul>
              <li
                v-for="(city, index) in cities"
                :key="index"
              >
                <input :checked="selectedCities.find((c) => c.id === city.id)" :id="city.id" type="checkbox" @change="toggleCity($event, city)">
                <label :for="city.id">{{ city.name }}</label>
              </li>
            </ul>
          </div>
      </section>

      <section class="modal-body" v-if="!isMobile">
          <div class="modal-body-countries">
            <ul>
              <li
                v-for="(country, index) in countries"
                :key="index"
                @click="getCities(country.tpg_id, country.name)"
              >
                <img :src="`flags/${country.tpg_id}.png`" :title="country.name">
                <span>{{ country.name }}</span>
              </li>
            </ul>
          </div>
          <div class="modal-body-cities fadeIn">
            <ul>
              <li
                v-for="(city, index) in cities"
                :key="index"
              >
                <input :checked="selectedCities.find((c) => c.id === city.id)" :id="city.id" type="checkbox" @change="toggleCity($event, city)">
                <label :for="city.id">{{ city.name }}</label>
              </li>
            </ul>
          </div>
      </section>

      <footer class="modal-footer">
        <c-button title="Далее" v-waves class="round bg-blue-gradient" @click="nextStep" />
      </footer>
    </div>

    <!-- Box 2 modal -->
    <div class="modal modal-box-2 round-8 fadeIn" v-if="type === 'box2'">

      <header class="modal-header">
        <div class="modal-body-title">
          <h1>{{ modal.title }}</h1>
        </div>
        <div class="modal-close" @click="close">
          <span></span><span></span>
        </div>
      </header>

      <nav class="modal-selected fadeIn">
        <div class="modal-selected-item fadeIn" v-for="(city, index) in selectedCitiesFrom" :key="index" @click="removeFromListFrom(city)">
          <span>{{ city.name }}</span>
          <span>&times;</span>
        </div>
      </nav>

      <div class="modal-search">
        <c-input placeholder="Введите название города" />
      </div>

      <section class="modal-body fadeIn">
        <ul>
          <li v-for="city in citiesFrom" :key="city.id">
            <input :id="city.id" :checked="city.selected" type="checkbox" @change="toggleCityFrom($event, city)">
            <label :for="city.id">{{ city.name }}</label>
          </li>
        </ul>
      </section>

      <footer class="modal-footer">
        <c-button title="Далее" v-waves class="round bg-blue-gradient" @click="nextStep" />
      </footer>
    </div>

    <!-- Box 3 modal -->
    <div class="modal round-8 fadeIn" v-if="type === 'box3'">
      <header class="modal-header">
        <h1>{{ modal.title }}</h1>
        <div class="modal-close" @click="close">
          <span></span><span></span>
        </div>
      </header>
      <section class="modal-body fadeIn">
        <c-calendar @dateHandler="handleDate" />
      </section>
      <footer class="modal-footer">
        <c-button title="Далее" class="bg-blue-gradient round" v-waves @click="nextStep" />
      </footer>
    </div>

    <!-- Box 4 modal -->
    <div class="modal modal-box-4 round-8 fadeIn" v-if="type === 'box4'">
      <header class="modal-header">
        <div class="modal-body-title">
          <h1>Количество туристов</h1>
        </div>
        <div class="modal-close" @click="close">
          <span></span><span></span>
        </div>
      </header>
      <section class="modal-body fadeIn">

        <div class="modal-body-content">
          <div class="modal-adult">
            <div class="modal-adult-title">
              <h1>Взрослых</h1>
              <select v-model="adult">
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
              </select>
            </div>
          </div>
          <div class="modal-kids">
            <div class="modal-kids-title">
              <h1>Детей</h1>
              <select v-model="kidsCount" @change="addKidField">
                <option value="0">0</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
              </select>
            </div>
            <ul>
              <li v-for="(a, index) in kids" :key="index">
                <span>Возраст</span>
                <select v-model="a.age">
                  <option v-for="age in selectAges" :key="age" :value="age">{{ age }}</option>
                </select>
              </li>
            </ul>
          </div>
        </div>

        <div class="modal-body-desc">
          <small>* Lorem ipsum dolor sit amet, consectetur adipiscing elit. Laoreet eu eget convallis volutpat eget varius. Eu leo, in arcu lectus aliquam gravida leo, sed malesuada.</small>
        </div>
      </section>
      <footer class="modal-footer">
        <c-button title="Далее" v-waves class="round bg-blue-gradient" @click="nextStep" />
      </footer>
    </div>

    <!-- Box 5 modal -->
    <div class="modal modal-box-5 round-8 fadeIn" v-if="type === 'box5'">
      <header class="modal-header">
        <div class="modal-body-title">
          <h1>{{ modal.title }}</h1>
        </div>
        <div class="modal-close" @click="close">
          <span></span><span></span>
        </div>
      </header>
      <section class="modal-body fadeIn">
        <div class="modal-body-content">
          <div class="modal-body-content-raiting">
            <ul>
              <li>
                <input type="checkbox" @change="toggleHotelCategory(`2*`)">
                <label>
                  <span>1-2</span>
                  <img src="/icons/small_star_orange.svg" v-for="index in 2" :key="index">
                </label>
              </li>
              <li>
                <input type="checkbox" @change="toggleHotelCategory(`3*`)" :checked="raitings.includes(3)">
                <label>
                  <span>3</span>
                  <img src="/icons/small_star_orange.svg" v-for="index in 3" :key="index">
                </label>
              </li>
              <li>
                <input type="checkbox" @change="toggleHotelCategory(`4*`)" :checked="raitings.includes(4)">
                <label>
                  <span>4</span>
                  <img src="/icons/small_star_orange.svg" v-for="index in 4" :key="index">
                </label>
              </li>
              <li>
                <input type="checkbox" @change="toggleHotelCategory(`5*`)" :checked="raitings.includes(5)">
                <label>
                  <span>5</span>
                  <img src="/icons/small_star_orange.svg" v-for="index in 5" :key="index">
                </label>
              </li>
              <li>
                <input type="checkbox">
                <label>
                  <span>Apartaments</span>
                </label>
              </li>
            </ul>
          </div>
          <div class="modal-body-content-list">
            <div class="modal-body-content-list-search">
              <input placeholder="Введите название отеля или выберите из списка" v-model="hotelSearch" />
              <!-- <c-input placeholder="Введите название отеля или выберите из списка" v-model="hotelSearch" /> -->
            </div>
            <div class="modal-body-content-list-table" v-if="hotelsData">
              <div class="modal-body-content-list-table-head">
                <div><span>Город</span></div>
                <div><span>Отель</span></div>
                <div><icon name="star" /></div>
              </div>
              <div v-for="(hotel, index) in searchedHotels" :key="index">
                <div class="modal-body-content-list-table-item" v-for="h in hotel.filter((x) => raitings.includes(parseInt(x.stars)))" :key="h.id">
                  <div><span>{{ hotel ? citiesData[h.city_id] : '' }}</span></div>
                  <div><span>{{ hotel ? h.name : '' }}</span></div>
                  <div>
                    <span>{{ hotel ? parseInt(h.stars) : '' }}</span>
                    <img src="/icons/small_star.svg">
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <footer class="modal-footer">
        <c-button title="Далее" class="bg-blue-gradient round" v-waves @click="nextStep" />
      </footer>
    </div>

    <!-- Box 6 modal -->
    <div class="modal modal-box-6 round-8 fadeIn" v-if="type === 'box6'">
      <header class="modal-header">
        <div class="modal-body-title">
          <h1>{{ modal.title }}</h1>
        </div>
        <div class="modal-close" @click="close">
          <span></span><span></span>
        </div>
      </header>
      <section class="modal-body fadeIn">
        <div class="modal-body-content">
          <div>
            <ul>
              <li>
                <input id="ro" type="checkbox" @change="toggleMeal('RO')">
                <label for="ro">RO - Без питания</label>
              </li>
              <li>
                <input id="bb" type="checkbox" @change="toggleMeal('BB')">
                <label for="bb">BB - Завтрак</label>
              </li>
              <li>
                <input id="hb" type="checkbox" @change="toggleMeal('HB')">
                <label for="hb">HB - Завтрак + Ужин</label>
              </li>
            </ul>
          </div>
          <div>
            <ul>
              <li>
                <input id="fb" type="checkbox" @change="toggleMeal('FB')">
                <label for="fb">FB - Полный пансион</label>
              </li>
              <li>
                <input id="ai" type="checkbox" @change="toggleMeal('AI')">
                <label for="ai">AI - Все включено</label>
              </li>
              <li>
                <input id="uai" type="checkbox" @change="toggleMeal('UAI')">
                <label for="uai">UAI - Ультра все включено</label>
              </li>
            </ul>
          </div>
        </div>
      </section>
      <footer class="modal-footer">
        <c-button title="Далее" v-waves class="round bg-blue-gradient" @click="nextStep" />
      </footer>
    </div>

    <!-- Box 7 modal -->
    <div class="modal modal-box-7 round-8 fadeIn" v-if="type === 'box7'">
      <header class="modal-header">
        <div class="modal-body-title">
          <h1>{{ modal.title }}</h1>
        </div>
        <div class="modal-close" @click="close">
          <span></span><span></span>
        </div>
      </header>
      <section class="modal-body fadeIn">
        <ul>
          <li>
            <input type="checkbox">
            <label>Идеален для отдыха с детьми</label>
          </li>
          <li>
            <input type="checkbox">
            <label>Хороший SPA центр</label>
          </li>
          <li>
            <input type="checkbox">
            <label>Первая береговая линия</label>
          </li>
          <li>
            <input type="checkbox">
            <label>Размещение с животными</label>
          </li>
          <li>
            <input type="checkbox">
            <label>В номере мини кухня</label>
          </li>
          <li>
            <input type="checkbox">
            <label>Аквапарк</label>
          </li>
          <li>
            <input type="checkbox">
            <label>Экономичный отдых</label>
          </li>
        </ul>
        <ul>
          <li>
            <input type="checkbox">
            <label>Активная анимация</label>
          </li>
          <li>
            <input type="checkbox">
            <label>Сетевой отель</label>
          </li>
          <li>
            <input type="checkbox">
            <label>Есть поле для гольфа</label>
          </li>
          <li>
            <input type="checkbox">
            <label>Фитнес центр</label>
          </li>
          <li>
            <input type="checkbox">
            <label>Оценка букинга 8+</label>
          </li>
          <li>
            <input type="checkbox">
            <label>Горки</label>
          </li>
          <li>
            <input type="checkbox">
            <label>Есть теннисный корт</label>
          </li>
        </ul>
        <ul>
          <li>
            <input type="checkbox">
            <label>Лакшери класс</label>
          </li>
          <li>
            <input type="checkbox">
            <label>Есть номера бунглаьного типа</label>
          </li>
          <li>
            <input type="checkbox">
            <label>Казино на территории отеля</label>
          </li>
          <li>
            <input type="checkbox">
            <label>Бассейн с подогревом</label>
          </li>
          <li>
            <input type="checkbox">
            <label>Бесплатный Wi Fi</label>
          </li>
          <li>
            <input type="checkbox">
            <label>Ночной клуб</label>
          </li>
          <li>
            <input type="checkbox">
            <label>Дайвинг</label>
          </li>
        </ul>
      </section>
      <footer class="modal-footer">
        <c-button title="Далее" v-waves class="round bg-blue-gradient" @click="nextStep" />
      </footer>
    </div>

    <!-- Box 8 modal -->
    <div class="modal modal-box-8 round-8 fadeIn" v-if="type === 'box8'">
      <header class="modal-header">
        <div class="modal-body-title">
          <h1>{{ modal.title }}</h1>
        </div>
        <div class="modal-close" @click="close">
          <span></span><span></span>
        </div>
      </header>
      <section class="modal-body fadeIn">
        <div class="modal-body-content">
          <ul>
            <li>
              <input id="uah" type="checkbox" @change="toggleCurrency('UAH')">
              <label for="uah">UAH</label>
            </li>
            <li>
              <input id="eur" type="checkbox" @change="toggleCurrency('EUR')">
              <label for="eur">EUR</label>
            </li>
            <li>
              <input id="usd" type="checkbox" @change="toggleCurrency('USD')">
              <label for="usd">USD</label>
            </li>
          </ul>
        </div>
      </section>
      <footer class="modal-footer">
        <c-button title="Далее" v-waves class="round bg-blue-gradient" @click="nextStep" />
      </footer>
    </div>
  </div>
</template>

<script>
import { types } from './config';
import { Cities, HotelsByCities } from '../../services/search.service';

export default {
  name: 'modal',
  data: () => ({
    toggled: true,
    cities: [],
    selectedCities: [],
    citiesFrom: [
      { id: 3, name: 'Киев', selected: false },
      { id: 64, name: 'Одесса', selected: false },
      { id: 7, name: 'Львов', selected: false },
      { id: 2, name: 'Запорожье', selected: false },
      { id: 27, name: 'Днепр', selected: false },
      { id: 4, name: 'Харьков', selected: false },
    ],
    selectedCitiesFrom: [],
    activeTab: 'country',
    adult: 1,
    kids: [],
    kidsCount: 0,
    selectAges: 16,
    isMobile: false,
    hotelsData: [],
    citiesData: {},
    hotelSearch: '',
    citiesNamed: '',
    
    raitingOne: false,
    raitingTwo: false,
    raitingThree: true,
    raitingFour: false,
    raitingFive: false,
    raitings: [],

    package: {
      'box1': {
        Country: 0,
        City: [],
        Hotels: []
      },
      'box2': {
        citiesFrom: []
      },
      'box3': {
        DateFrom: '',
        DateTo: ''
      },
      'box4': {
        Adults: 0,
        Child: 0
      },
      'box5': {
        HotelCategory: []
      },
      'box6': {
        Meals: []
      },
      'box8': {
        Currency: ''
      }
    }

  }),
  props: {
    type: {
      type: String,
      required: true
    },
    show: {
      type: Boolean,
      default: false
    },
    countries: {
      type: Array
    }
  },
  methods: {
    close () {
      this.$emit('close');
    },
    handleSwitch (type) {
      this.$emit('switch', type);
    },
    nextStep () {
      if (this.type === 'box1') {
        let cities = this.package[this.type].City;
        HotelsByCities(cities).then((data) => {
          this.hotelsData = data.hotels;

          for (let i in this.cities) {
            for (let j in cities) {
              if (cities[j] === this.cities[i].id) {
                this.citiesData[cities[j]] = this.cities[i].name;
              }
            }
          }

        }).catch((err) => {
          console.log(err);
        });
      }
      if (this.type === 'box4') {
        this.package[this.type].Adults = parseInt(this.adult);
        if (this.kids.length > 0) {
          this.package[this.type].Child = this.kids.length;
          for (let i = 0; i < this.kids.length; i++) {
            this.package[this.type][`Child${i + 1}Age`] = this.kids[i].age;
          }
        }
      }
      this.$emit('handleNext', { package: this.package[this.type], type: this.type, citiesNamed: this.citiesNamed });
    },
    getCities (country, name) {
      let c = parseInt(country, 10);
      console.log(name);

      if (this.type === 'box1') {
        this.package[this.type].Country = parseInt(country);
        this.citiesNamed = name;
      }

      Cities(c).then((data) => {
        this.cities = data.cities.filter((city) => city.publish === true);
        this.activeTab = 'city';
      }).catch((err) => {
        console.log(err);
      });
    },
    toggleCity (e, city) {
      let check = e.target.checked || false;
      if (check) {
        this.selectedCities.push(city);
        if (this.type === 'box1') {
          this.package[this.type].City.push(parseInt(city.id));
        }
      } else {
        this.selectedCities = this.selectedCities.filter((c) => c.id !== city.id);
        if (this.type === 'box1') {
          this.package[this.type].City = this.package[this.type].City.filter((c) => c.id !== city.id);
        }
      }
    },
    removeFromList (city) {
      this.selectedCities = this.selectedCities.filter((c) => c.id !== city.id);
    },
    toggleCityFrom (e, city) {
      let check = e.target.checked || false;
      if (check) {
        city.selected = true;
        this.selectedCitiesFrom.push(city);
        if (this.type === 'box2') {
          this.package[this.type].citiesFrom.push(parseInt(city.id));
        }
      } else {
        city.selected = false;
        this.selectedCitiesFrom = this.selectedCitiesFrom.filter((c) => c.id !== city.id);
        if (this.type === 'box2') {
          this.package[this.type].citiesFrom = this.package[this.type].citiesFrom.filter((c) => c.id !== city.id);
        }
      }
    },
    removeFromListFrom (city) {
      city.selected = false;
      this.selectedCitiesFrom = this.selectedCitiesFrom.filter((c) => c.id !== city.id);
      if (this.type === 'box2') {
        this.package[this.type].citiesFrom = this.package[this.type].citiesFrom.filter((c) => c.id !== city.id);
      }
    },
    addKidField () {
      this.kids = [];
     for (let i = 0; i < this.kidsCount; i++) {
       this.kids.push({ id: Math.floor(Math.random() * 100000), age: 2 });
     }
    },
    handleDate (data) {
      this.package['box3'].DateFrom = data.dateFrom;
      this.package['box3'].DateTo = data.dateTo;
    },
    toggleMeal (meal) {
      if (this.package['box6'].Meals.length) {
        let exist = this.package['box6'].Meals.find((m) => m === meal);
        if (exist) {
          this.package['box6'].Meals = this.package['box6'].Meals.filter((m) => m !== meal);
        } else {
          this.package['box6'].Meals.push(meal);
        }
      } else {
        this.package['box6'].Meals.push(meal);
      }
    },
    toggleCurrency (currency) {
      this.package[this.type].Currency = currency;
    },
    toggleHotelCategory (number) {
      if (this.raitings.includes(parseInt(number))) {
        this.package['box5'].HotelCategory = this.package['box5'].HotelCategory.filter((c) => c !== number);
        this.raitings = this.raitings.filter((n) => n !== parseInt(number));
      } else {
        this.raitings.push(parseInt(number));
        this.package['box5'].HotelCategory.push(number);
      }
    }
  },
  computed: {
    modal () {
      return types[this.type];
    },
    searchedHotels () {
      return this.hotelsData.map((hotel) => {
        return hotel.filter((h) => h.name.toLowerCase().includes(this.hotelSearch.toLowerCase()));
      });
    }
  },
  mounted () {
    window.addEventListener('resize', (e) => {
      if (e.target.innerWidth < 700) this.isMobile = true;
      else this.isMobile = false;
    });
  }
}
</script>

<style lang="scss" scoped src="@/assets/scss/components/modal.scss">
</style>