<script setup lang="ts">
defineProps<{
  title: string
  description?: string
  eyebrow?: string
}>()
</script>

<template>
  <div class="mb-12">
    <!-- Optional Eyebrow -->
    <div v-if="eyebrow" class="text-blue-600 dark:text-blue-400 text-[10px] font-bold uppercase tracking-[0.3em] mb-4">
      {{ eyebrow }}
    </div>

    <!-- Title -->
    <h2 class="text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-4 uppercase tracking-[0.05em]">
      {{ title }}
    </h2>

    <!-- Description -->
    <p v-if="description" class="text-lg md:text-xl text-slate-600 dark:text-slate-400 leading-relaxed max-w-3xl">
      {{ description }}
    </p>
  </div>
</template>
