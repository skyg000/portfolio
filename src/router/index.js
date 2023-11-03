import { createRouter, createWebHistory } from 'vue-router'
import AboutView from '../views/AboutView.vue'
import SkillView from '../views/SkillView.vue'
import WorkView from '../views/WorkView.vue'
import ContactView from '../views/ContactView.vue'

const routes = [
 
  {
    path: '/',
    name: 'about',
    component:AboutView
  },
  {
    path: '/skill',
    name: 'skill',
    component: SkillView
  },
  {
    path: '/work',
    name: 'work',
    component: WorkView
  },
  {
    path: '/contact',
    name: 'contact',
    component: ContactView
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
