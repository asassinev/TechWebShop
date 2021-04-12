<template>
  <loader class="mt-4" v-if="loading" />
  <div v-else>
    <h1 class="text-left pb-4">{{ $store.getters.getBCategory.title }}</h1>
    <div class="row">
      <div
        class="col-sm-6 col-xs-12 col-lg-3"
        v-for="item in catalog.items"
        :key="item.id"
      >
        <CategoryCard :item="item"></CategoryCard>
      </div>
    </div>
  </div>
</template>

<script>
import CategoryCard from './CategoryCard'
import Loader from '../shared/Loader.vue'
export default {
  computed: {
    catalog () {
      return this.$store.getters.getCatalog
    },
    loading () {
      return this.$store.getters.getLoading
    }
  },
  created () {
    this.$store.commit(
      'setProductListTitle',
      localStorage.getItem('product-list-title')
    )
    this.$store.dispatch('updateBreadcrumb', this.$route.name)
  },
  mounted () {
    this.$store.dispatch('fetchCatalog', this.$route.params.name)
  },
  components: {
    CategoryCard,
    Loader
  },
  beforeRouteLeave (to, from, next) {
    to.meta.productListTitle = localStorage.getItem('product-list-title')
    next()
  }
}
</script>
