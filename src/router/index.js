import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home'
import FAQ from '../views/FAQ'
import Login from "@/views/Login"
import TicketsLayout from "@/views/TicketsLayout"
import state from "@/state"
import Tickets from "@/components/Tickets";
import NewTicket from "@/components/NewTicket"
import Ticket from "@/components/Ticket"
import NotFound from "@/views/NotFound";

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
    component: Login,
    meta: {
      guest: true
    }
  },
  {
    path: '/tickets',
    component: TicketsLayout,
    children: [
      {path: '', name: 'tickets', component: Tickets},
      {path: 'new', name: 'new-ticket', component: NewTicket},
      {path: ':id',name: 'ticket',component: Ticket, props:route => ({id: route.params.id})}
    ],
    meta: {
      private: true
    }
  },
  {
    path: '*',
    component: NotFound,
    name: 'notfound'
  }
]

const router = new VueRouter({
  routes,
  mode:'history',
  scrollBehavior(to,from,savedPosition){
    if(savedPosition) {
      return savedPosition
    }
    if (to.hash) {
      return {selector: to.hash}
    }
    return {x:0,y:0}
  }
})

router.beforeEach((to,from,next) => {
  if(to.matched.some(r => r.meta.private) && !state.user){
    next({
      name:'login',
      params:{
        wantedRoute: to.fullPath
      }
    })
    return
  }
  if(to.matched.some(r => r.meta.guest) && state.user) {
    next({name: 'home'})
    return
  }
  next()
})

export default router
