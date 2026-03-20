# Components vs. Content: A Strategic Overview

In VitePress, we distinguish between **Content** (what you are saying) and **Components** (how you are displaying it). Understanding this difference is key to a clean, scalable architecture.

## 1. The Definitions

### Content (Markdown)
*   **What it is:** Narrative, data, and structure. 
*   **Where it lives:** Directly in `src/` (e.g., `src/projects/etl-pipeline.md`).
*   **Purpose:** To store the information. It is designed to be easily readable by both humans and the VitePress build engine.

### Components (Vue)
*   **What it is:** Logic, layout, and visual interaction.
*   **Where it lives:** Inside `src/.vitepress/theme/components/`.
*   **Purpose:** To encapsulate complex UI logic that is too messy or interactive to put in a Markdown file. 

## 2. When to Create a Component

Don't create components for everything. Follow these rules to keep your architecture simple:

*   **Rule 1: Repetition.** If you are copying and pasting the same complex HTML/CSS in multiple Markdown files, move it to a component.
*   **Rule 2: Interactivity.** If you need a "Filter" button, a "Tabbed" interface, or an "Image Gallery," use a Vue component.
*   **Rule 3: Cleanliness.** If your Markdown file is becoming 80% HTML tags and 20% text, move the visual styling into a component.

## 3. Registering & Using Components

### Step 1: Create the Component
Create a file at `src/.vitepress/theme/components/ProjectBadge.vue`:

```vue
<script setup>
defineProps(['title', 'type'])
</script>

<template>
  <span class="px-2 py-1 rounded bg-blue-500 text-white text-xs">
    {{ title }} - {{ type }}
  </span>
</template>
```

### Step 2: Register in `index.ts`
Inside `src/.vitepress/theme/index.ts`, you "tell" VitePress that this component exists. This makes it available in every Markdown file automatically (this is called "Global Registration").

### Step 3: Use in Markdown
Now, in any `.md` file, you can simply drop the component in like a custom HTML tag:

```markdown
# My Project
<ProjectBadge title="DevOps" type="Tooling" />
```

## 4. Architectural Summary

| Feature | Content (.md) | Component (.vue) |
| :--- | :--- | :--- |
| **Logic** | None (Static) | Full JavaScript support |
| **Styling** | Standard Typography | Tailored Tailwind styling |
| **Location** | `src/` (Publicly routable) | `src/.vitepress/theme/` (Internal) |
| **Best For** | Blog posts, documentation | Charts, grids, interactive UI |
