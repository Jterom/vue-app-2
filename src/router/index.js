import Vue from 'vue'
import VueRouter from 'vue-router'
import Filmes from '../views/Filmes.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Filmes',
    component: Filmes
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
