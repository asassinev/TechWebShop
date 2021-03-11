<template>
  <div>
    <div class="mt-3" v-if="loading">
      <Loader />
    </div>
    <div v-else class="row mt-3">
      <div>
        <label for="up"
          ><input
            type="checkbox"
            id="up"
            @click="$store.dispatch('setSortParams', 'priceUp')"
          />
          По возрастанию цены
        </label>
      </div>
      <div>
        <label for="down"
          ><input
            type="checkbox"
            id="down"
            @click="$store.dispatch('setSortParams', 'priceDown')"
          />
          По убыванию цены
        </label>
      </div>
      <div class="col-12 col-lg-4 mb-3">
        <Filters />
      </div>
      <div class="col-12 col-lg-8">
        <ProductCard />
        <nav aria-label="Page navigation example">
          <ul class="pagination justify-content-center">
            <li class="page-item disabled">
              <a class="page-link" href="#" tabindex="-1" aria-disabled="true"
                >Previous</a
              >
            </li>
            <li class="page-item"><a class="page-link" href="#">1</a></li>
            <li class="page-item"><a class="page-link" href="#">2</a></li>
            <li class="page-item"><a class="page-link" href="#">3</a></li>
            <li class="page-item">
              <a class="page-link" href="#">Next</a>
            </li>
          </ul>
        </nav>
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
      page: 1,
      hasNextPage: false
    }
  },
  computed: {
    loading () {
      return this.$store.getters.getLoading
    },
    product () {
      return this.$store.getters.getList
    }
  },
  created () {
    this.$store.dispatch('fetchList', this.$route.params.id)
  },
  components: {
    Filters,
    ProductCard
  }
}
</script>
