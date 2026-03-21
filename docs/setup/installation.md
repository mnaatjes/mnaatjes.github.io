# Installation: Setting Up the Technical Portfolio

To build a professional, high-performance static site, we use a modern "build-time" workflow via `npm`. This ensures your final site is tiny and fast, as it only includes the code you actually use.

## 1. Initializing the Project

First, create a `package.json` file in the root directory to track your dependencies and scripts:

```bash
npm init -y
```

## 2. Installing Core Dependencies

We install these as **development dependencies** (`-D`) because they are only needed to build the site, not to run it (since the final site is just static HTML).

### VitePress & Vue
The core engine for the portfolio and documentation hub.

```bash
npm install -D vitepress vue
```

### TypeScript (TS)
TypeScript is **JavaScript with "Types."** It provides a safety layer to catch errors during development. While the browser can't read `.ts` files directly, they are "compiled" into raw JavaScript during the build process.

```bash
npm install -D typescript @types/node vue-tsc
```
*   **`@types/node`:** Helps TypeScript understand the environment (Node.js) VitePress runs in.
*   **`vue-tsc`:** Checks your Vue components for TypeScript errors.

### Styling: Tailwind CSS (v4)
Unlike Bootstrap (which uses a `<link>` tag to download a massive, "one-size-fits-all" CSS file), Tailwind is installed via `npm`. Tailwind v4 is "CSS-first" and zero-config by default, meaning it integrates directly into the Vite engine used by VitePress without needing separate configuration files.

```bash
npm install -D tailwindcss postcss autoprefixer
```

### Icons: Lucide
The professional, engineering-focused icon set.

```bash
npm install -D lucide-vue-next
```

## 3. Your `package.json` Manifest

The `package.json` is the "Source of Truth" for your project. It records every tool you've installed so that the site can be built consistently on any machine.

After running the installation commands above, your `package.json` should look like this (versions may vary):

```json
{
  "name": "github-io-portfolio",
  "version": "1.0.0",
  "description": "Professional Technical Portfolio & Documentation Hub",
  "type": "module",
  "scripts": {
    "dev": "vitepress dev src",
    "build": "vitepress build src",
    "preview": "vitepress preview src",
    "typecheck": "vue-tsc --noEmit"
  },
  "devDependencies": {
    "vitepress": "^1.0.0",
    "vue": "^3.4.0",
    "typescript": "^5.3.0",
    "@types/node": "^20.0.0",
    "vue-tsc": "^2.0.0",
    "tailwindcss": "^4.0.0",
    "postcss": "^8.4.0",
    "autoprefixer": "^10.4.0",
    "lucide-vue-next": "^0.300.0"
  }
}
```

## 4. Step-by-Step Implementation Checklist

Follow this order to ensure a clean setup without directory conflicts:

### Phase 1: Root Initialization
1.  **Initialize:** Run `npm init -y` in the project root.
2.  **Install:** Run `npm install -D vitepress vue typescript @types/node vue-tsc tailwindcss postcss autoprefixer lucide-vue-next`.
3.  **Configure `package.json`:** 
    *   Add `"type": "module"`.
    *   Add the `scripts` section (refer to the template above).

### Phase 2: Manual Directory Structure
Create the following folders and files manually to establish the core architecture:
1.  **`src/`**: The root for all website content.
2.  **`src/index.md`**: Your initial homepage.
3.  **`src/.vitepress/`**: The configuration hidden folder.
4.  **`src/.vitepress/config.mts`**: The site's main configuration file.
5.  **`src/.vitepress/theme/`**: Where custom styling and components live.

### Phase 3: Tailwind Setup (v4 Way)
1.  **Create Styles Entry:** Create `src/.vitepress/theme/style.css`.
2.  **Import Tailwind:** Add `@import "tailwindcss";` to the top of that file. This tells the engine to process Tailwind utilities.
3.  **Connect Theme:** Create `src/.vitepress/theme/index.ts` to tell VitePress to use your custom CSS (extending the default theme):
    ```typescript
    import DefaultTheme from 'vitepress/theme'
    import './style.css'
    export default DefaultTheme
    ```

## 5. Final Directory Map (Manual Setup)

Once Phase 1-3 are complete, your project root should look like this:

```text
/github.io
├── docs/                # Internal Project Design (Exists)
├── package.json         # Project Manifest
├── package-lock.json    # Version Lockfile
├── node_modules/        # (Hidden) Installed Dependencies
└── src/                 # Website Source Root
    ├── index.md         # Website Homepage
    └── .vitepress/      # VitePress Configuration
        ├── config.mts   # Site-wide Settings
        └── theme/       # Custom Styling & Components
            ├── index.ts # Theme Entry Point
            └── style.css# Tailwind v4 Entry Point (@import)
```

### ⚠️ Note on Automatic Folders
The following folders will be created **automatically** when you run `npm run dev` or `npm run build`. Do not create them manually:
*   `src/.vitepress/dist/`
*   `src/.vitepress/cache/`

