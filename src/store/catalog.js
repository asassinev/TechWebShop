export default {
  state: {
    categories: '',
    catalog: [
      {
        categories: 'computer-components',
        items: [
          {
            id: 'processors',
            text: 'Процессоры',
            src: 'https://c.dns-shop.ru/thumb/st1/fit_width/120/120/6679e8924eb1db5eaf6b34303261df07/b70d20da48dfebda15c88f04044237bfa6234fe05d539ff68a61395785620202.jpg'
          },
          {
            id: 'motherboards',
            text: 'Материнские платы',
            src: 'https://c.dns-shop.ru/thumb/st4/fit_width/120/120/955f0f642e31b8a170f1d7b1e89d558b/114d29cfe20f17933bac65e17c2edf53aeb4d5db5a0d683b5191195099eb437c.jpg'
          },
          {
            id: 'video-cards',
            text: 'Видеокарты',
            src: 'https://c.dns-shop.ru/thumb/st1/fit_width/120/120/714a7a573a496f27ff82114df61a4cc5/809d70b81f66d3f730c567c442e3ad98baeef227e15b2413dd3b0ca2c4afeca0.jpg'
          },
          {
            id: 'ram',
            text: 'Оперативная память',
            src: 'https://c.dns-shop.ru/thumb/st4/fit_width/120/120/b7ff8f5c11792f0b240a4ae96fb754ae/14d47ba6e8fc8e32eb1a1f0581328ba668aa4f5511f60b8c3ac33b85800465b5.jpg'
          },
          {
            id: 'body',
            text: 'Корпуса',
            src: 'https://c.dns-shop.ru/thumb/st1/fit_width/120/120/a439925bce69612d34f3b6a8ee73280b/d72973c8e745e019bc76b543465dec0c3a3e85f347803ed76aeabe421048aba6.jpg'
          }
        ]
      },
      {
        categories: 'desktop',
        items: [
          {
            id: 'system-blocks',
            text: 'Системные блоки',
            src: 'https://c.dns-shop.ru/thumb/st1/fit_width/120/120/6bebf2d2c6c09a45f76f2c198cd96e1e/02070da1bc5629563840873087a89888a6babc36c19f2d9a25870212a02d8988.jpg'
          }
        ]
      },
      {
        categories: 'notebook',
        items: [
          {
            id: 'simple-notebook',
            text: 'Ноутбуки',
            src: 'https://c.dns-shop.ru/thumb/st1/fit_width/120/120/479eb483cc265cfbe1d352135820d472/0ea2577dde074dc9ca85b3dea61eb326b45a4a48ce741823645155265ee06dc8.jpg'
          }
        ]
      },
      {
        categories: 'smartphone',
        items: [
          {
            id: 'smartphone',
            text: 'Смартфоны',
            src: 'https://c.dns-shop.ru/thumb/st1/fit_width/120/120/c68562b33d34ee0053b067808e433ba5/91b384bd6d56f835dfb5c7974c430ff6be88200a29145acd983e6e7ac2d2c220.jpg'
          }
        ]
      }
    ]
  },
  mutations: {
    setCategories (state, payload) {
      state.categories = payload
    }
  },
  actions: {
    getCatalog ({ commit }, payload) {
      commit('setCategories', payload)
    }
  },
  getters: {
    catalog (state) {
      return state.catalog.filter((a) => {
        return a.categories === state.categories
      })
    },
    categories (state) {
      return state.categories
    }
  }
}
