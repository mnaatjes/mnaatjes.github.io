# Content Authoring: From Markdown to the Browser

This guide explains the technical pipeline that transforms your Markdown files into a high-performance, interactive website.

## 1. The Compilation Pipeline

VitePress doesn't just "convert" text; it performs a multi-stage transformation:

1.  **Markdown-it (Parsing):** The engine scans your `.md` file and converts standard syntax (`#`, `-`, `**`) into raw HTML tags (`<h1>`, `<li>`, `<strong>`).
2.  **Vue Component (Wrapping):** VitePress wraps the resulting HTML in a Vue template. This is why you can use Vue components directly in your Markdown.
3.  **Vite Build (Hydration):** During `npm run build`, Vite compiles the template into optimized JavaScript. In the browser, this "hydrates" into a fast Single Page Application (SPA).

## 2. Page Metadata: Frontmatter

Every page can have a **Frontmatter** block at the very top. This is YAML code that tells VitePress extra info about the page.

```markdown
---
title: Home
description: Professional Technical Portfolio
layout: home
---
```

## 3. Step-by-Step: Creating Your First Page

Follow these steps to create an interactive homepage using Tailwind and a custom Vue component.

### Step 1: Create a Vue Component
Create `src/.vitepress/theme/components/StatusBadge.vue`:

```vue
<script setup>
defineProps(['status'])
</script>

<template>
  <span class="px-2 py-1 rounded-full text-xs font-bold bg-green-100 text-green-700 border border-green-200">
    {{ status }}
  </span>
</template>
```

### Step 2: Create your Tailwind Styles
Ensure `src/.vitepress/theme/style.css` contains the Tailwind directives:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

/* Custom CSS Class Example */
.hero-gradient {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
}
```

### Step 3: Create the Homepage (`src/index.md`)
Create a file that uses standard Markdown, Tailwind classes, and your new component:

```markdown
---
layout: home
---

# Hello, I'm a DevOps Engineer

<!-- Using a custom CSS class and Tailwind -->
<div class="hero-gradient p-8 rounded-xl text-white shadow-lg my-6">
  <h2 class="text-2xl font-bold">Current Project Status</h2>
  <p class="mt-2 opacity-90">Building a professional portfolio with VitePress.</p>
  
  <!-- Using our custom Vue component -->
  <div class="mt-4">
    <StatusBadge status="In Progress" />
  </div>
</div>

## Technical Skills
- **Backend:** PHP, Python
- **Infrastructure:** Docker, GitHub Actions
- **Frontend:** Vue.js, Tailwind CSS
```

### Step 4: Run and Test
1.  Open your terminal in the project root.
2.  Run the development server:
    ```bash
    npm run dev
    ```
3.  Open the provided link (usually `http://localhost:5173`) in your browser.
4.  **Instant Feedback:** Change the `status` prop in `index.md` or the gradient colors in `style.css` and save. The browser will update instantly.

## 4. Summary of Formatting Rules

| Feature | Syntax | Example |
| :--- | :--- | :--- |
| **Headings** | `#` to `######` | `# Main Title` |
| **Tailwind Classes** | `class="..."` | `<div class="p-4">...</div>` |
| **Vue Components** | `<Tag />` | `<StatusBadge status="Live" />` |
| **Custom CSS** | Defined in `style.css` | `<div class="hero-gradient">` |
| **Links** | `[text](url)` | `[GitHub](https://github.com)` |
