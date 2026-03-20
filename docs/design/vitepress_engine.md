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

### Step 3: Install Styling Dependencies (Tailwind CSS)

To use Tailwind CSS for your professional, utility-first design, you will need to install the following packages:

```bash
npm install -D tailwindcss postcss autoprefixer
```

### Step 4: Initialize Tailwind

This command creates the `tailwind.config.js` and `postcss.config.js` files, allowing you to configure your custom design system:

```bash
npx tailwindcss init -p
```

## 3. Recommended Scripts

In your `package.json`, you should add the following scripts to simplify your development workflow:

```json
"scripts": {
  "dev": "vitepress dev src",
  "build": "vitepress build src",
  "preview": "vitepress preview src"
}
```

*   **`npm run dev`:** Starts a local development server with instant live reloading.
*   **`npm run build`:** Generates the production-ready static site in `src/.vitepress/dist`.
*   **`npm run preview`:** Locally hosts the built site to verify it before pushing to GitHub.
