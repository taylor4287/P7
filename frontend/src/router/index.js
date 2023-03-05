import { createRouter, createWebHistory } from 'vue-router'
import Home from '../components/Home.vue'
import LogIn from '../components/LogIn.vue'
import SignUp from '../components/SignUp.vue'
import AcCount from '../components/AcCount.vue'
import CreatePost from '../components/CreatePost.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/login',
    name: 'login',
    component: LogIn
  },
  {
    path: '/signup',
    name: 'signup',
    component: SignUp
  },
  {
    path: '/account',
    name: 'account',
    component: AcCount
  },
  {
    path: '/CreatePost',
    name: 'CreatePost',
    component: CreatePost
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
