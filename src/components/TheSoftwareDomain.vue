<script setup lang="ts">
import { Icon } from '@iconify/vue'
const { t } = useI18n()
const technologies = [
  {
    name: 'VueJS',
    icon: 'mdi:vuejs',
  },
  {
    name: 'React',
    icon: 'mdi:react',
  },
  {
    name: 'Python',
    icon: 'mdi:language-python',
  },
  {
    name: 'Django',
    icon: 'cib:django',
  },
  {
    name: 'AWS',
    icon: 'mdi:aws',
  },
  {
    name: 'GCloud',
    icon: 'mdi:google-cloud',
  },
  {
    name: 'Tailwind',
    icon: 'mdi:tailwind',
  },
  {
    name: 'Bootstrap',
    icon: 'mdi:bootstrap',
  },
]
</script>
<template>
  <h2
    class="text-center text-6xl font-medium text-slate-600 dark:text-slate-200"
  >
    {{ t('software.title') }}
  </h2>
  <div
    class="flex flex-col flex-wrap place-content-center place-items-center justify-around pb-16 text-4xl font-medium text-slate-500 dark:text-slate-300 sm:w-full sm:flex-row"
  >
    <div
      v-for="(tech, index) in technologies"
      :key="index"
      class="mx-8 flex place-content-center place-items-center space-x-2 pt-16 text-center"
    >
      <Icon :icon="tech.icon" loading="lazy" />
      <p>{{ tech.name }}</p>
    </div>
    <!-- <div
      class="mx-8 flex place-content-center place-items-center space-x-1 text-center"
    >
      <Icon icon="mdi:language-python" loading="lazy" />
      <p>Python</p>
    </div>
    <div
      class="mx-8 flex place-content-center place-items-center space-x-1 text-center"
    >
      <Icon icon="cib:django" loading="lazy" />
      <p>Django</p>
    </div>
    <div
      class="mx-8 flex place-content-center place-items-center space-x-1 text-center"
    >
      <Icon icon="mdi:aws" loading="lazy" />
      <p>AWS</p>
    </div>
    <div
      class="mx-8 flex place-content-center place-items-center space-x-1 text-center"
    >
      <Icon icon="mdi:google-cloud" loading="lazy" />
      <p>GCloud</p>
    </div>
    <div
      class="mx-8 flex place-content-center place-items-center space-x-1 text-center"
    >
      <Icon icon="mdi:react" loading="lazy" />
      <p>React</p>
    </div> -->
  </div>
</template>
