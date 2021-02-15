export default {
  state: {
    loading: false
  },
  mutations: {
    setLoading (state, payload) {
      state.loading = payload
    }
  },
  actions: {
    setLoading ({ commit }, payload) {
      commit('setLoading', payload)
    }
  },
  getters: {
    getLoading (state) {
      return state.loading
    }
  }
}
