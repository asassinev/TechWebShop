import axios from 'axios'

export default {
  state: {
    list: null
  },
  mutations: {
    setList (state, payload) {
      state.list = payload
    }
  },
  actions: {
    async fetchList ({ commit }, payload) {
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
    }
  }
}
