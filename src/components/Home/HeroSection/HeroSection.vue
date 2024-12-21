<script lang="ts" setup>
import HeroBackground from './HeroBackground.vue';
import HeroContent from './HeroContent.vue';
</script>

<template>
  <section
    v-motion
    :initial="{ opacity: 0 }"
    :enter="{ opacity: 1 }"
    :duration="1000"
    class="relative h-screen overflow-hidden bg-neutral-950"
  >
    <HeroBackground />
    <HeroContent />
  </section>
</template>
