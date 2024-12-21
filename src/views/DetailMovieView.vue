<script setup lang="ts">
import CastSection from '../components/DetailMovie/CastSection.vue';
import DetailInformation from '../components/DetailMovie/DetailInformation.vue';
import HeroSection from '../components/DetailMovie/HeroSection.vue';
import RecommendationsSection from '../components/DetailMovie/RecommendationsSection.vue';
import CTASection from '../components/Home/CTASection/CTASection.vue';
</script>

<template>
  <main class="min-h-screen bg-neutral-950 pb-4">
    <HeroSection />
    <DetailInformation />
    <CastSection />
    <RecommendationsSection />
    <CTASection />
  </main>
</template>
