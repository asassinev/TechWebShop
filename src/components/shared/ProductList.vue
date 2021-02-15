<template>
  <div class="container">
    <div class="row mt-5">
      <div class="col-4">
        <Filters/>
      </div>
      <div class="col-8">
        <ProductCard/>
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
