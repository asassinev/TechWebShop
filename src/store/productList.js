import axios from 'axios'

export default {
  state: {
    list: null,
    categoriesName: ''
  },
  mutations: {
    setList (state, payload) {
      state.list = payload
    },
    setCategoriesName (state, payload) {
      state.categoriesName = payload
    }
  },
  actions: {
    async fetchList ({ commit }, payload) {
      commit('setCategoriesName', payload)
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
    getCatogeriesName (state) {
      return state.categoriesName
    }
  }
}
