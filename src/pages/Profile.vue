<template>
  <div class="bg-white rounded shadow-sm p-4 row">
    <p class="h5 mb-3">Данные:</p>
    <div class="col-12 col-lg-5">
      <div class="mb-3 form-floating">
        <input
          class="form-control"
          :class="{
            'is-invalid': emailErrors[0],
            'is-valid': emailErrors.length < 1
          }"
          @input="$v.email.$touch()"
          @blur="$v.email.$touch()"
          placeholder="Email"
          id="email"
          type="email"
          v-model="email"
        />
        <label for="email">Email</label>
        <div
          v-if="emailErrors[0]"
          :class="{ 'invalid-feedback': emailErrors[0] }"
        >
          {{ emailErrors[0] }}
        </div>
      </div>
      <div class="form-floating mb-3">
        <input
          @input="$v.phone.$touch()"
          @blur="$v.phone.$touch()"
          v-model.trim="phone"
          :class="{
            'is-invalid': phoneErrors[0],
            'is-valid': phoneErrors.length < 1 && phone !== null && phone !== ''
          }"
          type="tel"
          class="form-control"
          id="phone"
          placeholder="phone"
          v-phone
          autocomplete="off"
        />
        <label for="phone">Телефон</label>
        <div :class="{ 'invalid-feedback': phoneErrors[0] }">
          {{ phoneErrors[0] }}
        </div>
      </div>
      <div class="mb-3 form-floating">
        <input
          class="form-control"
          :class="{
            'is-valid': user.firstName !== ''
          }"
          type="text"
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
          :class="{
            'is-valid': user.secondName !== ''
          }"
          id="secondName"
          placeholder="Фамилия"
          v-model="user.secondName"
        />
        <label for="secondName">Фамилия</label>
      </div>
      <div class="mb-3 d-flex flex-wrap">
        <div class="form-floating w-100">
          <input
            class="form-control"
            :class="{
              'is-invalid': passwordErrors[0],
              'is-valid': passwordErrors.length < 1 && password !== ''
            }"
            @input="$v.password.$touch()"
            @blur="$v.password.$touch()"
            placeholder="Изменить пароль"
            id="password"
            type="password"
            autocomplete="off"
            onfocus="this.removeAttribute('readonly')"
            readonly
            v-model="password"
          />
          <label for="password">Изменить пароль</label>
          <div
            v-if="passwordErrors[0]"
            :class="{ 'invalid-feedback': passwordErrors[0] }"
          >
            {{ passwordErrors[0] }}
          </div>
        </div>
        <button
          class="btn btn-primary mt-3"
          v-if="password !== ''"
          @click="changeUserPassword"
        >
          Применить
        </button>
      </div>
    </div>
    <p class="h5 mb-3">Пол:</p>
    <div class="mb-3">
      <div class="form-check mb-3" v-if="user.sex === 'Не выбрано'">
        <input
          class="form-check-input"
          type="radio"
          value="Не выбрано"
          v-model="user.sex"
          id="default"
        />
        <label class="form-check-label" for="default">
          Не выбрано
        </label>
      </div>
      <div class="form-check mb-3">
        <input
          class="form-check-input"
          type="radio"
          value="Мужской"
          id="male"
          v-model="user.sex"
        />
        <label class="form-check-label" for="male">
          Мужской
        </label>
      </div>
      <div class="form-check mb-3">
        <input
          class="form-check-input"
          type="radio"
          value="Женский"
          id="female"
          v-model="user.sex"
        />
        <label class="form-check-label" for="female">
          Женский
        </label>
      </div>
    </div>
    <div class="mb-3">
      <button class="btn btn-primary" @click="changeUser">
        Сохранить
      </button>
      <button @click="logoutUser" class="ms-3 btn btn-secondary">
        Выход
      </button>
    </div>
    <div class="bg-light text-center p-3">
      <p class="m-0">
        Дата регистрации: <strong>{{ user.date }}</strong>
      </p>
    </div>
  </div>
</template>

<script>
import { validationMixin } from 'vuelidate'
import { minLength, email, helpers } from 'vuelidate/lib/validators'
const phone = helpers.regex(
  'phone',
  /(\d{0,1})(\d{0,3})(\d{0,3})-(\d{0,2})-(\d\d)$/
)
export default {
  mixins: [validationMixin],
  data () {
    return {
      password: '',
      email: '',
      phone: ''
    }
  },
  created () {
    this.email = this.user.email
    this.phone = this.user.phone
  },
  validations: {
    email: {
      email
    },
    password: {
      minLength: minLength(8)
    },
    phone: {
      phone
    }
  },
  watch: {
    phone () {
      if (this.phone !== null && this.phone !== '') {
        this.phone = this.phone.substring(0, 18)
      }
      if (this.phone === '+') {
        this.phone = ''
      }
    }
  },
  mounted () {
    this.password = ''
  },
  computed: {
    user () {
      return this.$store.getters.getUs
    },
    passwordErrors () {
      const errors = []
      if (!this.$v.password.$dirty) return false
      !this.$v.password.minLength &&
        errors.push('Min length of password 8 letters')
      if (this.password === this.user.password) {
        errors.push('This password has already been used')
      }
      return errors
    },
    emailErrors () {
      const errors = []
      if (!this.$v.email.$dirty) return errors
      !this.$v.email.email && errors.push('Must be valid e-mail')
      return errors
    },
    phoneErrors () {
      const errors = []
      if (!this.$v.phone.$dirty) return errors
      !this.$v.phone.phone && errors.push('Must be valid phone')
      return errors
    }
  },
  methods: {
    logoutUser () {
      this.$store.dispatch('logoutUser')
      this.$router.push('/TechWebShop/login')
    },
    changeUser () {
      this.$v.$touch()
      if (!this.$v.$invalid) {
        this.user.phone = this.phone
        this.user.email = this.email
        this.$store.dispatch('changeUser', this.user)
      }
    },
    changeUserPassword () {
      this.$v.$touch()
      if (!this.$v.$invalid) {
        this.$store.dispatch('changePassword', {
          _id: this.user._id,
          password: this.password
        })
        this.password = ''
      }
    }
  }
}
</script>
