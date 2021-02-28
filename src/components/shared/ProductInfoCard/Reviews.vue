<template>
  <div class="row m-0 p-1">
    <div class="col-12 col-md-4 text-center">
      <vue-ellipse-progress
        :size="180  "
        :progress="3.5 * 100 / 5"
        :thickness="5"
        :empty-thickness="3"
        :legend="true"
        color="#324c7e"
        empty-color="#7579ff"
        animation="rs 700 400"
        :noData="false"
        line-mode="out 5"
        :loading="false"
        fontColor="black"
        :half="false"
        :legend-value="rating"
        fontSize="2rem">
        <span slot="legend-value">
          <span class="mr-1"> / </span>
          <span> 5 </span>
        </span>
        <div slot="legend-caption">
          <p class="mb-0">5 REVIEWS</p>
          <v-rating :value="rating" :disabled="true"></v-rating>
        </div>
      </vue-ellipse-progress>
      <button type="button" class="btn btn-primary d-block w-100 mt-3 mb-2">Написать отзыв</button>

    </div>
    <div class="col-12 col-md-4">
      <a class="" href="#">2 отзывов</a>
      <div class="progress mt-2 mb-3" style="height: 20px;">
        <span class="ps-2 position-absolute" :class="{'text-white': false, 'text-primary': true}">5 ★</span>
        <div class="progress-bar text-start text-primary" role="progressbar" style="width: 0%;" aria-valuenow="0" aria-valuemin="0" aria-valuemax="5"></div>
      </div>
    </div>
    <hr class="mt-3 d-block d-md-none">
    <div class="col-12 col-md-4">
      <div class="mb-4">
        <div class="d-flex justify-content-between mb-2-p">
          <p>Производительность</p>
          <p class="fw-bold">3</p>
        </div>
        <div class="progress" style="height: 5px;">
          <div class="progress-bar" role="progressbar" style="width: 25%;" aria-valuenow="3" aria-valuemin="0" aria-valuemax="5"></div>
        </div>
      </div>
    </div>
    <div class="col-12">
      <p class="h3">Отзывы</p>
      <hr>
      <div class="bg-light p-3">
        <div class="review p-2">
          <div class="d-flex align-items-center justify-content-between mb-4 flex-wrap">
            <div>
              <i class="fs-2 fas fa-user-astronaut rounded-circle bg-light text-primary border p-3"></i>
            </div>
            <span class="ms-3 justify-content-start flex-fill">Username</span>
            <v-rating class="d-inline-block" :value="3" :disabled="true"></v-rating>
          </div>
          <p><strong>Товар: </strong> папапап</p>
          <p><strong>Срок использования: </strong> папапап</p>
          <p><strong>Достоинства: </strong> папапап</p>
          <p><strong>Недостатки: </strong> папапап</p>
          <p><strong>Комментарий: </strong> папапап</p>
          <div class="comments">
            <div class="d-flex justify-content-between">
              <div class="comments__btn-link">
                <a @click="changeIcon('1', count)" id='1' data-bs-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
                  Комментарии <span v-if="counter !== 0">({{count}})</span> <i class="ps-2 fs-5 fas fa-sort-down align-baseline"></i>
                </a>
              </div>
              <div class="comments__like fs-5">
                <i @click="updateCounter(1)" class="far fa-thumbs-up"></i>
                <span :class="[counter < 0 ? 'bg-danger' : counter !== 0 ? 'bg-success' : 'bg-secondary' ]" class="user-select-none rounded pt-1 pb-1 px-2 text-white mx-2">{{counter}}</span>
                <i @click="updateCounter(-1)" class="far fa-thumbs-down"></i>
              </div>
            </div>
            <div class="collapse" id="collapseExample">
              <div class="mt-3">
                <div class="d-flex flex-column">
                  <div class="mb-3 shadow-lg bg-white">
                    <textarea class="form-control" id="floatingInput" placeholder="Написать комментарий..." rows="3"></textarea>
                  </div>
                  <button class="btn btn-primary align-self-end px-4">Отправить</button>
                </div>
                <div class="comments__block">
                  <i class="fs-2 fas fa-user-astronaut rounded-circle bg-light text-primary border p-3"></i>
                  <span class="ms-3 fw-bold">Username</span>
                  <p class="mb-1 text-secondary">7 марта 2019 г. 11:36</p>
                  <p>text comment</p>
                </div>
                <div class="comments__block">
                  <i class="fs-2 fas fa-user-astronaut rounded-circle bg-light text-primary border p-3"></i>
                  <span class="ms-3 fw-bold">Username</span>
                  <p class="mb-1 text-secondary">7 марта 2019 г. 11:36</p>
                  <p>text comment</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <hr>
       </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      rating: 3.5,
      counter: 20,
      count: 4,
      reviews: [{
        rating: 3
      }]
    }
  },
  methods: {
    changeIcon (id, count) {
      var link = document.getElementById(id)
      var text
      if (count !== 0) {
        text = 'Комментарии (' + count + ')'
      } else {
        text = 'Комментарии'
      }
      if (link.ariaExpanded === 'true') {
        text += '<i class="ps-2 fs-5 fas fa-sort-up align-middle"></i>'
        link.innerHTML = text
      } else {
        text += '<i class="ps-2 fs-5 fas fa-sort-down align-baseline"></i>'
        link.innerHTML = text
      }
    },
    updateCounter (val) {
      this.counter += val
    }
  }
}
</script>

<style lang="scss" scoped>
.mb-2-p {
  p {
    margin-bottom: 0px;
  }
  margin-bottom: 14px;
}

.comments {
  &__btn-link {
    width: fit-content;
    border-bottom: 1px dotted #0d6efd;
    padding-bottom: .3rem !important;
  }
  a {
    max-height: inherit;
    text-decoration: none;
  }
  &__like {
    i {
      cursor: pointer;
      &:hover {
        color: #0d6efd
      }
    }
  }
}
</style>
