<script setup lang="ts">
import { Icon } from '@iconify/vue'
</script>
<template>
  <div class="">
    <h2 class="pt-10 text-center text-6xl font-medium text-slate-500">
      Dominio
    </h2>
  </div>
  <div
    class="flex flex-col flex-wrap place-content-center place-items-center justify-around space-y-16 pb-16 text-4xl font-medium text-slate-400 sm:w-full sm:flex-row"
  >
    <div
      class="mx-8 flex place-content-center place-items-center pt-16 text-center"
    >
      <Icon icon="mdi:vuejs" loading="lazy" />
      <p>VueJS</p>
    </div>
    <div
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
    </div>
  </div>
</template>
