<script setup lang="ts">
import { fetchTVs } from '../../services/movieApi';
import List from './List.vue';
</script>

<template>
  <List
    :datas="fetchTVs"
    title-section="Airing Today"
    class="py-8 md:py-16"
    cat="airing_today"
  />
</template>
