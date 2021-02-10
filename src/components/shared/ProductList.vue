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
  components: {
    Filters,
    ProductCard
  }
}
</script>
