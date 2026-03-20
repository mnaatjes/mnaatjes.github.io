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

### Styling: Tailwind CSS
Unlike Bootstrap (which uses a `<link>` tag to download a massive, "one-size-fits-all" CSS file), Tailwind is installed via `npm`. During the build, it scans your code and creates a custom CSS file containing **only** the styles you used.

```bash
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

### Icons: Lucide
The professional, engineering-focused icon set.

```bash
npm install -D lucide-vue-next
```

## 3. Recommended `package.json` Scripts

Add these to your `package.json` to simplify your workflow:

```json
"scripts": {
  "dev": "vitepress dev src",
  "build": "vitepress build src",
  "preview": "vitepress preview src",
  "typecheck": "vue-tsc --noEmit"
}
```
*   **`npm run dev`:** Starts a local development server with instant live reloading.
*   **`npm run build`:** Generates the production-ready static site in `src/.vitepress/dist`.
*   **`npm run preview`:** Locally hosts the built site to verify it before pushing to GitHub.
*   **`npm run typecheck`:** Manually runs TypeScript checks across your entire project.
