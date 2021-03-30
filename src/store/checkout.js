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
  actions: {},
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
