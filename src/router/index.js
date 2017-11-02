import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/Home'
import Login from '@/views/Login'
import NotFound from '@/views/404'
import Main from '@/views/Main'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
      children: [
        {path: '/404', component: NotFound, name: '404', leaf: true, hidden: true},
        {path: '/main', component: Main, name: 'Main', leaf: true, hidden: true}
      ],
      hidden: true
    },
    {
      path: '/login',
      name: 'Login',
      component: Login,
      hidden: true
    }
  ]
})
