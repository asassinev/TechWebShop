import axios from 'axios'

export default {
  state: {
    list: null,
    newList: null,
    filters: null,
    maxPrice: 0
  },
  mutations: {
    setList (state, payload) {
      state.list = payload
    },
    setNewList (state, payload) {
      state.newList = payload
    },
    setFilters (state, payload) {
      state.filters = payload
    },
    setMaxPrice (state, payload) {
      state.maxPrice = payload
    }
  },
  actions: {
    async fetchList ({ commit, getters }, payload) {
      commit('setLoading', true)
      await axios({
        method: 'get',
        headers: { 'Access-Control-Allow-Origin': true },
        url: 'http://localhost:8000/productList',
        params: {
          categories: payload
        }
      }).then(response => {
        commit('setList', response.data)
        commit('setMaxPrice', getters.getMaxPrice)
      }).catch(error => {
        console.log(error)
      })
      commit('setLoading', false)
    }
  },
  getters: {
    getList (state) {
      return state.list
    },
    getNewList (state) {
      return state.list.filter((p) => {
        return parseInt(p.price.split(' ').join('')) >= 0 && parseInt(p.price.split(' ').join('')) <= 5000
      })
    },
    getFilters (state) {
      return state.filters
    },
    getMaxPrice (state) {
      var max = 0
      state.list.forEach((p) => {
        if (parseInt(p.price.split(' ').join('')) > max) {
          max = parseInt(p.price.split(' ').join(''))
        }
      })
      return max
    },
    maxPrice (state) {
      return state.maxPrice
    }
  }
}
