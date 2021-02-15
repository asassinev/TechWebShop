<template>
  <div class="list">
    <div v-for="product in products" :key="product.id" class="list__item">
      <div class="list__info">
        <img class="list__img" :src="product.imgSrc" :alt="product.name">
        <div class="list__text">
          <router-link @click="openCard(product._id)" :to="'/product/' + product._id + `/description`" class="list__title">{{ product.name }}</router-link>
          <p class="list__description">{{ product.titleDescription }}</p>
        </div>
        <div class="list__price">
          <b>{{ product.price }} </b><i class="list__price-gray fas fa-ruble-sign"></i>
        </div>
      </div>
      <div class="list__buttons">
        <button>Купить</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    products () {
      return this.$store.getters.getList
    }
  }
}
</script>

<style lang="scss" scoped>
.list {
  color: #272727;
  &__item {
    background-color: white;
    margin-bottom: 10px;
    padding: 10px;
    border-radius: 8px;
    box-shadow: 0 0 3px 0 rgba(0, 0, 0, 0.2);
  }

  &__info {
    display: flex;
    flex-direction: row;
  }

  &__price {
    font-size: 24px;
    margin-top: 10px;
    &-gray {
      color: #9f9f9f;
    }
  }

  &__img {
    margin-right: 10px;
    max-width: 90px;
    height: fit-content;
  }

  &__text {
    width: 70%;
    position: relative;
    color: gray;
  }

  &__title {
    color: #2c3e50;
    font-size: 18px;
    text-decoration: none;

    &:hover {
      color: #6092c4;
    }
    &:after {
      content: '';
      position: absolute;
      left: -100px;
      top: 0;
      width: 90px;
      height: 90px;
    }
  }

  &__description {
    margin-top: 20px;
    font-size: 14px;
  }

  &__buttons {
    text-align: right;
    margin: 0px 8px;
    button {
      cursor: pointer;
      color: #2c3e50;
      border-radius: 8px;
      padding: 6px 16px 8px;
      border: 1px solid #6c757d;
      text-decoration: none;
      &:hover {
        color: white;
        background-color: #6092c4;
        border-color: #6092c4;
        text-decoration: none;
      }
      &:focus {
        outline: none;
      }
    }
  }
}
</style>
