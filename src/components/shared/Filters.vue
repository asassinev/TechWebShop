<template>
  <div class="filters">
    <div v-for="filter in filters" :key="filter.id" class="filters__item">
      <button
        class="btn filters__button w-100 text-left"
        type="button"
        data-bs-toggle="collapse"
        :data-bs-target="filter.id"
        aria-expanded="false"
        :aria-controls="filter.ariaControl">
        <i class="fas mr-2 ml-2 fa-caret-down"></i> {{ filter.name }}
      </button>
      <div class="collapse" :id="filter.ariaControl">
        <div class="filters__value">
          <label v-for="(item, id) in filter.items" :key="id">
            <input :type="filter.type" :value="item.value" :name="filter.ariaControl"> {{ item.name }}
          </label>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      filters: [
        {
          id: '#manufacturer',
          ariaControl: 'manufacturer',
          name: 'Производитель',
          type: 'checkbox',
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
      ]
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
