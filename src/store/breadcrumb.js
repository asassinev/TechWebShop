export default {
  state: {
    breadcrumb: []
  },
  mutations: {
    addBreadcrumb (state, payload) {
      state.breadcrumb.push(payload)
      localStorage.setItem('breadcrumb', JSON.stringify(state.breadcrumb))
    },
    newBreadcrumb (state, payload) {
      state.breadcrumb = [payload]
      localStorage.setItem('breadcrumb', JSON.stringify(state.breadcrumb))
    },
    prevBreadcrumb (state, payload) {
      state.breadcrumb = payload
    }
  },
  getters: {
    getBreadcrumb (state) {
      if (localStorage.getItem('breadcrumb')) {
        state.breadcrumb = JSON.parse(localStorage.getItem('breadcrumb'))
      }
      return state.breadcrumb
    }
  }
}
