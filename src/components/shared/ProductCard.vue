<template>
  <div class="list">
    <div v-for="product in products" :key="product.id" class="list__item">
      <div class="list__info">
        <img class="list__img" :src="product.imgSrc" :alt="product.title">
        <div class="list__text">
          <router-link :to='product.link + product.id + `/description`' class="list__title">{{ product.title }}</router-link>
          <p class="list__description">{{ product.description }}</p>
        </div>
        <div class="list__price">
          <b>{{ product.price }}</b><i class="list__price-gray fas fa-ruble-sign"></i>
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
  data () {
    return {
      products: [
        {
          id: '1',
          imgSrc: 'https://c.dns-shop.ru/thumb/st1/fit/200/200/8c66420148c49bcd2e1ecb8a3921dd38/f135306a2c10f6baa4a1d7589ac0ae0bce2eef39b9317b194080127cdb88824d.jpg.webp',
          link: '/product/',
          title: '11.6" Ноутбук Acer TravelMate B1 TMB118-M-C0EA черный',
          description: '[1366x768, TN+film, Intel Celeron N4120, 4 х 1.1 ГГц, RAM 4 ГБ, eMMC 64 ГБ, Intel HD Graphics 600 , Wi-Fi, BT, DOS]',
          price: '2 500 '
        },
        {
          id: '2',
          imgSrc: 'https://c.dns-shop.ru/thumb/st1/fit/200/200/8c66420148c49bcd2e1ecb8a3921dd38/f135306a2c10f6baa4a1d7589ac0ae0bce2eef39b9317b194080127cdb88824d.jpg.webp',
          link: '/product/',
          title: '11.6" Ноутбук Acer TravelMate B1 TMB118-M-C0EA черный',
          description: '[1366x768, TN+film, Intel Celeron N4120, 4 х 1.1 ГГц, RAM 4 ГБ, eMMC 64 ГБ, Intel HD Graphics 600 , Wi-Fi, BT, DOS]',
          price: '2 500 '
        }
      ]
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
    height: 110px;
    margin-right: 10px;
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
      left: -120px;
      top: 0;
      width: 110px;
      height: 110px;
    }
  }

  &__description {
    margin-top: 20px;
    font-size: 14px;
  }

  &__buttons {
    text-align: right;
    margin: 10px 8px;
    button {
      cursor: pointer;
      color: #2c3e50;
      border-radius: 8px;
      padding: 8px 20px 10px;
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
