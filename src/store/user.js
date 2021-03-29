import axios from 'axios'

class User {
  constructor (
    _id = null,
    email,
    password,
    firstName = '',
    secondName = '',
    sex = 'Не выбрано',
    date
  ) {
    this._id = _id
    this.email = email
    this.password = password
    this.firstName = firstName
    this.secondName = secondName
    this.sex = sex
    this.date = new Date().toLocaleString()
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
      await axios({
        method: 'post',
        url: 'http://localhost:8000/create-user',
        data: new User(null, email, password)
      })
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
      await axios({
        method: 'get',
        url: 'http://localhost:8000/login-user/' + email + '/' + password
      })
        .then(response => {
          commit(
            'setUser',
            new User(
              response.data._id,
              response.data.email,
              response.data.password,
              response.data.firstName,
              response.data.secondName,
              response.data.sex
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
      await axios({
        method: 'post',
        url: 'http://localhost:8000/change-user/',
        data: payload
      })
        .then(response => {
          commit('addNotification', {
            title: 'success',
            text: response.data.status
          })
          localStorage.removeItem('user')
          localStorage.setItem('user', JSON.stringify(payload))
        })
        .catch(error => {
          console.log(error)
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
