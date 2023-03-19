<script setup lang="ts">
import { Icon } from '@iconify/vue'
import { socialMedia } from '../utils/socialMediaInfo'

const { t } = useI18n()
</script>
<template>
  <div class="px-10">
    <div
      class="flex justify-between border-t border-slate-300 py-4 dark:border-slate-400"
    >
      <div class="flex items-center space-x-0.5 text-sm">
        <Icon icon="mdi:copyright" loading="lazy" class="h-6 w-6" />
        <p>
          2023 José Valencia,
          <span class="inline-block">{{ t('footer.rights') }}</span>
        </p>
      </div>
      <div>
        <a href="https://www.netlify.com">
          <img
            src="https://www.netlify.com/v3/img/components/netlify-color-bg.svg"
            alt="Deploys by Netlify"
          />
        </a>
      </div>
      <div class="flex items-center space-x-2 text-xl">
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
</template>

<style scoped></style>
