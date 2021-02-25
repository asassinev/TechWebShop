<template>
  <!-- <div class="list">
    <div v-for="product in products" :key="product.id" class="list__item">
      <div class="list__info">
        <img class="list__img" :src="product.imgSrc" :alt="product.name">
        <div class="list__text">
          <router-link :to="'/product/' + product._id + `/description`" class="list__title">{{ product.name }}</router-link>
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
   -->
  <div>
    <div class="row g-0 mb-3 position-relative shadow-sm bg-white rounded list" v-for="product in products" :key="product.id">
      <div class="col-md-2 text-center align-items-center m-auto">
        <img class="img" :src="product.imgSrc" :alt="product.name">
      </div>
      <div class="col-md-10">
        <div class="card-body">
          <router-link class="card-link text-decoration-none text-dark fw-bold fs-5" :to="'/product/' + product._id + `/description`">{{ product.name }}</router-link>
          <p class="mt-2 mb-0">{{ product.titleDescription }}</p>
          <div class="clearfix mt-3">
            <span class="fs-5 float-start fw-bold">Цена: {{ product.price }} <i class="list__price-gray fas fa-ruble-sign"></i></span>
            <button class="btn btn-primary float-end">Купить</button>
          </div>
        </div>
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
.img {
  max-width: 90px;
  height: auto;
}
.card-link {
    &:hover {
      color: #0d6efd!important;
    }
    &:after {
      content: '';
      position: absolute;
      left: 0;
      top: 0;
      width: 140px;
      height: 148px;
    }
}
.list {
  color: #272727;
  &:hover {
    box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15) !important;
  }
  &__item {
    background-color: white;
    margin-bottom: 12px;
    padding: 14px;
    border-radius: 8px;
    box-shadow: 0 0 3px 0 rgba(0, 0, 0, 0.2);
  }

  &__info {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }

  &__price {
    text-align: right;
    min-width: 110px;
    font-size: 24px;
    margin-top: 10px;
    &-gray {
      color: #9f9f9f;
    }
  }

  &__img {
    margin-right: 20px;
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
      left: -110px;
      top: 0;
      width: 90px;
      height: 100px;
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
