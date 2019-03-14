import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Books from '@/components/Books.vue'
import Words from '@/components/Words.vue'
import Signin from '@/components/Signin.vue'
import Profile from '@/components/Profile.vue'
import Signup from '@/components/Signup.vue'
import Price from '@/components/Price.vue'
import Courses from '@/components/Courses.vue'
import Course from '@/components/Course.vue'


Vue.use(Router)

export default new Router({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    },
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/gallery',
      name: 'Gallery',
      
      component: Books
    },
    {
      path: '/students',
      name: 'students',
      
      component: Words
    },
    {
      path: '/signup',
      name: 'signup',
      
      component: Signup
    },
    {
      path: '/signin',
      name: 'signin',
      
      component: Signin
    },
    {
      path: '/Contacts',
      name: 'Contacts',
      
      component: Profile
    },
    {
      path: '/price',
      name: 'Price',
      
      component: Price
    },
    {
    path: '/courses',
    name: 'Courses',
    component : Courses
    },
    {
    path: '/courses/:id',
    name: 'Courses',
    props: true,
    component : Course
    }
  
]
})
