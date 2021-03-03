import axios from 'axios'

export default {
  state: {
    characteristics: null
  },
  mutations: {
    setRatingCharacteristics (state, payload) {
      state.characteristics = payload
    }
  },
  actions: {
    async fetchRatingCharacteristics ({ commit }, payload) {
      const newUrl = 'http://localhost:8000/getCharacteristics/' + payload
      await axios({
        method: 'get',
        url: newUrl
      })
        .then(response => {
          commit('setRatingCharacteristics', response.data)
        })
        .catch(error => {
          console.log(error)
        })
    }
  },
  getters: {
    getRatingCharacteristicsList (state) {
      return state.characteristics
    }
  }
}
