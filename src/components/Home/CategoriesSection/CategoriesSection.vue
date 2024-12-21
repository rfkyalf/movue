<script lang="ts" setup>
import SectionHeader from '../SectionHeader.vue';
import CardGenres from './CardGenres.vue';
</script>

<template>
  <section
    v-motion
    :initial="{ opacity: 0 }"
    :visible-once="{ opacity: 1 }"
    :duration="1500"
    class="wrapper py-8 md:py-16 flex flex-col gap-y-4 md:gap-y-6"
  >
    <SectionHeader
      title="Explore our wide variety of categories"
      sub-title="Whether you're looking for a comedy to make you laugh, a drama to make you think, or a documentary to learn something new."
    />
    <CardGenres />
  </section>
</template>
