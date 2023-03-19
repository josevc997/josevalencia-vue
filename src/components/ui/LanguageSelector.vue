<script setup lang="ts">
import {
  Listbox,
  ListboxButton,
  ListboxOptions,
  ListboxOption,
} from '@headlessui/vue'
import { CheckCircleIcon, ChevronDownIcon } from '@heroicons/vue/20/solid'

const { locale, availableLocales } = useI18n()
</script>

<template>
  <Listbox v-model="locale">
    <div class="relative">
      <ListboxButton
        class="relative mr-2 flex cursor-default items-end justify-between space-x-2 px-1 py-1 focus:outline-none focus-visible:border-slate-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-300 sm:text-sm"
      >
        <span class="">{{ locale }}</span>
        <ChevronDownIcon class="h-4 w-4 text-gray-400" aria-hidden="true" />
      </ListboxButton>

      <transition
        leave-active-class="transition duration-100 ease-in"
        leave-from-class="opacity-100"
        leave-to-class="opacity-0"
      >
        <ListboxOptions
          class="absolute mt-2 max-h-60 w-20 cursor-default overflow-auto rounded bg-white text-base text-slate-900 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm"
        >
          <ListboxOption
            v-for="language in availableLocales"
            v-slot="{ active, selected }"
            :key="language"
            :value="language"
            as="template"
          >
            <li
              class="flex items-center justify-between py-2 px-3"
              :class="{ 'bg-slate-100': active }"
            >
              <span>{{ language }}</span>
              <CheckCircleIcon
                v-if="selected"
                class="h-4 w-4"
                aria-hidden="true"
              />
            </li>
          </ListboxOption>
        </ListboxOptions>
      </transition>
    </div>
  </Listbox>
</template>
