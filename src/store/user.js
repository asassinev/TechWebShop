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
    async createUser ({ commit }, { email, password }) {
      await axios({
        method: 'post',
        url: 'http://localhost:8000/create-user',
        data: new User(null, email, password)
      })
        .then(response => {
          console.log(response)
        })
        .catch(error => {
          console.log(error)
        })
    },
    async loginUser ({ commit, getters, dispatch }, { email, password }) {
      commit('setLoading', true)
      await axios({
        method: 'get',
        url: 'http://localhost:8000/login-user/' + email + '/' + password
      })
        .then(response => {
          commit('setNotification', null)
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
          console.log(localStorage.getItem('user'))
        })
        .catch(error => {
          dispatch('setNotification', {
            title: 'error',
            text: 'Username or password is incorrect'
          })
          console.log(error)
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
          console.log(response)
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
