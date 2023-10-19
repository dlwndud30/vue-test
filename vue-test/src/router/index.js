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
    {
      path: '/login',
      name: 'login',
      component: Components.LoginView,
    },
    {
      path: '/hotdeal',
      name: 'hotdeal',
      component: Components.HotdealView,
    },
    {
      path: '/best',
      name: 'best',
      component: Components.BestView,
    },
    {
      path: '/planShopDetail',
      name: 'planShopDetail',
      component: Components.PlanShopDetailView,
    },
    {
      path: '/planShop',
      name: 'planShop',
      component: Components.PlanShopView,
    },
    {
      path: '/sale',
      name: 'sale',
      component: Components.SaleView,
    },
    {
      path: '/giftCardGuide',
      name: 'giftCardGuide',
      component: Components.GiftCardView,
    },
    {
      path: '/memberShip',
      name: 'memberShip',
      component: Components.MemberShipView,
    },
    {
      path: '/event',
      name: 'event',
      component: Components.EventView,
    },
  ],
});

export default router;
