<template>
  <div v-if="breadcrumb.length > 1">
    <nav aria-label="breadcrumb" class="mt-3">
      <ol class="breadcrumb">
        <li
          class="breadcrumb-item"
          v-for="(item, id) in breadcrumb"
          :key="id"
          :class="{ active: isActive(item.path) }"
        >
          <span v-if="isActive(item.path)">{{ item.title }}</span>
          <router-link v-else :to="'/TechwebShop/' + item.path">{{
            item.title
          }}</router-link>
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
      lastPath: ''
    }
  },
  created () {
    if (localStorage.getItem('breadcrumb')) {
      this.$store.commit(
        'prevBreadcrumb',
        JSON.parse(localStorage.getItem('breadcrumb'))
      )
    }
  },
  computed: {
    breadcrumb () {
      return this.$store.getters.getBreadcrumb
    },
    location () {
      return this.$route.name
    },
    catalog () {
      return JSON.parse(localStorage.getItem('catalog'))
    },
    productList () {
      return JSON.parse(localStorage.getItem('productList'))
    },
    product () {
      return JSON.parse(localStorage.getItem('product'))
    }
  },
  watch: {
    breadcrumb () {
      this.lastPath = this.breadcrumb[this.breadcrumb.length - 1].path
    },
    location () {
      var newLocation = this.location
      if (
        newLocation !== 'description' &&
        newLocation !== 'productList' &&
        newLocation !== 'catalog'
      ) {
        this.$store.commit('newBreadcrumb', [])
        localStorage.removeItem('breadcrumb')
      } else {
        if (newLocation === 'catalog') {
          this.$store.commit('newBreadcrumb', {
            path: 'catalog/' + this.catalog.categories + '/',
            title: this.catalog.title
          })
        } else if (newLocation === 'productList') {
          this.$store.commit('newBreadcrumb', {
            path: 'catalog/' + this.catalog.categories + '/',
            title: this.catalog.title
          })
          this.$store.commit('addBreadcrumb', {
            path: 'productList/' + this.productList.path,
            title: this.productList.title
          })
        } else if (newLocation === 'description') {
          this.$store.commit('newBreadcrumb', {
            path: 'catalog/' + this.catalog.categories + '/',
            title: this.catalog.title
          })
          this.$store.commit('addBreadcrumb', {
            path: 'productList/' + this.productList.path,
            title: this.productList.title
          })
          this.$store.commit('addBreadcrumb', {
            path: 'product/' + this.product.path,
            title: this.product.title
          })
        }
      }
    }
  },
  methods: {
    isActive (path) {
      if (path === this.lastPath) return true
      return false
    }
  }
}
</script>
