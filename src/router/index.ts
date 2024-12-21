import { createRouter, createWebHistory } from 'vue-router';

import DetailMovieView from '../views/DetailMovieView.vue';
import HomeView from '../views/HomeView.vue';
import MoviesView from '../views/MoviesView.vue';
import SearchView from '../views/SearchView.vue';
import ShowsView from '../views/ShowsView.vue';

const routes = [
  { path: '/', component: HomeView },
  { path: '/movies', component: MoviesView },
  { path: '/shows', component: ShowsView },
  { path: '/search', component: SearchView },
  { path: '/detail/movie/:id', component: DetailMovieView },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
