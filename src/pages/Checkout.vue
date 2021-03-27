<template>
  <div class="row pb-5">
    <h1><span class="text-secondary">TECH</span> Цифровая техника</h1>
    <div class="col-12 col-lg-8">
      <div>
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
            <div class="d-flex mt-3 pb-3 w-100" v-if="person === 'individual'">
              <div class="form-floating me-3 w-100">
                <input
                  type="tel"
                  v-model="phone"
                  class="form-control"
                  id="phone"
                  placeholder="tel"
                  v-phone
                />
                <label for="phone">Телефон*</label>
              </div>
              <div class="form-floating w-100">
                <input
                  type="email"
                  class="form-control"
                  id="floatingInput"
                  placeholder="name@example.com"
                />
                <label for="floatingInput">Email</label>
              </div>
            </div>
            <div v-else class="mt-4">
              <div class="form-floating mb-3">
                <input
                  type="email"
                  class="form-control"
                  id="floatingInput"
                  placeholder="name@example.com"
                />
                <label for="floatingInput">ИНН*</label>
              </div>
              <div class="form-floating mb-3">
                <input
                  type="password"
                  class="form-control"
                  id="floatingPassword"
                  placeholder="Password"
                />
                <label for="floatingPassword">КПП</label>
              </div>
              <div class="form-floating pb-3">
                <input
                  type="password"
                  class="form-control"
                  id="floatingPassword"
                  placeholder="Password"
                />
                <label for="floatingPassword">Наименование*</label>
              </div>
            </div>
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
              <div class="form-floating mb-3">
                <input
                  type="text"
                  class="form-control"
                  id="UserName"
                  placeholder="Фамилия получателя"
                />
                <label for="UserName">Фамилия получателя</label>
              </div>
              <div class="form-floating mb-3">
                <input
                  type="text"
                  class="form-control"
                  id="street"
                  placeholder="Улица, дом, квартира*"
                  v-model="street"
                />
                <label for="street">Улица, дом, квартира*</label>
              </div>
              <div>
                <div
                  class="d-flex rounded justify-content-between bg-white border p-2"
                >
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
                    <label
                      class="form-check-label user-select-none"
                      for="needHelp"
                    >
                      Нужен подъем на этаж
                    </label>
                  </div>
                  <div v-show="needHelp">
                    <select class="form-select">
                      <option value="1">1</option>
                      <option value="2" selected>2</option>
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
                <div
                  class="rounded border bg-white p-1 ps-2 mt-2"
                  v-if="needHelp"
                >
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
                    <label
                      class="form-check-label user-select-none"
                      for="haveElevator"
                    >
                      Есть лифт, вмещающий весь заказ
                    </label>
                  </div>
                </div>
              </div>
              <calendar />
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
                    class="form-control"
                    name=""
                    id=""
                    cols="30"
                    rows="3"
                    placeholder="Комментарий"
                  ></textarea>
                </section>
              </div>
              <button class="btn btn-success">Подтвердить</button>
            </div>
            <div
              v-else
              class="mt-3 d-flex border rounded-3 bg-white shadow-sm p-3"
              style="height:200px"
            >
              <div style="font-size: 14px" class="w-100">
                <p class="fw-bold m-0 fs-6">
                  TECH Москва ТЦ «Универмаг Московский» ТП
                </p>
                <p class="m-0">г. Москва, Комсомольская площадь, дом 6</p>
                <p class="mb-1">Пн-Вс с 09:00 до 22:00</p>
                <p class="mb-2">Завтра (c 10:00)</p>
              </div>
              <yandex-map
                class="height-auto w-100 d-none d-md-block"
                :coords="coords"
                :zoom="14"
                :controls="[]"
              >
                <ymap-marker
                  :coords="coords"
                  marker-id="123"
                  hint-content="some hint"
                />
              </yandex-map>
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
                  В магазине можно оплатить наличными, бонусами ProZaPass,
                  картой или в кредит</label
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
          </div>
        </section>
      </div>
      <div class="pt-3">
        <button class="btn btn-lg btn-primary">Подтвердить заказ</button>
        <p class="mt-3 fs-7 mb-1">
          Подтверждая заказ, Вы соглашаетесь с условиями
          <a href="" target="_blank"> политики конфиденциальности</a> и
          <a href="" target="_blank">правилами продажи.</a>
        </p>
      </div>
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
import Vue from 'vue'
import calendar from '../components/checkout/calendar.vue'

export default {
  components: { calendar },
  data () {
    return {
      person: 'individual',
      delivery: 'pickup',
      needHelp: false,
      haveElevator: false,
      phone: '',
      coords: [55.775884925102, 37.660173979297845],
      comment: '',
      addComment: false,
      payment: 'payment on delivery',
      paymentMethod: 'cash',
      street: ''
    }
  }
}
Vue.directive('phone', {
  bind (el) {
    el.oninput = function (e) {
      if (!e.isTrusted) {
        return
      }
      const x = this.value
        .replace(/\D/g, '')
        .match(/(\d{0,1})(\d{0,3})(\d{0,3})(\d{0,2})(\d{0,2})/)
      x[1] = '+7'
      this.value = !x[3]
        ? x[1] + x[2]
        : x[1] +
          ' (' +
          x[2] +
          ') ' +
          x[3] +
          (x[4] ? '-' + x[4] : '') +
          (x[5] ? '-' + x[5] : '')
    }
  }
})
</script>
