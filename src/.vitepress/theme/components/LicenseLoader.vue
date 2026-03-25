<script setup lang="ts">
// Vite allows us to import any file as a raw string using the ?raw suffix
import licenseText from '../../../../LICENSE?raw'
</script>

<template>
  <div class="mt-8">
    <pre class="whitespace-pre-wrap font-mono text-sm leading-relaxed text-slate-700 dark:text-slate-300 m-0!">
      {{ licenseText }}
    </pre>
  </div>
</template>

<style scoped>
.m-0\! {
  margin: 0 !important;
}
</style>
