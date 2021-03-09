export default {
  state: {
    loading: false,
    error: ''
  },
  mutations: {
    setLoading (state, payload) {
      state.loading = payload
    },
    setError (state, payload) {
      state.error = payload
    }
  },
  actions: {
    setLoading ({ commit }, payload) {
      commit('setLoading', payload)
    },
    setError ({ commit }, payload) {
      commit('setError', payload)
    }
  },
  getters: {
    getLoading (state) {
      return state.loading
    },
    getError (state) {
      return state.error
    }
  }
}
