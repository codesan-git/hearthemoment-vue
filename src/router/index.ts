import { createRouter, createWebHistory } from 'vue-router'
import FirstView from '@/views/FirstView.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: FirstView
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: () => import("@/views/DashboardView.vue")
    }
  ]
})

export default router
