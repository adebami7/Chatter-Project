import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Auth from "../views/Auth.vue"
import Login from '../views/Login.vue'
import Blog from '../views/Blog.vue'
import Feed from '../views/Feed.vue'
import Analytics from '../views/Analytics.vue'
import Post from '../views/Post.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      meta: { requiresAuth: true },
    },
    {
      path: '/auth',
      name: 'auth',
      component: Auth,
      meta: { requiresAuth: true },
    },
    {
      path: '/login',
      name: 'login',
      component: Login,
      meta: { requiresAuth: true },
    },
    {
      path: '/blog',
      name: 'blog',
      component: Blog,
      meta: { requiresAuth: true },
    },
    {
      path: '/feed',
      name: 'feed',
      component: Feed,
      meta: { requiresAuth: true },
    },
    {
      path: '/analytics',
      name: 'analytics',
      component: Analytics,
      meta: { requiresAuth: true },
    },
    {
      path: '/post',
      name: 'post',
      component: Post,
      meta: { requiresAuth: true },
    },
  ]
})



export default router
