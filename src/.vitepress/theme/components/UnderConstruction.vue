<script setup lang="ts">
import { Construction, Hammer, HardHat } from 'lucide-vue-next'

defineProps<{
  message?: string
}>()
</script>

<template>
  <div class="my-12 p-12 bg-slate-50 dark:bg-slate-900/50 rounded-[2rem] border border-slate-200 dark:border-slate-800 text-center relative overflow-hidden">
    <!-- Background Decor -->
    <Construction class="absolute -bottom-8 -right-8 w-48 h-48 text-slate-200/50 dark:text-slate-800/30 -rotate-12" />
    
    <div class="relative z-10 flex flex-col items-center">
      <div class="p-4 bg-amber-100 dark:bg-amber-900/30 rounded-2xl mb-6">
        <HardHat class="w-10 h-10 text-amber-600 dark:text-amber-500" />
      </div>
      
      <h2 class="text-2xl md:text-3xl font-extrabold text-slate-900 dark:text-white mb-4">
        Under Construction
      </h2>
      
      <p class="text-slate-600 dark:text-slate-400 max-w-md mx-auto leading-relaxed">
        {{ message || "I'm currently architecting this section. Check back soon for deep dives into my engineering process and technical insights." }}
      </p>

      <div class="mt-8 flex gap-2">
        <div class="w-2 h-2 rounded-full bg-amber-500 animate-pulse"></div>
        <div class="w-2 h-2 rounded-full bg-amber-500 animate-pulse [animation-delay:200ms]"></div>
        <div class="w-2 h-2 rounded-full bg-amber-500 animate-pulse [animation-delay:400ms]"></div>
      </div>
    </div>
  </div>
</template>
