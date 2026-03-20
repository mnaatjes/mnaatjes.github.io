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

## 2. Website Source Structure (`/src`)

By configuring VitePress to use the `/src` directory as its source, we create a clear separation between internal design notes and public-facing content.

### The Directory Map

```text
src/
├── .vitepress/          # The "Engine Room" (Config, Theme, Components)
├── public/              # Static Assets (Images, PDFs, Favicons)
├── index.md             # Tier 1: Personal Brand Landing Page
├── projects/            # Tier 2: Project Case Studies (Product Pages)
│   ├── index.md         # Portfolio Overview / Project Grid
│   └── [project-name].md# Individual Deep Dives
└── docs/                # Tier 3: Library Documentation Hub
    ├── guide/           # Long-form tutorials and concepts
    └── api/             # Technical API References
```

### The "Where Does It Go?" Rubric

Use this decision matrix to determine where to place a new file:

| Content Type | Location | Rule |
| :--- | :--- | :--- |
| **Direct URL Page** | `src/[name].md` | If it's a primary top-level page (e.g., `resume.md`). |
| **Project Deep Dive** | `src/projects/[name].md` | If it explains *how* you built something. |
| **Library Docs** | `src/docs/[lib]/[name].md` | If it's a "How-to" for a tool you've published. |
| **Images/PDFs** | `src/public/` | If it's a raw asset that needs a direct link (e.g., `/resume.pdf`). |
| **Reusable UI** | `src/.vitepress/theme/components/` | If it's a visual element used in multiple pages (e.g., a "Status Badge"). |

### 3. Conventions & Architecture

This structure follows the **File-Based Routing** convention used by modern frameworks like VitePress, Nuxt, and Next.js. 

*   **URL Mapping:** The path to the `.md` file in `src/` perfectly matches the URL path on the website.
*   **Case Sensitivity:** Always use **kebab-case** (e.g., `my-project-name.md`) for filenames to ensure maximum compatibility with web servers.
*   **Index Files:** Every directory should ideally have an `index.md`. This allows users to visit `/projects/` and see an overview rather than a 404 error.

### 4. The "Three-Tier" Content Pattern

This project specifically organizes content by **User Intent**:
1.  **Tier 1 (Brand):** Intent is to "Introduce." Minimalist, high-impact, focused on identity.
2.  **Tier 2 (Evidence):** Intent is to "Prove." Detailed technical narratives showing architecture and DevOps skills.
3.  **Tier 3 (Utility):** Intent is to "Instruct." Standardized documentation for actual use by other developers.
