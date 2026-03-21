---
layout: home
is_home: true
hero:
    name: "Michael Naatjes"
    text: "Backend and DevOps Engineer"
    tagline: "Building resilient architectures and documentation hubs."
    actions:
        - theme: brand
          text: View Projects
          link: /projects/
        - theme: alt
          text: View on my Github
          link: https://github.com/mnaatjes
          target: _blank
---

## Welcome
This is a test of the **VitePress** engine with **TailwindCSS v4** styles.

<script setup>
    import { data as projects } from './github.data.ts'
</script>

<ProjectGrid />

<Quote author="Albert Einstein">
    Creativity is the mother of all failures to launch off the dome
</Quote>