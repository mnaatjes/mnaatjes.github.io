---
layout: page
---

<script setup>
    import { useData } from 'vitepress'
    import ProjectDetail from '../.vitepress/theme/components/ProjectDetail.vue'

    const { params } = useData()
</script>

<ProjectDetail v-if="params" :project="params.data" />
