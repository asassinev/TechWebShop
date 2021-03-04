<template>
  <div class="d-flex flex-column">
    <div class="mb-3 shadow-sm bg-white">
      <textarea
        v-model="comment"
        class="form-control"
        placeholder="Написать комментарий..."
        rows="3"
      ></textarea>
    </div>
    <button class="btn btn-primary align-self-end px-4" @click="sendComment()">
      Отправить
    </button>
  </div>
</template>

<script>
export default {
  props: ['uName'],
  data () {
    return {
      comment: ''
    }
  },
  methods: {
    sendComment () {
      var payload = { comment: this.comment, uName: this.uName }
      this.$store.dispatch('createComment', payload)
    }
  }
}
</script>
