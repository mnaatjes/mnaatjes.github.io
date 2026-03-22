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
---

## 6. External Resources & Inspiration

Use these links to see live examples and advanced layout possibilities:

### Official Documentation
*   **[VitePress Showcase](https://vitepress.dev/reference/site-config#showcase):** A curated list of real-world sites. Great for seeing how senior developers structure their professional portfolios and complex documentation hubs.
*   **[Homepage Layout Guide](https://vitepress.dev/reference/default-theme-home-page):** Detailed reference for the `hero` and `features` grid. It explains how to add badges, links, and custom icons to your landing page.
*   **[Team Page Layout](https://vitepress.dev/reference/default-theme-team-page):** While designed for teams, this "Member Grid" is excellent for displaying "Project Collaborators" or "Tech Stack" logos in a clean, circular grid.
*   **[Layout Slots](https://vitepress.dev/guide/extending-default-theme#layout-slots):** Technical guide on how to inject your own custom Vue/Tailwind components into the standard layout (e.g., adding a "Newsletter" grid above the footer).

### Community & Aesthetics
*   **[VitePress Blog Pure](https://github.com/chanshiyucx/vitepress-blog-pure):** A beautiful example of how to use a grid layout for a technical blog or a "Project Gallery."
*   **[Tailwind UI Components](https://tailwindui.com/components):** While many are paid, you can view the "Preview" sections to see professional grid patterns (Cards, Feature sections, Stats) that you can easily replicate in your `index.md` or custom Vue components using Tailwind v4.

