<template>
  <div class="d-flex flex-wrap flex-sm-nowrap pb-3">
    <div class="form-floating w-100 me-0 me-sm-3 mb-3 mb-sm-0">
      <input
        @input="$v.phone.$touch()"
        @blur="
          $v.phone.$touch()
          $store.commit('setPhone', phone)
        "
        class="form-control"
        :class="{
          'is-invalid': phoneErrors[0],
          'is-valid': phoneErrors.length < 1 && phone !== null && phone !== ''
        }"
        type="tel"
        v-model="phone"
        id="phone"
        placeholder="tel"
        v-phone
      />
      <label for="phone">Телефон*</label>
      <div :class="{ 'invalid-feedback': phoneErrors[0] }">
        {{ phoneErrors[0] }}
      </div>
    </div>
    <div class="form-floating w-100">
      <input
        @input="$v.email.$touch()"
        @blur="$store.commit('setEmail', email)"
        type="email"
        class="form-control"
        :class="{
          'is-invalid': emailErrors[0],
          'is-valid': emailErrors.length < 1 && email !== ''
        }"
        id="Email"
        placeholder="name@example.com"
        v-model="email"
      />
      <label for="Email">Email</label>
      <div :class="{ 'invalid-feedback': emailErrors[0] }">
        {{ emailErrors[0] }}
      </div>
    </div>
  </div>
</template>

<script>
import { validationMixin } from 'vuelidate'
import { email, required, helpers } from 'vuelidate/lib/validators'
const phone = helpers.regex(
  'phone',
  /(\d{0,1})(\d{0,3})(\d{0,3})-(\d{0,2})-(\d\d)$/
)
export default {
  mixins: [validationMixin],
  data () {
    return {
      phone: '',
      email: ''
    }
  },
  created () {
    this.phone = this.$store.getters.getUs.phone
    this.$store.commit('setPhone', this.phone)
    this.email = this.$store.getters.getUs.email
    this.$store.commit('setEmail', this.email)
  },
  validations: {
    email: {
      email
    },
    phone: {
      required,
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
  computed: {
    emailErrors () {
      const errors = []
      if (!this.$v.email.$dirty) return errors
      !this.$v.email.email && errors.push('Must be valid e-mail')
      return errors
    },
    phoneErrors () {
      const errors = []
      if (!this.$v.phone.$dirty) return errors
      !this.$v.phone.required && errors.push('Phone is required')
      !this.$v.phone.phone && errors.push('Must be valid phone')
      return errors
    }
  }
}
</script>
