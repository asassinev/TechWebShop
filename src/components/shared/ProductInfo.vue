<template>
  <div class="container">
    <div v-if="loading">
      <Loader/>
    </div>
    <div v-else>
      <h1>{{ productInfo.name }}</h1>
      <h3>{{ productInfo._id }}</h3>
      <div class="wrapper row">
        <div class="col-4 text-center">
          <img :src="productInfo.imgSrc" :alt="productInfo.name">
        </div>
        <div class="col-8">
          <p>{{productInfo.price}} <i class="list__price-gray fas fa-ruble-sign"></i></p>
          <button class="btn btn-primary">Купить</button>
        </div>
      </div>
      <div class="row">
        <div class="col-4">
            <div class="list-group">
            <router-link v-for="tab in tablist" :key="tab.id" class="list-group-item list-group-item-action" :to="tab.href"><i class="mr-2" :class="tab.icon"></i>{{tab.text}}</router-link>
          </div>
        </div>
        <div class="col-8">
            <div class="tab-content wrapper" id="nav-tabContent">
              <router-view class="container pt-2" id="routerInfo"></router-view>
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
    const id = this.$route.params.idProduct
    const categories = this.$store.getters.getCatogeriesName
    const payload = {
      id, categories
    }
    this.$store.dispatch('fetchProduct', payload)
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
  border-radius: 8px;
  background-color: white;
  box-shadow: 0 0 3px 0 rgba(0, 0, 0, 0.2);
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
