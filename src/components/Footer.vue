<script lang="ts" setup>
import { NAV_LIST } from '../helpers/constants';
</script>

<template>
  <footer class="bg-neutral-900 w-full py-4 md:py-6">
    <div class="wrapper">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4 pb-4 md:pb-6">
        <div
          class="bg-neutral-800 md:max-w-[300px] h-fit flex flex-col gap-y-3 p-4 rounded-lg"
        >
          <div class="flex items-center gap-x-2">
            <img src="/logo.png" alt="logo" class="size-7" />
            <h3 class="text-xl text-neutral-50 font-bold">MoVue</h3>
          </div>
          <p class="text-sm text-neutral-400">
            MoVue is a streaming web platform built with Vue.js, currently under
            development. Its main features are not fully functional yet,
            focusing on a modern and responsive user interface.
          </p>
        </div>
        <div class="grid grid-cols-2 lg:grid-cols-4 gap-4">
          <div class="flex flex-col">
            <h3 class="text-base text-neutral-100 font-medium">Quick Links</h3>
            <ul>
              <li
                v-for="(nav, index) in NAV_LIST"
                :key="index"
                class="text-sm text-neutral-300"
              >
                <a :href="nav.href">{{ nav.name }}</a>
              </li>
            </ul>
          </div>
          <div class="flex flex-col">
            <h3 class="text-base text-neutral-100 font-medium">Movies</h3>
            <ul>
              <li
                v-for="(nav, index) in NAV_LIST"
                :key="index"
                class="text-sm text-neutral-300"
              >
                <a :href="nav.href">{{ nav.name }}</a>
              </li>
            </ul>
          </div>
          <div class="flex flex-col">
            <h3 class="text-base text-neutral-100 font-medium">TV Shows</h3>
            <ul>
              <li
                v-for="(nav, index) in NAV_LIST"
                :key="index"
                class="text-sm text-neutral-300"
              >
                <a :href="nav.href">{{ nav.name }}</a>
              </li>
            </ul>
          </div>
          <div class="flex flex-col">
            <h3 class="text-base text-neutral-100 font-medium">Find us on:</h3>
            <ul>
              <li
                v-for="(nav, index) in NAV_LIST"
                :key="index"
                class="text-sm text-neutral-300"
              >
                <a :href="nav.href">{{ nav.name }}</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div>
        <p
          class="text-neutral-200 text-base text-center border-t border-neutral-700 pt-2 md:pt-4"
        >
          Created By Rifky Alfarez | Design by lorem at Figma
        </p>
      </div>
    </div>
  </footer>
</template>
