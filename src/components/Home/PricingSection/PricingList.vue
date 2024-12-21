<script lang="ts" setup>
import { PLAN_LIST } from '../../../helpers/constants';
const props = defineProps<{
  subType: string;
}>();
</script>

<template>
  <ul class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
    <li
      v-for="plan in PLAN_LIST"
      :key="plan.id"
      class="bg-neutral-900 flex flex-col gap-y-2 border border-neutral-800 rounded-lg p-8"
    >
      <h3 class="text-xl font-medium text-neutral-100">{{ plan.name }}</h3>
      <p class="text-sm text-neutral-400">
        {{ plan.description }}
      </p>
      <p class="text-4xl text-neutral-50 font-medium my-4">
        ${{ props.subType === 'yearly' ? plan.yearlyPrice : plan.monthlyPrice
        }}<span class="text-sm text-neutral-400 font-normal"
          >/{{ props.subType }}</span
        >
      </p>
      <div class="flex items-center gap-x-4">
        <button
          class="text-sm text-neutral-100 bg-neutral-950 hover:bg-neutral-950/80 focus:ring focus:ring-neutral-700 border border-neutral-700 rounded-md px-4 py-2"
        >
          Start Free Trial
        </button>
        <button
          class="text-sm text-neutral-100 bg-[red]/90 hover:bg-[red]/80 focus:ring focus:ring-[red] rounded-md px-4 py-2"
        >
          Choose Plan
        </button>
      </div>
    </li>
  </ul>
</template>
