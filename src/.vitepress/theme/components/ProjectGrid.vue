<script setup lang="ts">
import { data as projects } from '../../../projects/projects.data'
import ProjectCard from './ProjectCard.vue'
</script>

<template>
  <div class="my-12 px-4 max-w-7xl mx-auto">
    <!-- Header (Optional) -->
    <div class="mb-10 text-center">
      <h2 class="text-3xl font-bold text-slate-900 mb-2">My Open Source Projects</h2>
      <p class="text-slate-500">Live data pulled from GitHub</p>
    </div>

    <!-- The Responsive Grid -->
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      <ProjectCard 
        v-for="project in projects" 
        :key="project.id"
        v-bind="project"
      />
    </div>
  </div>
</template>
