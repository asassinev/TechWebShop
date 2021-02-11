<template>
  <div>
    <h5>Характеристики 11.6" Ноутбук Acer TravelMate B1 TMB118-M-C0EA черный</h5>
    <table class="w-100 mt-2 mb-2">
      <tbody class="card-characteristic" v-for="item in list" :key="item.id">
        <th class="card-characteristic__title">{{item.nameCharacteristic}}</th>
        <tr v-for="description in item.values" :key="description.id" class="card-characteristic__description">
          <td class="w-50">{{description.key}}</td>
          <td>{{description.value}}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  data () {
    return {
      list: [
        {
          nameCharacteristic: 'Заводские данные',
          values: [
            {
              key: 'Гарантия',
              value: '12 мес.'
            }
          ]
        },
        {
          nameCharacteristic: 'Классификация',
          values: [
            {
              key: 'Тип',
              value: 'ноутбук'
            },
            {
              key: 'Операционная система',
              value: 'DOS'
            },
            {
              key: 'Модель',
              value: 'Acer TravelMate B1 TMB118-M-C0EA'
            }
          ]
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.card-characteristic {
  &__title {
    font-weight: 700;
    padding: 8px 0;
  }
  &__description {
    padding: 4px 0;
  }
}
.dots {
  float: right;
  width: 100%;
  border-bottom: 1px dotted black;
}
</style>
