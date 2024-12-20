<script setup lang="ts">
import { fetchMovies } from '../../services/movieApi';
import List from './List.vue';
</script>

<template>
  <List
    :datas="fetchMovies"
    title-section="Top Rated"
    class="pb-8 md:pb-16"
    cat="top_rated"
  />
</template>
