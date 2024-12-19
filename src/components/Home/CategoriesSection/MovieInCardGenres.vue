<script lang="ts" setup>
import { onMounted, ref } from 'vue';
import { IMAGE_ENDPOINT_SMALL } from '../../../helpers/constants';
import { fetchMoviesByGenre } from '../../../services/movieApi';
import { Movie } from '../../../types/movie';

const props = defineProps<{
  genreId: number;
}>();

const moviesByGenre = ref<Movie[]>([]);
const loading = ref<boolean>(false);
const error = ref<string | null>(null);

onMounted(async () => {
  loading.value = true;
  try {
    const data = await fetchMoviesByGenre(props.genreId);
    if (data?.results) {
      moviesByGenre.value = data.results;
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
  <ul class="relative grid grid-cols-2 gap-2">
    <li
      class="absolute inset-0 bg-gradient-to-b from-neutral-900/0 via-neutral-900/0 to-neutral-900"
    ></li>
    <li v-for="movie in moviesByGenre.slice(0, 4)" :key="movie.id">
      <img
        :src="IMAGE_ENDPOINT_SMALL + movie.poster_path"
        :alt="movie.title"
        class="size-[80px] lg:size-[100px] object-cover rounded-md"
      />
    </li>
  </ul>
</template>
