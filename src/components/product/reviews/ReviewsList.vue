<template>
  <div>
    <div class="reviews" v-for="(review, id) in reviews" :key="id">
      <div
        class="d-flex align-items-center justify-content-between mb-2 flex-wrap"
      >
        <div class="me-2">
          <i class="fs-1 fas fa-user-astronaut text-primary p-2"></i>
        </div>
        <span class="justify-content-start flex-fill text-break fw-bold">{{
          review.uName
        }}</span>
        <v-rating
          class="d-inline-block rate"
          readonly
          :length="5"
          :value="review.generalRating"
        ></v-rating>
        <p class="mt-2 mb-0 w-100 text-black-50">
          {{ review.date }}
        </p>
      </div>
      <p><strong>Срок использования: </strong>{{ review.termOfUse }}</p>
      <span v-if="review.advantages[0] !== ''">
        <p><strong>Достоинства: </strong></p>
        <p v-for="advantages in review.advantages" :key="advantages.id">
          {{ advantages }}
        </p>
      </span>
      <span v-if="review.limitations[0] !== ''">
        <p><strong>Недостатки: </strong></p>
        <p v-for="limitations in review.limitations" :key="limitations.id">
          {{ limitations }}
        </p>
      </span>
      <span v-if="review.review[0] !== ''">
        <p><strong>Комментарий: </strong></p>
        <p v-for="review in review.review" :key="review.id">
          {{ review }}
        </p>
      </span>
      <div class="comments">
        <div class="row">
          <div
            class="comments__btn-link col-12 order-last order-sm-first col-sm-6"
          >
            <a
              @click="changeIcon(id, review.comments.length)"
              :id="id"
              data-bs-toggle="collapse"
              :href="'#collapseExample' + id"
              role="button"
              aria-expanded="false"
            >
              Комментарии
              <span v-if="review.comments.length !== 0"
                >({{ review.comments.length }})</span
              >
              <i class="ps-2 fas fa-sort-down align-baseline"></i>
            </a>
          </div>
          <div class="comments__like col-12 col-sm-6 pe-sm-4">
            <i @click="updateCounter(1)" class="far fa-thumbs-up"></i>
            <span
              :class="[
                review.counterLike < 0
                  ? 'bg-danger'
                  : review.counterLike !== 0
                  ? 'bg-success'
                  : 'bg-secondary'
              ]"
              class="user-select-none rounded px-2 p-1 text-white mx-2"
              >{{ review.counterLike }}</span
            >
            <i @click="updateCounter(-1)" class="far fa-thumbs-down"></i>
          </div>
        </div>
        <div class="collapse ms-3" :id="'collapseExample' + id">
          <div class="mt-3">
            <CommentForm :uName="review.uName" :reviewId="review.id" />
            <CommentsList :comments="review.comments" />
          </div>
        </div>
      </div>
      <hr class="mt-4 mb-4" />
    </div>
  </div>
</template>

<script>
import CommentsList from './CommentsList'
import CommentForm from './CommentForm'
export default {
  components: {
    CommentsList,
    CommentForm
  },
  computed: {
    reviews () {
      return this.$store.getters.getReviews
    }
  },
  methods: {
    changeIcon (id, count) {
      var link = document.getElementById(id)
      var text = 'Комментарии '
      if (count !== 0) {
        text += '(' + count + ')'
      }
      if (link.ariaExpanded === 'true') {
        link.innerHTML =
          text + '<i class="ps-2 fas fa-sort-up align-middle"></i>'
      } else {
        link.innerHTML =
          text + '<i class="ps-2 fas fa-sort-down align-baseline"></i>'
      }
    },
    updateCounter (val) {
      this.$store.dispatch('changeCountLike', val)
    }
  }
}
</script>

<style lang="scss">
.rate {
  svg.icon {
    width: 28px;
    height: 24px;
  }
}

.mb-2-p {
  p {
    margin-bottom: 0px;
  }
  margin-bottom: 14px;
}

.reviews {
  font-size: 14px;
  @media (min-width: 576px) {
    font-size: 16px;
  }
}

.comments {
  &__btn-link {
    text-align: center;
    font-size: 22px !important;
    @media (min-width: 576px) {
      text-align: left;
      font-size: 18px !important;
    }
    a {
      border-bottom: 1px dotted #0d6efd;
      padding-bottom: 0.3rem !important;
      max-height: inherit;
      text-decoration: none;
    }
  }
  &__like {
    text-align: center;
    margin-bottom: 10px;
    font-size: 22px !important;
    @media (min-width: 576px) {
      text-align: right;
      margin-bottom: 0;
      font-size: 18px !important;
    }
    i {
      font-size: 24px;
      cursor: pointer;
      &:hover {
        color: #0d6efd;
      }
    }
  }
}
</style>
