<script setup lang="ts">
import { fetchMovies } from '../../services/movieApi';
import List from './List.vue';
</script>

<template>
  <List
    :datas="fetchMovies"
    title-section="Popular"
    class="pb-8 md:pb-16"
    cat="popular"
  />
</template>
