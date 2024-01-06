import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import StudentView from '../views/StudentView.vue'
import CompanyView from '../views/CompanyView.vue'
import PrijavaView from '../views/PrijavaView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/student/:id',
    name: 'Student',
    component: StudentView
  },
  {
    path: '/kompanije',
    name: 'Kompanije',
    component: CompanyView
  },
  {
    path: '/prijavi-promenu',
    name: 'Prijava',
    component: PrijavaView
  } 
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
