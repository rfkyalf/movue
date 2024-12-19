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
    const data = await fetchGenres();
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
  <div class="flex items-center overflow-auto no-scrollbar gap-2">
    <div
      v-for="genre in genres"
      :key="genre.id"
      class="bg-neutral-900 border flex-shrink-0 border-neutral-800 rounded-lg flex flex-col gap-y-3 justify-between p-4 overflow-hidden"
    >
      <MovieInCardGenres :genre-id="genre.id" />
      <div class="flex items-center justify-between">
        <p class="text-base text-neutral-400">{{ genre.name }}</p>
        <ArrowLongRightIcon class="size-7 text-neutral-400" />
      </div>
    </div>
  </div>
</template>
