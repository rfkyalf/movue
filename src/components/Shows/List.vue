<script lang="ts" setup>
import { onMounted, ref } from 'vue';
import { IMAGE_ENDPOINT_MEDIUM } from '../../helpers/constants';
import { TV } from '../../types/movie';
import { RouterLink } from 'vue-router';

const props = defineProps<{
  datas: (cat: string) => Promise<{ results: TV[] }>;
  titleSection: string;
  class: string;
  cat: string;
}>();

const tvs = ref<TV[]>([]);
const loading = ref<boolean>(false);
const error = ref<string | null>(null);

onMounted(async () => {
  loading.value = true;
  try {
    const data = await props.datas(props.cat);
    if (data?.results) tvs.value = data.results;
  } catch (err) {
    error.value =
      err instanceof Error ? err.message : 'Unknown error occurred.';
  } finally {
    loading.value = false;
  }
});
</script>

<template>
  <section
    v-motion
    :initial="{ opacity: 0 }"
    :visible-once="{ opacity: 1 }"
    :duration="1500"
    class="wrapper flex flex-col gap-y-4 md:gap-y-6"
    :class="class"
  >
    <h2 class="text-2xl md:text-3xl text-neutral-50 font-bold">
      {{ titleSection }}
    </h2>
    <ul
      v-if="loading"
      class="flex items-center overflow-auto no-scrollbar gap-2"
    >
      <li
        v-for="index in 6"
        :key="index"
        class="w-[200px] h-[220px] bg-neutral-500 animate-pulse rounded-lg flex-shrink-0"
      ></li>
    </ul>
    <p v-if="error" class="w-full h-[220px] bg-red-500 text-white">
      {{ error }}
    </p>
    <ul
      v-if="!loading && tvs.length"
      class="flex items-center gap-x-2 md:gap-x-4 overflow-auto no-scrollbar"
    >
      <li v-for="tv in tvs" :key="tv.id" class="flex-shrink-0">
        <RouterLink :to="`detail/tv/${tv.id}`">
          <img
            :src="IMAGE_ENDPOINT_MEDIUM + tv.poster_path"
            :alt="tv.name"
            class="w-[180px] h-[280px] object-cover object-center rounded-lg hover:opacity-50"
          />
        </RouterLink>
      </li>
    </ul>
  </section>
</template>
