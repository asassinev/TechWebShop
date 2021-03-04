<template>
  <div>
    <vue-ellipse-progress
      :size="180"
      :progress="(averageRating * 100) / 5"
      :thickness="5"
      :empty-thickness="3"
      :legend="true"
      color="#0d6efd"
      empty-color="#569affad"
      animation="rs 700 400"
      :noData="false"
      line-mode="out 5"
      :loading="false"
      fontColor="black"
      :half="false"
      :legend-value="averageRating"
      fontSize="2rem"
    >
      <span slot="legend-value">
        <span class="mr-1"> / </span>
        <span> 5 </span>
      </span>
      <div slot="legend-caption">
        <p class="mb-0">{{ countReview }} REVIEWS</p>
        <v-rating readonly :length="5" :value="averageRating"></v-rating>
      </div>
    </vue-ellipse-progress>
    <button
      type="button"
      class="btn btn-primary d-block w-100 mt-3 mb-2"
      data-bs-toggle="modal"
      data-bs-target="#exampleModal"
    >
      Написать отзыв
    </button>
    <FeedbackForm />
  </div>
</template>

<script>
import FeedbackForm from './FeedbackForm'
export default {
  components: {
    FeedbackForm
  },
  computed: {
    averageRating () {
      return this.$store.getters.getAverageRating
    },
    countReview () {
      return this.$store.getters.getCountReview
    }
  }
}
</script>
