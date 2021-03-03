<template>
  <div>
    <div class="mb-4" v-for="(item, id) in ratingCharacteristics" :key="id">
      <div class="d-flex justify-content-between mb-2-p">
        <p>{{ item.title }}</p>
        <p class="fw-bold">{{ item.average }}</p>
      </div>
      <div class="progress" style="height: 5px;">
        <div
          class="progress-bar"
          role="progressbar"
          :style="'width:' + item.progress + '%;'"
          :aria-valuenow="item.average"
          aria-valuemin="0"
          aria-valuemax="5"
        ></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    ratingCharacteristics () {
      return this.$store.getters.getRatingCharacteristics
    }
  }
}
</script>
