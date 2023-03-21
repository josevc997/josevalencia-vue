<script setup lang="ts">
import { Icon } from '@iconify/vue'
import { socialMedia } from '../utils/socialMediaInfo'

useHead({
  title: 'José Valencia',
  meta: [
    {
      name: 'description',
      content: 'Portafolio desarrollador fullstack José Valencia',
    },
  ],
})
const { t } = useI18n()
</script>

<template>
  <div
    class="flex min-h-screen place-items-center bg-black bg-opacity-50 bg-[url('../assets/fondo2.webp')] bg-cover bg-center bg-no-repeat py-16 text-slate-50 bg-blend-overlay"
  >
    <div
      class="container col-span-1 mx-auto grid min-w-fit max-w-5xl place-items-center px-8"
    >
      <div class="w-fit rounded-full bg-black">
        <img
          loading="lazy"
          src="../assets/perfil.webp"
          alt="perfil.jpg"
          class="h-64 w-64 rounded-full opacity-80"
        />
      </div>
      <h1 class="text-center text-7xl font-semibold">José Valencia</h1>
      <p class="text-3xl">{{ t('index.description') }}</p>
      <div class="flex space-x-4 pt-6 text-2xl">
        <a
          v-for="(red, index) in socialMedia"
          :key="index"
          :href="red.url"
          target="_blank"
        >
          <Icon :icon="red.icon" loading="lazy" />
        </a>
      </div>
    </div>
  </div>
  <div class="flex place-content-center place-items-center py-16 px-4">
    <ThePersonalCardResume />
  </div>
  <div
    class="container mx-auto grid max-w-7xl grid-cols-1 place-content-center place-items-center py-16"
  >
    <TheSoftwareDomain />
  </div>
</template>
