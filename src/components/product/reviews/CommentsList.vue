<template>
  <div class="mt-2">
    <div class="comments__block" v-for="(comment, id) in comments" :key="id">
      <div class="d-flex align-items-center">
        <div class="me-2">
          <i class="fs-3 fas fa-user-astronaut text-primary p-2"></i>
        </div>
        <span class="ms-3 fw-bold">{{ comment.uName }}</span>
      </div>
      <p class="mb-1 text-secondary">
        {{ comment.date }}
      </p>
      <p>{{ comment.comment }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: ['comments']
}
</script>
