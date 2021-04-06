<template>
  <nav
    class="navbar navbar-expand-lg navbar-dark bg-primary sticky-top text-center"
  >
    <div class="container">
      <router-link class="navbar-brand me-5" to="/TechWebShop/"
        >TECH</router-link
      >
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
        ref="navbarBtn"
      >
        <span class="fas fa-bars"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <div class="navbar-nav flex-fill">
          <div class="nav-item col dropdown">
            <div class="text-center text-lg-start">
              <button
                class="dropdown-toggle btn btn-primary"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Каталог
              </button>
              <ul
                class="dropdown-menu dropdown-menu-light"
                aria-labelledby="dropdown"
              >
                <li
                  v-for="(link, id) in catalog"
                  :key="id"
                  @click="routerLinkHundler2(link)"
                >
                  <router-link
                    :to="'/TechWebShop/catalog/' + link.name"
                    class="dropdown-item"
                  >
                    {{ link.title }}
                  </router-link>
                </li>
              </ul>
            </div>
          </div>
          <div class="nav-item col" v-for="(link, id) in navbar" :key="id">
            <div @click="routerLinkHundler">
              <router-link class="nav-link" :to="link.path">
                <i :class="link.iconClass"></i>
                <span
                  class="position-relative"
                  v-if="totalCountProducts > 0 && link.title === ' Корзина'"
                  ><span
                    class="position-absolute shop-card__count-products bg-secondary"
                    >{{ totalCountProducts }}
                  </span>
                  <span class="ms-3"
                    >{{ (+totalPrice).toLocaleString() }} ₽
                  </span>
                </span>
                <span v-else>{{ link.title }}</span>
              </router-link>
            </div>
          </div>
          <div class="nav-item col" v-if="!userName">
            <router-link
              class="nav-link"
              to="/TechWebShop/login"
              @click="routerLinkHundler"
              ><i class="fas fa-user-circle"></i> Войти</router-link
            >
          </div>
          <div v-else class="nav-item dropdown col text-lg-end">
            <button
              class="dropdown-toggle btn btn-primary"
              role="button"
              id="dropdownUser"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              {{ userName.firstName || 'Аккаунт' }}
            </button>
            <ul
              class="dropdown-menu dropdown-menu-end"
              aria-labelledby="dropdownUser"
            >
              <li @click="routerLinkHundler">
                <router-link to="/TechWebShop/profile" class="dropdown-item">
                  Личные данные
                </router-link>
              </li>
              <li @click="routerLinkHundler">
                <router-link
                  :to="'/TechWebShop/orders/' + $store.getters.getUs._id"
                  class="dropdown-item"
                >
                  Заказы
                </router-link>
              </li>
              <li @click="routerLinkHundler">
                <button
                  @click="$store.dispatch('logoutUser')"
                  class="dropdown-item"
                >
                  Выход
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  computed: {
    totalCountProducts () {
      return this.$store.getters.getTotalCountProducts
    },
    totalPrice () {
      return this.$store.getters.getTotalPrice
    },
    userName () {
      return this.$store.getters.getUs
    }
  },
  data () {
    return {
      navbar: [
        {
          iconClass: 'fas fa-phone-square-alt',
          path: '/TechWebShop/contacts',
          title: ' Контакты'
        },
        {
          iconClass: 'fas fa-shopping-cart',
          path: '/TechWebShop/orders',
          title: ' Корзина'
        }
      ],
      catalog: [
        {
          name: 'desktop',
          title: 'Компьютеры и ноутбуки'
        },
        {
          name: 'computer-components',
          title: 'Комплектующие'
        },
        {
          name: 'smartphone',
          title: 'Смартфоны'
        }
      ]
    }
  },
  methods: {
    routerLinkHundler () {
      if (window.innerWidth < 992) {
        this.$refs.navbarBtn.click()
      }
    },
    routerLinkHundler2 (link) {
      if (window.innerWidth < 992) {
        this.$refs.navbarBtn.click()
      }
      localStorage.setItem(
        'catalog',
        JSON.stringify({
          title: link.title,
          categories: link.name
        })
      )
    }
  }
}
</script>

<style lang="scss" scoped>
.navbar {
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  &-width {
    width: 95%;
  }
}
.shop-card {
  &__count-products {
    left: -12px;
    border-radius: 1rem;
    padding: 0px;
    width: 20px;
    height: 20px;
    top: -9px;
    font-size: 12px;
    line-height: 1.25rem;
  }
}
//   &__title {
//     font-size: 28px;
//     margin: 0;
//     color: #2c3e50;
//     text-decoration: none;
//     &:hover {
//       color: #6092c4;
//       text-decoration: none;
//     }
//   }

//   &__item {
//     padding: 6px 0;
//     font-size: 16px;
//     @media (min-width: 992px) {
//       padding: 0;
//       font-size: 18px;
//     }
//   }

//   &__link {
//     width: fit-content;
//     margin: 0 auto;
//     color: #2c3e50;
//     text-decoration: none;

//     &:hover {
//       cursor: pointer;
//       color: #6092c4;
//       text-decoration: none;
//     }
//   }
// }

.dropdown {
  &-item {
    cursor: pointer;
  }
}
</style>
