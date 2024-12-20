import { createRouter, createWebHistory } from 'vue-router';

import HomeView from '../views/HomeView.vue';
import MoviesView from '../views/MoviesView.vue';

const routes = [
  { path: '/', component: HomeView },
  { path: '/movies', component: MoviesView },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
