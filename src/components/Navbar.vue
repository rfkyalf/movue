<script lang="ts" setup>
import { Bars3BottomRightIcon } from '@heroicons/vue/24/outline';
import { ref } from 'vue';

const open = ref(false);
</script>

<template>
  <section class="fixed z-40 top-0 left-0 right-0">
    <div class="wrapper py-4 flex items-center justify-between">
      <h1 class="text-xl text-neutral-50 font-bold">Movue</h1>
      <button
        @click="open = true"
        class="p-2 bg-neutral-800 border border-neutral-700 rounded-lg"
      >
        <Bars3BottomRightIcon class="text-neutral-200 size-7" />
      </button>
      <div>
        <h2>Movue</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea,
          necessitatibus.
        </p>
      </div>
    </div>
  </section>
</template>
