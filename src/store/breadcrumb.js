export default {
  state: {
    breadcrumb: [],
    prevBreadcrumb: [],
    BCatalog: null,
    BCategory: null,
    BProductList: null,
    BProduct: null,
    productName: '',
    BProductListTitle: ''
  },
  mutations: {
    addBreadcrumb (state, payload) {
      state.breadcrumb.push(payload)
      localStorage.setItem('breadcrumb', JSON.stringify(state.breadcrumb))
    },
    newBreadcrumb (state, payload) {
      state.breadcrumb = [payload]
      localStorage.setItem('breadcrumb', JSON.stringify(state.breadcrumb))
    },
    setPrevBreadcrumb (state, payload) {
      state.prevBreadcrumb = payload
    },
    setBCatalog (state, payload) {
      state.BCatalog = payload
      localStorage.setItem('breadcrumb-catalog', JSON.stringify(state.BCatalog))
    },
    setBCategory (state, payload) {
      state.BCategory = payload
      localStorage.setItem(
        'breadcrumb-category',
        JSON.stringify(state.BCategory)
      )
    },
    setBProductList (state, payload) {
      state.BProductList = payload
      localStorage.setItem(
        'breadcrumb-product-list',
        JSON.stringify(state.BProductList)
      )
    },
    setBProduct (state, payload) {
      state.BProduct = payload
      localStorage.setItem('breadcrumb-product', JSON.stringify(state.BProduct))
    },
    setBProductName (state, payload) {
      state.productName = payload
    },
    setBProductListTitle (state, payload) {
      state.productListTitle = payload
    }
  },
  actions: {
    updateBreadcrumb ({ state, commit }, payload) {
      if (payload === 'catalogList') {
        commit('newBreadcrumb', state.BCatalog)
      } else if (payload === 'catalogCategory') {
        commit('newBreadcrumb', state.BCatalog)
        commit('addBreadcrumb', state.BCategory)
      } else if (payload === 'productList') {
        commit('newBreadcrumb', state.BCatalog)
        commit('addBreadcrumb', state.BCategory)
        commit('addBreadcrumb', state.BProductList)
      } else if (
        payload === 'description' ||
        payload === 'reviews' ||
        payload === 'characteristics'
      ) {
        commit('newBreadcrumb', state.BCatalog)
        commit('addBreadcrumb', state.BCategory)
        commit('addBreadcrumb', state.BProductList)
        commit('addBreadcrumb', state.BProduct)
      } else {
        commit('newBreadcrumb', '')
      }
    }
  },
  getters: {
    getBreadcrumb (state) {
      if (localStorage.getItem('breadcrumb')) {
        state.breadcrumb = JSON.parse(localStorage.getItem('breadcrumb'))
      }
      return state.breadcrumb
    },
    getPrevBreadcrumb (state) {
      return state.prevBreadcrumb
    },
    getBCatalog (state) {
      return state.BCatalog
    },
    getBCategory (state) {
      return state.BCategory
    },
    getBProductList (state) {
      return state.BProductList
    },
    getBProduct (state) {
      return state.BProduct
    },
    getBProductName (state) {
      return state.productName
    },
    getBProductListTitle (state) {
      return state.productListTitle
    }
  }
}
