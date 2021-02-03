<template>
  <div class="mt-5">
    <form class="form" @submit.prevent="submit">
      <h1 class="text-center text-primary mt-2 pb-2">Авторизация</h1>
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
      <hr>
      <div class="text-right">
        <button type="button" class="mr-2 btn btn-primary btn-lg" @click="submit">Войти</button>
        <router-link class="btn btn-secondary btn-lg" to="/profile/registration">Создать аккаунт</router-link>
      </div>
    </form>
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
      password: ''
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
      !this.$v.password.minLength && errors.push('Min length of password 8 letters')
      !this.$v.password.required && errors.push('Password is required')
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

<style lang="scss">
.form {
  margin: 0 auto;
  padding: 10px 15px;
  box-shadow: 0 0 10px rgba(0,0,0,0.5);
  @media (min-width: 768px) {
    width: 50%;
  }
}
.errors {
  input {
    border-color: red;
  }
}
.invalid-feedback {
  display: block;
}
</style>
