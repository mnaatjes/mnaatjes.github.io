<script setup lang="ts">
defineProps<{
  title: string
  description: string
  stars: number
  languages: string[]
  version: string
  url: string
  ogImage: string
}>()
</script>

<template>
  <a :href="url" target="_blank" class="group block h-full bg-white border border-slate-200 rounded-xl shadow-sm hover:shadow-md hover:border-blue-400 transition-all duration-300 overflow-hidden no-underline!">
    <!-- Social Preview Image -->
    <div class="aspect-video overflow-hidden border-b border-slate-100">
      <img :src="ogImage" :alt="title" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
    </div>

    <div class="p-5 flex flex-col h-[calc(100%-56.25%)]">
      <!-- Header -->
      <div class="flex justify-between items-start mb-2">
        <h3 class="text-xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors m-0!">
          {{ title }}
        </h3>
        <span class="flex items-center gap-1 text-amber-500 font-medium text-sm">
          ⭐ {{ stars }}
        </span>
      </div>

      <!-- Description (Clamped to 2 lines) -->
      <p class="text-slate-600 text-sm leading-relaxed mb-4 line-clamp-2 flex-grow">
        {{ description }}
      </p>

      <!-- Languages / Tech Stack -->
      <div class="flex flex-wrap gap-1.5 mb-4">
        <span v-for="lang in languages" :key="lang" 
              class="px-2 py-0.5 bg-slate-100 text-slate-700 rounded-md text-[10px] font-bold uppercase tracking-wider border border-slate-200">
          {{ lang }}
        </span>
      </div>

      <!-- Footer -->
      <div class="mt-auto pt-4 border-t border-slate-100 flex justify-between items-center">
        <span class="text-[11px] font-mono text-slate-400 uppercase tracking-widest">
          Latest: {{ version }}
        </span>
        <span class="text-blue-600 font-semibold text-xs group-hover:translate-x-1 transition-transform">
          View Repo →
        </span>
      </div>
    </div>
  </a>
</template>

<style scoped>
/* Ensure VitePress default styles don't override our card layout */
.no-underline\! {
  text-decoration: none !important;
}
.m-0\! {
  margin: 0 !important;
}
</style>
