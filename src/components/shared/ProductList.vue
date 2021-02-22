<template>
  <div class="container">
    <div class="row mt-5">
      <div class="col-4">
        <Filters/>
      </div>
      <div class="col-8">
        <div v-if="loading">
          <Loader/>
        </div>
        <div v-else>
          <ProductCard/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Filters from './Filters'
import ProductCard from './ProductCard'
export default {
  data () {
    return {
      products: null
    }
  },
  computed: {
    loading () {
      return this.$store.getters.getLoading
    }
  },
  created () {
    this.$store.dispatch('fetchList', this.$route.params.id)
    this.products = this.$store.getters.getList
  },
  components: {
    Filters,
    ProductCard
  }
}
</script>
