import { createRouter, createWebHistory } from 'vue-router';
import * as Components from '../components/exports/index';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Components.HomeView,
    },
    {
      path: '/about',
      name: 'about',
      component: Components.AboutView,
    },
  ],
});

export default router;
