export default {
  state: {
    orders: []
  },
  mutations: {
    setOrder (state, payload) {
      var isBuying = false
      state.orders.forEach(e => {
        if (e.name === payload.name) {
          isBuying = true
        }
      })
      if (isBuying) {
        state.orders.forEach(e => {
          if (e.name === payload.name) {
            e.count++
          }
        })
      } else {
        state.orders.push(payload)
      }
      localStorage.setItem('orders', JSON.stringify(state.orders))
    },
    setOrders (state, payload) {
      state.orders = payload
    }
  },
  actions: {
    addOrder ({ commit }, payload) {
      payload.total = parseInt(payload.price.replace(' ', '')) * payload.count
      commit('setOrder', payload)
    },
    addOrders ({ commit }, payload) {
      commit('setOrders', JSON.parse(payload))
    },
    changeProductQuantity ({ dispatch, commit, getters }, payload) {
      const orders = getters.getOrders
      orders[payload.id].count += payload.value
      orders[payload.id].total =
        parseInt(orders[payload.id].price.replace(' ', '')) *
        orders[payload.id].count
      commit('setOrders', orders)
      if (orders[payload.id].count === 0) {
        dispatch('deleteOrder', payload.id)
      } else {
        localStorage.setItem('orders', JSON.stringify(orders))
      }
    },
    deleteOrder ({ state, commit }, payload) {
      delete state.orders[payload]
      let newOrders = []
      newOrders = state.orders.filter(e => {
        return e !== undefined
      })
      commit('setOrders', newOrders)
      localStorage.setItem('orders', JSON.stringify(newOrders))
    }
  },
  getters: {
    getOrders (state) {
      return state.orders
    },
    getTotalPrice (state) {
      var total = 0
      if (state.orders.length !== 1) {
        state.orders.forEach(e => {
          total += e.total
        })
      } else total = state.orders[0].total
      return total
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
