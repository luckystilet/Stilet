import Vue from 'vue';

/** Waves directive */
Vue.directive('waves', {
  bind: (el, params, vnode) => {
    el.onclick = (e) => {
      
      let color = params.value || '#fff';
      let x = ((e.pageX - el.offsetLeft) / el.offsetLeft) + (e.pageX - el.offsetLeft);
      let y = e.pageY - el.offsetTop;

      let wavesDiv = document.createElement('div');
      wavesDiv.classList.add('waves');
      wavesDiv.setAttribute('style', `top: ${y}px; left: ${x}px; background: ${color}`);

      el.appendChild(wavesDiv);
      setTimeout(function(){
        wavesDiv.parentElement.removeChild(wavesDiv);
      }, 900);

    }
  }
});

/** Validate directive */
Vue.directive('validate', {
  bind: (el, params, vnode) => {
    el.oninput = (e) => {
      let validateType = params.arg || null;
      let value = e.target.value;

      if (validateType) {
        let input = el.querySelector('input');
        let error = el.parentElement.querySelector('.error');

        switch (validateType) {
          case 'email':
            let validEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,4}$/.test(value);
            if (!validEmail) {
              input.classList.add('invalid');
              error.innerText = 'Не правильный email';
              error.style.display = 'block';
            }
            else {
              input.classList.remove('invalid');
              error.innerText = '';
              error.style.display = 'none';
            }
            break;
          case 'password':
            let valid = /^[A-Za-z0-9]{5,16}$/.test(value);
            if (!valid) {
              input.classList.add('invalid');
              error.innerText = 'Пароль должен быть от 5 до 16 символов';
              error.style.display = 'block';
            }
            else {
              input.classList.remove('invalid');
              error.innerText = '';
              error.style.display = 'none';
            }
          default:
            break;
        }
      }
    }
  }
})