import { createRouter, createWebHistory } from 'vue-router'
import { isAuthenticated } from '@/router/middleware/auth'
import HomeView from '@/views/HomeView.vue'
import AccountView from '@/views/customer/AccountView.vue'
import LoginView from '@/views/customer/LoginView.vue'
import CreateView from '@/views/customer/CreateView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/customer/account',
      name: 'account',
      component: AccountView,
      meta: { requiresAuth: true }
    },
    {
      path: '/customer/login',
      name: 'login',
      component: LoginView
    },
    {
      path: '/customer/create',
      name: 'create',
      component: CreateView
    }
  ]
})

router.beforeEach(async (to, from) => {
  const isAuth = isAuthenticated()
  if (to.meta.requiresAuth && !isAuth) {
    return { name: 'login' }
  } else if ((to.name == 'login' || to.name == 'create') && isAuth) {
    return { name: 'account' }
  }
})

export default router
