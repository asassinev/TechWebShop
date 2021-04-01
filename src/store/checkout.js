import axios from './optionsAxois.js'

export default {
  state: {
    phone: '',
    email: '',
    inn: '',
    kpp: '',
    companyName: '',
    delivery: {
      deliveryDate: null,
      street: ''
    }
  },
  mutations: {
    setPhone (state, payload) {
      state.phone = payload
    },
    setEmail (state, payload) {
      state.email = payload
    },
    setINN (state, payload) {
      state.inn = payload
    },
    setKPP (state, payload) {
      state.kpp = payload
    },
    setCompanyName (state, payload) {
      state.companyName = payload
    },
    setDelivery (state, payload) {
      state.delivery = payload
    },
    setDeliveryDate (state, payload) {
      state.delivery.deliveryDate = payload
    }
  },
  actions: {
    async sendOrder ({ getters, commit }, payload) {
      const orders = {
        checkout: payload,
        orders: getters.getOrders
      }
      await axios
        .post('create-order', orders)
        .then(response => {
          commit('addNotification', {
            title: 'success',
            text: response.data.status
          })
          localStorage.removeItem('orders')
          commit('setOrders', [])
        })
        .catch(error => {
          commit('addNotification', {
            title: 'error',
            text: error.response.data.error
          })
        })
    }
  },
  getters: {
    getPhone (state) {
      return state.phone
    },
    getEmail (state) {
      return state.email
    },
    getINN (state) {
      return state.inn
    },
    getKPP (state) {
      return state.kpp
    },
    getCompanyName (state) {
      return state.companyName
    },
    getDelivery (state) {
      return state.delivery
    },
    getDeliveryDate (state) {
      return state.delivery.deliveryDate
    }
  }
}
