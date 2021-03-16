<template>
  <div>
    <NavBar />
    <div class="container">
      <nav aria-label="breadcrumb" class="mt-3">
        <ol class="breadcrumb text-decoration-none">
          <li class="breadcrumb-item"><a href="#">Home</a></li>
          <li class="breadcrumb-item"><a href="#">Library</a></li>
          <li class="breadcrumb-item active" aria-current="page">Data</li>
        </ol>
      </nav>
      <hr />
      <router-view />
    </div>
    <Notificaton />
  </div>
</template>

<script>
import NavBar from './components/NavBar'
import Notificaton from './components/shared/Notification'
export default {
  components: {
    NavBar,
    Notificaton
  },
  created () {
    this.$store.commit('setUser', JSON.parse(localStorage.getItem('user')))
    if (localStorage.getItem('orders')) {
      this.$store.commit('setOrders', localStorage.getItem('orders'))
    }
  }
}
</script>

<style lang="scss">
html,
body {
  height: 100%;
  background-color: #f6f6f6 !important;
}
</style>
