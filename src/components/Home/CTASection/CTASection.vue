<script lang="ts" setup>
import { onMounted, ref } from 'vue';
import { IMAGE_ENDPOINT_SMALL } from '../../../helpers/constants';
import { fetchDatas } from '../../../services/movieApi';
import { Movie } from '../../../types/movie';

const movies = ref<Movie[]>([]);
const loading = ref<boolean>(false);
const error = ref<string | null>(null);

onMounted(async () => {
  loading.value = true;
  try {
    const data = await fetchDatas('movie');
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
  <section
    v-motion
    :initial="{ opacity: 0 }"
    :visible-once="{ opacity: 1 }"
    :duration="1500"
    class="wrapper pb-8 md:pb-16 flex flex-col gap-y-4 md:gap-y-6"
  >
    <div
      v-if="loading"
      class="bg-neutral-500 h-[300px] rounded-lg animate-pulse"
    ></div>
    <div v-if="error" class="bg-red-500 h-[300px] rounded-lg">
      {{ error }}
    </div>
    <div
      v-if="!loading && movies.length"
      class="relative overflow-hidden border border-neutral-800 rounded-lg"
    >
      <ul
        class="absolute grid grid-cols-3 md:grid-cols-6 lg:grid-cols-10 gap-2"
      >
        <li v-for="movie in movies" :key="movie.id">
          <img
            :src="IMAGE_ENDPOINT_SMALL + movie.poster_path"
            :alt="movie.title"
            class="w-[200px]"
          />
        </li>
      </ul>
      <div class="absolute inset-0 bg-[red]/40"></div>
      <div
        class="absolute inset-0 bg-gradient-to-t from-neutral-950/0 via-neutral-950/80 to-neutral-950"
      ></div>
      <div
        class="relative flex flex-col items-center justify-center gap-y-2 p-8"
      >
        <h3 class="text-2xl text-neutral-50 font-semibold text-center">
          Start your free trial today!
        </h3>
        <p class="text-sm text-neutral-400 text-center max-w-[400px]">
          This is a clear and concise call to action that encourages users to
          sign up for a free trial of MoVue.
        </p>
        <button
          class="w-fit bg-[red]/90 hover:bg-[red]/80 focus:ring focus:ring-[red] text-sm text-white px-4 py-2 rounded-md mt-6"
        >
          Start a Free Trial
        </button>
      </div>
    </div>
  </section>
</template>
