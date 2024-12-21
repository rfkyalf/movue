<template>
  <section
    v-if="detail"
    class="wrapper p-4 my-8 md:my-16 flex flex-col gap-y-4 md:gap-y-4 bg-neutral-900 rounded-lg"
  >
    <h2 class="text-2xl text-neutral-50 font-semibold">Detail Information</h2>
    <ul class="flex flex-col gap-y-2 text-neutral-300">
      <li>
        <h3>
          <span class="text-neutral-100 font-medium">Title: </span
          >{{ detail.title }}
        </h3>
      </li>
      <li>
        <p>
          <span class="text-neutral-100 font-medium">Synopsis: </span
          >{{ detail.overview }}
        </p>
      </li>
      <li>
        <p>
          <span class="text-neutral-100 font-medium">Duration: </span
          >{{ formatRuntime(detail.runtime) }}
        </p>
      </li>
      <li class="flex flex-wrap items-center gap-2">
        <span class="text-neutral-100 font-medium">Genres: </span>
        <p
          v-for="genre in detail.genres"
          :key="genre.id"
          class="bg-[red]/30 border border-[red]/50 px-2 py-1 rounded-md"
        >
          {{ genre.name }}
        </p>
      </li>
      <li>
        <p>
          <span class="text-neutral-100 font-medium">Release Date: </span
          >{{ formatToUSDate(detail.release_date) }}
        </p>
      </li>
      <li>
        <p class="flex items-center">
          <span class="text-neutral-100 font-medium">Rating:&nbsp;</span
          ><StarIcon class="size-6 text-yellow-600" />&nbsp;{{
            detail.vote_average.toFixed(2)
          }}/10 ({{ detail.vote_count }} vote)
        </p>
      </li>
      <li>
        <p>
          <span class="text-neutral-100 font-medium">Popularity: </span
          >{{ detail.popularity.toFixed(2) }}
        </p>
      </li>
      <li>
        <p>
          <span class="text-neutral-100 font-medium">Budget: </span
          >{{ formatDollar(detail.budget) }}
        </p>
      </li>
      <li>
        <p>
          <span class="text-neutral-100 font-medium">Revenue: </span
          >{{ formatDollar(detail.revenue) }}
        </p>
      </li>
    </ul>
  </section>
</template>

<script setup lang="ts">
import { StarIcon } from '@heroicons/vue/24/solid';
import { onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';
import { Movie } from '../../types/movie';
import { fetchDetail } from '../../services/movieApi';
import {
  formatDollar,
  formatRuntime,
  formatToUSDate,
} from '../../helpers/utils';

const route = useRoute();
const id = route.params.id as string;

const detail = ref<Movie>();
const loading = ref<boolean>(false);
const error = ref<string | null>(null);

onMounted(async () => {
  loading.value = true;
  try {
    const data = await fetchDetail('movie', id);
    detail.value = data;
  } catch (err) {
    error.value = err instanceof Error ? err.message : 'Unknown error occured';
  } finally {
    loading.value = false;
  }
});
</script>
