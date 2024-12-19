<script lang="ts" setup>
import { PlayIcon } from '@heroicons/vue/24/solid';
const HERO_TITLE = 'The Best Streaming Experience';
const HERO_DESC =
  'MoVue is the best streaming experience for watching your favorite movies and shows on demand, anytime, anywhere. With MoVue, you can enjoy a wide variety of content, including the latest blockbusters, classic movies, popular TV shows, and more. You can also create your own watchlists, so you can easily find the content you want to watch.';
</script>

<template>
  <div
    class="absolute inset-0 flex flex-col items-center justify-center gap-y-10"
  >
    <div class="flex flex-col items-center justify-center gap-y-4">
      <h2
        class="text-3xl md:text-4xl lg:text-5xl font-bold text-center text-neutral-50"
      >
        {{ HERO_TITLE }}
      </h2>
      <p
        class="max-w-[360px] md:max-w-[720px] lg:max-w-[950px] text-sm md:text-base text-neutral-300 text-center"
      >
        {{ HERO_DESC }}
      </p>
      <button
        class="w-fit px-4 md:px-6 py-2 md:py-3 mt-4 bg-[red]/90 hover:bg-[red]/80 text-sm md:text-base text-white flex items-center gap-x-3 rounded-md"
      >
        <PlayIcon class="size-5 md:size-6" /> Start Watching Now
      </button>
    </div>
  </div>
</template>
