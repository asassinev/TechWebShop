<template>
  <div class="row pb-5">
    <h1><span class="text-secondary">TECH</span> Цифровая техника</h1>
    <div class="col-12 col-lg-8">
      <section>
        <span class="bg-white p-counter me-3 rounded-circle">1</span
        ><span class="fs-5 fw-bold">Данные покупателя</span>
        <div class="section-border ms-lg-3 ps-lg-4 mt-2">
          <div class="d-flex">
            <div
              type="button"
              class="rounded bg-light p-2 me-3"
              :class="{ 'bg-white shadow-sm': person === 'individual' }"
              @click="person = 'individual'"
            >
              Физическое лицо
            </div>
            <div
              type="button"
              class="rounded bg-light p-2"
              :class="{ 'bg-white shadow-sm': person === 'entity' }"
              @click="person = 'entity'"
            >
              Юридическое лицо
            </div>
          </div>
          <section class="mt-3" v-if="person === 'individual'">
            <individual-person-form :phone="phone" :email="email" />
          </section>
          <section v-if="person === 'entity'" class="mt-3">
            <entity-person-form />
          </section>
        </div>
      </section>
      <section>
        <span class="bg-white p-counter me-3 rounded-circle">2</span
        ><span class="fs-5 fw-bold">Выберите способ получения</span>
        <div class="border-lg-start ms-lg-3 ps-lg-4 mt-2">
          <div class="d-flex">
            <div
              type="button"
              class="rounded bg-light p-2 me-3"
              :class="{ 'bg-white shadow-sm': delivery === 'pickup' }"
              @click="delivery = 'pickup'"
            >
              Самовывоз
            </div>
            <div
              type="button"
              class="rounded bg-light p-2"
              :class="{ 'bg-white shadow-sm': delivery === 'delivery' }"
              @click="delivery = 'delivery'"
            >
              Доставка
            </div>
          </div>
          <div v-if="delivery === 'delivery'" class="mt-3">
            <delivery-form />
          </div>
          <div v-else class="mt-3">
            <pickup-card />
          </div>
        </div>
      </section>
      <section class="pt-3">
        <span class="bg-white p-counter me-3 rounded-circle">3</span
        ><span class="fs-5 fw-bold">Выберите способ оплаты</span>
        <div class="ms-lg-3 ps-lg-4 mt-2">
          <div class="d-flex">
            <div
              type="button"
              class="rounded bg-light p-2 me-3"
              :class="{
                'bg-white shadow-sm': payment === 'payment on delivery'
              }"
              @click="
                payment = 'payment on delivery'
                paymentMethod = 'cash'
              "
            >
              При получении
            </div>
            <div
              type="button"
              class="rounded bg-light p-2"
              :class="{ 'bg-white shadow-sm': payment === 'online' }"
              @click="
                payment = 'online'
                paymentMethod = 'bank-card'
              "
            >
              Онлайн
            </div>
          </div>
          <div
            v-if="payment === 'payment on delivery'"
            class="mt-3 border rounded-3 shadow-sm bg-white p-3"
          >
            <div class="form-check">
              <input
                class="form-check-input"
                type="radio"
                v-model="paymentMethod"
                value="cash"
                id="cash"
              />
              <label class="form-check-label" for="cash">
                В магазине можно оплатить наличными, бонусами ProZaPass, картой
                или в кредит</label
              >
            </div>
          </div>
          <div v-else class="mt-3">
            <div class="border rounded-3 shadow-sm bg-white p-3 mb-1">
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="radio"
                  v-model="paymentMethod"
                  id="bank-card"
                  value="bank-card"
                />
                <label class="form-check-label" for="bank-card">
                  Банковская карта
                </label>
              </div>
            </div>
            <div class="border rounded-3 shadow-sm bg-white p-3 mb-1">
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="radio"
                  id="ЮMoney"
                  v-model="paymentMethod"
                  value="ЮMoney"
                />
                <label class="form-check-label" for="ЮMoney">
                  ЮMoney
                </label>
              </div>
            </div>
            <div class="border rounded-3 shadow-sm bg-white p-3 mb-1">
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="radio"
                  id="QIWI Wallet"
                  v-model="paymentMethod"
                  value="QIWI Wallet"
                />
                <label class="form-check-label" for="QIWI Wallet">
                  QIWI Wallet
                </label>
              </div>
            </div>
            <div class="border rounded-3 shadow-sm bg-white p-3 mb-1">
              <div class="form-check">
                <input
                  type="radio"
                  id="WebMoney"
                  v-model="paymentMethod"
                  value="WebMoney"
                  class="form-check-input"
                />
                <label class="form-check-label" for="WebMoney">
                  WebMoney
                </label>
              </div>
            </div>
          </div>
          <div class="pt-3">
            <button
              class="btn btn-lg btn-primary"
              @click="confirm"
              :disabled="isDisabled()"
            >
              Подтвердить заказ
            </button>
            <p class="mt-3 fs-7 mb-1">
              Подтверждая заказ, Вы соглашаетесь с условиями
              <a href="" target="_blank"> политики конфиденциальности</a> и
              <a href="" target="_blank">правилами продажи.</a>
            </p>
          </div>
        </div>
      </section>
    </div>
    <div
      class="border-start ms-5 ps-5 d-none col-lg-3 d-lg-block mt-5 pt-5 text-black-50"
    >
      <div class="mb-4">
        <i class="fas fa-shield-alt me-2 fs-2"></i>
        <p class="m-0 fw-bolder fs-6">Безопасная оплата</p>
        <p class="fs-7">Ваши платежи под надежной защитой</p>
      </div>
      <div class="mb-4">
        <i class="fas fa-undo me-2 fs-2"></i>
        <p class="m-0 fw-bolder fs-6">Легкий возврат</p>
        <p class="fs-7">В случае чего без проблем вернем деньги</p>
      </div>
      <div class="mb-4">
        <i class="fas fa-headset me-2 fs-2"></i>
        <p class="m-0 fw-bolder fs-6">Нужна помощь?</p>
        <p class="fs-7">8-800-77-07-999 (c 03:00 до 22:00)</p>
      </div>
    </div>
  </div>
