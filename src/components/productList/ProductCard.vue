<template>
  <div
    class="row g-0 mb-3 position-relative shadow-sm bg-white rounded list__item"
  >
    <div class="col-md-2 text-center align-items-center m-auto">
      <img class="list__img" :src="product.imgSrc" :alt="product.name" />
    </div>
    <div class="col-md-10">
      <div class="list__body">
        <div>
          <router-link
            class="list__link text-decoration-none text-dark fw-bold"
            :to="'/product/' + product._id + `/description`"
            >{{ product.name }}</router-link
          >
          <p class="mt-2 list__description">{{ product.titleDescription }}</p>
        </div>
        <div class="clearfix">
          <span class="list__price float-start fw-bold"
            >Цена: {{ product.price }} <i class="fas fa-ruble-sign"></i
          ></span>
          <BuyProductBTN :product="product" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BuyProductBTN from '../shared/BuyProductBTN.vue'
export default {
  components: { BuyProductBTN },
  props: ['product'],
  methods: {
    addToOrder (product) {
      const newProduct = {
        _id: product._id,
        imgSrc: product.imgSrc,
        name: product.name,
        count: 1,
        price: product.price,
        total: 0
      }
      this.$store.dispatch('addOrder', newProduct)
      const notification = {
        title: 'success',
        text: 'Успешно добавлено в корзину'
      }
      this.$store.dispatch('setNotification', notification)
    }
  }
}
</script>

<style lang="scss" scoped>
.list {
  &__item {
    padding: 14px;
    @media (min-width: 768px) {
      height: 180px;
    }
    background-color: white;
    border-radius: 8px;
    box-shadow: 0 0 3px 0 rgba(0, 0, 0, 0.2);
    transition: 0.5s;
    &:hover {
      box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15) !important;
    }
  }

  &__body {
    display: flex;
    height: 152px;
    flex-direction: column;
    justify-content: space-between;
  }

  &__link {
    font-size: 12px;
    @media (min-width: 475px) {
      font-size: 14px;
    }
    &:hover {
      color: #0d6efd !important;
    }
    &:after {
      content: '';
      position: absolute;
      left: 0;
      top: 0;
      width: 140px;
      height: 180px;
    }
  }

  &__description {
    font-size: 12px;
    @media (min-width: 475px) {
      font-size: 14px;
    }
  }

  &__price {
    font-size: 18px;
  }

  &__img {
    margin-right: 20px;
    max-width: 70px;
    height: auto;
  }
}
</style>
