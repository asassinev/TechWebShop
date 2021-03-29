const authGuard = {
  profile (to, from, next) {
    if (localStorage.getItem('user')) {
      next()
    } else {
      next('/login?loginError=true')
    }
  },
  login (to, from, next) {
    if (localStorage.getItem('user')) {
      next('/profile')
    } else {
      next()
    }
  }
}

export default authGuard
