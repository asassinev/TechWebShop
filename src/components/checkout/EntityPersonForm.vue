<template>
  <div>
    <div class="form-floating mb-3">
      <input
        @input="$v.inn.$touch()"
        @blur="
          $v.inn.$touch()
          $store.commit('setINN', inn)
        "
        class="form-control"
        :class="{
          'is-invalid': innErrors[0],
          'is-valid': innErrors.length < 1 && inn !== ''
        }"
        type="text"
        id="INN"
        placeholder="INN"
        v-model="inn"
      />
      <label for="INN">ИНН*</label>
      <div :class="{ 'invalid-feedback': innErrors[0] }">
        {{ innErrors[0] }}
      </div>
    </div>
    <div class="form-floating mb-3">
      <input
        @input="$v.kpp.$touch()"
        @blur="$store.commit('setKPP', kpp)"
        type="text"
        class="form-control"
        :class="{
          'is-invalid': kppErrors[0],
          'is-valid': kppErrors.length < 1 && kpp !== ''
        }"
        id="KPP"
        placeholder="КПП"
        v-model="kpp"
      />
      <label for="KPP">КПП</label>
      <div :class="{ 'invalid-feedback': kppErrors[0] }">
        {{ kppErrors[0] }}
      </div>
    </div>
    <div class="form-floating pb-3">
      <input
        @input="$v.companyName.$touch()"
        @blur="
          $v.companyName.$touch()
          $store.commit('setCompanyName', companyName)
        "
        v-model="companyName"
        type="text"
        class="form-control"
        :class="{
          'is-invalid': companyNameErrors[0],
          'is-valid': companyNameErrors.length < 1 && companyName !== ''
        }"
        id="companyName"
        placeholder="Company name*"
      />
      <label for="companyName">Наименование*</label>
      <div :class="{ 'invalid-feedback': companyNameErrors[0] }">
        {{ companyNameErrors[0] }}
      </div>
    </div>
  </div>
</template>

<script>
import { validationMixin } from 'vuelidate'
import { required, minLength, maxLength } from 'vuelidate/lib/validators'
export default {
  mixins: [validationMixin],
  data () {
    return {
      inn: '',
      kpp: '',
      companyName: ''
    }
  },
  validations: {
    inn: {
      required,
      minLength: minLength(12),
      maxLength: maxLength(12)
    },
    kpp: {
      minLength: minLength(9),
      maxLength: maxLength(9)
    },
    companyName: {
      required
    }
  },
  computed: {
    innErrors () {
      const errors = []
      if (!this.$v.inn.$dirty) return errors
      !this.$v.inn.required && errors.push('INN is required')
      !this.$v.inn.minLength && errors.push('Length of INN 12 number')
      !this.$v.inn.maxLength && errors.push('Length of INN 12 number')
      return errors
    },
    kppErrors () {
      const errors = []
      if (!this.$v.kpp.$dirty) return errors
      !this.$v.kpp.minLength && errors.push('Length of KPP 9 number')
      !this.$v.kpp.maxLength && errors.push('Length of KPP 9 number')
      return errors
    },
    companyNameErrors () {
      const errors = []
      if (!this.$v.companyName.$dirty) return errors
      !this.$v.companyName.required && errors.push('Company name is required')
      return errors
    }
  }
}
</script>
