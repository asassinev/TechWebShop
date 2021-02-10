import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../components/Home'
import Catalog from '../components/Catalog'
import Contacts from '../components/Contacts'
import ShopCard from '../components/ShopCard'
import Profile from '../components/Profile'
import Page404 from '../components/Page404'
import Login from '../components/auth/Login'
import Registration from '../components/auth/Registration'
import ProductList from '../components/shared/ProductList'
import authGuard from './auth-guard'

Vue.use(VueRouter)

export default new VueRouter({
  routes: [
    {
      path: '/',
      component: Home
    },
    {
      path: '/catalog/:name',
      name: 'catalog',
      component: Catalog
    },
    {
      path: '/contacts',
      component: Contacts
    },
    {
      path: '/shopping-cart',
      component: ShopCard
    },
    {
      path: '/profile',
      component: Profile,
      beforeEnter: authGuard
    },
    {
      path: '/login',
      component: Login
    },
    {
      path: '/registration',
      component: Registration
    },
    {
      path: '/products/:id',
      component: ProductList
    },
    {
      path: '*',
      component: Page404
    }
  ],
  mode: 'history'
})
