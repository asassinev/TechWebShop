<template>
  <div>
    <section v-if="countReview === 0">
      <p class="h5">Отзывов пока нет</p>
      <button
        type="button"
        class="btn btn-primary mt-1 px-4"
        data-mdb-toggle="modal"
        data-mdb-target="#exampleModal"
      >
        Написать отзыв
      </button>
      <FeedbackForm />
    </section>
    <section v-else>
      <div class="row">
        <div class="col-12 col-md-4 text-center">
          <AverageRating />
        </div>
        <div class="col-12 col-md-4">
          <RatingReviews />
        </div>
        <hr class="d-block d-md-none" />
        <div class="col-12 col-md-4">
          <RatingCharacteristics />
        </div>
      </div>
      <div>
        <p class="h3">Отзывы {{ countReview }}</p>
        <hr />
        <div class="bg-light p-3">
          <ReviewsList />
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import FeedbackForm from './reviews/FeedbackForm'
import AverageRating from './reviews/AverageRating'
import RatingReviews from './reviews/RatingReviews'
import RatingCharacteristics from './reviews/RatingCharacteristics'
import ReviewsList from './reviews/ReviewsList'
export default {
  components: {
    FeedbackForm,
    AverageRating,
    RatingReviews,
    RatingCharacteristics,
    ReviewsList
  },
  computed: {
    countReview () {
      return this.$store.getters.getCountReview
    }
  }
}
</script>
