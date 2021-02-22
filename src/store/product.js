import axios from 'axios'

export default {
  state: {
    product: null
  },
  mutations: {
    setProduct (state, payload) {
      state.product = payload
    }
  },
  actions: {
    async fetchProduct ({ commit }, payload) {
      const newUrl = 'http://localhost:8000/productInfo/' + payload.id + '/' + payload.categories
      commit('setLoading', true)
      await axios({
        method: 'get',
        url: newUrl
      }).then(response => {
        commit('setProduct', response.data)
        console.log(response.data)
      }).catch(error => {
        console.log(error)
      })
      commit('setLoading', false)
    }
  },
  getters: {
    getProduct (state) {
      return state.product
    },
    getDescription (state) {
      return [state.product.name, state.product.description]
    },
    getCharacteristics (state) {
      return state.product.characteristics
    }
  }
}
