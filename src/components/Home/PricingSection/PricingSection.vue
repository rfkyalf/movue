<script lang="ts" setup>
import { ref } from 'vue';
import SectionHeader from '../SectionHeader.vue';
import PricingList from './PricingList.vue';
import PricingTabs from './PricingTabs.vue';
const subType = ref<string>('monthly');
const setSubType = (type: string) => {
  subType.value = type.toLocaleLowerCase();
};
</script>

<template>
  <section class="wrapper pb-8 md:pb-16 flex flex-col gap-y-4 md:gap-y-6">
    <SectionHeader
      title="Choose the plan that's right for you"
      sub-title="Join MoVue and select from our flexible subscription options tailored to suit your viewing preferences. Get ready for non-stop entertainment!"
    />
    <PricingTabs :sub-type="subType" :set-sub-type="setSubType" />
    <PricingList :sub-type="subType" />
  </section>
</template>
