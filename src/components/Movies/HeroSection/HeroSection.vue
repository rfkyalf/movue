<script lang="ts" setup>
import { onMounted, ref } from 'vue';
import { PlayIcon } from '@heroicons/vue/20/solid';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/vue/24/outline';
import { Movie } from '../../../types/movie';
import { fetchMovies } from '../../../services/movieApi';
import { IMAGE_ENDPOINT } from '../../../helpers/constants';

const movies = ref<Movie[]>([]);
const loading = ref<boolean>(false);
const error = ref<string | null>(null);
const containerRef = ref<HTMLElement | null>(null);

onMounted(async () => {
  loading.value = true;
  try {
    const data = await fetchMovies();
    if (data?.results) {
      movies.value = data.results.slice(0, 5);
    }
  } catch (err) {
    error.value =
      err instanceof Error ? err.message : 'Unknown error occurred.';
  } finally {
    loading.value = false;
  }
});

const scrollTo = (direction: 'next' | 'prev') => {
  if (!containerRef.value) return;
  const container = containerRef.value;
  const scrollAmount = container.clientWidth;

  if (direction === 'next') {
    if (container.scrollLeft + container.clientWidth >= container.scrollWidth) {
      container.scrollTo({ left: 0, behavior: 'smooth' });
    } else {
      container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  } else {
    if (container.scrollLeft <= 0) {
      container.scrollTo({
        left: container.scrollWidth,
        behavior: 'smooth',
      });
    } else {
      container.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
    }
  }
};
</script>

<template>
  <section
    ref="containerRef"
    class="flex items-center h-screen overflow-auto no-scrollbar snap-x snap-mandatory"
  >
    <div class="absolute z-10 bottom-4 right-4 flex gap-2">
      <button
        @click="scrollTo('prev')"
        class="bg-[red]/90 text-white px-2 py-1 rounded-lg text-center hover:bg-[red]/70"
      >
        <ChevronLeftIcon class="size-5" />
      </button>
      <button
        @click="scrollTo('next')"
        class="bg-[red]/90 text-white px-2 py-1 rounded-lg text-center hover:bg-[red]/70"
      >
        <ChevronRightIcon class="size-5" />
      </button>
    </div>
    <div v-if="loading" class="bg-neutral-500 h-screen w-full animate-pulse" />
    <div v-if="error" class="bg-red-500 h-screen w-full">{{ error }}</div>
    <div
      v-if="!loading && movies.length"
      v-for="movie in movies"
      :key="movie.id"
      :style="{
        backgroundImage: `url(${IMAGE_ENDPOINT}${movie.backdrop_path})`,
      }"
      class="relative h-full w-full bg-cover bg-center flex-shrink-0 snap-center snap-always"
    >
      <div
        class="absolute inset-0 bg-gradient-to-b from-neutral-950/20 via-neutral-950/50 to-neutral-950 to-[95%]"
      />

      <div class="relative wrapper h-full flex flex-col justify-center gap-y-1">
        <p
          class="w-fit text-[red]/90 text-lg font-medium mb-1 lg:mb-2 self-center md:self-start"
        >
          #NowPopular
        </p>
        <h2
          class="text-3xl text-neutral-50 font-bold text-center md:text-start"
        >
          {{ movie.title }}
        </h2>
        <p
          class="max-w-[500px] lg:max-w-[600px] text-base text-neutral-100 text-center md:text-start"
        >
          {{ movie.overview }}
        </p>
        <button
          class="w-fit bg-[red]/90 hover:bg-[red]/70 text-white flex items-center gap-x-2 px-4 py-2 rounded-lg self-center md:self-start mt-4 lg:mt-8"
        >
          <PlayIcon class="size-5" />
          Watch Now
        </button>
      </div>
    </div>
  </section>
</template>
