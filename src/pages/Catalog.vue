<template>
  <div>
    <h1 class="text-left">Каталог</h1>
    <Categories :catalog="catalog" />
  </div>
</template>

<script>
import Categories from '../components/catalog/Categories'

export default {
  computed: {
    catalog () {
      return this.$store.getters.catalog
    }
  },
  created () {
    this.$store.dispatch('getCatalog', this.$route.params.name)
  },
  components: {
    Categories
  }
}
</script>
