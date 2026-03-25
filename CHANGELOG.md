# Changelog

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

## [1.2.0](https://github.com/mnaatjes/mnaatjes.github.io/compare/v1.1.0...v1.2.0) (2026-03-25)

### Added
- **Global Layout System:** Centralized horizontal "gutters" in `style.css` to ensure consistent 1.5rem/3rem padding across Home, Page, and Doc layouts.
- **Modular Header Components:** Created `PageHeader.vue` and `SectionHeader.vue` for consistent typography and hierarchy across all site sections.
- **SiteFooter & Socials:** Implemented a high-contrast, universal `SiteFooter.vue` with integrated `ContactLink.vue` components for professional social media presence.
- **Dynamic Legal Loaders:** Created `LicenseLoader.vue` and `TermsLoader.vue` to pull legal content directly from root `LICENSE` and `TERMS.md` files, ensuring a single source of truth.
- **Placeholders:** Set up `UnderConstruction.vue` and initialized `/about/`, `/solutions/`, and `/case_studies/` landing pages.

### Changed
- **Prose Refinement:** Overhauled light-mode typography colors to high-contrast `slate-800` for body and `slate-950` for bold text to ensure readability in all browsers.
- **Component Consolidation:** Simplified `ProjectGrid.vue` and `ProjectCard.vue` to adhere to the new global spacing and flat design principles.
- **Navigation Update:** Expanded the main navigation bar in `config.mts` to include the new professional service sections.

### Fixed
- **Versioning Logic:** Resolved a discrepancy in `etl-pipeline` where incorrect git tags were overriding the README version.
- **Theme Crashes:** Fixed a Tailwind v4 `@apply` issue in scoped styles by refactoring loaders to use standard `prose` classes.

## [1.1.0](https://github.com/mnaatjes/mnaatjes.github.io/compare/v1.0.0...v1.1.0) (2026-03-22)

## 1.0.0 (2026-03-22)

## [0.1.0] - 2025-03-21

### Added
- **GitHub Service Layer:** Implemented `src/services/github.ts` to handle `fetchSafe`, `fetchOptional`, and `fetchReadmeRaw` calls with `dotenv` support and a `GITHUB_TOKEN` for 5,000 requests/hr rate limiting.
- **Dynamic Routing:** Implemented `[project].paths.ts` and `[project].md` to automatically generate unique detail pages for every GitHub repository in the `REPOS` list.
- **Bento UI Components:** Created `ProjectCard.vue` and `ProjectGrid.vue` with glassmorphic icons, dynamic gradients, and responsive layouts.
- **Markdown-It Rendering:** Integrated `markdown-it` into the data loader to transform raw GitHub READMEs into clean, site-integrated HTML during the build process.
- **Tailwind v4 Integration:** Successfully configured Tailwind CSS v4 with the `@tailwindcss/typography` plugin for professional documentation styling.

### Changed
- Refactored `src/index.md` to use the new `ProjectGrid` component with a `limit` prop for featured homepage projects.
- Migrated manual utility functions into a clean `src/services/` and `src/types/` directory structure (MVC-inspired pattern).
- Optimized `ProjectDetail.vue` to use VitePress dynamic CSS variables for perfect light/dark mode readability.

### Fixed
- Resolved GitHub API 403 rate limit errors by implementing `GITHUB_TOKEN` authentication in the service layer.
- Fixed 404 errors on dynamic project pages by aligning `.paths.ts` parameters with bracketed filenames.
- Corrected Tailwind v4 build errors by properly registering the `@tailwindcss/vite` plugin in `config.mts`.
