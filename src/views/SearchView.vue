<script setup lang="ts">
import MovieGenres from '../components/Search/MovieGenres.vue';
import TVGenres from '../components/Search/TVGenres.vue';
import Search from '../components/Search/Search.vue';
</script>

<template>
  <main class="min-h-screen bg-neutral-950 pt-20 md:pt-28 pb-10">
    <Search />
    <MovieGenres />
    <TVGenres />
  </main>
</template>
