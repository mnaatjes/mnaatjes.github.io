// src/projects/projects.data.ts
import markdownit from 'markdown-it'
import { fetchSafe, fetchOptional, fetchReadmeRaw } from '../services/github'
import type { Project } from '../types/project'

/**
 * Initialize MarkdownIt
 * We use the factory function pattern which is more robust in ESM environments
 */
const md = markdownit({
  html: true,
  linkify: true,
  typographer: true
});

/**
 * REPOS: Add any GitHub repo name here (must be public)
 */
const REPOS = ['etl-pipeline', 'enigma'];
const OWNER = 'mnaatjes';

/**
 * VITEPRESS DATA LOADER
 * - Runs during the build process
 * - Collects all Project interface data from github api
 */
export default {
  /**
   * Main load() method. Returns array of Project interfaces
   */
  async load(): Promise<Project[]> {
    const projectPromises = REPOS.map(async (repoName) => {
      const baseUrl = `https://api.github.com/repos/${OWNER}/${repoName}`;

      const [repo, languages, release, tags, readmeRaw] = await Promise.all([
        fetchSafe(baseUrl),
        fetchOptional(`${baseUrl}/languages`, {}),
        fetchOptional(`${baseUrl}/releases/latest`, null),
        fetchOptional(`${baseUrl}/tags`, []), // Fetch all tags
        fetchReadmeRaw(OWNER, repoName)
      ]);

      // Determine the best version string
      // 1. Check for official GitHub Release
      // 2. Fallback to most recent Git Tag
      // 3. Final fallback to v0.1.0
      const version = release?.tag_name || (tags.length > 0 ? tags[0].name : 'v0.1.0');

      // Map fetched data onto Project interface
      return {
        id: repo.name,
        title: repo.name,
        description: repo.description || 'No description provided.',
        // Use our local MarkdownIt instance to render the raw Markdown into HTML
        readmeHTML: md.render(readmeRaw),
        stars: repo.stargazers_count,
        languages: Object.keys(languages),
        version: version,
        url: repo.html_url,
        ogImage: `https://opengraph.githubassets.com/1/${OWNER}/${repoName}`
      };
    });

    return await Promise.all(projectPromises);
  }
}
