<template>
  <div class="container">
    <h1>Product title</h1>
    <h3>Product id</h3>
    <div class="product-card row">
      <div class="col-4 text-center">
        <img src="https://c.dns-shop.ru/thumb/st1/fit/200/200/8c66420148c49bcd2e1ecb8a3921dd38/f135306a2c10f6baa4a1d7589ac0ae0bce2eef39b9317b194080127cdb88824d.jpg.webp" alt="">
      </div>
      <div class="col-8">
      <p>2 500 <i class="list__price-gray fas fa-ruble-sign"></i></p>
      <button class="btn btn-primary">Купить</button>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.product-card {
  border-radius: 8px;
  background-color: white;
  box-shadow: 0 0 3px 0 rgba(0, 0, 0, 0.2);
  padding: 10px;
  font-size: 20px;
}
</style>
