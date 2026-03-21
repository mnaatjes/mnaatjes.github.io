// src/projects/projects.data.ts
import { fetchSafe, fetchOptional } from '../.vitepress/theme/utils/github'

/**
 * REPOS: Add any GitHub repo name here (must be public)
 */
const REPOS = ['etl-pipeline', 'enigma']; 
const OWNER = 'mnaatjes';

export default {
  async load() {
    const projectPromises = REPOS.map(async (repoName) => {
      const baseUrl = `https://api.github.com/repos/${OWNER}/${repoName}`;

      const [repo, languages, release] = await Promise.all([
        fetchSafe(baseUrl),
        fetchOptional(`${baseUrl}/languages`, {}),
        fetchOptional(`${baseUrl}/releases/latest`, null)
      ]);

      // Transform data into our expected structure
      return {
        id: repo.name,
        title: repo.name,
        description: repo.description || 'No description provided.',
        stars: repo.stargazers_count,
        languages: Object.keys(languages),
        version: release?.tag_name || 'v0.1.0',
        url: repo.html_url,
        ogImage: `https://opengraph.githubassets.com/1/${OWNER}/${repoName}`
      };
    });

    return await Promise.all(projectPromises);
  }
}
