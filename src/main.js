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

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
