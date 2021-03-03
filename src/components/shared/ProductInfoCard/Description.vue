<template>
  <div>
    <p class="h5">Описание {{ item[0] }}</p>
    <p>
      {{ item[1] }}
    </p>
  </div>
</template>

<script>
export default {
  computed: {
    item () {
      return this.$store.getters.getDescription
    }
  }
}
</script>
