import Vue from 'vue'
import Vuelidate from 'vuelidate'
import router from './router'
import store from './store'
import VueCompositionAPI from '@vue/composition-api'

import App from './App.vue'
import Loader from './components/shared/Loader'

Vue.use(Vuelidate)
Vue.component('Loader', Loader)

Vue.use(VueCompositionAPI)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
