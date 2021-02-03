<template>
  <div class="row">
    <div class="col-sm-6 col-xs-12 col-lg-3" v-for="item in items" :key="item.id">
      <ItemCard :item="item"></ItemCard>
    </div>
  </div>
</template>

<script>
import ItemCard from '../shared/ItemCard'

export default {
  data () {
    return {
      items: [
        {
          id: 'processors',
          text: 'Процессоры',
          src: 'https://c.dns-shop.ru/thumb/st1/fit_width/120/120/6679e8924eb1db5eaf6b34303261df07/b70d20da48dfebda15c88f04044237bfa6234fe05d539ff68a61395785620202.jpg'
        },
        {
          id: 'motherboards',
          text: 'Материнские платы',
          src: 'https://c.dns-shop.ru/thumb/st4/fit_width/120/120/955f0f642e31b8a170f1d7b1e89d558b/114d29cfe20f17933bac65e17c2edf53aeb4d5db5a0d683b5191195099eb437c.jpg'
        },
        {
          id: 'video-cards',
          text: 'Видеокарты',
          src: 'https://c.dns-shop.ru/thumb/st1/fit_width/120/120/714a7a573a496f27ff82114df61a4cc5/809d70b81f66d3f730c567c442e3ad98baeef227e15b2413dd3b0ca2c4afeca0.jpg'
        },
        {
          id: 'ram',
          text: 'Оперативная память',
          src: 'https://c.dns-shop.ru/thumb/st4/fit_width/120/120/b7ff8f5c11792f0b240a4ae96fb754ae/14d47ba6e8fc8e32eb1a1f0581328ba668aa4f5511f60b8c3ac33b85800465b5.jpg'
        },
        {
          id: 'body',
          text: 'Корпуса',
          src: 'https://c.dns-shop.ru/thumb/st1/fit_width/120/120/a439925bce69612d34f3b6a8ee73280b/d72973c8e745e019bc76b543465dec0c3a3e85f347803ed76aeabe421048aba6.jpg'
        }
      ]
    }
  },
  components: {
    ItemCard
  }
}
</script>
