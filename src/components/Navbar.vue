<script lang="ts" setup>
import {
  Bars3BottomRightIcon,
  MagnifyingGlassIcon,
  XMarkIcon,
} from '@heroicons/vue/24/outline';
import { onMounted, onUnmounted, ref } from 'vue';
import { NAV_LIST } from '../helpers/constants';
import { RouterLink } from 'vue-router';

const open = ref(false);
const scrolled = ref(false);

const toggleNav = () => {
  open.value = !open.value;
};

const handleScroll = () => {
  scrolled.value = window.scrollY > 0;
};

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});
</script>

<template>
  <section
    :class="{
      'bg-neutral-700': open,
      'bg-neutral-700/50 backdrop-blur-sm': scrolled,
    }"
    class="fixed z-40 top-0 left-0 right-0 transition-colors duration-300"
  >
    <div class="wrapper py-4 flex items-center justify-between">
      <div class="flex items-center gap-x-2">
        <img src="/logo.png" alt="MoVue Logo" class="size-8" />
        <h1 class="text-2xl text-neutral-50 font-bold">Movue</h1>
      </div>
      <!-- toggle nav -->
      <button
        aria-label="toggle navbar"
        @click="toggleNav"
        class="p-2 bg-neutral-800 border border-neutral-700 rounded-lg lg:hidden"
      >
        <Bars3BottomRightIcon v-if="!open" class="text-neutral-200 size-7" />
        <XMarkIcon v-if="open" class="text-neutral-200 size-7" />
      </button>
      <!-- desktop nav -->
      <nav class="hidden lg:block">
        <ul
          class="bg-neutral-950 rounded-lg overflow-hidden flex items-center gap-x-4 p-1"
        >
          <li v-for="(nav, index) in NAV_LIST" :key="index">
            <RouterLink
              :to="nav.href"
              active-class="bg-neutral-700 !text-neutral-50"
              class="text-neutral-500 text-lg px-4 py-1 rounded-md hover:bg-neutral-700 hover:text-neutral-50"
              >{{ nav.name }}</RouterLink
            >
          </li>
        </ul>
      </nav>
      <div class="hidden lg:flex items-center gap-x-2">
        <a href="/search">
          <MagnifyingGlassIcon class="text-neutral-200 size-6" />
        </a>
        <a href="https://github.com/rfkyalf/movue">
          <img src="/github.svg" alt="Github" class="size-6" />
        </a>
      </div>
    </div>
  </section>
  <!-- overlay -->
  <div
    @click="toggleNav"
    :class="{
      'opacity-100 pointer-events-auto': open,
      'opacity-0 pointer-events-none': !open,
    }"
    class="fixed z-20 inset-0 bg-neutral-950/20 backdrop-blur-sm h-full transition-opacity duration-300 lg:hidden"
  />
  <!-- mobile nav -->
  <nav
    :class="{ '-translate-y-full': !open }"
    class="fixed z-30 top-0 left-0 right-0 bg-neutral-900 h-[80%] transition-transform duration-300 rounded-b-lg lg:hidden"
  >
    <ul
      class="h-full w-full flex flex-col items-center justify-center gap-y-4 mt-8"
    >
      <li v-for="(nav, index) in NAV_LIST" :key="index">
        <RouterLink
          :to="nav.href"
          :onclick="toggleNav"
          active-class="bg-neutral-700 !text-neutral-50"
          class="text-neutral-500 text-lg px-4 py-1 rounded-md hover:bg-neutral-700 hover:text-neutral-50"
          >{{ nav.name }}</RouterLink
        >
      </li>
      <li>
        <RouterLink
          to="/search"
          :onclick="toggleNav"
          active-class="bg-neutral-700 !text-neutral-50"
          class="text-neutral-500 text-lg flex items-center gap-x-1"
          ><MagnifyingGlassIcon class="size-5" /> Search</RouterLink
        >
      </li>
      <li>
        <a
          href="https://github.com/rfkyalf/movue"
          class="text-neutral-50 text-lg"
          ><img src="/github.svg" alt="github" class="size-6"
        /></a>
      </li>
    </ul>
  </nav>
</template>
