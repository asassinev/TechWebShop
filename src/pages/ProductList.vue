<template>
  <div>
    <div class="mt-3" v-if="loading">
      <Loader />
    </div>
    <div v-else class="row mt-3">
      <div class="col-md-6 col-12">
        <div class="input-group">
          <span class="input-group-text" id="search">Search</span>
          <input
            class="form-control"
            aria-describedby="search"
            v-model="search"
          />
        </div>
      </div>
      <div class="mt-3 mb-3 mt-md-0 col-md-6 col-12">
        <select class="form-select" v-model="filter">
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
              <ProductCard
                @setProduct="setCurrentProductName($event)"
                :product="product"
              />
            </div>
          </div>

          <nav aria-label="Page navigation example" v-if="pages.length !== 1">
            <ul class="pagination justify-content-center">
              <li class="page-item" v-if="page != 1">
                <a class="page-link" @click="page--">Назад</a>
              </li>
              <li
                class="page-item"
                :class="{
                  active: +page === +pageNumber
                }"
                v-for="(pageNumber, id) in pages"
                :key="id"
              >
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
import ProductCard from '../components/productList/ProductCard'
export default {
  data () {
    return {
      search: '',
      filter: '',
      page: 1,
      perPage: 8,
      currentProductName: ''
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
      return this.newList.filter(p =>
        p.name.toLowerCase().includes(this.search.toLowerCase())
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
        search: this.search,
        page: this.page,
        filter: this.filter
      }
    },
    routeQuery () {
      return this.$route.query
    }
  },
  watch: {
    pageStateOptions () {
      window.history.pushState(
        null,
        document.title,
        `${window.location.pathname}?search=${this.search}&page=${this.page}&filter=${this.filter}`
      )
    },
    page () {
      window.scrollTo(0, 0)
    }
  },
  methods: {
    sortProduct (productList) {
      switch (this.filter) {
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
    },
    setCurrentProductName (product) {
      console.log(this.currentProductName)
      this.currentProductName = product.name
      this.$router.push({
        name: 'description',
        params: { idProduct: product._id }
      })
    }
  },
  created () {
    this.$store.dispatch('fetchList', this.$route.params.id)
    if (this.routeQuery) {
      this.search = this.routeQuery.search
      this.page = this.routeQuery.page
      this.filter = this.routeQuery.filter
    }
  },
  components: {
    ProductCard
  },
  beforeRouteLeave (to, from, next) {
    to.meta.productName = this.currentProductName
    next()
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
