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
  <div class="my-16 py-16 px-6 sm:px-12 bg-slate-50/50 rounded-[2.5rem] border border-slate-200/60 shadow-inner">
    <div class="max-w-7xl mx-auto">
      <!-- Grid with responsive columns -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        <ProjectCard 
          v-for="project in displayedProjects" 
          :key="project.id"
          v-bind="project"
        />
      </div>

      <!-- View All Link (Only shown if a limit is applied) -->
      <div v-if="limit && projects.length > limit" class="mt-16 text-center">
        <a href="/projects/" class="inline-flex items-center gap-3 px-8 py-4 bg-slate-900 text-white rounded-2xl font-extrabold text-sm uppercase tracking-widest hover:bg-blue-600 hover:shadow-xl hover:shadow-blue-500/20 transition-all no-underline!">
          View All Projects
          <span class="text-xl">→</span>
        </a>
      </div>
    </div>
  </div>
</template>

<style scoped>
.no-underline\! {
  text-decoration: none !important;
}
</style>
