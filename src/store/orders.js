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
      state.orders = payload
    }
  },
  actions: {
    addOrder ({ commit }, payload) {
      payload.totalPrice =
        parseInt(payload.price.replace(' ', '')) * payload.count
      commit('setOrder', payload)
    },
    addOrders ({ commit }, payload) {
      commit('setOrders', JSON.parse(payload))
    },
    deleteOrder ({ state, commit }, payload) {
      delete state.orders[payload]
      let newOrders = []
      newOrders = state.orders.filter(e => {
        return e !== undefined
      })
      commit('setOrders', newOrders)
      localStorage.setItem('orders', JSON.stringify(newOrders))
    },
    changeProductQuantity ({ dispatch, commit, getters }, payload) {
      const orders = getters.getOrders
      orders[payload.id].count += payload.value
      orders[payload.id].totalPrice =
        parseInt(orders[payload.id].price.replace(' ', '')) *
        orders[payload.id].count
      commit('setOrders', orders)

      if (orders[payload.id].count === 0) {
        dispatch('deleteOrder', payload.id)
      } else {
        localStorage.setItem('orders', JSON.stringify(orders))
      }
    }
  },
  getters: {
    getOrders (state) {
      return state.orders
    },
    getTotalPrice (state) {
      var totalPrice = 0
      if (state.orders.length !== 1) {
        state.orders.forEach(e => {
          totalPrice += e.totalPrice
        })
      } else totalPrice = state.orders[0].totalPrice
      return totalPrice
    },
    getTotalCountProducts (state) {
      var totalCount = 0
      if (state.orders.length !== 1) {
        state.orders.forEach(e => {
          totalCount += e.count
        })
      } else totalCount = state.orders[0].count
      return totalCount
    },
    getOrdersNames (state) {
      return state.orders.map(e => {
        return e.name
      })
    }
  }
}
