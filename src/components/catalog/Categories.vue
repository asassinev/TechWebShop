<template>
  <div class="row">
    <div
      class="col-sm-6 col-xs-12 col-lg-3"
      v-for="item in catalog[0].items"
      :key="item.id"
    >
      <CategoryCard :item="item"></CategoryCard>
    </div>
  </div>
</template>

<script>
import CategoryCard from './CategoryCard'

export default {
  props: ['catalog'],
  components: {
    CategoryCard
  }
}
</script>
