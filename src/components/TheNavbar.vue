<script setup lang="ts"></script>
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
    <ul class="flex space-x-4">
      <li>
        <router-link to="/">Home</router-link>
      </li>
      <li>
        <router-link to="/about">About</router-link>
      </li>
    </ul>
  </nav>
</template>
