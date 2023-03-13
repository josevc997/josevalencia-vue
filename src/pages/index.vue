<script setup lang="ts">
import { Icon } from '@iconify/vue'

useHead({
  title: 'Home',
  meta: [{ name: 'description', content: 'Opinionated Vite Starter Template' }],
})
const { t } = useI18n()
</script>

<template>
  <div
    class="flex min-h-[calc(100vh-6.5rem)] place-items-center bg-black bg-opacity-50 bg-[url('../assets/fondo2.webp')] bg-cover bg-center bg-no-repeat py-16 text-slate-50 bg-blend-overlay"
  >
    <div
      class="container col-span-1 mx-auto grid min-w-fit max-w-5xl px-8 md:place-items-center"
    >
      <div class="w-fit rounded-full bg-black">
        <img
          loading="lazy"
          src="../assets/perfil.webp"
          alt="perfil.jpg"
          class="h-64 w-64 rounded-full opacity-80"
        />
      </div>
      <h1 class="text-7xl font-semibold">José Valencia</h1>
      <p class="text-3xl">{{ t('index.description') }}</p>
      <div class="flex space-x-4 pt-2 text-2xl">
        <a href="https://www.linkedin.com/in/josevc997/" target="_blank">
          <Icon icon="mdi:linkedin" loading="lazy" />
        </a>
        <a href="https://www.facebook.com/josevc997/" target="_blank">
          <Icon icon="mdi:facebook" loading="lazy" />
        </a>
        <a href="https://www.instagram.com/josevc997/" target="_blank">
          <Icon icon="mdi:instagram" loading="lazy" />
        </a>
        <a href="https://twitter.com/josevc997" target="_blank">
          <Icon icon="mdi:twitter" loading="lazy" />
        </a>
        <a href="https://github.com/josevc997" target="_blank">
          <Icon icon="mdi:github" loading="lazy" />
        </a>
        <a
          href="mailto:19josevalencia97@gmail.com?subject=Contacto%20Web"
          target="_blank"
        >
          <Icon icon="mdi:gmail" loading="lazy" />
        </a>
      </div>
    </div>
  </div>
  <div
    class="flex min-h-screen place-content-center place-items-center bg-slate-100 py-16 px-4 text-slate-800"
  >
    <ThePersonalCardResume />
  </div>
  <div
    class="container mx-auto grid grid-cols-1 place-content-center place-items-center"
  >
    <TheSoftwareDomain />
  </div>
</template>
