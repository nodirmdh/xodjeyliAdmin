import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/setting',
    name: 'setting',
    component: () => import(/* webpackChunkName: "about" */ '../views/SettingView.vue')
  },
  {
    path: '/static',
    name: 'static',
    component: () => import(/* webpackChunkName: "about" */ '../views/StaticView.vue')
  },
  {
    path: '/info',
    name: 'info',
    component: () => import(/* webpackChunkName: "about" */ '../views/InfoView.vue')
  },
  {
    path: '/home',
    name: 'home-page',
    component: () => import(/* webpackChunkName: "about" */ '../views/HomePageView.vue')
  },
  {
    path: '/news',
    name: 'news',
    component: () => import(/* webpackChunkName: "about" */ '../views/NewsView.vue')
  },
  {
    path: '/open-data',
    name: 'open-data',
    component: () => import(/* webpackChunkName: "about" */ '../views/OpenDataView.vue')
  },
  {
    path: '/documents',
    name: 'documents',
    component: () => import(/* webpackChunkName: "about" */ '../views/DocumentsView.vue')
  },
  {
    path: '/area',
    name: 'area',
    component: () => import(/* webpackChunkName: "about" */ '../views/AreaView.vue')
  },
  {
    path: '/management',
    name: 'management',
    component: () => import(/* webpackChunkName: "about" */ '../views/ManagementView.vue')
  },
  {
    path: '/deputies',
    name: 'deputies',
    component: () => import(/* webpackChunkName: "about" */ '../views/DeputiesView.vue')
  },
  {
    path: '/callback',
    name: 'callback',
    component: () => import(/* webpackChunkName: "about" */ '../views/CallbackView.vue')
  },
  {
    path: '/anti-core',
    name: 'anti-core',
    component: () => import(/* webpackChunkName: "about" */ '../views/AntiCoreView.vue')
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
