<script setup lang="ts"></script>

<template>
  <header class="fixed top-0 z-10 w-full">
    <TheNavbar />
  </header>
  <main
    class="flex min-h-screen flex-col bg-slate-100 text-slate-600 dark:bg-slate-600 dark:text-slate-200"
  >
    <RouterView />
  </main>
  <footer
    class="bg-slate-100 text-slate-600 dark:bg-slate-600 dark:text-slate-400"
  >
    <TheFooter />
  </footer>
</template>
