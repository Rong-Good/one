import Vue from 'vue'
import VueRouter from 'vue-router'

const Home =() => import('../views/Home.vue')
const login =() => import('../views/login.vue')

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    redirect: '/login'
  },
  {
    path:'/login',
    name:'login',
    component: login
  },
  {
    path:'/Home',
    name:'Home',
    component: Home
  }
]

const router = new VueRouter({
  routes
})

export default router
