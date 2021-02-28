import Vue from 'vue'
import Vuelidate from 'vuelidate'
import router from './router'
import store from './store'
import VueCompositionAPI from '@vue/composition-api'

import App from './App.vue'
import Loader from './components/shared/Loader'
import VueEllipseProgress from 'vue-ellipse-progress'
import StarRating from './components/shared/ProductInfoCard/starRating'
Vue.component('Loader', Loader)
Vue.component('v-rating', StarRating)

Vue.use(Vuelidate)
Vue.use(VueEllipseProgress)
Vue.use(VueCompositionAPI)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
