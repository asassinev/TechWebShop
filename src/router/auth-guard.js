const authGuard = {
  profile (to, from, next) {
    if (localStorage.getItem('user')) {
      next()
    } else {
      next('/TechWebShop/login?loginError=true')
    }
  },
  login (to, from, next) {
    if (localStorage.getItem('user')) {
      next('/TechWebShop/profile')
    } else {
      next()
    }
  }
}

export default authGuard
