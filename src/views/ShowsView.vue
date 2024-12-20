<script setup lang="ts">
import CTASection from '../components/Home/CTASection/CTASection.vue';
import PopularSection from '../components/Shows/PopularSection.vue';
import AiringTodaySection from '../components/Shows/AiringTodaySection.vue';
import HeroSection from '../components/Shows/HeroSection.vue';
import OnTheAirSection from '../components/Shows/OnTheAirSection.vue';
import TopRatedSection from '../components/Shows/TopRatedSection.vue';
</script>

<template>
  <main class="min-h-screen bg-neutral-950">
    <HeroSection />
    <AiringTodaySection />
    <PopularSection />
    <OnTheAirSection />
    <TopRatedSection />
    <CTASection />
  </main>
</template>
