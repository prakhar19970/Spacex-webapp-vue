import { RouteRecordRaw } from 'vue-router'
import LaunchDetailsPage from 'src/pages/launches/LaunchDetailsPage.vue'
import HomePage from 'src/pages/launches/HomePage.vue'
import LaunchFormPage from 'src/pages/launches/LaunchFormPage.vue'
const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      {
        path: '',
        component: HomePage
      },
      {
        path: '/launch',
        component: HomePage
      },
      {
        path: '/launch/home',
        name: 'Home',
        component: HomePage
      },
      {
        path: '/launch/launch-form',
        name: 'Launch Form',
        component: LaunchFormPage
      },
      {
        path: '/launch/launch-details/:id',
        name: 'Launch Details Page',
        component: LaunchDetailsPage
      }
    ]
  },

  // Default Error Page
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
