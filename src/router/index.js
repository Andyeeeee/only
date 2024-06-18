// Composables
import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    component: () => import('@/layouts/FrontLayout.vue'),
    children: [
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
]

const router = createRouter({
  history: createWebHashHistory(process.env.BASE_URL),
  routes,
})

export default router
