<template>
  <div class="d-flex justify-content-center">
    <form
      class="form shadow p-3 bg-white rounded"
      @submit.prevent="submit"
      novalidate
    >
      <h1 class="text-center fs-2 text-primary m-0">Регистрация</h1>
      <hr />
      <div class="form-floating mb-3" :class="{ errors: emailErrors[0] }">
        <input
          @input="$v.email.$touch()"
          @blur="$v.email.$touch()"
          class="form-control form-control-sm"
          type="email"
          v-model="email"
          placeholder="Email address"
          id="email"
          required
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
          class="form-control form-control-sm"
          id="password"
          v-model="password"
          placeholder="Password"
          type="password"
          required
        />
        <label class="form-label" for="floatingInput">Password</label>
        <div
          v-if="passwordErrors[0]"
          :class="{ 'invalid-feedback': passwordErrors[0] }"
        >
          {{ passwordErrors[0] }}
        </div>
      </div>
      <div
        class="form-floating mb-3"
        :class="{ errors: repeatPasswordErrors[0] }"
      >
        <input
          @input="$v.repeatPassword.$touch()"
          @blur="$v.repeatPassword.$touch()"
          class="form-control form-control-sm"
          id="repeatPassword"
          v-model="repeatPassword"
          placeholder="Repeat password"
          type="password"
          required
        />
        <label class="form-label" for="floatingInput">Repeat password</label>
        <div
          v-if="repeatPasswordErrors[0]"
          :class="{ 'invalid-feedback': repeatPasswordErrors[0] }"
        >
          {{ repeatPasswordErrors[0] }}
        </div>
      </div>
      <div class="d-flex justify-content-between align-items-end flex-wrap">
        <router-link to="/login" class="pb-2 fs-7" @click="submit">
          Использовать уже существущий аккаунт
        </router-link>
        <button type="button" class="btn btn-primary" @click="submit">
          Создать аккаунт
        </button>
      </div>
    </form>
  </div>
</template>

<script>
import { validationMixin } from 'vuelidate'
import { required, minLength, sameAs, email } from 'vuelidate/lib/validators'

export default {
  mixins: [validationMixin],
  data () {
    return {
      email: '',
      password: '',
      repeatPassword: ''
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
    },
    repeatPassword: {
      required,
      sameAsPassword: sameAs('password')
    }
  },
  watch: {
    User () {
      console.log(this.User)
      this.$router.push('/profile')
    }
  },
  computed: {
    User () {
      return this.$store.getters.getUs
    },
    emailErrors () {
      const errors = []
      if (!this.$v.email.$dirty) return errors
      !this.$v.email.required && errors.push('E-mail is required')
      !this.$v.email.email && errors.push('Must be valid e-mail')
      return errors
    },
    passwordErrors () {
      const errors = []
      if (!this.$v.password.$dirty) return errors
      !this.$v.password.required && errors.push('Password is required')
      !this.$v.password.minLength &&
        errors.push('Min length of password 8 letters')
      return errors
    },
    repeatPasswordErrors () {
      const errors = []
      if (!this.$v.repeatPassword.$dirty) return errors
      !this.$v.repeatPassword.sameAsPassword &&
        errors.push('Passwords do not match.')
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
        this.$store.dispatch('createUser', user)
      }
    }
  }
}
</script>
