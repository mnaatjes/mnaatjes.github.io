# VitePress Syntax & Layout Reference

This document serves as a "Cheat Sheet" for understanding the relationship between Markdown files, layouts, and the global configuration.

## 1. The Global vs. Local Relationship

VitePress uses a hierarchical configuration system:

*   **`config.mts` (Global):** The "Foundation." Defines elements that appear on **every page** (Navigation bar, Sidebar structure, Site Title).
*   **Markdown Frontmatter (Local):** The "Interior Design." Defines elements that are **specific to one page** (Hero section, custom title, layout mode).

---

## 2. Layout Modes (`layout:`)

The `layout` property in your Markdown Frontmatter determines the "Shape" of the page.

| Layout Value | Description | Use Case |
| :--- | :--- | :--- |
| **`home`** | A product-style landing page. Includes a "Hero" section and optional "Features" grid. | Portfoilo Homepage, Project Landing Pages. |
| **`doc`** | The default layout. Includes a Sidebar (left) and Table of Contents (right). | Technical Documentation, API References. |
| **`page`** | A minimalist layout. Keeps the Nav bar but removes all Sidebars. | Resume, About Me, Contact Page. |
| **`false`** | A blank canvas. Removes all site chrome (Nav, Sidebar, Footer). | Custom Tailwind landing pages, specialized embeds. |

---

## 3. The "Home" Layout Options

When using `layout: home`, you have access to specialized properties:

### The Hero Section (`hero:`)
The main call-to-action area at the top of the page.
```yaml
hero:
  name: "My Name"
  text: "My Job Title"
  tagline: "A short catchphrase."
  image:
    src: /my-photo.png
    alt: "Profile Photo"
  actions:
    - theme: brand  # High-contrast button
      text: Get Started
      link: /guide/
    - theme: alt    # Subtle button
      text: View on GitHub
      link: https://github.com
```

### The Features Grid (`features:`)
A grid of cards appearing below the Hero section.
```yaml
features:
  - icon: 🛠️
    title: Tooling
    details: Building custom ETL pipelines with Python.
  - icon: ⚡
    title: Performance
    details: Optimized for high-concurrency environments.
```

---

## 4. Navigation Syntax (`config.mts`)

In your `themeConfig`, you define the global navigation:

### The Nav Bar (`nav:`)
The top-level links.
```typescript
nav: [
  { text: 'Home', link: '/' },
  { text: 'Guide', link: '/guide/' },
  { 
    text: 'Dropdown', 
    items: [
      { text: 'Item A', link: '/item-a' },
      { text: 'Item B', link: '/item-b' }
    ] 
  }
]
```

### Social Links (`socialLinks:`)
Icons in the top-right corner.
*   **Built-in Icons:** `discord`, `facebook`, `github`, `instagram`, `linkedin`, `mastodon`, `slack`, `twitter`, `youtube`.

---

## 5. Tips for Clean Markdown

1.  **Frontmatter First:** The `---` block **must** be the very first line of the file. No blank lines above it.
2.  **Kebab-Case Files:** Always name your files in lowercase with dashes (e.g., `my-project-name.md`).
3.  **Relative Links:** Use absolute-style links starting from the `src/` root (e.g., `/projects/my-app` refers to `src/projects/my-app.md`).
