<template>
  <div class="container">
    <div class="row justify-content-center">
      <form
        class="col-sm-12 col-lg-6 form shadow p-3 bg-white rounded"
        @submit.prevent="submit"
      >
        <h1 class="text-center fs-2 text-primary m-0">Авторизация</h1>
        <hr />
        <div class="form-floating mb-3" :class="{ errors: emailErrors[0] }">
          <input
            @input="$v.email.$touch()"
            @blur="$v.email.$touch()"
            placeholder="Enter e-mail..."
            class="form-control"
            id="email"
            type="email"
            v-model="email"
          />
          <label for="floatingInput">Email address</label>
          <div
            v-if="emailErrors[0]"
            :class="{ 'invalid-feedback': emailErrors[0] }"
          >
            {{ emailErrors[0] }}
          </div>
        </div>
        <div class="form-floating mb-3" :class="{ errors: passwordErrors[0] }">
          <input
            @input="$v.password.$touch()"
            @blur="$v.password.$touch()"
            class="form-control"
            id="password"
            v-model="password"
            placeholder="Enter password..."
            type="password"
          />
          <label for="floatingInput">Password</label>
          <div
            v-if="passwordErrors[0]"
            :class="{ 'invalid-feedback': passwordErrors[0] }"
          >
            {{ passwordErrors[0] }}
          </div>
        </div>
        <p class="text-danger">{{ error }}</p>
        <div class="row">
          <div class="col-sm-12 col-md-6">
            <button
              type="button"
              class="mb-2 mb-md-0 btn btn-primary btn-lg w-100"
              @click="submit"
            >
              Войти
            </button>
          </div>
          <div class="col-sm-12 col-md-6">
            <router-link
              class="btn btn-secondary btn-lg w-100"
              to="/registration"
              >Создать аккаунт</router-link
            >
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import { validationMixin } from 'vuelidate'
import { required, minLength, email } from 'vuelidate/lib/validators'

export default {
  mixins: [validationMixin],
  data () {
    return {
      email: '',
      password: '',
      error: ''
    }
  },
  validations: {
    email: {
      required,
      email
    },
    password: {
      required,
      minLength: minLength(8)
    }
  },
  computed: {
    emailErrors () {
      const errors = []
      if (!this.$v.email.$dirty) return errors
      !this.$v.email.email && errors.push('Must be valid e-mail')
      !this.$v.email.required && errors.push('E-mail is required')
      return errors
    },
    passwordErrors () {
      const errors = []
      if (!this.$v.password.$dirty) return errors
      !this.$v.password.minLength &&
        errors.push('Min length of password 8 letters')
      !this.$v.password.required && errors.push('Password is required')
      return errors
    }
  },
  methods: {
    submit () {
      this.$v.$touch()
      if (!this.$v.$invalid) {
        var user = {
          email: this.email,
          password: this.password
        }
        this.$store.dispatch('loginUser', user).finally(() => {
          if (this.$store.getters.getNotification) {
            this.error = this.$store.getters.getError
          } else if (this.$store.getters.getUs) {
            this.$router.push('/profile')
          }
        })
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.invalid-feedback {
  position: relative;
  display: block;
  margin: 4px 0 0 8px;
}
</style>
