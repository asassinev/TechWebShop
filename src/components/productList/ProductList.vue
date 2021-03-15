<template>
  <div>
    <div class="mt-3" v-if="loading">
      <Loader />
    </div>
    <div v-else class="row mt-3">
      <div class="col-md-6 col-12">
        <div class="input-group">
          <span class="input-group-text" id="filter">Search</span>
          <input
            class="form-control"
            aria-describedby="filter"
            v-model="filter"
          />
        </div>
        <!-- <input
              v-model="filter"
              @input="page = 1"
              class="form-control bg-white"
            />
            <label class="form-label ms-2">Search</label> -->
      </div>
      <div class="mt-3 mb-3 mt-md-0 col-md-6 col-12">
        <select class="form-select" v-model="order">
          <option disabled value="">Выберите фильтр</option>
          <option value="priceUp">По возрастанию цены</option>
          <option value="priceDown">По убыванию цены</option>
          <option value="countReviews">По количеству отзывов</option>
          <option value="topReviews">По оценке</option>
        </select>
      </div>

      <div class="col-12">
        <div class="col-12">
          <div class="text-center" v-if="paginatedProducts.length < 1">
            Ничего не найдено
          </div>
          <div class="list">
            <div v-for="(product, id) in paginatedProducts" :key="id">
              <ProductCard :product="product" />
            </div>
          </div>

          <nav aria-label="Page navigation example" v-if="pages.length !== 1">
            <ul class="pagination justify-content-center">
              <li class="page-item" v-if="page != 1">
                <a class="page-link" @click="page--">Назад</a>
              </li>
              <li class="page-item" v-for="(pageNumber, id) in pages" :key="id">
                <a class="page-link" @click="page = pageNumber">
                  {{ pageNumber }}
                </a>
              </li>
              <li class="page-item">
                <a class="page-link" @click="page++" v-if="page < pages.length"
                  >Вперед</a
                >
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ProductCard from './ProductCard'
export default {
  data () {
    return {
      order: '',
      filter: '',
      page: 1,
      perPage: 8
    }
  },
  computed: {
    loading () {
      return this.$store.getters.getLoading
    },
    productList () {
      return this.$store.getters.getList
    },
    newList () {
      return this.sortProduct(this.productList)
    },
    filteredProducts () {
      console.log(this.newList)
      return this.newList.filter(p =>
        p.name.toLowerCase().includes(this.filter.toLowerCase())
      )
    },
    startIndex () {
      return this.perPage * (this.page - 1)
    },
    endIndex () {
      return this.page * this.perPage
    },
    paginatedProducts () {
      return this.filteredProducts.slice(this.startIndex, this.endIndex)
    },
    numberOfPages () {
      return Math.ceil(this.filteredProducts.length / this.perPage)
    },
    pages () {
      const pages = []
      for (let index = 1; index <= this.numberOfPages; index++) {
        pages.push(index)
      }
      return pages
    },
    pageStateOptions () {
      return {
        filter: this.filter,
        page: this.page,
        order: this.order
      }
    }
  },
  watch: {
    pageStateOptions (value) {
      window.history.pushState(
        null,
        document.title,
        `${window.location.pathname}?filter=${value.filter}&page=${value.page}&order=${value.order}`
      )
    }
  },
  methods: {
    sortProduct (productList) {
      switch (this.order) {
        case 'priceUp':
          return productList.sort(function (a, b) {
            return parseInt(a.price.replace(' ', '').trim()) >
              parseInt(b.price.replace(' ', '').trim())
              ? 1
              : -1
          })
        case 'priceDown':
          return productList.sort(function (a, b) {
            return parseInt(a.price.replace(' ', '').trim()) <
              parseInt(b.price.replace(' ', '').trim())
              ? 1
              : -1
          })
        case 'countReviews':
          return productList.sort(function (a, b) {
            return b.reviews.length - a.reviews.length
          })
        case 'topReviews':
          return productList.sort(function (a, b) {
            var ratingA = 0
            var ratingB = 0
            a.reviews.forEach(e => {
              ratingA += e.generalRating
            })
            b.reviews.forEach(e => {
              ratingB += e.generalRating
            })
            if (ratingA !== 0) {
              ratingA = ratingA / a.reviews.length
            }
            if (ratingB !== 0) {
              ratingB = ratingB / b.reviews.length
            }
            return ratingB - ratingA
          })
        default:
          return productList
      }
    }
  },
  created () {
    this.$store.dispatch('fetchList', this.$route.params.id)

    const windowData = Object.fromEntries(
      new URL(window.location).searchParams.entries()
    )

    const VALID_KEYS = ['filter', 'page', 'order']

    VALID_KEYS.forEach(key => {
      if (windowData[key]) {
        this[key] = windowData[key]
      }
    })
  },
  components: {
    ProductCard
  }
}
</script>

<style lang="scss" scoped>
.page-link {
  background: white;
  margin: 0 6px;
  cursor: pointer;
  box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.075);
}
</style>
