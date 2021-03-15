<template>
  <div
    class="modal fade"
    id="exampleModal"
    tabindex="-1"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-xl">
      <form class="modal-content needs-validation" @submit.prevent="submit">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">
            Мой отзыв (Имя продукта)
          </h5>
          <button
            type="button"
            class="btn-close"
            data-mdb-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body text-start">
          <p class="m-0 h5" :class="{ 'text-danger': error }">
            Общая оценка
          </p>
          <p v-if="error" class="mb-0" :class="{ 'text-danger': error }">
            This rating is required
          </p>
          <v-rating
            v-model="data.generalRating"
            :length="5"
            :ratedesc="desc"
            @input="afterInput"
          >
          </v-rating>
          <p class="m-0 h5">
            Опыт использования
          </p>
          <div class="d-flex flex-column flex-md-row">
            <div class="form-check m-1">
              <input
                class="form-check-input"
                type="radio"
                v-model="data.termOfUse"
                id="one"
                value="Менее месяца"
              />
              <label class="form-check-label" for="one">
                Менее месяца
              </label>
            </div>
            <div class="form-check m-1">
              <input
                class="form-check-input"
                type="radio"
                v-model="data.termOfUse"
                id="two"
                value="Не более года"
              />
              <label class="form-check-label" for="two">
                Не более года
              </label>
            </div>
            <div class="form-check m-1">
              <input
                class="form-check-input"
                type="radio"
                v-model="data.termOfUse"
                id="three"
                value="Более года"
              />
              <label class="form-check-label" for="three">
                Более года
              </label>
            </div>
          </div>
          <p class="m-0 h5 mt-3">Оценка по параметрам</p>
          <ul class="list-group" v-if="ratingCharacteristics">
            <li
              class="list-group-item border-0"
              v-for="(item, id) in data.subRating"
              :key="id"
            >
              <p class="m-0 fs-6">{{ item.title }}</p>
              <v-rating v-model="item.rate" :length="5"></v-rating>
            </li>
          </ul>
          <div class="mb-3 mt-3">
            <textarea
              class="form-control"
              id="advantages"
              rows="3"
              v-model="data.advantages"
              placeholder="Преимущества"
            ></textarea>
          </div>
          <div class="mb-3">
            <textarea
              class="form-control"
              id="limitations"
              rows="3"
              v-model="data.limitations"
              placeholder="Недостатки"
            ></textarea>
          </div>
          <div class="mb-3">
            <textarea
              class="form-control"
              id="review"
              rows="3"
              v-model="data.review"
              placeholder="Комментарий"
            ></textarea>
          </div>
          <div class="mb-3">
            <label for="formFileMultiple" class="form-label"
              >Нажмите для загрузки фотографий <i class="fas fa-camera"></i
            ></label>
            <input
              class="form-control"
              type="file"
              accept="image"
              id="formFileMultiple"
              multiple="multiple"
              required
            />
          </div>
        </div>
        <div class="modal-footer">
          <button
            type="button"
            class="btn btn-secondary"
            data-mdb-dismiss="modal"
          >
            Закрыть
          </button>
          <button type="button" class="btn btn-primary" @click="submit">
            Отправить отзыв
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      desc: ['Не рекомендую', 'Не очень', 'Нормально', 'Хорошо', 'Отлично!'],
      error: false,
      data: {
        uName: null,
        date: null,
        termOfUse: 'Менее месяца',
        counterLike: 0,
        generalRating: null,
        subRating: null,
        advantages: '',
        limitations: '',
        review: '',
        comments: []
      }
    }
  },
  created () {
    this.$store.dispatch(
      'fetchRatingCharacteristics',
      this.$store.getters.getCategories
    )
  },
  watch: {
    ratingCharacteristics () {
      this.data.subRating = this.ratingCharacteristics
    }
  },
  computed: {
    ratingCharacteristics () {
      return this.$store.getters.getRatingCharacteristicsList
    }
  },
  methods: {
    afterInput () {
      this.error = false
    },
    ratingError () {
      var rate = this.data.generalRating
      if (rate === null) {
        return false
      } else {
        return true
      }
    },
    submit () {
      if (!this.ratingError()) {
        this.error = true
        console.log('error')
      } else {
        this.data.date = new Date().toLocaleString()
        this.$store.dispatch('createReview', this.data)
        this.error = false
        console.log('ok')
      }
    }
  }
}
</script>

<style lang="scss">
.errors {
  input {
    border: 1px solid red;
  }
}
</style>
