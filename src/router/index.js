// Composables
import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    component: () => import('@/layouts/FrontLayout.vue'),
    children: [
      {
        path: 'login',
        name: 'Login',
        component: () => import(/* webpackChunkName: "login" */ '@/views/front/Login.vue'),
        meta: {
          title: '登入'
        },
      },
      {
        path: '',
        name: 'Home',
        component: () => import(/* webpackChunkName: "home" */ '@/views/front/HomeView.vue'),
        meta: {
          title: '首頁'
        }

      },
      {
        path: 'movie',
        name: 'Movie',
        component: () => import(/* webpackChunkName: "movie" */ '@/views/front/Movie.vue'),
        meta: {
          title: '電影時刻'
        }
      },
      {
        path: 'store',
        name: 'Store',
        component: () => import(/* webpackChunkName: "store" */ '@/views/front/Store.vue'),
        meta: {
          title: '點數兌換'
        }
      },

    ],
  },
  {
    path: '/admin',
    component: () => import('@/layouts/AdminLayout.vue'),
    children: [
      {
        path: '',
        name: 'AdminHome',
        component: () => import(/* webpackChunkName: "admin-home" */ '@/views/admin/AdminHome.vue'),
        meta: {
          title: '住戶管理'
        }
      },
      {
        path: 'adminproducts',
        name: 'AdminProducts',
        component: () => import(/* webpackChunkName: "admin-products" */ '@/views/admin/adminproducts.vue'),
        meta: {
          title: '商品管理'
        }
      },
    ],
  }
]


const router = createRouter({
  history: createWebHashHistory(process.env.BASE_URL),
  routes,
})

export default router
