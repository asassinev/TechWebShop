<template>
  <nav
    class="navbar navbar-expand-lg navbar-dark bg-primary sticky-top text-center"
  >
    <div class="container">
      <router-link class="navbar-brand me-5" to="/">TECH</router-link>
      <button
        class="navbar-toggler"
        type="button"
        data-mdb-toggle="collapse"
        data-mdb-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="fas fa-bars"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav row container">
          <li class="nav-item dropdown col">
            <a
              class="nav-link dropdown-toggle"
              id="navbarDropdownMenuLink"
              role="button"
              data-mdb-toggle="dropdown"
              aria-expanded="false"
            >
              Каталог
            </a>
            <ul
              class="dropdown-menu dropdown-menu-light"
              aria-labelledby="navbarDarkDropdownMenuLink"
            >
              <li
                v-for="(link, id) in catalog"
                :key="id"
                @click="setRouteParams(link.name)"
              >
                <router-link to="#" class="dropdown-item">
                  {{ link.title }}
                </router-link>
              </li>
            </ul>
          </li>
          <li class="nav-item col" v-for="(link, id) in navbar" :key="id">
            <router-link class="nav-link" :to="link.path">
              <i :class="link.iconClass"></i>
              <span
                class="position-relative"
                v-if="totalCountProducts > 0 && link.title === ' Корзина'"
                ><span class="position-absolute shop-card__count-products"
                  >{{ totalCountProducts }}
                </span>
                <span class="ms-3"
                  >{{ (+totalPrice).toLocaleString() }} ₽
                </span>
              </span>
              <span v-else>{{ link.title }}</span>
            </router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  methods: {
    setRouteParams (nameUrl) {
      this.$store.commit('setCategories', nameUrl)
      this.$router.push(`/catalog/${nameUrl}`).catch(() => {})
    }
  },
  computed: {
    totalCountProducts () {
      return this.$store.getters.getTotalCountProducts
    },
    totalPrice () {
      return this.$store.getters.getTotalPrice
    }
  },
  data () {
    return {
      navbar: [
        {
          iconClass: 'fas fa-phone-square-alt',
          path: '/contacts',
          title: ' Контакты'
        },
        {
          iconClass: 'fas fa-shopping-cart',
          path: '/orders',
          title: ' Корзина'
        },
        {
          iconClass: 'fas fa-user-circle',
          path: '/profile',
          title: ' Профиль'
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
    background-color: #00913b;
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
  &-menu {
    left: auto !important;
    right: 43%;
    transform: translateX(50%);
  }
  &-item {
    cursor: pointer;
  }
}
</style>
