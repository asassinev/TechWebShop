import axios from 'axios'

export default {
  state: {
    product: null,
    filters: null,
    reviews: null
  },
  mutations: {
    setProduct (state, payload) {
      state.product = payload
    },
    setFilters (state, payload) {
      state.filters = payload
    },
    setReviews (state, payload) {
      state.reviews = payload
    },
    setAdvantages (state) {
      var text = []
      var str = ''
      state.reviews.forEach(e => {
        for (let i = 0; i < e.advantages.length; i++) {
          if (e.advantages[i] === '\n') {
            if (str !== '') {
              text.push(str)
            }
            str = ''
          } else {
            str += e.advantages[i]
          }
        }
        text.push(str)
        str = ''
        e.advantages = text
        text = []

        for (let i = 0; i < e.limitations.length; i++) {
          if (e.limitations[i] === '\n') {
            if (str !== '') {
              text.push(str)
            }
            str = ''
          } else {
            str += e.limitations[i]
          }
        }
        text.push(str)
        str = ''
        e.limitations = text
        text = []

        for (let i = 0; i < e.review.length; i++) {
          if (e.review[i] === '\n') {
            if (str !== '') {
              text.push(str)
            }
            str = ''
          } else {
            str += e.review[i]
          }
        }
        text.push(str)
        str = ''
        e.review = text
        text = []
      })
    }
  },
  actions: {
    async fetchProduct ({ commit, getters }, payload) {
      const newUrl = 'http://localhost:8000/productInfo/' + payload
      commit('setLoading', true)
      await axios({
        method: 'get',
        url: newUrl
      })
        .then(response => {
          commit('setProduct', response.data)
          commit('setReviews', response.data.reviews)
          commit('setAdvantages')
        })
        .catch(error => {
          console.log(error)
        })
      commit('setLoading', false)
    },
    async changeCountLike ({ commit }, payload) {
      console.log('changed')
    },
    async createReview ({ getters }, payload) {
      if (payload.uName === null) {
        payload.uName = 'Гость'
      }
      const newUrl =
        'http://localhost:8000/create-review/' + getters.getProductId
      await axios({
        method: 'post',
        url: newUrl,
        data: payload
      })
        .then(response => {
          console.log(response)
          this.fetchProduct(getters.getProductId)
        })
        .catch(error => {
          console.log(error)
        })
    }
  },
  getters: {
    getProduct (state) {
      return state.product
    },
    getProductId (state) {
      return state.product._id
    },
    getCategories (state) {
      return state.product.categories
    },
    getDescription (state) {
      return [state.product.name, state.product.description]
    },
    getCharacteristics (state) {
      return state.product.characteristics
    },
    getProductForReview (state) {
      var product = state.product.name + state.product.id
      return product
    },
    getReviews (state) {
      return state.reviews
    },
    getAverageRating (state) {
      var rating = 0
      state.reviews.forEach(e => {
        rating += e.generalRating
      })
      rating = rating / state.reviews.length

      return rating
    },
    getCountReview (state) {
      return state.reviews.length
    },
    getCountReviews (state) {
      var reviews = [
        { progress: 0, count: 0 },
        { progress: 0, count: 0 },
        { progress: 0, count: 0 },
        { progress: 0, count: 0 },
        { progress: 0, count: 0 }
      ]
      var counter
      state.reviews.forEach(e => {
        counter = 5
        reviews.forEach(r => {
          if (e.generalRating === counter) {
            r.count += 1
          }
          counter--
        })
      })
      var countReviews = state.reviews.length
      reviews.forEach(e => {
        e.progress = ((e.count * 100) / countReviews).toFixed(1)
      })
      return reviews
    },
    getRatingCharacteristics (state) {
      var charac = []
      var countRate = 0
      state.reviews[0].subRating.forEach(e => {
        charac.push({ title: e.title, progress: 0, average: 0 })
      })
      state.reviews.forEach(e => {
        e.subRating.forEach(r => {
          for (let i = 0; i < e.subRating.length; i++) {
            if (r.title === charac[i].title) {
              charac[i].average += r.rate
            }
          }
        })
        countRate += 1
      })
      charac.forEach(e => {
        e.average = (e.average / countRate).toFixed(1)
        e.progress = (e.average * 100) / 5
      })
      return charac
    }
  }
}
