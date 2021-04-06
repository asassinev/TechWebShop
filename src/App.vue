<template>
  <div>
    <NavBar />
    <div class="container">
      <breadcrumb />
      <router-view />
    </div>
    <Notificaton />
  </div>
</template>

<script>
import Breadcrumb from './components/Breadcrumb'
import NavBar from './components/NavBar'
import Notificaton from './components/shared/Notification'
export default {
  components: {
    NavBar,
    Notificaton,
    Breadcrumb
  },
  created () {
    // redirection from 404 page for github pages
    if (
      localStorage.getItem('location') &&
      localStorage.getItem('location') !== this.$route.path
    ) {
      this.$router.push(localStorage.getItem('location'))
    }
    //
    this.$store.commit('setUser', JSON.parse(localStorage.getItem('user')))

    if (localStorage.getItem('orders')) {
      this.$store.dispatch('addOrders', localStorage.getItem('orders'))
    }
  }
}
</script>

<style lang="scss">
html,
body {
  height: 100%;
  background-color: #f6f6f6 !important;
  font-family: 'Segoe UI' !important;
}

.fs-7 {
  font-size: 14px;
}
.fs-8 {
  font-size: 12px;
}
</style>
