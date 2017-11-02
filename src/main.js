// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import MenuUtils from '@/utils/MenuUtils'

Vue.config.productionTip = false
Vue.use(ElementUI)

let data = JSON.parse(window.sessionStorage.getItem('menuData'))
if (data) {
  let routes = []
  MenuUtils(routes, data)
  router.addRoutes(routes)
  window.sessionStorage.removeItem('isLoadNodes')
}
router.beforeEach((route, redirect, next) => {
  let data = JSON.parse(window.sessionStorage.getItem('menuData'))
  if (data && route.path === '/login') {
    window.sessionStorage.removeItem('menuData')
    window.sessionStorage.removeItem('isLoadNodes')
    window.location.href = '/'
    return false
  }
  if (!data && route.path !== '/login') {
    next({path: '/login'})
  } else {
    if (route.path) {
      next()
    } else {
      next({path: '/404'})
    }
  }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: {App}
})
