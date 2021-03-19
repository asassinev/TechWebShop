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

import Login from '../components/auth/Login'
import Registration from '../components/auth/Registration'

import ProductList from '../components/productList/ProductList'
import ProductInformation from '../components/product/ProductInformation'
import ProductDescription from '../components/product/ProductDescription'
import ProductСharacteristics from '../components/product/ProductСharacteristics'
import ProductReviews from '../components/product/ProductReviews'

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
      path: '/checkout',
      component: Checkout
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
      path: '/productList/:id',
      component: ProductList
    },
    {
      path: '/product/:idProduct',
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
      path: '*',
      component: Page404
    }
  ],
  mode: 'history'
})
