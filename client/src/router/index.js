import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },  
  {
    path: '/quiz',
    name: 'Quiz',
    component: () => import (/* webpackChunkName: "register" */ '../views/Quiz.vue')
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
