<template>
  <div class="container">
    <div v-if="isUserLoggedIn">
      <button @click="logoutUser">Выход</button>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
    }
  },
  computed: {
    isUserLoggedIn () {
      return this.$store.getters.isUserLoggedIn
    }
  },
  methods: {
    logoutUser () {
      this.$store.dispatch('logoutUser')
      this.$router.push('/login')
    }
  }
}
</script>
