# GitHub.io Portfolio & Documentation Hub: Design Strategy

This project aims to refactor the personal `github.io` presence into a high-impact, professional technical product site that serves as both a portfolio and a centralized documentation hub for specialized engineering projects.

## Project Scope & Documentation

*   **[VitePress Engine](./vitepress_engine.md):** Detailed overview of the `.vitepress` directory and its contents, as well as the step-by-step instructions for installing the necessary dependencies.
*   **[Project Architecture](./architecture.md):** Detailed breakdown of the project-root structure and its relationship with VitePress.
*   **[Deployment Strategy](./deployment.md):** Overview of the GitHub Actions CI/CD pipeline and the `deploy.yml` configuration.
*   **[Frameworks](./frameworks.md):** Deep dive into Vue.js and VitePress.
*   **[Styling](./styling.md):** Overview of Tailwind CSS and utility-first design.
*   **[Content Management](./cms.md):** Details on Markdown and MDX for content management.
*   **[Icons & Typography](./icon_typography.md):** Strategic choices for icons and typography.

## 1. General Purpose of GitHub.io for Serious Developers

For senior and specialized developers, a GitHub Pages site transcends a simple list of projects. It serves three primary functions:

*   **The Hub (Portfolio):** A high-level landing page that sells the developer as a solution provider, focusing on business value, architectural decisions, and technical leadership.
*   **The Documentation Site:** Providing a clean, searchable, and professional interface for custom libraries and frameworks (e.g., ETL pipelines, Auth libraries).
*   **The Technical Blog / Proof of Thought:** A platform to demonstrate expertise by explaining *why* specific technical paths were taken and how complex edge cases were solved.

## 2. Project Scope Definition

The scope is divided into a three-tier architecture to ensure both personal branding and technical depth:

*   **Tier 1: Personal Brand Landing Page:** A minimalist, high-impact homepage focusing on identity (e.g., "Michael Naatjes: Backend & DevOps Engineer") with clear Calls to Action (CTAs) for major projects and resume access.
*   **Tier 2: Project Case Studies (Product Pages):** Detailed pages for major projects that explain the Architecture, logic (e.g., ETL flows), and DevOps integration. These are designed to "sell" the complexity and reliability of the work.
*   **Tier 3: Documentation Engine:** A consistent, high-performance UI for the documentation of published Python and PHP libraries, ensuring they are as usable as industry-standard tools.

## 3. Recommended Tech Stack & Libraries

To achieve a professional edge without the "file sprawl" of previous versions, the following stack is recommended:

*   **A. Framework: Vue.js (via VitePress/Nuxt):** Specifically **VitePress** for its "gold standard" status in technical documentation and high-performance Static Site Generation (SSG).
*   **B. Styling: Tailwind CSS:** A utility-first approach to ensure a robust, professional UI with consistent spacing and typography without hundreds of custom CSS files.
*   **C. Content Management: Markdown/MDX:** Treating portfolio and documentation content as code, allowing for easy updates and clean separation of logic and content.
*   **D. Icons & Typography:** Utilizing **Lucide-vue** for engineering-focused icons and modern, high-legibility typefaces like **Inter** or **Geist**.
