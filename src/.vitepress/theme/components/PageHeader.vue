<script setup lang="ts">
defineProps<{
  title: string
  description?: string
  eyebrow?: string
}>()
</script>

<template>
  <header class="py-12 md:py-16">
    <div class="max-w-4xl">
      <!-- Optional Eyebrow/Category -->
      <div v-if="eyebrow" class="inline-flex items-center gap-2 px-3 py-1 mb-6 rounded-lg bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 border border-blue-100 dark:border-blue-800 text-[10px] font-bold uppercase tracking-[0.2em]">
        {{ eyebrow }}
      </div>

      <!-- Main Title -->
      <h1 class="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-6 leading-[1.1]">
        {{ title }}
      </h1>

      <!-- Subtitle/Description -->
      <p v-if="description" class="text-xl md:text-2xl text-slate-600 dark:text-slate-400 leading-relaxed max-w-3xl">
        {{ description }}
      </p>

      <!-- Decorative underline -->
      <div class="mt-12 h-1.5 w-24 bg-blue-600 dark:bg-blue-500 rounded-full"></div>
    </div>
  </header>
</template>
