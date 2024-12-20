<script lang="ts" setup>
import { onMounted, ref } from 'vue';
import { IMAGE_ENDPOINT } from '../../../helpers/constants';
import { fetchTVs } from '../../../services/movieApi';
import HeroContent from '../../HeroContent.vue';
import { TV } from '../../../types/movie';

const tvs = ref<TV[]>([]);
const loading = ref<boolean>(false);
const error = ref<string | null>(null);
const isIndex = ref<number>(0);

onMounted(async () => {
  loading.value = true;
  try {
    const data = await fetchTVs();
    if (data?.results) {
      tvs.value = data.results.slice(0, 5);
    }
  } catch (err) {
    error.value =
      err instanceof Error ? err.message : 'Unknown error occurred.';
  } finally {
    loading.value = false;
  }
});

const setIndex = (index: number) => {
  isIndex.value = index;
};
</script>

<template>
  <section class="relative h-screen w-full">
    <div v-if="loading" class="bg-neutral-500 h-screen w-full animate-pulse" />
    <div v-if="error" class="bg-red-500 h-screen w-full">{{ error }}</div>
    <div
      v-if="!loading && tvs.length"
      v-for="(tv, index) in tvs"
      :key="index"
      class="absolute h-screen w-full bg-cover bg-center transition-opacity duration-300"
      :class="{
        'opacity-100 pointer-events-auto': index === isIndex,
        'opacity-0 pointer-events-none': index !== isIndex,
      }"
      :style="{
        backgroundImage: `url(${IMAGE_ENDPOINT}${tv.backdrop_path})`,
      }"
    >
      <!-- Hero Overlay -->
      <div
        class="absolute inset-0 bg-gradient-to-b from-neutral-950/20 via-neutral-950/50 to-neutral-950 to-95%"
      />
      <!-- Hero Indicator -->
      <div
        class="absolute z-10 bottom-4 w-full flex items-center justify-center gap-x-1"
      >
        <button
          v-for="index in tvs.length"
          :key="index - 1"
          @click="setIndex(index - 1)"
          :class="{
            'w-8 bg-[red]/90': index - 1 === isIndex,
            'w-5 bg-neutral-500': index - 1 !== isIndex,
          }"
          class="h-1"
        />
      </div>
      <!-- Hero Text -->
      <HeroContent :title="tv.name" :overview="tv.overview" href="/" />
    </div>
  </section>
</template>
