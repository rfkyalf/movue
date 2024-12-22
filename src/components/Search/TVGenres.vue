<template>
  <section
    v-motion
    :initial="{ opacity: 0 }"
    :visible-once="{ opacity: 1 }"
    :duration="1500"
    class="wrapper my-8 md:my-16 flex flex-col items-center"
  >
    <h2
      class="max-w-[600px] text-4xl text-neutral-50 font-bold text-center text-pretty"
    >
      Show TVs by Genre
    </h2>
    <div
      v-if="loading"
      class="w-full h-[300px] bg-neutral-500 animate-pulse"
    ></div>
    <div v-if="error" class="w-full h-[300px] bg-red-500">
      <p>{{ error }}</p>
    </div>
    <ul
      v-if="!loading"
      class="max-w-[760px] flex flex-wrap items-center justify-center gap-2 mt-4 md:mt-6"
    >
      <li
        v-for="genre in genres"
        :key="genre.id"
        class="bg-[red]/30 hover:bg-[red]/50 border border-[red]/50 rounded-md px-2 py-1"
      >
        <a
          :href="`/genre/tv/${genre.id}?genre=${toSlugCase(genre.name)}`"
          class="text-base text-neutral-200 text-center"
          >{{ genre.name }}</a
        >
      </li>
    </ul>
  </section>
</template>

<script lang="ts" setup>
import { onMounted, ref } from 'vue';
import { Genre } from '../../types/genre';
import { fetchGenres } from '../../services/movieApi';
import { toSlugCase } from '../../helpers/utils';

const genres = ref<Genre[]>([]);
const loading = ref<boolean>(false);
const error = ref<string | null>(null);

onMounted(async () => {
  loading.value = true;
  try {
    const data = await fetchGenres('tv');
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
