import Vue from 'vue'
import VueRouter from 'vue-router'

import authGuard from './auth-guard'

import Home from '../pages/Home'
import Catalog from '../pages/Catalog'
import Contacts from '../pages/Contacts'
import ShopCard from '../pages/ShopCard'
import Profile from '../pages/Profile'
import Page404 from '../pages/Page404'
import Checkout from '../pages/Checkout'
import Login from '../pages/Login'
import Registration from '../pages/Registration'

import ProductList from '../components/productList/ProductList'
import ProductInformation from '../components/product/ProductInformation'
import ProductDescription from '../components/product/ProductDescription'
import ProductСharacteristics from '../components/product/ProductСharacteristics'
import ProductReviews from '../components/product/ProductReviews'

Vue.use(VueRouter)

const BASE_URL = '/TechWebShop'

export default new VueRouter({
  routes: [
    {
      path: BASE_URL + '/',
      component: Home
    },
    {
      path: BASE_URL + '/catalog/:name',
      name: 'catalog',
      component: Catalog
    },
    {
      path: BASE_URL + '/contacts',
      component: Contacts
    },
    {
      path: BASE_URL + '/orders',
      component: ShopCard
    },
    {
      path: BASE_URL + '/profile',
      component: Profile,
      beforeEnter: authGuard.profile
    },
    {
      path: BASE_URL + '/checkout',
      component: Checkout
    },
    {
      path: BASE_URL + '/login',
      component: Login,
      beforeEnter: authGuard.login
    },
    {
      path: BASE_URL + '/registration',
      component: Registration,
      beforeEnter: authGuard.login
    },
    {
      path: BASE_URL + '/productList/:id',
      component: ProductList
    },
    {
      path: BASE_URL + '/product/:idProduct',
      component: ProductInformation,
      children: [
        {
          path: 'description',
          name: 'description',
          component: ProductDescription
        },
        {
          path: 'reviews',
          name: 'reviews',
          component: ProductReviews
        },
        {
          path: 'characteristics',
          name: 'characteristics',
          component: ProductСharacteristics
        }
      ]
    },
    {
      path: BASE_URL + '*',
      component: Page404
    }
  ],
  mode: 'history'
})
