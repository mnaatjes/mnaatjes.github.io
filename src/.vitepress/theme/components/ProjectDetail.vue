<script setup lang="ts">
import type { Project } from '../../../types/project'
import { Github, Star, Tag, ChevronLeft, ExternalLink } from 'lucide-vue-next'

defineProps<{
  project: Project
}>()
</script>

<template>
  <div class="max-w-4xl mx-auto py-12">
    <!-- Navigation -->
    <a href="/projects/" class="inline-flex items-center gap-2 text-slate-500 hover:text-blue-600 transition-colors mb-12 font-bold no-underline!">
      <ChevronLeft class="w-4 h-4" />
      Back to Projects
    </a>

    <!-- Header Section -->
    <header class="mb-16 pb-12 border-b border-slate-100 dark:border-slate-800">
      <div class="flex flex-wrap items-center justify-between gap-6 mb-8">
        <h1 class="text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white m-0! tracking-tight">
          {{ project.title }}
        </h1>
        
        <div class="flex items-center gap-3">
          <div class="flex items-center gap-1.5 px-3 py-1 bg-amber-50 dark:bg-amber-900/20 text-amber-600 dark:text-amber-400 rounded-full border border-amber-200 dark:border-amber-800 font-bold text-sm">
            <Star class="w-4 h-4 fill-amber-500" />
            {{ project.stars }}
          </div>
          <div class="flex items-center gap-1.5 px-3 py-1 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 rounded-full border border-slate-200 dark:border-slate-700 font-bold text-sm">
            <Tag class="w-4 h-4" />
            {{ project.version }}
          </div>
        </div>
      </div>

      <p class="text-xl md:text-2xl text-slate-600 dark:text-slate-400 leading-relaxed mb-10 max-w-3xl">
        {{ project.description }}
      </p>

      <div class="flex flex-wrap gap-4 items-center">
        <a :href="project.url" target="_blank" class="inline-flex items-center gap-2 px-6 py-3 bg-slate-900 dark:bg-blue-600 text-white rounded-xl font-bold hover:bg-blue-600 dark:hover:bg-blue-500 transition-all shadow-lg no-underline!">
          <Github class="w-5 h-5" />
          View Source
          <ExternalLink class="w-4 h-4 opacity-50" />
        </a>

        <div class="flex flex-wrap gap-2">
          <span v-for="lang in project.languages" :key="lang" 
                class="px-3 py-1 bg-slate-50 dark:bg-slate-800 text-slate-500 dark:text-slate-400 rounded-lg text-xs font-bold uppercase tracking-widest border border-slate-200 dark:border-slate-700">
            {{ lang }}
          </span>
        </div>
      </div>
    </header>

    <!-- Project Documentation (PURE TAILWIND PROSE) -->
    <article class="prose prose-slate dark:prose-invert max-w-none">
      <div v-html="project.readmeHTML"></div>
    </article>
  </div>
</template>

<style scoped>
/* Only keeping essential resets for VitePress theme compatibility */
.no-underline\! { text-decoration: none !important; }
.m-0\! { margin: 0 !important; }
</style>
