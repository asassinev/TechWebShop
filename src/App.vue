<template>
  <div>
    <NavBar/>
    <router-view/>
  </div>
</template>

<script>
import NavBar from './components/NavBar'
export default {
  methods: {
  },
  components: {
    NavBar
  }
}
</script>

<style lang="scss">
html, body {
  height: 100%;
  color: #333;
  background-color: #f6f6f6;
}
</style>
