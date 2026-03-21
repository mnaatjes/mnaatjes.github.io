# Dynamic Content: Building a Database-Free Portfolio

One of the most powerful features of VitePress is the ability to treat your Markdown files as **Data Records**. This allows you to "scan" your project files and automatically generate lists, grids, or filters without ever needing a database.

## 1. The Concept: "Files as Data"

Instead of manually updating a list of projects on your homepage, you write your project case studies as Markdown files. You "tag" them with metadata (Frontmatter), and a custom Vue component "scans" those files to build a visual grid.

## 2. Step 1: The Data (Markdown + Frontmatter)

Create multiple project files in `src/projects/`. Each one must have a consistent Frontmatter block at the very top.

**File:** `src/projects/auth-library.md`
```yaml
---
title: Secure Auth Library
description: A JWT-based authentication library for PHP.
tech_stack: [PHP, JWT, Docker]
status: stable
date: 2024-03-20
image: /images/auth-project.png
---
# Content starts here...
```

**File:** `src/projects/etl-pipeline.md`
```yaml
---
title: Data ETL Pipeline
description: High-performance Python pipeline for processing 1M+ records.
tech_stack: [Python, Pandas, PostgreSQL]
status: in-progress
date: 2024-02-15
image: /images/etl-project.png
---
# Content starts here...
```

## 3. Step 2: The Scanner (Data Loader)

To "scan" these files, we use a **Data Loader**. This is a special file that runs only during the build process.

Create a file named `src/projects/projects.data.ts`:

```typescript
import { createContentLoader } from 'vitepress'

export interface Project {
  title: string
  url: string
  description: string
  tech_stack: string[]
  status: 'stable' | 'in-progress' | 'archived'
  date: string
}

declare const data: Project[]
export { data }

export default createContentLoader('projects/*.md', {
  transform(raw): Project[] {
    return raw
      .filter(({ url }) => url !== '/projects/') // Ignore the index page itself
      .map(({ url, frontmatter }) => ({
        title: frontmatter.title,
        url,
        description: frontmatter.description,
        tech_stack: frontmatter.tech_stack,
        status: frontmatter.status,
        date: frontmatter.date
      }))
      .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
  }
})
```

## 4. Step 3: The Visuals (Vue + Tailwind)

Now, create a component to display this data. 

Create `src/.vitepress/theme/components/ProjectGrid.vue`:

```vue
<script setup>
import { data as projects } from '../../projects/projects.data'
</script>

<template>
  <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
    <a v-for="project in projects" :key="project.url" :href="project.url" 
       class="block p-6 rounded-xl border border-slate-200 hover:border-blue-500 hover:shadow-lg transition-all group">
      
      <div class="flex justify-between items-start">
        <h3 class="text-xl font-bold group-hover:text-blue-600">{{ project.title }}</h3>
        <span :class="project.status === 'stable' ? 'bg-green-100 text-green-700' : 'bg-yellow-100 text-yellow-700'" 
              class="text-[10px] uppercase tracking-wider font-bold px-2 py-0.5 rounded">
          {{ project.status }}
        </span>
      </div>

      <p class="mt-2 text-slate-600 text-sm line-clamp-2">{{ project.description }}</p>

      <div class="mt-4 flex flex-wrap gap-2">
        <span v-for="tech in project.tech_stack" :key="tech"
              class="text-xs bg-slate-100 text-slate-500 px-2 py-1 rounded">
          {{ tech }}
        </span>
      </div>
    </a>
  </div>
</template>
```

## 5. Step 4: Displaying the Portfolio

Finally, add the component to your portfolio index page.

**File:** `src/projects/index.md`
```markdown
# My Project Portfolio

These are the architectural deep-dives and libraries I have built. 
Each project represents a specific technical challenge solved.

<ProjectGrid />
```

## 6. Summary of the Workflow

1.  **Write:** Create a new `.md` file in `src/projects/` whenever you finish a project.
2.  **Tag:** Add the `title`, `tech_stack`, etc., to the Frontmatter.
3.  **Automate:** The `projects.data.ts` file automatically detects the new file.
4.  **Render:** The `<ProjectGrid />` component updates the website instantly without you ever writing a single line of HTML or CSS for the new entry.
