import { createRouter, createWebHistory } from 'vue-router'
import { isAuthenticated } from '@/router/middleware/auth'
import HomeView from '@/views/HomeView.vue'
import AccountView from '@/views/customer/AccountView.vue'
import LoginView from '@/views/customer/LoginView.vue'
import CreateView from '@/views/customer/CreateView.vue'
import LogoutView from '@/views/customer/LogoutView.vue'
import OrderHistoryView from '@/views/customer/account/OrderHistoryView.vue'
import AllProductView from '@/views/product/AllProductView.vue'
import ProductDetailsView from '@/views/product/ProductDetailsView.vue'

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
      meta: { requiresAuth: true },
      children: [
        {
          path: '/customer/order',
          name: 'order_history',
          component: OrderHistoryView
        }
      ]
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
    },
    {
      path: '/customer/logout',
      name: 'logout',
      component: LogoutView
    },
    {
      path: '/products',
      name: 'products',
      component: AllProductView
    },
    {
      path: '/products/:productID',
      name: 'product_details',
      component: ProductDetailsView
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
