<script setup lang="ts">
import CTASection from '../components/Home/CTASection/CTASection.vue';
import HeroSection from '../components/Movies/HeroSection.vue';
import NowPlayingSection from '../components/Movies/NowPlayingSection.vue';
import PopularSection from '../components/Movies/PopularSection.vue';
import TopRatedSection from '../components/Movies/TopRatedSection.vue';
import UpcomingSection from '../components/Movies/UpcomingSection.vue';
</script>

<template>
  <main class="min-h-screen bg-neutral-950">
    <HeroSection />
    <NowPlayingSection />
    <PopularSection />
    <UpcomingSection />
    <TopRatedSection />
    <CTASection />
  </main>
</template>
