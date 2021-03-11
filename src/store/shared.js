export default {
  state: {
    loading: false,
    error: '',
    notification: null
  },
  mutations: {
    setLoading (state, payload) {
      state.loading = payload
    },
    setError (state, payload) {
      state.error = payload
    },
    setNotification (state, payload) {
      state.notification = payload
    }
  },
  actions: {
    setLoading ({ commit }, payload) {
      commit('setLoading', payload)
    },
    setError ({ commit }, payload) {
      commit('setError', payload)
    },
    setNotification ({ commit }, payload) {
      commit('setNotification', payload)
      setTimeout(() => {
        commit('setNotification', null)
      }, 2000)
    }
  },
  getters: {
    getLoading (state) {
      return state.loading
    },
    getError (state) {
      return state.error
    },
    getNotification (state) {
      return state.notification
    }
  }
}
