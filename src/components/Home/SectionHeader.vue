<script lang="ts" setup>
defineProps({
  title: String,
  subTitle: String,
});
</script>

<template>
  <div class="flex flex-col gap-y-1">
    <h3 class="text-2xl md:text-3xl text-neutral-50 font-bold">{{ title }}</h3>
    <p class="text-sm md:text-base text-neutral-400 max-w-[900px] text-pretty">
      {{ subTitle }}
    </p>
  </div>
</template>
