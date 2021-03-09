import axios from 'axios'

class User {
  constructor (
    email,
    password,
    firstName = '',
    secondName = '',
    sex = 'Не выбрано',
    _id = null
  ) {
    this.email = email
    this.password = password
    this.firstName = firstName
    this.secondName = secondName
    this.sex = sex
    this._id = _id
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
      console.log(new User(email, password))
      await axios({
        method: 'post',
        url: 'http://localhost:8000/create-user',
        data: new User(email, password)
      })
        .then(response => {
          console.log(response)
        })
        .catch(error => {
          console.log(error)
        })
    },
    async loginUser ({ commit }, { email, password }) {
      commit('setLoading', true)
      await axios({
        method: 'get',
        url: 'http://localhost:8000/login-user/' + email + '/' + password
      })
        .then(response => {
          commit('setError', null)
          commit(
            'setUser',
            new User(
              response.data.email,
              response.data.password,
              response.data.firstName,
              response.data.secondName,
              response.data.sex,
              response.data._id
            )
          )
        })
        .catch(error => {
          commit('setError', 'Username or password is incorrect')
          console.log(error)
        })
      commit('setLoading', false)
    },
    logoutUser ({ commit }) {
      commit('setUser', null)
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
