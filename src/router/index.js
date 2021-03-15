import Vue from 'vue'
import VueRouter from 'vue-router'
import Films from '../views/Films.vue'
import Detail from '../views/Detail.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Films',
    component: Films
  },
    {
        path: '/Detail/:id',
        name: 'Detail',
        component: Detail
    }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
