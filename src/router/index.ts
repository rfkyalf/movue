import { createRouter, createWebHistory } from 'vue-router';

const DetailMovieView = () => import('../views/DetailMovieView.vue');
const HomeView = () => import('../views/HomeView.vue');
const MoviesView = () => import('../views/MoviesView.vue');
const SearchView = () => import('../views/SearchView.vue');
const ShowsView = () => import('../views/ShowsView.vue');

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
