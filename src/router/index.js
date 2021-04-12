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
import UserOrders from '../pages/UserOrders'
import ProductList from '../pages/ProductList'

import CategoryList from '../components/catalog/CategoryList'
import CatalogList from '../components/catalog/CatalogList'
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
      name: 'home',
      component: Home
    },
    {
      path: BASE_URL + '/catalog',
      component: Catalog,
      children: [
        {
          path: '',
          name: 'catalogList',
          component: CatalogList
        },
        {
          path: ':name',
          name: 'catalogCategory',
          component: CategoryList
        }
      ]
    },
    {
      path: BASE_URL + '/contacts',
      name: 'contacts',
      component: Contacts
    },
    {
      path: BASE_URL + '/orders',
      name: 'orders',
      component: ShopCard
    },
    {
      path: BASE_URL + '/orders/:uid',
      name: 'user orders',
      component: UserOrders
    },
    {
      path: BASE_URL + '/profile',
      name: 'profile',
      component: Profile,
      beforeEnter: authGuard.profile
    },
    {
      path: BASE_URL + '/checkout',
      name: 'checkout',
      component: Checkout
    },
    {
      path: BASE_URL + '/login',
      name: 'login',
      component: Login,
      beforeEnter: authGuard.login
    },
    {
      path: BASE_URL + '/registration',
      name: 'registation',
      component: Registration,
      beforeEnter: authGuard.login
    },
    {
      path: BASE_URL + '/:id',
      name: 'productList',
      component: ProductList
    },
    {
      path: BASE_URL + '/:idProduct',
      name: 'product',
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
      name: '404 page',
      component: Page404
    }
  ],
  mode: 'history'
})
