<template>
  <div>
    <NavBar />
    <div class="container">
      <nav aria-label="breadcrumb" class="mt-2">
        <ol class="breadcrumb text-decoration-none">
          <li class="breadcrumb-item"><a href="#">Home</a></li>
          <li class="breadcrumb-item"><a href="#">Library</a></li>
          <li class="breadcrumb-item active" aria-current="page">Data</li>
        </ol>
      </nav>
      <hr />
      <router-view />
    </div>
  </div>
</template>

<script>
import NavBar from './components/NavBar'
export default {
  components: {
    NavBar
  }
}
</script>

<style lang="scss">
html,
body {
  height: 100%;
  background-color: #f6f6f6;
}
</style>
