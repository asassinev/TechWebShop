<template>
  <div class="filters">
    <button
      class="btn btn-primary"
      @click="getNewList"
      v-if="checkedNames.length !== 0 || change"
    >
      Change
    </button>
    <div v-for="filter in filters" :key="filter.id" class="filters__item">
      <button
        class="btn filters__button w-100 text-start"
        type="button"
        data-bs-toggle="collapse"
        :data-bs-target="filter.id"
        aria-expanded="false"
        :aria-controls="filter.ariaControl"
      >
        <i class="fas mr-2 ml-2 fa-caret-down"></i> {{ filter.name }}
      </button>
      <ul class="collapse list-group" :id="filter.ariaControl">
        <li
          class="list-group-item"
          v-for="(item, id) in filter.items"
          :key="id"
        >
          <input
            :type="filter.type"
            :value="item.value"
            v-model="checkedNames[id]"
            :name="filter.ariaControl"
          />
          {{ item.name }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  props: ['sortParam'],
  data () {
    return {
      change: false,
      value: [3000, 10000],
      format: { postfix: ' ₽', decimals: 0 },
      filters2: [
        {
          id: '#price',
          ariaControl: 'price',
          name: 'Цена',
          type: 'checkbox',
          items: [
            {
              name: 'менее 4 000 ₽',
              value: '1'
            },
            {
              name: '4 001 - 6 000 ₽',
              value: '2'
            },
            {
              name: '6 001 - 10 000 ₽',
              value: '3'
            }
          ]
        },
        {
          id: '#manufacturer2',
          ariaControl: 'manufacturer2',
          name: 'Производитель',
          type: 'radio',
          items: [
            {
              name: 'Acer',
              value: 'Acer'
            },
            {
              name: 'ASUS',
              value: 'ASUS'
            },
            {
              name: 'Lenovo',
              value: 'Lenovo'
            },
            {
              name: 'MSI',
              value: 'MSI'
            }
          ]
        }
      ],
      checkedNames: []
    }
  },
  computed: {
    maxPrice () {
      return this.$store.getters.maxPrice
    },
    filters () {
      return this.$store.getters.getFilters
    }
  },
  mounted () {
    this.$store.commit('setFilters', this.filters2)
  },
  methods: {
    getNewList () {
      return this.$store.getters.getNewList
    }
  }
}
</script>

<style lang="scss" scoped>
.card {
  border: none;
}
.filters {
  width: 100%;
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 0 3px 0 rgba(0, 0, 0, 0.2);

  &__button {
    height: 60px;
    font-size: 18px;

    &:focus {
      outline: none;
      box-shadow: none;
    }
  }
  &__value {
    display: flex;
    flex-direction: column;
    padding: 8px 20px;
    font-size: 16px;

    & label {
      cursor: pointer;
    }
  }
}
</style>
