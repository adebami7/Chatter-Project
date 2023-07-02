import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Auth from "../views/Auth.vue"
import Login from '../views/Login.vue'
import Blog from '../views/Blog.vue'
import Feed from '../views/Feed.vue'
import Analytics from '../views/Analytics.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/auth',
      name: 'auth',
      component: Auth
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/blog',
      name: 'blog',
      component: Blog
    },
    {
      path: '/feed',
      name: 'feed',
      component: Feed
    },
    {
      path: '/analytics',
      name: 'analytics',
      component: Analytics
    }
  ]
})

export default router
