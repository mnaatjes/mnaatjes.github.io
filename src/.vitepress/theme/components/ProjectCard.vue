<script setup lang="ts">
import { computed } from 'vue'
import { 
  Database, 
  Terminal, 
  Globe, 
  Layers, 
  Cpu, 
  Github, 
  Code2, 
  Workflow,
  ChevronRight 
} from 'lucide-vue-next'

const props = defineProps<{
  id: string
  title: string
  description: string
  stars: number
  languages: string[]
  version: string
  url: string
  ogImage: string
}>()

/**
 * Determine the best icon for the project based on title or language
 */
const projectIcon = computed(() => {
  const t = props.title.toLowerCase()
  const l = props.languages[0]?.toLowerCase() || ''

  if (t.includes('etl') || t.includes('data') || l.includes('sql')) return Database
  if (t.includes('pipeline') || t.includes('workflow')) return Workflow
  if (t.includes('cli') || t.includes('tool') || l === 'shell') return Terminal
  if (t.includes('web') || t.includes('site') || l === 'html') return Globe
  if (l === 'python') return Code2
  if (l === 'typescript' || l === 'javascript') return Layers
  
  return Cpu 
})

/**
 * Create a unique gradient based on the project's title
 */
const heroGradient = computed(() => {
  const gradients = [
    'from-blue-600 to-indigo-700',
    'from-emerald-600 to-teal-700',
    'from-purple-600 to-violet-700',
    'from-orange-500 to-red-600',
    'from-slate-700 to-slate-900',
    'from-cyan-500 to-blue-600'
  ]
  const hash = props.title.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0)
  return gradients[hash % gradients.length]
})
</script>

<template>
  <a :href="'/projects/' + id" class="group relative flex flex-col h-full bg-white border border-slate-200 rounded-2xl shadow-sm hover:shadow-2xl hover:shadow-blue-500/10 hover:border-blue-300 transition-all duration-500 no-underline!">
    
    <!-- Hero Area with Pattern -->
    <div :class="['h-32 rounded-t-2xl bg-gradient-to-br flex items-center justify-center relative overflow-hidden', heroGradient]">
      <!-- Suble Pattern Overlay -->
      <div class="absolute inset-0 opacity-10 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px]"></div>
      
      <!-- Glassmorphic Icon Holder -->
      <div class="relative z-10 p-3 bg-white/10 backdrop-blur-md rounded-xl border border-white/20 shadow-xl transform group-hover:scale-110 group-hover:-rotate-3 transition-all duration-500">
        <component :is="projectIcon" class="w-8 h-8 text-white drop-shadow-lg" />
      </div>
    </div>

    <!-- Content Area -->
    <div class="p-6 flex flex-col flex-grow">
      <div class="flex justify-between items-start mb-2">
        <h3 class="text-xl font-extrabold text-slate-900 group-hover:text-blue-600 transition-colors m-0!">
          {{ title }}
        </h3>
        <div class="flex items-center gap-1 text-amber-500 font-bold text-[10px] bg-amber-50 px-2 py-1 rounded-lg border border-amber-100 uppercase tracking-wider">
          ⭐ {{ stars }}
        </div>
      </div>

      <p class="text-slate-500 text-sm leading-relaxed mb-6 line-clamp-2 font-medium">
        {{ description }}
      </p>

      <!-- Tech Stack (The "Bento" Tags) -->
      <div class="flex flex-wrap gap-1.5 mt-auto">
        <span v-for="lang in languages" :key="lang" 
              class="px-2 py-0.5 bg-slate-50 text-slate-500 text-[10px] font-bold uppercase tracking-widest rounded border border-slate-200 group-hover:bg-blue-50 group-hover:text-blue-600 group-hover:border-blue-200 transition-colors">
          {{ lang }}
        </span>
      </div>
    </div>

    <!-- Subtle Footer Info -->
    <div class="px-6 py-4 bg-slate-50/50 border-t border-slate-100 rounded-b-2xl flex justify-between items-center">
      <div class="flex flex-col">
        <span class="text-[8px] font-bold text-slate-400 uppercase tracking-[0.2em] mb-0.5">Release</span>
        <span class="text-[10px] font-mono font-bold text-slate-600 uppercase tracking-widest">
          {{ version }}
        </span>
      </div>
      
      <div class="flex items-center gap-1 text-blue-600 font-bold text-[10px] uppercase tracking-[0.15em] group-hover:translate-x-1 transition-transform">
        Details
        <ChevronRight class="w-3.5 h-3.5" />
      </div>
    </div>
  </a>
</template>

<style scoped>
.no-underline\! { text-decoration: none !important; }
.m-0\! { margin: 0 !important; }
</style>
