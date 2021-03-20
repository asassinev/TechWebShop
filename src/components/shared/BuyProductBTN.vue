<template>
  <div>
    <router-link v-if="isBuying" class="btn btn-success float-end" to="/orders"
      >В корзину</router-link
    >
    <button v-else class="btn btn-primary float-end" @click="addToOrder">
      Купить
    </button>
  </div>
</template>

<script>
export default {
  props: ['product'],
  data () {
    return {
      isBuying: false
    }
  },
  created () {
    this.isBuyingProduct()
  },
  computed: {
    ordersNames () {
      return this.$store.getters.getOrdersNames
    }
  },
  watch: {
    ordersNames () {
      this.isBuyingProduct()
    }
  },
  methods: {
    isBuyingProduct () {
      this.ordersNames.forEach(e => {
        if (e === this.product.name) {
          this.isBuying = true
        }
      })
    },
    addToOrder () {
      const newProduct = {
        _id: this.product._id,
        imgSrc: this.product.imgSrc,
        name: this.product.name,
        count: 1,
        price: this.product.price,
        totalPrice: 0
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
