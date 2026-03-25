<script setup lang="ts">
import { component as LucideIcon } from 'lucide-vue-next'

defineProps<{
  href: string
  label: string
  icon: any
}>()
</script>

<template>
  <a :href="href" 
     target="_blank" 
     rel="noopener"
     class="flex items-center gap-3 px-4 py-3 bg-slate-800 text-slate-300 rounded-xl border border-slate-700 shadow-sm hover:bg-blue-600 hover:border-blue-600 hover:text-white transition-all duration-500 group"
     :aria-label="label">
    <component :is="icon" class="w-5 h-5 text-blue-400 group-hover:scale-110 group-hover:text-white transition-all duration-500" />
    <span class="text-xs font-extrabold uppercase tracking-[0.2em]">{{ label }}</span>
  </a>
</template>
