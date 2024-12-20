import { createRouter, createWebHistory } from 'vue-router';

import HomeView from '../views/HomeView.vue';
import MoviesView from '../views/MoviesView.vue';
import ShowsView from '../views/ShowsView.vue';

const routes = [
  { path: '/', component: HomeView },
  { path: '/movies', component: MoviesView },
  { path: '/shows', component: ShowsView },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
