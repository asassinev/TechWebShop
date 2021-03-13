<template>
  <div>
    <div class="mt-3" v-if="loading">
      <Loader />
    </div>
    <div v-else class="row mt-3">
      <div class="col-12 mb-3">
        <div class="form-outline">
          <input
            id="search"
            v-model="filter"
            @input="page = 1"
            class="form-control bg-white"
          />
          <label class="form-label" for="search">Search</label>
        </div>
      </div>
      <div class="col-12">
        <div class="text-center" v-if="paginatedProducts.length < 1">
          Ничего не найдено
        </div>
        <div class="list">
          <div class="" v-for="(product, id) in paginatedProducts" :key="id">
            <ProductCard :product="product" />
          </div>
        </div>

        <nav aria-label="Page navigation example">
          <ul class="pagination justify-content-center">
            <li class="page-item" v-if="page != 1">
              <a
                class="page-link"
                href="#"
                tabindex="-1"
                aria-disabled="true"
                @click="page--"
                >Назад</a
              >
            </li>
            <li class="page-item" v-for="(pageNumber, id) in pages" :key="id">
              <p class="page-link" @click="page = pageNumber">
                {{ pageNumber }}
              </p>
            </li>
            <li class="page-item">
              <a
                class="page-link"
                href="#"
                @click="page++"
                v-if="page < pages.length"
                >Вперед</a
              >
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </div>
</template>

<script>
import ProductCard from './ProductCard'
export default {
  data () {
    return {
      filter: '',
      page: 1,
      perPage: 4
    }
  },
  computed: {
    loading () {
      return this.$store.getters.getLoading
    },
    startIndex () {
      return this.perPage * (this.page - 1)
    },
    endIndex () {
      return this.page * this.perPage
    },
    productList () {
      return this.$store.getters.getList
    },
    filteredProducts () {
      return this.productList.filter(p =>
        p.name.toLowerCase().includes(this.filter.toLowerCase())
      )
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
        page: this.page
      }
    }
  },
  watch: {
    pageStateOptions (value) {
      window.history.pushState(
        null,
        document.title,
        `${window.location.pathname}?filter=${value.filter}&page=${value.page}`
      )
    }
  },
  created () {
    this.$store.dispatch('fetchList', this.$route.params.id)

    const windowData = Object.fromEntries(
      new URL(window.location).searchParams.entries()
    )

    const VALID_KEYS = ['filter', 'page']

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
