<template>
  <div class="mt-3">
    <p class="fs-6 fw-bold">Выберите дату и время доставки</p>
    <div class="calendar text-center">
      <div class="d-flex">
        <div style="flex-basis: calc(100% / 7);" v-for="d in day" :key="d.id">
          {{ d }}
        </div>
      </div>
      <div>
        <div v-for="week in days" :key="week.id" class="d-flex flex-wrap">
          <div
            style="flex-basis: calc(100% / 7);"
            class="calendar__day rounded-3"
            v-for="(day, index) in week"
            :key="index"
            @click="checkedDate(day)"
            :class="{
              'calendar__active bg-primary text-white':
                day.checked === true && day.price !== '',
              'calendar__day-disabled': day.price === ''
            }"
          >
            <div class="calendar__day-index">{{ day.index }}</div>
            <div
              class="calendar__price"
              :class="{
                'calendar__price-active text-white-50':
                  day.checked === true && day.price !== ''
              }"
            >
              {{ day.price }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      month: new Date().getMonth(),
      year: new Date().getFullYear(),
      cDay: new Date().getDate(),
      dFirstMonth: 1,
      day: ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'],
      days: [[], []]
    }
  },
  created () {
    this.getCalendar()
  },
  methods: {
    getCalendar () {
      var week = 0
      var dlast = new Date(this.year, this.month + 1, 0).getDate()
      var counterDay = 0
      var price = ''
      var dayWeek = new Date(this.year, this.month, this.cDay).getDay()
      for (let i = this.cDay - dayWeek + 1; i <= this.cDay + 14; i++) {
        if (counterDay === 1) {
          price = 'от 450 р.'
        }
        if (counterDay > 2) {
          price = 'от 290 р.'
        }
        if (counterDay > 9) {
          price = ''
        }
        if (dayWeek > 1) {
          dayWeek--
          this.days[week].push({ index: i, price: '' })
        } else if (
          new Date(this.year, this.month, i).getDay() !== this.dFirstMonth ||
          counterDay === 0
        ) {
          if (i > dlast) {
            this.days[week].push({
              index: i - dlast,
              checked: false,
              price: price
            })
          } else {
            this.days[week].push({ index: i, checked: false, price: price })
          }
          counterDay++
        } else {
          week++
          if (week > 1) {
            break
          }
          if (i > dlast) {
            this.days[week].push({
              index: i - dlast,
              checked: false,
              price: price
            })
          } else {
            this.days[week].push({ index: i, checked: false, price: price })
          }
          counterDay++
        }
      }
      if (this.days[0].length > 0) {
        for (let i = this.days[0].length; i < 7; i++) {
          this.days[0].unshift('')
        }
      }
    },
    checkedDate (day) {
      if (day.price !== '') {
        this.days.forEach(w => {
          w.forEach(d => {
            if (d !== '') {
              if (d.index === day.index) {
                d.checked = true
                this.$store.commit('setDeliveryDate', d)
              } else {
                d.checked = false
              }
            }
          })
        })
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.calendar {
  &__active {
    font-weight: bold;
    background-color: #fff7da;
  }
  &__day {
    padding: 8px 0;
    cursor: pointer;
    font-size: 16px;
    &:hover {
      background-color: #fbfbfb;
    }
    color: #333;
    &-index {
      margin: 0;
    }
    &-disabled {
      color: #ddd;
    }
  }
  &__price {
    color: #ccc;
    font-size: 9px;
    margin: 0;
    &-active {
      font-weight: bold;
      color: #a97d0b;
    }
  }
}
</style>
