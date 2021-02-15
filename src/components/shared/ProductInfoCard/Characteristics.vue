<template>
  <div>
    <h5>Характеристики 11.6" Ноутбук Acer TravelMate B1 TMB118-M-C0EA черный</h5>
    <table class="w-100 mt-2 mb-2">
      <tbody class="card-characteristic" v-for="characteristic in characteristics" :key="characteristic.id">
        <th class="card-characteristic__title">{{characteristic.title}}</th>
        <tr v-for="(item, id) in characteristic.items" :key="id" class="card-characteristic__description">
          <td class="w-50">{{item.key}}</td>
          <td>{{item.value}}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  computed: {
    characteristics () {
      return this.$store.getters.getCharacteristics
    }
  }
}
</script>

<style lang="scss" scoped>
.card-characteristic {
  &__title {
    font-weight: 700;
    padding: 10px 0 2px;
  }
  &__description td{
    padding: 4px 0 4px 4px;
  }
}
.dots {
  float: right;
  width: 100%;
  border-bottom: 1px dotted black;
}
</style>