</template>

<script>
import DeliveryForm from '../components/checkout/DeliveryForm.vue'
import EntityPersonForm from '../components/checkout/EntityPersonForm.vue'
import IndividualPersonForm from '../components/checkout/IndividualPersonForm.vue'
import PickupCard from '../components/checkout/PickupCard.vue'

export default {
  components: {
    EntityPersonForm,
    IndividualPersonForm,
    PickupCard,
    DeliveryForm
  },
  data () {
    return {
      person: 'individual',
      delivery: 'pickup',
      payment: 'payment on delivery',
      paymentMethod: 'cash'
    }
  },
  created () {
    if (this.$store.getters.isUserLoggedIn) {
      const user = this.$store.getters.getUs
      this.$store.commit('setPhone', user.phone)
      this.$store.commit('setEmail', user.email)
    }
  },
  computed: {
    INN () {
      return this.$store.getters.getINN
    },
    KPP () {
      return this.$store.getters.getKPP
    },
    companyName () {
      return this.$store.getters.getCompanyName
    },
    phone () {
      return this.$store.getters.getPhone
    },
    email () {
      return this.$store.getters.getEmail
    },
    deliveryData () {
      return this.$store.getters.getDelivery
    }
  },
  methods: {
    confirm () {
      const checkout = {}
      checkout.person = this.person
      if (this.person === 'individual') {
        checkout.phone = this.phone
        checkout.email = this.email
      } else {
        checkout.inn = this.INN
        checkout.kpp = this.KPP
        checkout.companyName = this.companyName
      }
      checkout.delivery = this.delivery
      if (this.delivery !== 'pickup') {
        checkout.deliveryData = this.deliveryData
      }
      checkout.paymentMethod = this.paymentMethod
      this.$store.dispatch('sendOrder', checkout)
    },
    isDisabled () {
      if (this.person === 'individual') {
        if (this.phone === '') {
          return true
        }
      } else {
        if ((this.INN === '' && this.KPP === '', this.companyName === '')) {
          return true
        }
      }
      if (this.delivery !== 'pickup') {
        if (
          this.deliveryData.deliveryDate === null ||
          this.deliveryData.street === ''
        ) {
          return true
        }
      }
      return false
    }
  }
}
</script>
