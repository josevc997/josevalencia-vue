<script setup lang="ts">
const { t } = useI18n()
</script>
<template>
  <nav
    class="flex h-10 flex-1 items-center justify-between bg-neutral-900 px-2"
  >
    <LanguageSelector class="text-white" />
    <BaseThemeToggle />
  </nav>
  <nav
    class="flex h-16 flex-1 items-center justify-between border-b border-slate-800 bg-slate-800 px-2 text-slate-50"
  >
    <div class="text-lg font-medium">José Valencia</div>
    <ul class="mr-4 flex font-medium hover:text-slate-200">
      <li>
        <router-link to="/">{{ t('navbar.home') }}</router-link>
      </li>
    </ul>
  </nav>
</template>
