import axios from './optionsAxois'
export default {
  state: {
    catalog: [],
    productListTitle: ''
  },
  mutations: {
    setCatalog (state, payload) {
      state.catalog = payload
    },
    setProductListTitle (state, payload) {
      state.productListTitle = payload
    }
  },
  actions: {
    async fetchCatalog ({ commit }, payload) {
      commit('setLoading', true)
      await axios
        .post('catalog', { categories: payload })
        .then(response => {
          commit('setCatalog', response.data)
        })
        .catch(error => {
          console.log(error)
        })
      commit('setLoading', false)
    }
  },
  getters: {
    getCatalog (state) {
      return state.catalog
    },
    getCatalogCategory (state) {
      return state.catalog.categories
    },
    getProductListTitle (state) {
      return state.productListTitle
    }
  }
}
