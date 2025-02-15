import { createRouter, createWebHistory } from 'vue-router'
import LoginView from '@/views/LoginView.vue'
import LayoutView from '@/views/LayoutView.vue'
import HomeView from '@/views/components/HomeView.vue'
import ProblemsView from '@/views/components/ProblemsView.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: LayoutView,
      children: [{
        path: '/home',
        component: HomeView
      }, {
        path: '/problems',
        component: ProblemsView
      }, {
        path: '/history',
        component: () => import('@/views/components/HistoryView.vue')
      }
      ]
    },
    {
      path: '/login',
      component: LoginView,
    }
  ],
})

export default router
