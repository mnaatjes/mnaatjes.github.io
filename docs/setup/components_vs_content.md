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

## 5. The "Vue SFC" Recipe (Single File Component)

A `.vue` file is a "Single File Component." It contains everything a visual element needs—logic, structure, and styling—in one encapsulated place.

```vue
<!-- 1. THE BRAIN (Logic) -->
<script setup>
  // 'setup' is a shortcut that makes all variables here 
  // available to the template automatically.
  
  // Define "Props" to pass data into the component
  defineProps(['title', 'status'])
</script>

<!-- 2. THE BODY (Markup & Tailwind) -->
<template>
  <div class="p-6 bg-white rounded-lg shadow-md border border-slate-200">
    <h3 class="text-xl font-bold text-blue-600">{{ title }}</h3>
    <p class="mt-2 text-slate-600">This project is {{ status }}</p>
  </div>
</template>

<!-- 3. THE STYLE (Optional) -->
<style scoped>
  /* 'scoped' ensures these styles ONLY apply to this component */
  .custom-accent { color: #ff00ea; }
</style>
```

### Key SFC Features:

*   **`<script setup>`:** This is the modern standard for Vue 3. It removes the need for complex "Export" boilerplate and makes your code much more concise.
*   **Tailwind Integration:** You apply Tailwind classes directly to the HTML tags in the `<template>`. Because our Tailwind config scans `.vue` files, these styles are generated automatically during the build.
*   **Encapsulation (`scoped`):** By adding the `scoped` attribute to your `<style>` tag, you guarantee that your custom CSS won't "leak" out and accidentally change the styling of other parts of your website.

## 6. The Registration Workflow

To use a custom Vue component inside your Markdown, it must follow a specific "Chain of Custody" to be registered globally.

### Step 1: Create the Component
Save your `.vue` file in `src/.vitepress/theme/components/`.

### Step 2: The Theme Entry Point
VitePress uses a special file at `src/.vitepress/theme/index.ts` to "extend" the default theme with your custom logic.

### Step 3: Global Registration (The "Handshake")
You must use the `enhanceApp` function inside `index.ts` to register your component. This makes it available in every Markdown file without needing individual imports.

**Example `src/.vitepress/theme/index.ts`:**
```typescript
import DefaultTheme from 'vitepress/theme'
import MyComponent from './components/MyComponent.vue'
import './style.css' // Your Tailwind directives

export default {
  extends: DefaultTheme, // 1. Use the professional default theme
  enhanceApp({ app }) {
    // 2. Register your component globally
    app.component('MyComponent', MyComponent)
  }
}
```

### Step 4: Usage in Markdown
Now, because of Step 3, the entire project "knows" what `<MyComponent />` is. You can simply type it into any `.md` file in your `src/` directory.

### Summary Workflow Checklist:
1.  **Build:** Create the `.vue` file in the `components/` folder.
2.  **Import:** Add an `import` statement at the top of `.vitepress/theme/index.ts`.
3.  **Register:** Add `app.component('Name', Name)` inside the `enhanceApp` block.
4.  **Drop:** Type `<Name />` into your Markdown content.
