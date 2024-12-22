<template>
  <main class="min-h-screen bg-neutral-950 py-24 md:py-28">
    <section class="wrapper">
      <h2 class="text-3xl font-bold text-neutral-50 text-center md:text-start">
        Search results for:
        <span class="bg-[red]/90 px-2 text-neutral-100 rounded-lg">{{
          toTitleCase(term)
        }}</span>
      </h2>
      <div
        class="h-[1px] w-full bg-gradient-to-r from-neutral-950 via-[red]/90 to-neutral-950 mt-4 md:mt-8"
      />
    </section>
    <section
      class="flex items-center justify-center gap-x-1 md:gap-x-4 mt-4 md:mt-8"
    >
      <button
        @click="prevPage"
        class="bg-[red]/70 text-neutral-100 p-1 rounded-md disabled:bg-[red]/50 disabled:cursor-not-allowed"
        :disabled="currentPage === 1 || loading"
      >
        <ChevronLeftIcon class="size-5 md:size-6" />
      </button>
      <ul
        class="flex gap-x-[2px] md:gap-x-1 items-end text-neutral-200 text-sm md:text-base"
      >
        <li v-for="pagi in pagination" :key="pagi">
          <button
            v-if="pagi !== '...'"
            @click="goToPage(Number(pagi))"
            class="border border-neutral-800 px-2 py-1 rounded-md hover:bg-[red]/30"
            :class="{ 'bg-[red]/30': currentPage === pagi }"
          >
            {{ pagi }}
          </button>
          <span v-else>{{ pagi }}</span>
        </li>
      </ul>
      <button
        @click="nextPage"
        class="bg-[red]/70 text-neutral-100 p-1 rounded-md disabled:bg-[red]/50 disabled:cursor-not-allowed"
        :disabled="currentPage === totalPage || loading"
      >
        <ChevronRightIcon class="size-5 md:size-6" />
      </button>
    </section>
    <section class="wrapper mt-2 mb-4 md:mt-4 md:mb-8">
      <ul class="grid grid-cols-2 md:grid-cols-4 xl:grid-cols-6 gap-2">
        <li
          v-if="error"
          v-for="index in 20"
          :key="index"
          class="bg-red-500 rounded-lg w-full h-[230px] xl:h-[280px]"
        >
          {{ error }}
        </li>
        <li
          v-if="loading"
          v-for="index in 20"
          :key="index"
          class="bg-neutral-500 rounded-lg animate-pulse w-full h-[230px] xl:h-[280px]"
        ></li>
        <li
          v-if="!loading && searchs"
          v-for="search in searchs"
          :key="search.id"
        >
          <a
            :href="
              search.media_type === 'movie'
                ? `/detail/movie/${search.id}`
                : search.media_type === 'tv'
                ? `/detail/tv/${search.id}`
                : `/`
            "
            class="hover:opacity-50"
          >
            <img
              v-if="search.poster_path || search.profile_path"
              :src="
                IMAGE_ENDPOINT_MEDIUM +
                (search.poster_path || search.profile_path)
              "
              :alt="search.title || search.name"
              :title="search.title || search.name"
              class="min-w-full h-[230px] xl:h-[280px] object-cover object-center rounded-lg"
            />
            <img
              v-else
              src="/placeholder.svg"
              :alt="search.title || search.name"
              :title="search.title || search.name"
              class="min-w-full h-[230px] xl:h-[280px] object-cover object-center rounded-lg"
            />
          </a>
        </li>
      </ul>
    </section>
  </main>
</template>

<script setup lang="ts">
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/vue/24/solid';
import { computed, onMounted, ref, watch } from 'vue';
import { useRoute } from 'vue-router';
import { IMAGE_ENDPOINT_MEDIUM } from '../helpers/constants';
import { toTitleCase } from '../helpers/utils';
import { fetchSearch } from '../services/movieApi';
import { SearchResult } from '../types/movie';

const route = useRoute();

const term = route.params.term as string;

const searchs = ref<SearchResult[]>([]);
const loading = ref<boolean>(false);
const error = ref<string | null>(null);
const currentPage = ref<number>(1);
const totalPage = ref<number>(500);

const fetchSearchs = async () => {
  loading.value = true;

  try {
    const data = await fetchSearch(term, currentPage.value);
    if (data) {
      searchs.value = data.results;
      currentPage.value = data.page;
      totalPage.value = data.total_pages >= 500 ? 500 : data.total_pages;
    }
  } catch (err) {
    error.value = err instanceof Error ? err.message : 'Unknown error occured';
  } finally {
    loading.value = false;
  }
};

const nextPage = () => {
  if (currentPage.value < totalPage.value) {
    currentPage.value += 1;
  }
};

const prevPage = () => {
  if (currentPage.value > 1) {
    currentPage.value -= 1;
  }
};

const goToPage = (page: number) => {
  currentPage.value = page;
};

const pagination = computed(() => {
  if (totalPage.value <= 3) {
    return Array.from({ length: totalPage.value }, (_, i) => i + 1);
  } else if (currentPage.value <= 3 && totalPage.value > 3) {
    return [1, 2, 3, '...', totalPage.value];
  } else if (
    currentPage.value >= 3 &&
    currentPage.value <= totalPage.value - 3
  ) {
    return [
      1,
      '...',
      currentPage.value - 1,
      currentPage.value,
      currentPage.value + 1,
      '...',
      totalPage.value,
    ];
  } else {
    return [
      1,
      '...',
      totalPage.value - 2,
      totalPage.value - 1,
      totalPage.value,
    ];
  }
});

onMounted(fetchSearchs);
watch([currentPage], async () => {
  await fetchSearchs();
});
</script>
