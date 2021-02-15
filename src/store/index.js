import Vue from 'vue'
import Vuex from 'vuex'
import user from './user'
import catalog from './catalog'
import productList from './productList'
import product from './product'
import shared from './shared'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    user,
    catalog,
    productList,
    product,
    shared
  }
})
