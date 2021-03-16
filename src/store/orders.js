export default {
  state: {
    orders: []
  },
  mutations: {
    setOrder (state, payload) {
      state.orders.push(payload)
      localStorage.setItem('orders', JSON.stringify(state.orders))
    },
    setOrders (state, payload) {
      state.orders = JSON.parse(payload)
    }
  },
  actions: {
    addOrder ({ commit }, payload) {
      payload.total = parseInt(payload.price.replace(' ', '')) * payload.count
      commit('setOrder', payload)
    },
    changeProductQuantity ({ getters }, payload) {
      const orders = getters.getOrders
      orders[payload.id].count += payload.value
      orders[payload.id].total =
        parseInt(orders[payload.id].price.replace(' ', '')) *
        orders[payload.id].count
    }
  },
  getters: {
    getOrders (state) {
      return state.orders
    }
  }
}
