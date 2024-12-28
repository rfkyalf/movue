<script lang="ts" setup>
import { ArrowLongRightIcon } from '@heroicons/vue/24/solid';
import { onMounted, ref } from 'vue';
import { fetchGenres } from '../../../services/movieApi';
import { Genre } from '../../../types/genre';
import MovieInCardGenres from './MovieInCardGenres.vue';

const genres = ref<Genre[]>([]);
const loading = ref<boolean>(false);
const error = ref<string | null>(null);

onMounted(async () => {
  loading.value = true;
  try {
    const data = await fetchGenres('movie');
    if (data?.genres) {
      genres.value = data.genres;
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
  <ul v-if="loading" class="flex items-center overflow-auto no-scrollbar gap-2">
    <li
      v-for="index in 6"
      :key="index"
      class="w-[200px] h-[220px] bg-neutral-500 animate-pulse rounded-lg flex-shrink-0"
    ></li>
  </ul>
  <p v-if="error" class="w-full h-[220px] bg-red-500 text-white">{{ error }}</p>
  <div
    v-if="!loading && genres.length"
    class="flex items-center overflow-auto no-scrollbar gap-2"
  >
    <a
      :href="`/genre/movie/${genre.id}?genre=${genre.name}`"
      v-for="genre in genres"
      :key="genre.id"
      class="group bg-neutral-900 hover:bg-neutral-800 border flex-shrink-0 border-neutral-800 rounded-lg flex flex-col gap-y-3 justify-between p-4 overflow-hidden"
    >
      <MovieInCardGenres :genre-id="genre.id" />
      <div class="flex items-center justify-between">
        <p class="text-base group-hover:text-neutral-300 text-neutral-400">
          {{ genre.name }}
        </p>
        <ArrowLongRightIcon
          class="size-7 group-hover:text-neutral-300 text-neutral-400"
        />
      </div>
    </a>
  </div>
</template>
