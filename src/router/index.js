import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import episodes from '../views/episodes.vue'
import location from '../views/location.vue'
import characterPage from '../views/characterPage.vue'
import episodesPage from '../views/episodesPage.vue'
import locationPage from '../views/locationPage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      redirect: to =>{
        return { path: '/characters' }
      }
    },
    {
      path: '/characters',
      name: 'characters',
      component: HomeView,
    },
    {
      path: '/episodes',
      name: 'episodes',
      component: episodes
    },
    {
      path: '/location',
      name: 'location',
      component: location
    },
    {
      path: '/characterPage/:id',
      name: 'characterPage',
      component: characterPage
    },
    {
      path: '/episodesPage/:id',
      name: 'episodesPage',
      component: episodesPage
    },
    {
      path: '/locationPage/:id',
      name: 'locationPage',
      component: locationPage
    }
  ]
})

export default router
