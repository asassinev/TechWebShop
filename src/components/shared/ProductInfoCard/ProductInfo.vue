<template>
  <div>
    <div v-if="loading">
      <Loader/>
    </div>
    <div v-else>
      <h1 class="fs-3">{{ productInfo.name }}</h1>
      <h3 class="fs-5">ID: {{ productInfo._id }}</h3>
      <div class="shadow-sm mb-3 bg-white rounded border">
        <div class="row pt-3 pb-3">
          <div class="col-3 text-center">
            <img class="mx-auto" :src="productInfo.imgSrc" :alt="productInfo.name">
          </div>
          <div class="col-9 container">
            <p class="fs-4 fw-bold">{{productInfo.price}} <i class="list__price-gray fas fa-ruble-sign fs-5"></i></p>
            <div class="text-warning" data-rating="3">
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="far fa-star"></i>
              <i class="far fa-star"></i>
              <i class="far fa-star"></i>
            </div>
            <p class="mb-0">Оценка товара: 2 из 5</p>
            <p class="mb-0">Голосов: 15</p>
            <p class="mb-2">Количество на складе: 2 шт.</p>
            <button class="btn btn-primary">Купить</button>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-12 col-lg-4 mb-3 mb-lg-0">
            <div class="list-group shadow-sm bg-white rounded">
            <router-link v-for="tab in tablist" :key="tab.id" class="list-group-item list-group-item-action fs-6 p-3" :to="tab.href"><i class="me-2" :class="tab.icon"></i>{{tab.text}}</router-link>
          </div>
        </div>
        <div class="col-12 col-lg-8">
            <div class="tab-content shadow-sm bg-white rounded border pt-4 pb-3" id="nav-tabContent">
              <router-view class="container " id="routerInfo"></router-view>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
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
    productInfo () {
      return this.$store.getters.getProduct
    },
    loading () {
      return this.$store.getters.getLoading
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
