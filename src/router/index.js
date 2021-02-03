import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../components/Home'
import Catalog from '../components/Catalog'
import Contacts from '../components/Contacts'
import ShopCard from '../components/ShopCard'
import Profile from '../components/Profile'
import Page404 from '../components/Page404'
import Desktop from '../components/catalog/Desktop'
import Notebook from '../components/catalog/Notebook'
import ComputerComponents from '../components/catalog/ComputerComponents'
import Smartphone from '../components/catalog/Smartphone'
import Login from '../components/auth/Login'
import Registration from '../components/auth/Registration'
import authGuard from './auth-guard'

Vue.use(VueRouter)

export default new VueRouter({
  routes: [
    {
      path: '/',
      component: Home
    },
    {
      path: '/catalog',
      component: Catalog,
      children: [
        {
          path: 'desktop',
          component: Desktop
        },
        {
          path: 'notebook',
          component: Notebook
        },
        {
          path: 'computer-components',
          component: ComputerComponents
        },
        {
          path: 'smartphone',
          component: Smartphone
        }
      ]
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
      path: '*',
      component: Page404
    }
  ],
  mode: 'history'
})
