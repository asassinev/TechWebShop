<template>
  <div class="bg-white rounded shadow-sm p-4 row">
    <p class="h5 mb-3">Данные:</p>
    <div class="col-12 col-lg-5">
      <div class="mb-3 form-floating">
        <input
          type="email"
          class="form-control"
          id="email"
          placeholder="Email"
          v-model="user.email"
        />
        <label for="email">Email</label>
      </div>
      <div class="mb-3 form-floating">
        <input
          type="text"
          class="form-control"
          id="firstName"
          placeholder="Имя"
          v-model="user.firstName"
        />
        <label for="firstName">Имя</label>
      </div>
      <div class="mb-3 form-floating">
        <input
          type="text"
          class="form-control"
          id="secondName"
          placeholder="Фамилия"
          v-model="user.secondName"
        />
        <label for="secondName">Фамилия</label>
      </div>
      <div class="mb-3 form-floating">
        <input
          type="password"
          class="form-control"
          id="password"
          placeholder="Изменить пароль"
          value=""
        />
        <label for="password">Изменить пароль</label>
      </div>
    </div>
    <p class="h5 mb-3">Пол:</p>
    <div class="mb-3">
      <div class="form-check mb-3">
        <input
          class="form-check-input"
          type="radio"
          name="radio"
          v-model="user.sex"
          id="default"
        />
        <label class="form-check-label" for="default">
          Не выбрано
        </label>
      </div>
      <div class="form-check mb-3">
        <input class="form-check-input" type="radio" name="radio" id="male" />
        <label class="form-check-label" for="male">
          Мужской
        </label>
      </div>
      <div class="form-check mb-3">
        <input class="form-check-input" type="radio" name="radio" id="female" />
        <label class="form-check-label" for="female">
          Женский
        </label>
      </div>
    </div>
    <div class="mb-3">
      <button class="btn btn-primary" @click="changeUser">Сохранить</button>
      <button @click="logoutUser" class="ms-3 btn btn-secondary">
        Удалить аккаунт
      </button>
    </div>
    <div class="bg-light text-center p-3">
      <p class="m-0">Дата регистрации: <strong>date</strong></p>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {}
  },
  computed: {
    user () {
      return this.$store.getters.getUs
    }
  },
  methods: {
    logoutUser () {
      this.$store.dispatch('logoutUser')
      this.$router.push('/login')
    },
    changeUser () {}
  }
}
</script>
