import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/CalculatorView.vue')
    },
    {
      path: '/result',
      name: 'result',
      component: () => import('../components/ResultCalcul.vue')
    }
  ]
})

export default router
