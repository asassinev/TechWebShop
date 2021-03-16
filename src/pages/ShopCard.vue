<template>
  <div>
    <h1>Корзина</h1>
    <div class="row">
      <p v-if="orders.length === 0">Корзина пуста</p>
      <div v-else class="col-12 col-lg-8">
        <div
          class="bg-white rounded shadow-sm mb-3 p-4 order "
          v-for="(order, id) in orders"
          :key="id"
        >
          <div class="order__body">
            <div class="order__img">
              <img :src="order.imgSrc" :alt="order.name" />
            </div>
            <div class="order__thumbnail ">
              <p class="order__title">
                {{ order.name }}
              </p>
              <button class="btn btn-primary btn-sm order__btn">Удалить</button>
            </div>
            <div class="order__counter rounded mt-3">
              <button
                class="border rounded-start"
                @click="
                  $store.dispatch('changeProductQuantity', {
                    id: id,
                    value: -1
                  })
                "
              >
                -
              </button>
              <span>{{ order.count }}</span>
              <button
                class="border rounded-end"
                @click="
                  $store.dispatch('changeProductQuantity', {
                    id: id,
                    value: 1
                  })
                "
              >
                +
              </button>
            </div>
            <p class="mt-3">
              Цена: {{ (+order.total).toLocaleString() }}
              <i
                data-v-aca7c986=""
                class="fas fa-ruble-sign"
                aria-hidden="true"
              ></i>
            </p>
          </div>
        </div>
      </div>
      <div class="col-12 col-lg-4">
        <div class="ms-2 bg-white rounded shadow-sm p-3">
          Итого
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    orders () {
      return this.$store.getters.getOrders
    }
  }
}
</script>

<style lang="scss" scoped>
.order {
  &__body {
    display: flex;
  }
  &__thumbnail {
    font-size: 14px;
    margin-left: 30px;
    width: 40%;
  }
  &__counter {
    margin: 0 auto;
    font-size: 16px;
    height: fit-content;
    button {
      font-size: 18px;
      font-weight: 300;
      color: #e0e0e0;
      width: 40px;
      border: 0;
      background: none;
      &:hover {
        color: #868585;
        border-color: #868585 !important;
      }
    }
    span {
      border-top: 1px solid #e0e0e0;
      border-bottom: 1px solid #e0e0e0;
      max-width: 24px;
      padding: 7px 14px 6px;
    }
  }
  &__img {
    display: flex;
    align-items: center;
    img {
      max-width: 110px;
      height: fit-content;
    }
  }
}
</style>
