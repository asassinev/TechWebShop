<template>
  <router-link :to="'/products/' + item.id" class="item-card">
    <div class="item-card__img">
      <img :src="item.src" :alt="item.text" class="item-card__img-margin">
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
  background-color: white;
  height: 255px;
  text-align: center;
  justify-content: space-between;
  margin-bottom: 28px;
  box-shadow: 0px 0px 3px rgba(0,0,0,0.2);
  text-decoration: none !important;

  &:hover {
    cursor: pointer;
    box-shadow: 0px 0px 6px rgba(0,0,0,0.4);
    p {
      color: #6092c4 !important;
    }
  }
  &__img {
    position: relative;
    flex-grow: 1;

    &-margin {
      max-height: 170px;
      position: absolute;
      margin: auto;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
    }
  }

  &__text {
    color: #2c3e50 !important;
    margin-bottom: 20px;
  }
}
</style>
