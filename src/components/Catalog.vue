<template>
  <div class="container">
    <h1 class="text-left">Catalog</h1>
    <CatalogLists :catalog="catalog"/>
  </div>
</template>

<script>
import CatalogLists from './catalog/CatalogLists.vue'

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
    CatalogLists
  }
}
</script>
