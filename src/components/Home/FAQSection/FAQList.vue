<script lang="ts" setup>
import { ChevronDownIcon } from '@heroicons/vue/24/outline';
import { ref } from 'vue';
import { FAQ_LIST } from '../../../helpers/constants';

const openIndex = ref<number | null>(null);
const toggleOpen = (index: number) => {
  openIndex.value = openIndex.value === index ? null : index;
};
</script>

<template>
  <ul class="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
    <li
      v-for="(faq, index) in FAQ_LIST"
      :key="index"
      class="flex flex-col gap-y-4 md:gap-y-8"
    >
      <div class="flex items-center justify-between">
        <div class="flex items-center gap-x-4">
          <p
            class="bg-neutral-900 px-4 py-2 rounded-lg border border-neutral-700 text-neutral-100"
          >
            {{ index + 1 }}
          </p>
          <div>
            <h3 class="text-lg font-medium text-neutral-50">
              {{ faq.question }}
            </h3>
            <p
              v-if="openIndex === index"
              class="text-sm text-neutral-400 transition-opacity"
            >
              {{ faq.answer }}
            </p>
          </div>
        </div>
        <button @click="toggleOpen(index)">
          <ChevronDownIcon
            :class="{ 'rotate-180': openIndex === index }"
            class="size-5 text-neutral-50 transition-transform duration-300"
          />
        </button>
      </div>
      <div
        class="h-[1px] bg-gradient-to-r from-neutral-950 via-[red]/90 to-neutral-950"
      />
    </li>
  </ul>
</template>
