<script setup lang="ts">
import CastSection from '../components/DetailShow/CastSection.vue';
import DetailInformation from '../components/DetailShow/DetailInformation.vue';
import HeroSection from '../components/DetailShow/HeroSection.vue';
import RecommendationsSection from '../components/DetailShow/RecommendationsSection.vue';
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
