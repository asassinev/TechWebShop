<template>
  <div>
    <div v-for="(r, id) in countReviews" :key="id">
      <p v-if="r.count === 0" class=" mb-0">0 отзывов</p>
      <p v-else-if="r.count === 1" class=" mb-0">{{ r.count }} отзыв</p>
      <p v-else-if="r.count > 1" class=" mb-0">{{ r.count }} отзывов</p>
      <div class="progress mt-2 mb-3" style="height: 20px;">
        <span
          class="ps-2 position-absolute"
          :class="{
            'text-white': r.count !== 0,
            'text-primary': r.count === 0
          }"
          >{{ 5 - id }} ★</span
        >
        <div
          class="progress-bar text-start text-primary"
          role="progressbar"
          :style="'width:' + r.progress + '%;'"
          :aria-valuenow="r.progress"
          aria-valuemin="0"
          :aria-valuemax="countReview"
        ></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    countReview () {
      return this.$store.getters.getCountReview
    },
    countReviews () {
      return this.$store.getters.getCountReviews
    }
  }
}
</script>
