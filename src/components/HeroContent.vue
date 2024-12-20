<script lang="ts" setup>
import { HashtagIcon, PlayIcon } from '@heroicons/vue/24/solid';

defineProps<{
  title: string;
  overview: string;
  href: string;
}>();
</script>

<template>
  <div class="wrapper relative h-full flex flex-col justify-center gap-y-1">
    <p class="text-[red]/90 text-lg font-medium flex items-center">
      <HashtagIcon class="size-6" /> Today&apos;s Trending
    </p>
    <h2 class="text-3xl text-neutral-50 font-bold text-center md:text-start">
      {{ title }}
    </h2>
    <p
      class="max-w-[500px] lg:max-w-[600px] text-base text-neutral-100 text-center md:text-start"
    >
      {{ overview }}
    </p>
    <a
      :href="href"
      class="w-fit bg-[red]/90 hover:bg-[red]/70 text-white flex items-center gap-x-2 px-4 py-2 rounded-lg self-center md:self-start mt-4"
    >
      <PlayIcon class="size-5" />
      Watch Now
    </a>
  </div>
</template>
