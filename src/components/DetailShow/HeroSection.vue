<template>
  <div
    v-if="loading"
    class="h-[500px] w-full bg-neutral-500 animate-pulse"
  ></div>
  <div v-if="error" class="h-[500px] w-full bg-red-500">
    <p>{{ error }}</p>
  </div>
  <section
    v-motion
    :initial="{ opacity: 0 }"
    :visible-once="{ opacity: 1 }"
    :duration="1000"
    v-if="!loading && detail"
    :style="{
      backgroundImage: `url(${IMAGE_ENDPOINT}${detail.backdrop_path})`,
    }"
    class="relative w-full bg-cover bg-center"
  >
    <div
      class="absolute inset-0 bg-gradient-to-b from-neutral-950/50 via-neutral-950/70 to-neutral-950 to-95% backdrop-blur"
    />
    <div
      class="relative wrapper flex flex-col md:flex-row justify-center md:justify-normal items-center md:items-start py-24"
    >
      <img
        :src="IMAGE_ENDPOINT_MEDIUM + detail.poster_path"
        :alt="detail.name"
        class="h-[280px] w-[220px] object-cover object-center rounded-lg self-center"
      />
      <div class="flex flex-col pl-4">
        <h2
          class="text-2xl md:text-3xl font-bold text-neutral-50 text-center md:text-start mt-2 md:mt-0"
        >
          {{ detail.name }}
        </h2>
        <p
          class="text-base text-neutral-300 text-center md:text-start max-w-[700px] text-pretty md:mt-2"
        >
          {{ detail.overview }}
        </p>
        <button
          class="w-fit self-center md:self-start bg-[red]/90 hover:bg-[red]/70 focus:ring focus:ring-[red] text-white px-8 py-2 rounded-md text-base mt-4 md:mt-6 flex items-center justify-center gap-x-2"
        >
          <PlayIcon class="size-6" />
          Watch Now
        </button>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { PlayIcon } from '@heroicons/vue/24/solid';
import { onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';
import { IMAGE_ENDPOINT, IMAGE_ENDPOINT_MEDIUM } from '../../helpers/constants';
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
