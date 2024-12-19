<script lang="ts" setup>
import { onMounted, ref } from 'vue';
import { IMAGE_ENDPOINT_MEDIUM } from '../../../helpers/constants';
import { fetchMovies } from '../../../services/movieApi';
import { Movie } from '../../../types/movie';

const movies = ref<Movie[]>([]);
const loading = ref<boolean>(false);
const error = ref<string | null>(null);

onMounted(async () => {
  loading.value = true;
  try {
    const data = await fetchMovies();
    if (data?.results) {
      movies.value = data.results;
    }
  } catch (err) {
    error.value =
      err instanceof Error ? err.message : 'Unknown error occurred.';
  } finally {
    loading.value = false;
  }
});
</script>

<template>
  <div v-if="error" class="min-h-screen bg-red-500 text-white text-base">
    {{ error }}
  </div>
  <ul
    v-if="loading"
    class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-2 md:gap-4"
  >
    <li
      v-for="index in 18"
      :key="index"
      class="w-full h-[250px] lg:h-[280px] bg-neutral-500 rounded-lg animate-pulse"
    />
  </ul>
  <ul
    v-if="!loading && movies.length"
    class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-2 md:gap-4"
  >
    <li v-for="movie in movies.slice(0, 18)" :key="movie.id">
      <img
        :src="IMAGE_ENDPOINT_MEDIUM + movie.poster_path"
        :alt="movie.title"
        class="w-full h-[250px] lg:h-[280px] object-cover object-center rounded-lg"
      />
    </li>
  </ul>
  <div
    class="absolute inset-0 bg-gradient-to-b from-neutral-950/50 via-neutral-950/70 to-neutral-950 to-[95%]"
  />
</template>
