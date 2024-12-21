<script lang="ts" setup>
import { DEVICE_LIST } from '../../../helpers/constants';
import SectionHeader from '../SectionHeader.vue';
</script>

<template>
  <section
    v-motion
    :initial="{ opacity: 0 }"
    :visible-once="{ opacity: 1 }"
    :duration="1500"
    class="wrapper pb-8 md:pb-16 flex flex-col gap-y-4 md:gap-y-6"
  >
    <SectionHeader
      title="We Provide you streaming experience across various devices"
      sub-title="With MoVue, you can enjoy your favorite movies and TV shows anytime, anywhere. Our platform is designed to be compatible with a wide range of devices, ensuring that you never miss a moment of entertainment."
    />
    <ul class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      <li
        v-for="(device, index) in DEVICE_LIST"
        :key="index"
        class="bg-gradient-to-tr from-[#0a0a0a] via-[#0a0a0a] via-70% to-[red]/10 border border-neutral-900 w-full flex flex-col gap-y-4 rounded-lg p-4"
      >
        <div class="flex items-center gap-x-6">
          <div class="p-2 bg-neutral-900 border border-neutral-800 rounded-md">
            <component :is="device.icon" class="size-7 text-[red]/90" />
          </div>
          <h4 class="text-xl text-neutral-50 font-semibold">
            {{ device.title }}
          </h4>
        </div>
        <p class="text-sm text-neutral-400">{{ device.desc }}</p>
      </li>
    </ul>
  </section>
</template>
