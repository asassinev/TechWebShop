<template>
  <div class="d-flex flex-wrap flex-sm-nowrap pb-3">
    <div class="form-floating w-100 me-0 me-sm-3 mb-3 mb-sm-0">
      <input
        @input="$v.newPhone.$touch()"
        @blur="
          $v.newPhone.$touch()
          $store.commit('setPhone', newPhone)
        "
        class="form-control"
        :class="{
          'is-invalid': phoneErrors[0],
          'is-valid':
            phoneErrors.length < 1 && newPhone !== null && newPhone !== ''
        }"
        type="tel"
        v-model="newPhone"
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
        @input="$v.newEmail.$touch()"
        @blur="$store.commit('setEmail', newEmail)"
        type="email"
        class="form-control"
        :class="{
          'is-invalid': emailErrors[0],
          'is-valid': emailErrors.length < 1 && newEmail !== ''
        }"
        id="Email"
        placeholder="name@example.com"
        v-model="newEmail"
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
  props: ['phone', 'email'],
  mixins: [validationMixin],
  data () {
    return {
      newPhone: '',
      newEmail: ''
    }
  },
  created () {
    this.newPhone = this.phone
    this.newEmail = this.email
  },
  validations: {
    newEmail: {
      email
    },
    newPhone: {
      required,
      phone
    }
  },
  watch: {
    phone () {
      if (this.newPhone !== null && this.newPhone !== '') {
        this.newPhone = this.newPhone.substring(0, 18)
      }
      if (this.newPhone === '+') {
        this.newPhone = ''
      }
    }
  },
  computed: {
    emailErrors () {
      const errors = []
      if (!this.$v.newEmail.$dirty) return errors
      !this.$v.newEmail.email && errors.push('Must be valid e-mail')
      return errors
    },
    phoneErrors () {
      const errors = []
      if (!this.$v.newPhone.$dirty) return errors
      !this.$v.newPhone.required && errors.push('Phone is required')
      !this.$v.newPhone.phone && errors.push('Must be valid phone')
      return errors
    }
  }
}
</script>
