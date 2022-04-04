import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home'
import FAQ from '../views/FAQ'
import Login from "@/views/Login"

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
  },
  {
    path: '/faq',
    name: 'faq',
    component: FAQ
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  }
]

const router = new VueRouter({
  routes,
  mode:'history'
})

export default router
