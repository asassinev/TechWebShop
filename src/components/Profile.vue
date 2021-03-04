<template>
  <div>
    <div v-if="isUserLoggedIn">
      <button @click="logoutUser">Выход</button>
    </div>
  </div>
</template>

<script>
export default {
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
