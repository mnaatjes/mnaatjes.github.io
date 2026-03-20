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

## 3. Your `package.json` Manifest

The `package.json` is the "Source of Truth" for your project. It records every tool you've installed so that the site can be built consistently on any machine.

After running the installation commands above, your `package.json` should look like this:

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
    "tailwindcss": "^3.4.0",
    "postcss": "^8.4.0",
    "autoprefixer": "^10.4.0",
    "lucide-vue-next": "^0.300.0"
  }
}
```

### ⚠️ Safety Note: Avoid `npx vitepress init`
While many VitePress tutorials suggest using `npx vitepress init`, **do not run this command**. 
*   This "wizard" automatically tries to create a `docs/` folder. 
*   Since we are using `src/` for our website content and `docs/` for internal design documentation, running this command will cause conflicts. 

Always follow the **Manual Setup** instructions in this guide to keep your project structure clean and organized.

