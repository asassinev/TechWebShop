<template>
  <div>
    <div v-if="loading">
      <Loader />
    </div>
    <div v-else>
      <h1 class="fs-3">{{ product.name }}</h1>
      <h3 class="fs-5">ID: {{ product._id }}</h3>
      <div class="shadow-sm mb-3 bg-white rounded border">
        <div class="row pt-3 pb-3">
          <div class="col-12 col-md-3 text-center">
            <img class="mx-auto" :src="product.imgSrc" :alt="product.name" />
          </div>
          <div class="col-12 col-md-9 px-4 container">
            <p class="fs-4 fw-bold">
              {{ product.price }}
              <i class="list__price-gray fas fa-ruble-sign fs-5"></i>
            </p>
            <v-rating readonly :length="5" :value="generalRating"></v-rating>
            <p class="mb-0">Оценка товара: {{ generalRating || 0 }} из 5</p>
            <p class="mb-0">Голосов: {{ countRating || 0 }}</p>
            <p class="mb-2">Количество на складе: 2 шт.</p>
            <BuyProductBTN class="float-start" :product="product" />
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-12 col-lg-3 mb-3 mb-lg-0">
          <div class="list-group shadow-sm bg-white rounded">
            <router-link
              v-for="tab in tablist"
              :key="tab.id"
              class="list-group-item list-group-item-action fs-6 p-3"
              :to="tab.href"
              ><i class="me-2" :class="tab.icon"></i>{{ tab.text }}</router-link
            >
          </div>
        </div>
        <div class="col-12 col-lg-9">
          <div
            class="tab-content shadow-sm bg-white rounded border"
            id="nav-tabContent"
          >
            <router-view class="p-3" id="routerInfo"></router-view>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BuyProductBTN from '../shared/BuyProductBTN.vue'
export default {
  components: {
    BuyProductBTN
  },
  data () {
    return {
      tablist: [
        {
          text: 'Описание',
          href: 'description',
          icon: 'far fa-file-alt'
        },
        {
          text: 'Характеристики',
          href: 'characteristics',
          icon: 'fas fa-list'
        },
        {
          text: 'Отзывы',
          href: 'reviews',
          icon: 'far fa-star'
        }
      ]
    }
  },
  created () {
    this.$store.dispatch('fetchProduct', this.$route.params.idProduct)
  },
  computed: {
    product () {
      return this.$store.getters.getProduct
    },
    loading () {
      return this.$store.getters.getLoading
    },
    generalRating () {
      return this.$store.getters.getAverageRating
    },
    countRating () {
      return this.$store.getters.getCountReview
    }
  }
}
</script>

<style lang="scss" scoped>
.wrapper {
  height: 300px;
  border-radius: 8px;
  padding: 10px;
  font-size: 18px;
  margin-bottom: 30px;
  margin-left: 0px;
  margin-right: 0px;
}
.router-link-active {
  border-left: 4px solid #007bff;
}
</style>
