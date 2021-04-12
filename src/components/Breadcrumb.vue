<template>
  <div v-if="breadcrumb.length > 1">
    <nav aria-label="breadcrumb" class="mt-3">
      <ol class="breadcrumb">
        <li
          class="breadcrumb-item"
          v-for="(item, idx) in breadcrumb"
          :key="idx"
          :class="{ active: isActive(item.path) }"
          @click="$store.dispatch('updateBreadcrumb', $route.name)"
        >
          <span v-if="isActive(item.path)">{{ item.title }}</span>
          <router-link v-else :to="item.path">{{ item.title }}</router-link>
        </li>
      </ol>
    </nav>
    <hr />
  </div>
</template>

<script>
export default {
  data () {
    return {
      lastPath: '',
      breadcrumbList: [],
      prevPage: ''
    }
  },
  computed: {
    breadcrumb () {
      return this.$store.getters.getBreadcrumb
    },
    productListTitle () {
      return this.$store.getters.getProductListTitle
    },
    productName () {
      return this.$store.getters.getBProductName
    }
  },
  watch: {
    breadcrumb () {
      this.lastPath = this.breadcrumb[this.breadcrumb.length - 1].path
    },
    $route () {
      console.log(this.$route)
      if (this.$route.name === 'catalogList') {
        this.$store.commit('setBCatalog', {
          path: this.$route.fullPath,
          title: 'Каталог',
          name: 'catalog'
        })
      } else if (this.$route.name === 'catalogCategory') {
        if (this.$route.meta.category === undefined) {
          this.$store.commit('setBCategory', {
            path: this.$route.fullPath,
            title:
              this.$store.getters.getBCategory.title ||
              this.$store.getters.getProductListTitle,
            name: this.$route.name
          })
        } else {
          this.$store.commit('setBCategory', {
            path: this.$route.fullPath,
            title: this.$route.meta.category,
            name: this.$route.name
          })
        }
      } else if (this.$route.name === 'productList') {
        this.$store.commit(
          'setProductListTitle',
          localStorage.getItem('product-list-title')
        )
        if (this.$route.meta.productListTitle === undefined) {
          this.$store.commit('setBProductList', {
            path: this.$route.fullPath,
            title: this.$store.getters.getBProductList.title,
            name: this.$route.name
          })
        } else {
          this.$store.commit('setBProductList', {
            path: this.$route.fullPath,
            title: this.$route.meta.productListTitle,
            name: this.$route.name
          })
        }
      } else if (
        this.$route.name === 'description' ||
        this.$route.name === 'reviews' ||
        this.$route.name === 'characteristics'
      ) {
        if (this.$route.meta.productName === undefined) {
          this.$store.commit('setBProduct', {
            path: this.$route.fullPath,
            title: this.$store.getters.getBProduct.title,
            name: this.$route.name
          })
        } else {
          this.$store.commit('setBProduct', {
            path: this.$route.fullPath,
            title: this.$route.meta.productName,
            name: this.$route.name
          })
        }
      }
      this.$store.dispatch('updateBreadcrumb', this.$route.name)
    }
  },
  created () {
    if (this.$store.getters.getBCatalog === null) {
      this.$store.commit(
        'setBCatalog',
        JSON.parse(localStorage.getItem('breadcrumb-catalog'))
      )
    }
    if (this.$store.getters.getBCategory === null) {
      this.$store.commit(
        'setBCategory',
        JSON.parse(localStorage.getItem('breadcrumb-category'))
      )
    }
    if (this.$store.getters.getBProductList === null) {
      this.$store.commit(
        'setBProductList',
        JSON.parse(localStorage.getItem('breadcrumb-product-list'))
      )
    }
    if (this.$store.getters.getBProduct === null) {
      this.$store.commit(
        'setBProduct',
        JSON.parse(localStorage.getItem('breadcrumb-product'))
      )
    }
    this.lastPath = this.breadcrumb[this.breadcrumb.length - 1].path
  },
  methods: {
    isActive (path) {
      if (path === this.lastPath) return true
      return false
    }
  }
}
</script>
