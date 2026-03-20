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

## 3. Why npm over CDN?

Using `npm` instead of `<link>` tags (CDNs) for things like Tailwind and Bootstrap has three major benefits:
1.  **Performance:** You only ship the code you use. A Bootstrap CDN file might be 200KB; a custom Tailwind build for a simple site might be 10KB.
2.  **Reliability:** Your site doesn't break if a third-party CDN server goes down.
3.  **Tooling:** It allows TypeScript and VitePress to "understand" your styles and icons, providing better autocomplete and error checking as you type.
