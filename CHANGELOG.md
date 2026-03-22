# Changelog

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

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
