<template>
  <div class="row">
    <div class="col-sm-6 col-xs-12 col-lg-3" v-for="item in catalog[0].items" :key="item.id">
      <CategoriesCard :item="item"></CategoriesCard>
    </div>
  </div>
</template>

<script>
import CategoriesCard from './CategoriesCard'

export default {
  props: ['catalog'],
  components: {
    CategoriesCard
  }
}
</script>
