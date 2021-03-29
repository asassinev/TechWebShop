import Vue from 'vue'
import Vuelidate from 'vuelidate'
import router from './router'
import store from './store'

import App from './App.vue'
import Loader from './components/shared/Loader'
import StarRating from './components/shared/starRating'

import VueEllipseProgress from 'vue-ellipse-progress'
import YmapPlugin from 'vue-yandex-maps'

Vue.component('Loader', Loader)
Vue.component('v-rating', StarRating)

Vue.use(Vuelidate)
Vue.use(VueEllipseProgress)
Vue.use(YmapPlugin)

Vue.config.productionTip = false

Vue.directive('phone', {
  bind (el) {
    el.oninput = function (e) {
      if (!e.isTrusted) {
        return
      }
      const x = this.value
        .replace(/\D/g, '')
        .match(/(\d{0,1})(\d{0,3})(\d{0,3})(\d{0,2})(\d{0,2})/)
      x[1] = '+7'
      this.value = !x[3]
        ? x[1] + x[2]
        : x[1] +
          ' (' +
          x[2] +
          ') ' +
          x[3] +
          (x[4] ? '-' + x[4] : '') +
          (x[5] ? '-' + x[5] : '')
    }
  }
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
