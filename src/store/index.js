import Vue from 'vue'
import Vuex from 'vuex'
import user from './user'
import catalog from './catalog'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    user,
    catalog
  }
})
