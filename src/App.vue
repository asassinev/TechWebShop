<template>
  <div id="app">
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container">
        <router-link class="navbar-brand" to="/">Tech</router-link>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavDropdown">
          <ul class="navbar-nav row w-100">
            <li class="navbar__item dropdown col">
              <p class="navbar__link dropdown-toggle" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Каталог
              </p>
              <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                <router-link v-for="(link, id) in catalog" :key="id" class="dropdown-item" :to="link.path">
                  {{ link.title }}
                </router-link>
              </div>
            </li>
            <li class="navbar__item col" v-for="(link, id) in navbar" :key="id">
              <router-link class="navbar__link" :to="link.path">
                <i :class="link.iconClass"></i>
                {{ link.title }}
              </router-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <!-- <div class="navbar">
      <div class="container">
        <router-link class="navbar__title" to="/">Tech</router-link>
        <div class="row text-center navbar-width">
          <div class="navbar__item col-3">
            <div class="dropdown">
              <p class="dropdown-toggle navbar__link" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Каталог
              </p>
              <div class="dropdown-menu" aria-labelledby="dropdownMenuLink">
                <router-link v-for="(link, id) in catalog" :key="id" class="dropdown-item" :to="link.path">{{ link.title }}</router-link>
              </div>
            </div>
          </div>
          <div class="navbar__item col-3" v-for="(link, id) in navbar" :key="id">
            <router-link class="navbar__link" :to="link.path">
              <i :class="link.iconClass"></i>
              {{ link.title }}
              </router-link>
          </div>
        </div>
      </div>
    </div> -->
    <router-view/>
  </div>
</template>

<script>
export default {
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
          path: '/shopping-cart',
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
          path: '/catalog/desktop',
          title: 'Компьютеры'
        },
        {
          path: '/catalog/notebook',
          title: 'Ноутбуки'
        },
        {
          path: '/catalog/computer-components',
          title: 'Комплектующие'
        },
        {
          path: '/catalog/smartphone',
          title: 'Смартфоны'
        }
      ]
    }
  }
}
</script>

<style lang="scss">
html {
  height: 100%;
}
.navbar {
  box-shadow: 0 0 10px rgba(0,0,0,0.5);

  &-width {
    width: 95%;
  }

  &__title {
    font-size: 28px;
    margin: 0;
    color: #2c3e50;
    text-decoration: none;
    &:hover {
      color: #6092c4;
      text-decoration: none;
    }
  }

  &__item {
    padding: 6px 0;
    font-size: 16px;
    @media (min-width: 992px) {
      padding: 0;
      font-size: 18px;
    }
  }

  &__link {
    width: fit-content;
    margin: 0 auto;
    color: #2c3e50;
    text-decoration: none;

    &:hover {
      cursor: pointer;
      color: #6092c4;
      text-decoration: none;
    }
  }
}

.dropdown {
  color: #2c3e50;
  &-menu {
    top: 168%;
    left: 30%;
  }
}

</style>
