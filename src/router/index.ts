import { createRouter, createWebHistory } from 'vue-router';

import HomeView from '../views/HomeView.vue';
import MoviesAndShowsView from '../views/MoviesAndShowsView.vue';

const routes = [
  { path: '/', component: HomeView },
  { path: '/movies-and-shows', component: MoviesAndShowsView },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
