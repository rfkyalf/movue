<script setup lang="ts">
import { fetchTVs } from '../../services/movieApi';
import List from './List.vue';
</script>

<template>
  <List
    :datas="fetchTVs"
    title-section="Top Rated"
    class="pb-8 md:pb-16"
    cat="top_rated"
  />
</template>
