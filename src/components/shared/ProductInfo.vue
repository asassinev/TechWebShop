<template>
  <div class="container">
    <h1>Product title</h1>
    <h3>Product id</h3>
    <div class="wrapper row">
      <div class="col-4 text-center">
        <img src="https://c.dns-shop.ru/thumb/st1/fit/200/200/8c66420148c49bcd2e1ecb8a3921dd38/f135306a2c10f6baa4a1d7589ac0ae0bce2eef39b9317b194080127cdb88824d.jpg.webp" alt="">
      </div>
      <div class="col-8">
        <p>2 500 <i class="list__price-gray fas fa-ruble-sign"></i></p>
        <button class="btn btn-primary">Купить</button>
      </div>
    </div>
    <div class="row">
      <div class="col-4">
          <div class="list-group" id="list-tab" role="tablist">
          <router-link v-for="tab in tablist" :key="tab.id" class="list-group-item list-group-item-action" :to="tab.href"><i class="mr-2" :class="tab.icon"></i>{{tab.text}}</router-link>
        </div>
      </div>
      <div class="col-8">
          <div class="tab-content wrapper" id="nav-tabContent">
            <router-view class="container pt-2"></router-view>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      tablist: [
        {
          text: 'Описание',
          href: 'description',
          icon: 'far fa-file-alt'
        },
        {
          text: 'Характеристики',
          href: 'characteristics',
          icon: 'fas fa-list'
        },
        {
          text: 'Отзывы',
          href: 'reviews',
          icon: 'far fa-star'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.wrapper {
  border-radius: 8px;
  background-color: white;
  box-shadow: 0 0 3px 0 rgba(0, 0, 0, 0.2);
  padding: 10px;
  font-size: 18px;
  margin-bottom: 30px;
  margin-left: 0px;
  margin-right: 0px;
}
.router-link-active {
  border-left: 4px solid #007bff;
}
</style>
