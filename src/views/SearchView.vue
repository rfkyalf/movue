<template>
  <main class="min-h-screen bg-neutral-950 pt-20 pb-10">
    <section class="wrapper flex flex-col items-center justify-center gap-y-6">
      <h2
        class="max-w-[600px] text-4xl text-neutral-50 font-bold text-center text-pretty"
      >
        Discover What You&apos;re Looking For Today
      </h2>
      <div class="w-full md:w-2/3 bg-neutral-900 rounded-lg overflow-hidden">
        <div class="flex items-center">
          <input
            type="search"
            placeholder="Search by title..."
            @input="(event) => debounceSearchQuery((event.target as HTMLInputElement).value)"
            :class="{ 'border-b border-neutral-800': searchQuery }"
            class="bg-neutral-900 w-full text-base px-4 py-2 text-neutral-100 rounded-lg"
          />
          <button class="bg-[red]/90 text-white text-base px-4 py-2 rounded-lg">
            Search
          </button>
        </div>
        <div v-if="searchQuery && searchs.length === 0">
          <p class="text-sm text-neutral-400 px-4 py-2">No result found</p>
        </div>
        <div v-if="error" class="bg-red-500 px-4 py-2">
          <p>{{ error }}</p>
        </div>
        <ul
          v-if="loading"
          class="flex flex-col gap-y-2 px-4 py-2 animate-pulse"
        >
          <li v-for="index in 5" :key="index" class="flex items-center gap-x-2">
            <div class="size-10 bg-neutral-500 rounded-md"></div>
            <p class="text-base text-neutral-100">Loading...</p>
          </li>
        </ul>
        <ul
          v-if="!loading && searchs.length > 0"
          class="px-4 py-2 flex flex-col gap-y-2 max-h-[300px] overflow-auto no-scrollbar"
        >
          <li v-for="search in searchs" :key="search.id">
            <a
              :href="
                search.media_type === 'movie'
                  ? `/detail/movie/${search.id}`
                  : search.media_type === 'tv'
                  ? `/detail/tv/${search.id}`
                  : `/detail/person/${search.id}`
              "
              class="flex items-center gap-x-2 hover:bg-neutral-800"
            >
              <img
                v-if="search.poster_path || search.profile_path"
                :src="
                  IMAGE_ENDPOINT_SMALL +
                  (search.poster_path || search.profile_path)
                "
                :alt="search.title || search.name"
                class="size-10 rounded-md object-cover object-center"
              />
              <img
                v-if="
                  search.poster_path === null || search.profile_path === null
                "
                src="/placeholder.svg"
                alt="placeholder"
                class="size-10 rounded-md object-cover object-center"
              />
              <p class="text-base text-neutral-100">
                {{ search.title || search.name }}
              </p></a
            >
          </li>
        </ul>
      </div>
    </section>
  </main>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue';
import { IMAGE_ENDPOINT_SMALL } from '../helpers/constants';
import { fetchSearch } from '../services/movieApi';
import { SearchResult } from '../types/movie';
import debounce from 'lodash.debounce';

const searchs = ref<SearchResult[]>([]);
const loading = ref<boolean>(false);
const error = ref<string | null>(null);
const searchQuery = ref<string>('');

const setSearchQuery = (query: string) => {
  searchQuery.value = query;
};

const debounceSearchQuery = debounce((query: string) => {
  setSearchQuery(query);
}, 500);

watch(searchQuery, async (newQuery) => {
  if (newQuery.trim() === '') {
    searchs.value = [];
    return;
  }

  loading.value = true;

  try {
    const data = await fetchSearch(newQuery);
    if (data?.results) {
      searchs.value = data.results;
    }
  } catch (err) {
    error.value = err instanceof Error ? err.message : 'Unknown error occured';
  } finally {
    loading.value = false;
  }
});
</script>
