<template>
  <router-link :to="'/products/' + item.id" class="item-card">
    <div class="item-card__img">
      <img :src="item.src" alt="">
    </div>
    <p class="item-card__text text-primary">
      {{ item.text }}
    </p>
  </router-link>
</template>

<script>
export default {
  props: ['item']
}
</script>

<style lang="scss" scoped>
.item-card {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  text-align: center;
  width: 100%;
  height: 255px;
  padding: 20px;
  box-shadow: 0px 3px 9px rgba(0,0,0,0.2);
  margin: 10px 0;
  text-decoration: none !important;

  &:hover {
    cursor: pointer;
    box-shadow: 0px 3px 9px rgba(0,0,0,0.5);
  }
  &__img {
    display: flex;
    height: 170px;
    flex-direction: column;
    align-self: center;
    justify-content: center;
  }

  &__text {
    color: #2c3e50;
  }
}
</style>
