<template>
  <div class="mt-5 container">
    <form class="form" @submit.prevent="submit">
      <h1 class="text-center text-primary mt-1 pb-1">Регистрация</h1>
      <hr>
      <div class="form-group" :class="{ 'errors': emailErrors[0]}">
        <input
          @input="$v.email.$touch()"
          @blur="$v.email.$touch()"
          placeholder="Enter e-mail..."
          class="form-control form-control-lg"
          id="email"
          type="email"
          v-model="email"/>
        <div v-if="emailErrors[0]" :class="{'pl-2 invalid-feedback': emailErrors[0]}">{{ emailErrors[0] }}</div>
      </div>
      <div class="form-group" :class="{ 'errors': passwordErrors[0]}">
        <input
          @input="$v.password.$touch()"
          @blur="$v.password.$touch()"
          class="form-control form-control-lg"
          id="password"
          v-model="password"
          placeholder="Enter password..."
          type="password"/>
        <div v-if="passwordErrors[0]" :class="{'pl-2 invalid-feedback': passwordErrors[0]}">{{ passwordErrors[0] }}</div>
      </div>
      <div class="form-group" :class="{ 'errors': repeatPasswordErrors[0]}">
        <input
          @input="$v.repeatPassword.$touch()"
          @blur="$v.repeatPassword.$touch()"
          class="form-control form-control-lg"
          id="repeatPassword"
          v-model="repeatPassword"
          placeholder="Repeat password..."
          type="password"/>
        <div v-if="repeatPasswordErrors[0]" :class="{'pl-2 invalid-feedback': repeatPasswordErrors[0]}">{{ repeatPasswordErrors[0] }}</div>
      </div>
      <div class="text-right">
        <button type="button" class="mr-2 btn btn-primary btn-lg" @click="submit">Создать аккаунт</button>
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
  computed: {
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
      !this.$v.password.minLength && errors.push('Min length of password 8 letters')
      return errors
    },
    repeatPasswordErrors () {
      const errors = []
      if (!this.$v.repeatPassword.$dirty) return errors
      !this.$v.password.required && errors.push('Password is required')
      !this.$v.repeatPassword.sameAsPassword && errors.push('Passwords do not match.')
      return errors
    }
  },
  methods: {
    submit () {
      this.$v.$touch()
      if (this.$v.$invalid) {
        this.submitStatus = 'ERROR'
      } else {
        console.log('done')
        this.submitStatus = 'PENDING'
        setTimeout(() => {
          this.submitStatus = 'OK'
        }, 500)
      }
    }
  }
}
</script>
