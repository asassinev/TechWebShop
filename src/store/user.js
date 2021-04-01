import axios from './optionsAxois.js'

class User {
  constructor (
    _id = null,
    email,
    password,
    phone = null,
    firstName = '',
    secondName = '',
    sex = 'Не выбрано',
    date = new Date().toLocaleString()
  ) {
    this._id = _id
    this.email = email
    this.password = password
    this.phone = phone
    this.firstName = firstName
    this.secondName = secondName
    this.sex = sex
    this.date = date
  }
}

export default {
  state: {
    user: null
  },
  mutations: {
    setUser (state, payload) {
      state.user = payload
    }
  },
  actions: {
    async createUser ({ commit, dispatch }, { email, password }) {
      await axios
        .post('create-user/', new User(null, email, password))
        .then(response => {
          dispatch('loginUser', { email: email, password: password })
          commit('addNotification', {
            title: 'success',
            text: response.data.status
          })
        })
        .catch(error => {
          commit('addNotification', {
            title: 'error',
            text: error.response.data.error
          })
        })
    },
    async loginUser ({ commit, getters }, { email, password }) {
      commit('setLoading', true)
      await axios
        .post('login-user', {
          email: email,
          password: password
        })
        .then(response => {
          commit(
            'setUser',
            new User(
              response.data._id,
              response.data.email,
              response.data.password,
              response.data.phone,
              response.data.firstName,
              response.data.secondName,
              response.data.sex,
              response.data.date
            )
          )
          localStorage.setItem('user', JSON.stringify(getters.getUs))
        })
        .catch(error => {
          commit('addNotification', {
            title: 'error',
            text: error.response.data.error
          })
        })
      commit('setLoading', false)
    },
    logoutUser ({ commit }) {
      localStorage.removeItem('user')
      commit('setUser', null)
    },
    async changeUser ({ commit }, payload) {
      await axios
        .post('change-user/', payload)
        .then(response => {
          commit('addNotification', {
            title: 'success',
            text: response.data.status
          })
          localStorage.removeItem('user')
          localStorage.setItem('user', JSON.stringify(payload))
        })
        .catch(error => {
          commit('addNotification', {
            title: 'error',
            text: error.response.data.error
          })
        })
    },
    async changePassword ({ commit }, payload) {
      await axios
        .post('change-user-password/', payload)
        .then(response => {
          commit('addNotification', {
            title: 'success',
            text: response.data.status
          })
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
    getUs (state) {
      return state.user
    },
    isUserLoggedIn (state) {
      return state.user !== null
    }
  }
}
