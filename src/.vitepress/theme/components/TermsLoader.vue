<script setup lang="ts">
import markdownit from 'markdown-it'
// Vite allows us to import any file as a raw string using the ?raw suffix
import termsRaw from '../../../../TERMS.md?raw'

const md = markdownit({
  html: true,
  linkify: true,
  typographer: true
})

const termsHTML = md.render(termsRaw)
</script>

<template>
  <div class="mt-8">
    <!-- Using our existing high-contrast prose styles directly on the page background -->
    <article class="prose dark:prose-invert max-w-none">
      <div v-html="termsHTML"></div>
    </article>
  </div>
</template>

<style scoped>
/* Cleaning up unused styles */
</style>
