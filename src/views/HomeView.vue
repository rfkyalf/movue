<script lang="ts" setup>
import HeroSection from '../components/Home/HeroSection/HeroSection.vue';
import CategoriesSection from '../components/Home/CategoriesSection/CategoriesSection.vue';
import DevicesSection from '../components/Home/DevicesSection/DevicesSection.vue';
import FAQSection from '../components/Home/FAQSection/FAQSection.vue';
import PricingSection from '../components/Home/PricingSection/PricingSection.vue';
import CTASection from '../components/Home/CTASection/CTASection.vue';
</script>

<template>
  <main class="min-h-screen bg-neutral-950">
    <HeroSection />
    <CategoriesSection />
    <DevicesSection />
    <FAQSection />
    <PricingSection />
    <CTASection />
  </main>
</template>
