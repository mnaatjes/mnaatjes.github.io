# Development Workflow: Managing Your Site

With a build-time workflow, you follow a "Write -> Build -> Deploy" lifecycle. This ensures that the code you write is checked for errors and optimized for performance before anyone sees it.

## 1. The Development Lifecycle

1.  **Develop:** Run `npm run dev` to start the local server. As you save files in `src/`, your browser will update instantly.
2.  **Type Check:** Use TypeScript to catch bugs early. If your editor (like VS Code) shows red squiggles, TypeScript has found a potential issue (e.g., passing a "string" where a "number" is expected).
3.  **Build:** When ready, run `npm run build`. This:
    *   Compiles your Markdown into HTML.
    *   Generates a custom Tailwind CSS file.
    *   Compiles your TypeScript into optimized JavaScript.
    *   Minifies everything for speed.
4.  **Preview:** Run `npm run preview` to see exactly what the world will see.

## 2. Managing Dependencies

*   **Adding New Tools:** Always use `npm install -D <package-name>` for build tools and libraries.
*   **Updating:** Keep your tools up to date with `npm update`.
*   **Sharing Code:** When someone else (or a CI/CD pipeline like GitHub Actions) clones your repo, they only need to run `npm install` to set up the exact same environment.

## 4. Build-time vs. Run-time (GitHub Actions)

A common question is why we install everything as `devDependencies` (`-D`). This is because your site follows a **Static Site Generation (SSG)** model.

### The Role of GitHub Actions (The Builder)
When you push code to GitHub, your `deploy.yml` workflow starts. This environment is your **Build-time** environment.
*   It runs `npm install` and downloads all your `devDependencies`.
*   It uses these tools to transform your Markdown and TypeScript into a finished `dist/` folder.
*   Once the build is complete, it "hands off" only the contents of `dist/` to GitHub Pages.

### The Role of GitHub Pages (The Host)
GitHub Pages is your **Run-time** environment. 
*   It is a "dumb" host, meaning it only serves static files (HTML, CSS, JS). 
*   It does **not** run Node.js or npm. 
*   Because your site is already "cooked" by the time it gets here, it has **zero** dependencies at run-time.

This distinction is why we keep our `package.json` lean by putting everything in `devDependencies`. It ensures your build process is fast and your final site is as lightweight as possible.
