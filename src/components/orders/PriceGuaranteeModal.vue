<template>
  <div>
    <div
      type="button"
      class="p-3 d-flex justify-content-between fs-7"
      data-mdb-toggle="modal"
      data-mdb-target="#staticBackdrop"
    >
      Нашли дешевле? Снизим цену
      <span class="b"><i class="fas fa-chevron-right"></i></span>
    </div>
    <div
      class="modal fade"
      id="staticBackdrop"
      data-mdb-keyboard="false"
      tabindex="-1"
      aria-labelledby="staticBackdropLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-dialog-centered modal-lg">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">
              Гарантия лучшей цены
            </h5>
            <button
              type="button"
              class="btn-close"
              data-mdb-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body">
            <div class="fs-6">
              <p>
                <span class="border rounded-circle bg-light p-counter">1</span>
                Выберите товар
              </p>
              <p>
                <span class="border rounded-circle bg-light p-counter">2</span>
                Укажите ссылку на сайт конкурента и отправьте форму
              </p>
              <p>
                <span class="border rounded-circle bg-light p-counter">3</span>

                Оформите заказ
              </p>
              <p>
                <span class="border rounded-circle bg-light p-counter">4</span>
                Ожидайте звонка оператора с предложением по снижению цены
              </p>
            </div>
            <div>
              <div
                class="text-primary"
                style="border-bottom: 1px dotted #1266f1; width: fit-content"
                type="button"
                data-mdb-toggle="collapse"
                data-mdb-target="#termOfAction"
                aria-expanded="false"
                aria-controls="termOfAction"
              >
                Показать условия акции
              </div>
              <div class="collapse" id="termOfAction">
                <div class="card card-body fs-7">
                  <p>Уважаемые покупатели!</p>
                  <p>
                    В сети магазинов цифровой TECH беспрецедентная акция -
                    <span class="text-danger"
                      >«Скинем 500 рублей от цены конкурента!»*</span
                    >
                  </p>
                  <p>Например:</p>
                  <p>
                    Холодильник в магазине TECH стоит 25 000 рублей. В магазине
                    конкурента* Вы нашли такую же модель за 24 500 рублей.
                    <br />
                    Исходя из условий акции,
                    <strong> Вы получаете скидку 500 рублей</strong> от цены
                    конкурента <strong>24 500 - 500 = 24 000 рублей.</strong>
                    <br />
                    Итого, Вы получаете холодильник за 24 000 рублей.
                  </p>
                  <ol>
                    Для получения скидки на товар Вы должны выполнить несколько
                    простых шагов:
                    <li>Положить понравившийся товар в корзину.</li>
                    <li>
                      Нажать на строку «Нашли дешевле? Сделаем скидку!» под
                      товаром.
                    </li>
                    <li>
                      В появившуюся вкладку вставить ссылку на сайт конкурента с
                      аналогичным товаром.
                    </li>
                    <li>Нажать "Оформить заказ".</li>
                  </ol>
                  <i>
                    <ul>
                      Условия акции:
                      <li>
                        В акции участвует товар стоимостью от 3 000 рублей -
                        цена конкурента.
                      </li>
                      <li>
                        Срок проведения акции 1.01.2021 г. по 31.12.2021 г.
                      </li>
                      <li>
                        Акция действует только в пределах административных
                        границ Архангельской, Владимирской, Вологодской,
                        Ивановской, Костромской, Нижегородской и Ярославской
                        областей, а также г. Пудож (Республика Карелия) и
                        г.Нарьян-Мар (Ненецкий АО).
                      </li>
                      <li>
                        Территориально магазин конкурента, в котором имеется
                        товар с более низкой ценой, должен находиться в одном
                        городе с магазином TECH, в котором совершается покупка.
                      </li>
                      <li>
                        Акция действует при покупке товара в интернет магазине
                        TECH-shop.ru и технопоинт.рф. и в розничных магазинах
                        TECH.
                      </li>
                      <li>Сайт технопоинт.рф не является конкурентом.</li>
                      <li>
                        В акции участвуют товары с разницей в стоимости более 10
                        рублей.
                      </li>
                      <li>
                        В акции участвует только товар, продаваемый через
                        магазины конкурентов - федеральных (региональных)
                        сетевых компаний по продаже цифровой, бытовой техники.
                        Список конкурентов: «Эльдорадо»; «МВИДЕО»; «ЕВРОСЕТЬ»;
                        «СВЯЗНОЙ»; «БИЛАЙН»; «МТС»; «МЕГАФОН»; «САМСУНГ —
                        ФИРМЕННЫЕ МАГАЗИНЫ»; «Радуга»; «Рослан»;
                        «Ноу-Хау»;«Теле2»; «Apple»; «Ситилинк»;«Юлмарт»;
                        «Позитроника»; «Мир»; «Техпром»; «Система»; «ОРИОН»;
                        «Юлмарт»; «Онлайн Трейд»; «Технопарк»; «Фирменный
                        интернет-магазин Sony»; «Техновидео»; «Наша техника»;
                        «Холодильник.ру»; «ВсеИнструменты.ру»; «Бигам.ру»;
                        «ЛеруаМерлен»; «220 вольт»; «Ярославич»; «Феникс»,
                        «elektronika-nn.ru», «ozon.ru», «re-store.ru»,
                        «simona-bt.ru», «wildberries.ru», «techport.ru».
                      </li>
                      <li>
                        Акция не действует при покупке по безналичному расчету
                        для юридических лиц и при продажах физическим лицам
                        более одной единицы товара.
                      </li>
                      <li>
                        В акции не принимает участие товар, продаваемый: в
                        торговых ларьках, магазинах-складах, магазинах
                        терминальной торговли, павильонах, уличных открытых
                        торговых центрах, рынках, складах.
                      </li>
                      <li>
                        <ul>
                          Интересующий покупателя товар должен быть у
                          конкурента:
                          <li>
                            в наличии в магазине соответствующего города или
                            доставка доступна до 15 дней,
                          </li>
                          <li>
                            новым, исправным, в неповрежденной фирменной
                            упаковке, в полной комплектности, с аналогичными
                            условиями гарантии,
                          </li>
                          <li>
                            той же марки (бренда), наименования и кода модели
                            производителя, что и в магазине TECH,
                          </li>
                          <li>
                            не участвует в любых акциях (примеры акций (список
                            не окончательный): «Утилизация», «Купи аксессуар и
                            получи скидку на смартфон», «Купи услугу - получи
                            скидку», «Скидка на комплект КБТ», «Купи смартфон
                            получи второй в подарок», «Бандл», «Последняя цена»
                            и прочее).
                          </li>
                        </ul>
                      </li>
                      <li>
                        В акции не участвует уцененный товар в магазинах
                        конкурентов и товар с недостатками, а также товары с
                        признаком «Витринный образец» и «Товар почти
                        закончился».
                      </li>
                      <li>
                        Акция не распространяется на товары из категории
                        "Видеокарты".
                      </li>
                      <li>
                        Программа не применяется при разнице цен с конкурентом
                        более 50%.
                      </li>
                      <li>
                        Ценой конкурента считается цена без учёта дополнительных
                        скидок, в том числе накопительных, а также иных
                        параметров снижения цены в рамках программ лояльности
                        (клубные программы, скидки за онлайн-оплату, акции типа
                        «Торгуйся онлайн»).
                      </li>
                      <li>
                        Цена конкурента не является ошибкой и не обусловлена
                        техническим сбоем сайта конкурента.
                      </li>
                      <li>
                        Возврат денежных средств за товар, имеющий недостатки,
                        осуществляется при наличии заключения сервисного центра
                        в установленные гарантией сроки и по той стоимости,
                        которая была указана в чеке по акции с учетом скидки.
                      </li>
                      <li>
                        Сотрудники компании оставляют за собой право на проверку
                        информации, предоставленной покупателем. В случае не
                        подтверждения предоставленной информации на официальном
                        сайте конкурента с учетом условий перечисленных выше,
                        сотрудники компании вправе отказать покупателю. Если на
                        товар начисляются бонусы ProZaPass, клиенту необходимо
                        выбрать: либо участие в акции "Гарантия лучшей цены" на
                        сайте, либо начисление бонусов. Участие в акции
                        "Гарантия лучшей цены" на сайте и начисление бонусов
                        одновременно невозможно.
                      </li>
                    </ul>
                  </i>
                  ОРГАНИЗАТОР АКЦИИ: ООО «TECH». ОГРН 1198541202230. ИНН
                  2540167061. ЮР.АДРЕС: 692018, ПРИМОРСКИЙ КРАЙ, Г. ВЛАДИВОСТОК,
                  ПР-Т 67-ЛЕТИЯ ВЛАДИВОСТОКА, Д. 155, К. 6, ОФ. 2.
                </div>
              </div>
            </div>
            <div class="mt-4">
              <div v-for="(inputForm, index) in inputForms" :key="inputForm.id">
                <InputForm @delete-input-form="inputForms.splice(index, 1)" />
              </div>
              <div
                v-if="inputForms.length < orders.length"
                class="text-primary"
                style="border-bottom: 1px dotted #1266f1; width: fit-content"
                type="button"
                @click="inputForms.push({ id: id++ })"
              >
                Еще один товар
              </div>
            </div>
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-secondary"
              data-mdb-dismiss="modal"
              @click="clearModal"
            >
              Отменить
            </button>
            <button
              type="button"
              class="btn btn-primary"
              @click="getOrdersLinks"
            >
              Отправить
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import InputForm from './InputForm'
export default {
  data () {
    return {
      inputForms: [{ id: 0 }],
      id: 1
    }
  },
  components: {
    InputForm
  },
  computed: {
    orders () {
      return this.$store.getters.getOrders
    }
  },
  watch: {
    inputForms () {
      if (this.inputForms.length < 1) {
        this.inputForms.push(this.id++)
      }
    }
  },
  methods: {
    getOrdersLinks () {
      var selected = document.getElementsByTagName('select')
      var links = document.getElementsByTagName('input')
      selected.forEach(e => {
        console.log(e.value)
      })
      links.forEach(e => {
        console.log(e.value)
      })
    },
    clearModal () {
      var selected = document.getElementsByTagName('select')
      var links = document.getElementsByTagName('input')
      selected.forEach(e => {
        e.value = 'Выберите товар'
      })
      links.forEach(e => {
        e.value = null
      })
      this.inputForms = []
    }
  }
}
</script>

<style lang="scss" scoped>
.icon-delete {
  font-size: 14px;
}
.p-counter {
  padding: 2px 8px;
}
</style>
