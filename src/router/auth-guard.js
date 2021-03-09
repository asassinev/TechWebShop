import store from '../store/index'

export default function (to, from, next) {
  if (store.getters.getUs) {
    next()
  } else {
    next('/login?loginError=true')
  }
}
