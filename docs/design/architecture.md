# Project Architecture: Root Directory Structure

To maintain a clean and professional organization, the project follows a clear separation between internal documentation, source code, and deployment logic.

## 1. Directory Structure: Root level

The project-root is organized to separate the source code for the website from the internal planning and project management files.

### Key Directories and Files:

*   **`/docs` (Internal Planning & Metadata):** This directory contains all documentation related to the planning, design, and architecture of the project. It is **not** part of the deployed website, but it's part of the source repository to maintain a record of the design process.
*   **`/src` (Website Source Content):** This is the root of the VitePress content. All Markdown files in this directory are part of the website source.
    *   **`/src/.vitepress`:** The internal configuration folder for VitePress. It contains:
        *   **`config.mts`:** The main configuration file for the site (title, navigation, sidebar, themes).
        *   **`/dist` (Temporary):** This folder is created during the build process and contains the final, minified static files. It is ignored by Git and should not be manually modified.
    *   **`index.md`:** The landing page of the portfolio.
*   **`.github/workflows` (CI/CD Logic):** Contains the YAML configuration for GitHub Actions, specifically the `deploy.yml` that handles the automated build and deployment process.
*   **`package.json` (Project Manifest):** Defines the project's dependencies (VitePress, Vue, etc.) and provides scripts for development and building:
    *   **`npm run dev`:** Starts the local development server with live reloading.
    *   **`npm run build`:** Triggers the VitePress build process to generate the static files for production.
    *   **`npm run preview`:** Locally previews the production build before deployment.
*   **`.gitignore`:** Ensures that unnecessary files like `node_modules` and the `dist` folder are not tracked in the Git repository.

## 2. The Relationship with VitePress

By configuring VitePress to use the `/src` directory as its source, the root of the project remains clean of content files. The build process reads from `/src`, uses the configuration in `.vitepress/config.mts`, and outputs the results to `src/.vitepress/dist`. This architecture allows for a robust, professional developer workflow while delivering a high-performance static site.
