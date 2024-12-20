<script lang="ts" setup>
import { onMounted, ref } from 'vue';
import { IMAGE_ENDPOINT_MEDIUM } from '../../helpers/constants';
import { Movie } from '../../types/movie';

const props = defineProps<{
  datas: (cat: string) => Promise<{ results: Movie[] }>;
  titleSection: string;
  class: string;
  cat: string;
}>();

const movies = ref<Movie[]>([]);
const loading = ref<boolean>(false);
const error = ref<string | null>(null);

onMounted(async () => {
  loading.value = true;
  try {
    const data = await props.datas(props.cat);
    if (data?.results) movies.value = data.results;
  } catch (err) {
    error.value =
      err instanceof Error ? err.message : 'Unknown error occurred.';
  } finally {
    loading.value = false;
  }
});
</script>

<template>
  <section class="wrapper flex flex-col gap-y-4 md:gap-y-6" :class="class">
    <h2 class="text-2xl md:text-3xl text-neutral-50 font-bold">
      {{ titleSection }}
    </h2>
    <ul
      v-if="loading"
      class="flex items-center overflow-auto no-scrollbar gap-2"
    >
      <li
        v-for="index in 6"
        :key="index"
        class="w-[200px] h-[220px] bg-neutral-500 animate-pulse rounded-lg flex-shrink-0"
      ></li>
    </ul>
    <p v-if="error" class="w-full h-[220px] bg-red-500 text-white">
      {{ error }}
    </p>
    <ul
      v-if="!loading && movies.length"
      class="flex items-center gap-x-2 md:gap-x-4 overflow-auto no-scrollbar"
    >
      <li v-for="movie in movies" :key="movie.id" class="flex-shrink-0">
        <img
          :src="IMAGE_ENDPOINT_MEDIUM + movie.poster_path"
          :alt="movie.title"
          class="w-[180px] h-[280px] object-cover object-center rounded-lg"
        />
      </li>
    </ul>
  </section>
</template>
