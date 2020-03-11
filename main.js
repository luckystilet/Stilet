import Vue from 'vue';
/**Libs*/
import vClickOutside from 'v-click-outside'

Vue.directive('click-outside', vClickOutside.directive)

/**Components*/
import Icon from '@@/components/Icon';
import Navbar from '@@/components/Navbar';
import Footer from '@@/components/Footer';
import Button from '@@/components/Button';
import Input from '@@/components/Input';
import Switcher from '@@/components/Switcher';
import HotelView from '@@/components/Hotel/View';
import HotelItem from '@@/components/Hotel/Item';
import PartnerView from '@@/components/Partner/View';
import PartnerItem from '@@/components/Partner/Item';
import Modal from '@@/components/Modal/Item';
import Special from '@@/components/Special';
import ProgressBar from '@@/components/ProgressBar';
import BoxView from '@@/components/Box/View';
import BoxItem from '@@/components/Box/Item';
import SearchResult from '@@/components/SearchResult';
import Calendar from '@@/components/Calendar';
// Stilet code below
import FiltersView from '@@/components/Filters/FiltersView';
import FiltersItem from '@@/components/Filters/FiltersItem';
import Checkbox from '@@/components/Checkbox';

Vue.component('icon', Icon);
Vue.component('c-navbar', Navbar);
Vue.component('c-footer', Footer);
Vue.component('c-button', Button);
Vue.component('c-input', Input);
Vue.component('c-switcher', Switcher);
Vue.component('c-hotel-view', HotelView);
Vue.component('c-hotel-item', HotelItem);
Vue.component('c-partner-view', PartnerView);
Vue.component('c-partner-item', PartnerItem);
Vue.component('c-modal', Modal);
Vue.component('c-special', Special);
Vue.component('c-progress-bar', ProgressBar);
Vue.component('c-box-view', BoxView);
Vue.component('c-box-item', BoxItem);
Vue.component('c-search-result', SearchResult);
Vue.component('c-calendar', Calendar);
// Stilet code below
Vue.component('c-filters-view', FiltersView);
Vue.component('c-filters-item', FiltersItem);
Vue.component('c-checkbox', Checkbox);


/** Directives */
import Validate from '@@/directives/validate'
import Waves from '@@/directives/waves'
import OnClickOutside from '@@/directives/onClickOutside'

Vue.directive('validate', Validate)
Vue.directive('waves', Waves)
Vue.directive('on-click-outside', OnClickOutside)









/** Waves directive */
// Vue.directive('waves', {
//   bind: (el, params, vnode) => {
//     el.onclick = (e) => {
//
//       let color = params.value || '#fff';
//       let x = ((e.pageX - el.offsetLeft) / el.offsetLeft) + (e.pageX - el.offsetLeft);
//       let y = e.pageY - el.offsetTop;
//
//       let wavesDiv = document.createElement('div');
//       wavesDiv.classList.add('waves');
//       wavesDiv.setAttribute('style', `top: ${y}px; left: ${x}px; background: ${color}`);
//
//       el.appendChild(wavesDiv);
//       setTimeout(function(){
//         wavesDiv.parentElement.removeChild(wavesDiv);
//       }, 900);
//
//     }
//   }
// });

 /** Validate directive */
// Vue.directive('validate', {
//   bind: (el, params, vnode) => {
//     el.oninput = (e) => {
//       let validateType = params.arg || null;
//       let value = e.target.value;
//
//       if (validateType) {
//         let input = el.querySelector('input');
//         let error = el.parentElement.querySelector('.error');
//
//         switch (validateType) {
//           case 'email':
//             let validEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,4}$/.test(value);
//             if (!validEmail) {
//               input.classList.add('invalid');
//               error.innerText = 'Не правильный email';
//               error.style.display = 'block';
//             }
//             else {
//               input.classList.remove('invalid');
//               error.innerText = '';
//               error.style.display = 'none';
//             }
//             break;
//           case 'password':
//             let valid = /^[A-Za-z0-9]{5,16}$/.test(value);
//             if (!valid) {
//               input.classList.add('invalid');
//               error.innerText = 'Пароль должен быть от 5 до 16 символов';
//               error.style.display = 'block';
//             }
//             else {
//               input.classList.remove('invalid');
//               error.innerText = '';
//               error.style.display = 'none';
//             }
//           default:
//             break;
//         }
//       }
//     }
//   }
// })

