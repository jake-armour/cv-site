import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Resume from '../views/Resume.vue'
import Contact from '../views/Contact.vue'
import Projects from '../views/Mobile.vue'
import Portfolio from '../views/Portfolio.vue'
import CV from '../views/CV.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/resume',
    name: 'Resume',
    component: Resume,
  },
  {
    path: '/contact',
    name: 'Contact',
    component: Contact
  },
  {
    path: '/portfolio',
    name: 'Portfolio',
    component: Portfolio
  },
  {
    path: '/projects',
    name: 'Projects',
    component: Projects
  },
  {
    path: '/cv',
    name: 'CV',
    component: CV
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
