<template>
  <div class="mt-4">
    <div class="input-group">
      <select
        class="form-select form-control"
        required
        aria-describedby="button-addon"
        v-model="selected"
      >
        <option selected disabled value="Выберите товар">Выберите товар</option>
        <option v-for="(orderName, id) in ordersNames" :key="id">{{
          orderName
        }}</option>
      </select>
      <div
        class="btn btn-primary"
        id="button-addon2"
        @click="$emit('delete-input-form')"
      >
        <i class="far fa-trash-alt"></i>
      </div>
    </div>
    <div class="mt-3">
      <input
        type="text"
        class="form-control"
        placeholder="Вставьте ссылку на страницу товара у конкурента"
      />
    </div>
    <hr />
  </div>
</template>

<script>
export default {
  data () {
    return {
      selected: 'Выберите товар'
    }
  },
  computed: {
    ordersNames () {
      return this.$store.getters.getOrdersNames
    }
  }
}
</script>
