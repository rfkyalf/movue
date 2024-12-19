<script lang="ts" setup>
import SectionHeader from '../SectionHeader.vue';
</script>

<template>
  <section class="wrapper pb-8 md:pb-16 flex flex-col gap-y-4 md:gap-y-6">
    <SectionHeader
      title="We Provide you streaming experience across various devices"
      sub-title="With MoVue, you can enjoy your favorite movies and TV shows anytime, anywhere. Our platform is designed to be compatible with a wide range of devices, ensuring that you never miss a moment of entertainment."
    />
    <ul class="grid grid-cols-3 gap-4">
      <li
        v-for="index in 6"
        :key="index"
        class="bg-black w-full flex flex-col rounded-lg"
      >
        memek
      </li>
    </ul>
  </section>
</template>
