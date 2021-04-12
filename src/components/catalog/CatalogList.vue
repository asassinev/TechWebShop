<template>
  <div>
    <h1 class="pb-4">Каталог</h1>
    <div class="row">
      <div
        class="col-sm-6 col-xs-12 col-lg-3"
        v-for="(item, idx) in catalog"
        :key="idx"
      >
        <div
          @click="hundlerClickLink(item)"
          class="item-card shadow-sm p-3 bg-white rounded user-select-none"
        >
          <div class="item-card__img">
            <img
              :src="item.imgSrc"
              :alt="item.title"
              class="item-card__img-margin"
            />
          </div>
          <p class="item-card__text fw-bold fs-5 mb-2">
            {{ item.title }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      catalog: [
        {
          path: '/TechWebShop/catalog/desktop',
          imgSrc:
            'https://c.dns-shop.ru/thumb/st1/fit_width/120/120/8fbb6964c03e65f4eec33bafe5667081/320a8e4b8a3227de8d22213d06e5804d890240c1461f614983570d175a0de9f2.jpg',
          title: 'Компьютеры и ноутбуки'
        },
        {
          path: '/TechWebShop/catalog/computer-components',
          imgSrc:
            'https://c.dns-shop.ru/thumb/st4/fit_width/120/120/3b4d671aa2d67eba1248c5c6698c33b9/844f2e59af717a1a7b5ff59ab02c9eeddc77d31fb54473159b31cdeb8a3917e8.jpg',
          title: 'Комплектующие'
        },
        {
          path: '/TechWebShop/catalog/smartphone',
          imgSrc:
            'https://c.dns-shop.ru/thumb/st4/fit_width/120/120/3c2c718a0e8d7edb22fa18afcdd9dbbb/f9650d87860b2ea44dab781be028067e1cc1c94dee0e878dfc66d5542fb0a29c.jpg',
          title: 'Смартфоны'
        }
      ],
      cItem: ''
    }
  },
  methods: {
    hundlerClickLink (item) {
      this.cItem = item.title
      this.$store.commit('setCatalogCategory', item.title)
      this.$router.push({ path: item.path })
    }
  },
  beforeRouteLeave (to, from, next) {
    to.meta.category = this.$store.getters.getCatalogCategory
    next()
  }
}
</script>
