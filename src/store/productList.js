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
      await axios({
        method: 'get',
        headers: { 'Access-Control-Allow-Origin': true },
        url: 'http://localhost:8000/productList',
        data: {
          categories: payload
        }
      }).then(response => {
        commit('setList', response.data)
      }).catch(error => {
        console.log(error)
      })
    }
  },
  getters: {
    getList (state) {
      return state.list
    }
  }
}
