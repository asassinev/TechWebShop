<template>
  <div>
    <h1>Корзина</h1>
    <p v-if="orders.length === 0">Корзина пуста</p>
    <div v-else class="row">
      <div class="col-12 col-lg-8">
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
              <button
                class="btn btn-primary btn-sm order__btn"
                @click="$store.dispatch('deleteOrder', id)"
              >
                Удалить
              </button>
            </div>
            <div class="order__counter rounded">
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
              <p
                class="pt-2 fs-8 text-black-50 text-center order__sub-counter"
                v-if="order.count > 1"
              >
                {{ order.price }}
                ₽ / шт.
              </p>
            </div>
            <p class="fw-bold order__price">
              {{ (+order.totalPrice).toLocaleString() }} ₽
            </p>
          </div>
        </div>
      </div>
      <div class="col-12 col-lg-4">
        <div class="bg-white rounded shadow-sm">
          <div class="fw-bolder p-3 text-black">
            <p class="m-0 order__total-price">
              Итого : {{ totalCountProducts }} товар<span
                v-if="totalCountProducts > 1 && totalCountProducts <= 4"
                >а</span
              ><span v-else-if="totalCountProducts > 4">ов</span>
              на
              {{ (+totalPrice).toLocaleString() }}
              ₽
            </p>
          </div>
          <hr class="m-0" />
          <PriceGuaranteeModal />
        </div>
        <router-link to="/checkout" class="mt-3 btn btn-success btn-lg w-100">
          Оформить заказ
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import PriceGuaranteeModal from '../components/orders/PriceGuaranteeModal'
export default {
  components: {
    PriceGuaranteeModal
  },
  computed: {
    orders () {
      return this.$store.getters.getOrders
    },
    totalPrice () {
      return this.$store.getters.getTotalPrice
    },
    totalCountProducts () {
      return this.$store.getters.getTotalCountProducts
    }
  }
}
</script>

<style lang="scss" scoped>
.order {
  &__body {
    display: flex;
    flex-wrap: wrap;
  }
  &__thumbnail {
    margin-top: 20px;
    flex-basis: auto;
    @media (min-width: 475px) {
      flex-basis: calc(4 / 6 * 100%);
      margin-top: 0;
    }
    @media (min-width: 768px) {
      flex-basis: 40%;
    }
    font-size: 14px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  &__btn {
    width: fit-content;
  }
  &__counter {
    margin: 20px 0;
    flex-basis: calc(4 / 6 * 100%);
    @media (min-width: 475px) {
      flex-basis: auto;
    }
    @media (min-width: 768px) {
      margin: 0 auto;
    }
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
      padding: 4px 14px;
    }
  }
  &__img {
    flex-basis: 100%;
    justify-content: center;
    @media (min-width: 475px) {
      flex-basis: calc(2 / 6 * 100%);
      justify-content: initial;
    }
    @media (min-width: 768px) {
      flex-basis: 22%;
    }
    display: flex;
    align-items: center;
    img {
      max-width: 110px;
      height: fit-content;
    }
  }
  &__price {
    margin-top: 20px;
    text-align: right;
    flex-basis: calc(2 / 6 * 100%);
    @media (min-width: 475px) {
      flex-basis: calc(4 / 6 * 100%);
    }
    @media (min-width: 768px) {
      flex-basis: 13%;
      margin-top: 0;
    }
  }
  &__sub-counter {
    width: fit-content;
    padding-left: 34px;
  }
  &__total-price {
    font-size: 14px;
    @media (min-width: 475px) {
      font-size: 16px;
    }
  }
}
</style>
