<template>
  <div
    v-if="error"
    class="wrapper h-[500px] p-4 my-8 md:my-16 bg-red-500 rounded-lg"
  >
    <p>{{ error }}</p>
  </div>
  <div
    v-if="loading"
    class="wrapper h-[500px] p-4 my-8 md:my-16 bg-neutral-500 rounded-lg animate-pulse"
  ></div>
  <section
    v-motion
    :initial="{ opacity: 0 }"
    :visible-once="{ opacity: 1 }"
    :duration="1500"
    v-if="!loading && detail"
    class="wrapper p-4 my-8 md:my-16 flex flex-col gap-y-4 md:gap-y-4 bg-neutral-900 rounded-lg"
  >
    <h2 class="text-2xl text-neutral-50 font-semibold">Detail Information</h2>
    <ul class="flex flex-col gap-y-2 text-neutral-300">
      <li>
        <h3>
          <span class="text-neutral-100 font-medium">Title: </span
          >{{ detail.name }}
        </h3>
      </li>
      <li>
        <p>
          <span class="text-neutral-100 font-medium">Synopsis: </span
          >{{ detail.overview }}
        </p>
      </li>
      <li class="flex flex-wrap items-center gap-2">
        <span class="text-neutral-100 font-medium">Genres: </span>
        <p
          v-for="genre in detail.genres"
          :key="genre.id"
          class="bg-[red]/30 hover:bg-[red]/50 border border-[red]/50 px-2 py-1 rounded-md"
        >
          <a :href="`/genre/tv/${genre.id}?genre=${toSlugCase(genre.name)}`">{{
            genre.name
          }}</a>
        </p>
      </li>
      <li>
        <p>
          <span class="text-neutral-100 font-medium">First Air Date: </span
          >{{ formatToUSDate(detail.first_air_date) }}
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
          <span class="text-neutral-100 font-medium">Number of Seasons: </span
          >{{ detail.number_of_seasons }}
        </p>
      </li>
      <li>
        <p>
          <span class="text-neutral-100 font-medium">Number of Episodes: </span
          >{{ detail.number_of_episodes }}
        </p>
      </li>
    </ul>
  </section>
</template>

<script setup lang="ts">
import { StarIcon } from '@heroicons/vue/24/solid';
import { onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';
import { formatToUSDate, toSlugCase } from '../../helpers/utils';
import { fetchDetail } from '../../services/movieApi';
import { TV } from '../../types/movie';

const route = useRoute();
const id = route.params.id as string;

const detail = ref<TV>();
const loading = ref<boolean>(false);
const error = ref<string | null>(null);

onMounted(async () => {
  loading.value = true;
  try {
    const data = await fetchDetail('tv', id);
    detail.value = data;
  } catch (err) {
    error.value = err instanceof Error ? err.message : 'Unknown error occured';
  } finally {
    loading.value = false;
  }
});
</script>
