<script setup lang="ts">
const { t } = useI18n()
</script>
<template>
  <div
    class="container mx-auto max-w-7xl space-y-4 rounded bg-white p-4 shadow dark:bg-slate-700"
  >
    <h1 class="text-3xl font-medium">{{ t('resume.greeting') }}</h1>
    <p class="pt-2 text-lg">
      {{ t('resume.first') }}
    </p>
    <p class="text-lg">
      {{ t('resume.second') }}
    </p>
    <p class="text-lg">
      {{ t('resume.third') }}
    </p>
  </div>
</template>
