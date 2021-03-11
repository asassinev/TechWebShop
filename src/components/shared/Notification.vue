<template>
  <transition name="slide">
    <div v-if="notification" class="notification">
      <p
        class="notification__text rounded shadow-sm user-select-none"
        :class="{
          isError: notification.title === 'error',
          isSuccess: notification.title === 'success'
        }"
      >
        {{ notification.text }}
      </p>
    </div>
  </transition>
</template>

<script>
export default {
  computed: {
    notification () {
      return this.$store.getters.getNotification
    }
  }
}
</script>

<style lang="scss" scoped>
.notification {
  width: 100%;
  position: fixed;
  bottom: 0;
  transform: translate(0, -30px);
  animation-fill-mode: forwards;
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
.slide-enter-active {
  animation: slide-in 0.5s;
}
.slide-leave-active {
  animation: slide-in 0.5s reverse;
}
@keyframes slide-in {
  0% {
    transform: translate(0, 50px);
  }
  100% {
    transform: translate(0, -30px);
  }
}
</style>
