<template>
  <div
    v-if="loading"
    class="wrapper mb-8 md:mb-16 h-[300px] bg-neutral-500 animate-pulse"
  ></div>
  <div v-if="error" class="wrapper mb-8 md:mb-16 h-[300px] bg-red-500">
    <p>{{ error }}</p>
  </div>
  <section
    v-motion
    :initial="{ opacity: 0 }"
    :visible-once="{ opacity: 1 }"
    :duration="1500"
    v-if="!loading && casts.length"
    class="wrapper mb-8 md:mb-16"
  >
    <h2 class="text-2xl text-neutral-50 font-semibold">Cast</h2>
    <ul
      class="flex items-start gap-x-2 md:gap-x-4 overflow-auto no-scrollbar mt-2 md:mt-4"
    >
      <li v-for="cast in casts" :key="cast.id" class="flex-shrink-0">
        <img
          :src="
            cast.profile_path === null
              ? '/placeholder.svg'
              : IMAGE_ENDPOINT_MEDIUM + cast.profile_path
          "
          :alt="cast.name"
          class="h-[250px] w-[180px] rounded-lg object-cover object-center"
        />
        <p class="text-base text-neutral-100 mt-1 max-w-[180px]">
          {{ cast.name }}
        </p>
        <p class="text-base text-neutral-500 max-w-[180px]">
          {{ cast.character }}
        </p>
      </li>
    </ul>
  </section>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { Person } from '../../types/movie';
import { fetchCasts } from '../../services/movieApi';
import { useRoute } from 'vue-router';
import { IMAGE_ENDPOINT_MEDIUM } from '../../helpers/constants';

const route = useRoute();
const id = route.params.id as string;
const casts = ref<Person[]>([]);
const error = ref<string | null>(null);
const loading = ref<boolean>(false);

onMounted(async () => {
  loading.value = true;
  try {
    const data = await fetchCasts('tv', id);
    if (data?.cast) {
      casts.value = data.cast;
    }
  } catch (err) {
    error.value = err instanceof Error ? err.message : 'Unknown error occured';
  } finally {
    loading.value = false;
  }
});
</script>
