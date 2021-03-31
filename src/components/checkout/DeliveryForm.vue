<template>
  <div>
    <div class="form-floating mb-3">
      <input
        type="text"
        class="form-control"
        :class="{
          'is-valid': userName !== ''
        }"
        id="UserName"
        placeholder="Фамилия имя получателя"
        v-model="userName"
      />
      <label for="UserName">Фамилия имя получателя</label>
    </div>
    <div class="form-floating mb-3">
      <input
        @input="$v.street.$touch()"
        @blur="$v.street.$touch()"
        type="text"
        class="form-control"
        :class="{
          'is-invalid': streetErrors[0],
          'is-valid': streetErrors.length < 1 && street !== ''
        }"
        id="street"
        placeholder="Улица, дом, квартира*"
        v-model="street"
      />
      <label for="street">Улица, дом, квартира*</label>
      <div :class="{ 'invalid-feedback': streetErrors[0] }">
        {{ streetErrors[0] }}
      </div>
    </div>
    <div>
      <div class="d-flex rounded justify-content-between bg-white border p-2">
        <div
          class="form-check d-flex align-items-center ms-2"
          style="height: 39px"
        >
          <input
            class="form-check-input me-2"
            type="checkbox"
            v-model="needHelp"
            :disabled="street === '' ? true : false"
            id="needHelp"
          />
          <label class="form-check-label user-select-none" for="needHelp">
            Нужен подъем на этаж
          </label>
        </div>
        <div v-show="needHelp">
          <select class="form-select" v-model="buildingFloor">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="3">4</option>
            <option value="3">5</option>
            <option value="3">6</option>
            <option value="3">7</option>
            <option value="3">8</option>
            <option value="3">9</option>
            <option value="3">9+</option>
          </select>
        </div>
      </div>
      <div class="rounded border bg-white p-1 ps-2 mt-2" v-if="needHelp">
        <div
          class="form-check d-flex align-items-center ms-2"
          style="height: 39px"
        >
          <input
            class="form-check-input me-2"
            type="checkbox"
            v-model="haveElevator"
            id="haveElevator"
          />
          <label class="form-check-label user-select-none" for="haveElevator">
            Есть лифт, вмещающий весь заказ
          </label>
        </div>
      </div>
    </div>
    <calendar />
    <div
      class="pt-2 fs-5"
      v-if="error !== ''"
      :class="{
        'invalid-feedback text-danger': error !== ''
      }"
    >
      Select delivery date
    </div>
    <div class="mt-3 pb-4">
      <div
        v-if="addComment === false"
        type="button"
        class="text-primary"
        style="border-bottom: 1px dotted #0d6efd; width: fit-content;"
        @click="addComment = true"
      >
        Добавить комментарий
      </div>
      <section v-else>
        <div
          type="button"
          class="text-primary mb-2"
          style="border-bottom: 1px dotted #0d6efd; width: fit-content;"
          @click="addComment = false"
        >
          Удалить комментарий
        </div>
        <textarea
          v-model="comment"
          class="form-control"
          cols="30"
          rows="3"
          placeholder="Комментарий"
        ></textarea>
      </section>
    </div>
    <button class="btn btn-success" @click="confirmDelivery">
      Подтвердить
    </button>
  </div>
</template>

<script>
import { required } from 'vuelidate/lib/validators'
import calendar from './calendar.vue'
export default {
  components: { calendar },
  data () {
    return {
      userName: '',
      street: '',
      needHelp: false,
      haveElevator: false,
      buildingFloor: 2,
      addComment: false,
      comment: '',
      isConfirm: false,
      error: ''
    }
  },
  validations: {
    street: {
      required
    }
  },
  watch: {
    deliveryDate () {
      this.deliveryDateIsChecked()
    }
  },
  computed: {
    streetErrors () {
      const errors = []
      if (!this.$v.street.$dirty) return errors
      !this.$v.street.required && errors.push('Street is required')
      return errors
    },
    deliveryDate () {
      return this.$store.getters.getDeliveryDate
    }
  },
  methods: {
    confirmDelivery () {
      this.$v.$touch()
      this.deliveryDateIsChecked()
      if (!this.$v.$invalid && this.error === '') {
        const delivery = {
          userName: this.userName,
          street: this.street,
          needHelp: this.needHelp,
          haveElevator: this.haveElevator,
          buildingFloor: this.buildingFloor,
          addComment: this.addComment,
          comment: this.comment,
          // isConfirm: this.isConfirm,
          deliveryDate: this.deliveryDate
        }
        this.$store.commit('setDelivery', delivery)
      }
    },
    deliveryDateIsChecked () {
      if (this.deliveryDate === null) {
        this.error = 'Select delvery date'
      } else {
        this.error = ''
      }
    }
  }
}
</script>
