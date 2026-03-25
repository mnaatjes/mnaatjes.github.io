<script setup lang="ts">
import { computed } from 'vue'
import { data as projects } from '../../../projects/projects.data'
import ProjectCard from './ProjectCard.vue'

const props = defineProps<{
  limit?: number
}>()

const displayedProjects = computed(() => {
  return props.limit ? projects.slice(0, props.limit) : projects
})
</script>

<template>
  <div class="my-16 py-16 bg-slate-50/50 dark:bg-white/5 rounded-[3rem] border border-slate-200/60 dark:border-white/5 shadow-inner overflow-hidden relative">
    <div class="max-w-7xl mx-auto px-6 sm:px-12">
      <!-- Grid with responsive columns -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        <ProjectCard 
          v-for="project in displayedProjects" 
          :key="project.id"
          v-bind="project"
        />
      </div>

      <!-- View All Link (Only shown if a limit is applied) -->
      <div v-if="limit && projects.length > limit" class="mt-20 text-center">
        <a href="/projects/" class="inline-flex items-center gap-3 px-10 py-5 bg-slate-900 text-white rounded-2xl font-extrabold text-xs uppercase tracking-[0.2em] hover:bg-blue-600 hover:shadow-2xl hover:shadow-blue-500/20 transition-all no-underline! group">
          View All Engineering Projects
          <span class="text-xl group-hover:translate-x-1 transition-transform">→</span>
        </a>
      </div>
    </div>
  </div>
</template>

<style scoped>
.no-underline\! {
  text-decoration: none !important;
}
.m-0\! {
  margin: 0 !important;
}
</style>
