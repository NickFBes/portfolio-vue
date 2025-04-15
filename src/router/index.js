import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import SkillsView from '../views/SkillsView.vue'
import ProjectsView from '../views/ProjectsView.vue'

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
    }
  ]
  
  const router = createRouter({
    history: createWebHistory(),
    routes
  })
  
  export default router


