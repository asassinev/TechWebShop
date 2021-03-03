<template>
  <div>
    <section v-if="countReview === 0">
      <p class="h5">Отзывов пока нет</p>
      <button
        type="button"
        class="btn btn-primary mt-1 px-4"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
      >
        Написать отзыв
      </button>
      <ModalReview />
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
import ModalReview from './ModalReview'
import AverageRating from './AverageRating'
import RatingCharacteristics from './RatingCharacteristics'
import RatingReviews from './RatingReviews'
import ReviewsList from './ReviewsList'
export default {
  components: {
    ModalReview,
    AverageRating,
    RatingCharacteristics,
    RatingReviews,
    ReviewsList
  },
  computed: {
    countReview () {
      return this.$store.getters.getCountReview
    }
  }
}
</script>
