import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import SkillsView from '../views/SkillsView.vue'
import ProjectsView from '../views/ProjectsView.vue'
import ContactView from '../views/ContactView.vue'

const routes = [
    {
      path: '/',
      name: 'Home',
      component: HomeView
    },
    {
      path: '/sobre',
      name: 'Sobre',
      component: AboutView
    },
    {
      path: '/habilidades',
      name: 'Habilidades',
      component: SkillsView
    },
    {
      path: '/projetos',
      name: 'Projetos',
      component: ProjectsView
    },
    {
      path: '/contact',
      name: 'contact',
      component: ContactView
    },
    {
      path: '/:catchAll(.*)',
      redirect: '/'
    }
  ]
  
  const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes
  })
  
  export default router


