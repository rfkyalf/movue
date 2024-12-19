<script lang="ts" setup>
const props = defineProps<{
  setSubType: (type: string) => void;
  subType: string;
}>();
</script>

<template>
  <div
    class="w-fit flex items-center gap-x-1 bg-neutral-950 border border-neutral-900 text-neutral-100 p-1 rounded-lg"
  >
    <button
      @click="props.setSubType('monthly')"
      :class="{ 'bg-neutral-800': props.subType === 'monthly' }"
      class="rounded-md px-4 py-2 hover:bg-neutral-800"
    >
      Monthly
    </button>
    <button
      @click="props.setSubType('yearly')"
      :class="{ 'bg-neutral-800': props.subType === 'yearly' }"
      class="rounded-md px-4 py-2 hover:bg-neutral-800"
    >
      Yearly
    </button>
  </div>
</template>
