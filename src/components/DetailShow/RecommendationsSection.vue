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
    v-if="!loading && tvs.length"
    class="wrapper mb-8 md:mb-16"
  >
    <h2 class="text-2xl text-neutral-50 font-semibold">Recommendations</h2>
    <ul
      class="flex items-center gap-x-2 md:gap-x-4 overflow-auto no-scrollbar mt-2 md:mt-4"
    >
      <li v-for="tv in tvs" :key="tv.id" class="flex-shrink-0">
        <a :href="`/detail/tv/${tv.id}`">
          <img
            :title="tv.name"
            :src="
              tv.poster_path === null
                ? '/placeholder.svg'
                : IMAGE_ENDPOINT_MEDIUM + tv.poster_path
            "
            :alt="tv.name"
            class="h-[250px] w-[180px] rounded-lg object-cover object-center hover:opacity-50"
          />
        </a>
      </li>
    </ul>
  </section>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';
import { IMAGE_ENDPOINT_MEDIUM } from '../../helpers/constants';
import { fetchRecommendations } from '../../services/movieApi';
import { TV } from '../../types/movie';

const route = useRoute();
const id = route.params.id as string;
const tvs = ref<TV[]>([]);
const error = ref<string | null>(null);
const loading = ref<boolean>(false);

onMounted(async () => {
  loading.value = true;
  try {
    const data = await fetchRecommendations('tv', id);
    if (data?.results) {
      tvs.value = data.results;
    }
  } catch (err) {
    error.value = err instanceof Error ? err.message : 'Unknown error occured';
  } finally {
    loading.value = false;
  }
});
</script>
