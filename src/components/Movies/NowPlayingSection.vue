<script setup lang="ts">
import { fetchMovies } from '../../services/movieApi';
import List from './List.vue';
</script>

<template>
  <List
    :datas="fetchMovies"
    title-section="Now Playing"
    class="py-8 md:py-16"
    cat="now_playing"
  />
</template>
