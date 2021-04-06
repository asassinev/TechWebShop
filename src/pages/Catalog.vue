<template>
  <div>
    <loader class="mt-4" v-if="loading" />
    <div v-else>
      <h1 class="text-left">Каталог</h1>
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
  </div>
</template>

<script>
import CategoryCard from '../components/catalog/CategoryCard'
import Loader from '../components/shared/Loader.vue'

export default {
  computed: {
    catalog () {
      return this.$store.getters.getCatalog
    },
    loading () {
      return this.$store.getters.getLoading
    },
    paramsCatalog () {
      return this.$route.params.name
    }
  },
  watch: {
    paramsCatalog () {
      this.$store.dispatch('fetchCatalog', this.paramsCatalog)
    }
  },
  created () {
    if (this.catalog.length === 0) {
      this.$store.dispatch('fetchCatalog', this.paramsCatalog)
    }
  },
  components: {
    CategoryCard,
    Loader
  }
}
</script>
