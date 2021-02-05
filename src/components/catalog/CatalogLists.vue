<template>
  <div class="row">
    <div class="col-sm-6 col-xs-12 col-lg-3" v-for="item in catalog[0].items" :key="item.id">
      <ItemCard :item="item"></ItemCard>
    </div>
  </div>
</template>

<script>
import ItemCard from '../shared/ItemCard'

export default {
  props: ['catalog'],
  components: {
    ItemCard
  }
}
</script>
