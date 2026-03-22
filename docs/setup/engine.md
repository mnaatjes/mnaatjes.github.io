# VitePress Engine: Structure & Installation

The `.vitepress` directory is the core of the static site generator, containing all configuration, themes, and temporary build files.

## 1. The `.vitepress` Directory: Purpose & Contents

In our architecture, this directory lives inside `src/`. It is the "engine room" that transforms your Markdown into a high-performance website.

### Key Components:

*   **`config.mts` (or `.js`, `.ts`):** This is the most important file. It defines your site's global settings, including:
    *   Site title and description.
    *   The navigation bar at the top.
    *   The sidebars for different sections (e.g., documentation vs. portfolio).
    *   Theme configuration (e.g., dark mode toggle, social links).
*   **`/theme` (Optional):** If you want to customize the look beyond the default theme, this directory is where you'll store your custom Vue components and CSS. This is where we will eventually integrate **Tailwind CSS**.
*   **`/dist` (Temporary):** This is where the final, minified static HTML/CSS/JS files are generated during the build process. This folder is ignored by Git.
*   **`/cache` (Temporary):** Stores an internal build cache to speed up subsequent builds. This folder is also ignored by Git.

## 2. Installation: Getting Started with VitePress

To set up the project locally, you will need to initialize a `package.json` and install the core dependencies.

### Step 1: Initialize the Project

First, create a `package.json` file in the root directory to track your dependencies and scripts:

```bash
npm init -y
```

### Step 2: Install Core Dependencies

Install **VitePress** and **Vue** as development dependencies. We use `-D` because these are only needed for building the site, not for running it in production:

```bash
npm install -D vitepress vue
```

### Step 3: Install Styling Dependencies (Tailwind CSS v4)

To use Tailwind CSS for your professional, utility-first design, you will need to install the following packages:

```bash
npm install -D tailwindcss postcss autoprefixer
```

### Step 4: Integrate Tailwind (CSS-First)

Unlike previous versions, Tailwind v4 does not require `tailwind.config.js` or `postcss.config.js`. Instead, you integrate it directly into your CSS:

1.  **Create a CSS Entry:** Create `src/.vitepress/theme/style.css`.
2.  **Import Tailwind:** Add `@import "tailwindcss";` to the top of the file.
3.  **Register with VitePress:** Import this CSS file in your `src/.vitepress/theme/index.ts`.

## 3. Targeting the Source: Why `src`?

In our `package.json` scripts, every command ends with the word `src`:

```json
"dev": "vitepress dev src"
```

### The Conflict Resolution
By default, VitePress looks for a folder named `docs/`. However, in this project, we use the root `/docs` directory for **internal project management and design documentation**. 

By explicitly passing `src` as an argument, we redirect the VitePress engine to use the `/src` directory for all website-related content. This ensures:
1.  **Isolation:** Internal design notes stay in `/docs` and are never deployed to the public site.
2.  **Organization:** All "Source Code" for the portfolio (Markdown, Vue components, assets) lives in one dedicated place.
3.  **Cleanliness:** Your root directory doesn't become cluttered with dozens of website content files.
