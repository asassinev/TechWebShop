<template>
  <div>
    <p class="h5 mb-n1">
      Характеристики {{ this.$store.getters.getProduct.name }}
    </p>
    <table class="w-100 mt-2 mb-2 text-break">
      <tbody
        class="card-characteristic"
        v-for="characteristic in characteristics"
        :key="characteristic.id"
      >
        <th class="card-characteristic__title pt-3 text-wrap" colspan="2">
          {{ characteristic.title }}
        </th>
        <tr
          v-for="(item, id) in characteristic.items"
          :key="id"
          class="card-characteristic__description"
        >
          <td class="w-50 text-wrap">{{ item.key }}</td>
          <td class="text-wrap">{{ item.value }}</td>
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
table {
  font-size: 14px;
  @media (min-width: 475px) {
    font-size: 16px;
  }
}
.card-characteristic {
  margin: 4px;
  &__description td {
    padding: 2px 0px 4px 4px;
  }
}
.mb-n1 {
  margin-bottom: -16px;
}
</style>
