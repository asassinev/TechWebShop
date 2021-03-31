<template>
  <div class="wrap">
    <transition-group name="fade" mode="in-out">
      <div class="notification" v-for="notify in notification" :key="notify.id">
        <p
          class="notification__text rounded shadow-sm user-select-none"
          :class="{
            isError: notify.title === 'error',
            isSuccess: notify.title === 'success'
          }"
        >
          {{ notify.text }}
        </p>
      </div>
    </transition-group>
  </div>
</template>

<script>
export default {
  data () {
    return {
      show: true
    }
  },
  computed: {
    notification () {
      return this.$store.getters.getNotification
    }
  }
}
</script>

<style lang="scss" scoped>
.wrap {
  position: fixed;
  bottom: 20px;
  left: 50%;
  transform: translate(-50%);
}
.notification {
  margin-top: 20px;
  &__text {
    color: white;
    padding: 14px;
    text-align: center;
    width: 400px;
    margin: 0 auto;
  }
}
.isError {
  border-left: 4px solid #b82e24;
  background: #e54d42;
}
.isSuccess {
  border-left: 4px solid #42a85f;
  background: #68cd86;
}
.fade-enter-active {
  animation: fade;
}
.fade-leave-active {
  animation: fd 0.5s;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
