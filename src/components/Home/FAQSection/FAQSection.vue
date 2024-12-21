<script lang="ts" setup>
import SectionHeader from '../SectionHeader.vue';
import FAQList from './FAQList.vue';
</script>

<template>
  <section
    v-motion
    :initial="{ opacity: 0 }"
    :visible-once="{ opacity: 1 }"
    :duration="1500"
    class="wrapper pb-8 md:pb-16 flex flex-col gap-y-4 md:gap-y-6"
  >
    <SectionHeader
      title="Frequently Asked Questions"
      sub-title="Got questions? We've got answers! Check out our FAQ section to find answers to the most common questions about MoVue."
    />
    <FAQList />
  </section>
</template>
