import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../components/HomePage.vue'
import LogIn from '../components/LogIn.vue'
import SignUp from '../components/SignUp.vue'
import AcCount from '../components/AcCount.vue'
import CreatePost from '../components/CreatePost.vue'
import SinglePost from '../components/SinglePost.vue'

const routes = [
  {
    path: '/',
    name: 'homepage',
    component: HomePage
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
    path: '/createpost',
    name: 'createpost',
    component: CreatePost
  },
  {
    path: '/singlepost/:id',
    name: 'singlepost',
    component: SinglePost
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
