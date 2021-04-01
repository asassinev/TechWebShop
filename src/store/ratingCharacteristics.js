import axios from './optionsAxois.js'

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
      await axios
        .get('getCharacteristics/' + payload)
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
