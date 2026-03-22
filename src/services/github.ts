/**
 * @file src/services/github.ts
 * @description Encapsulates all GitHub API related logic for the portfolio.
 */

// Force load environment variables from .env file
import 'dotenv/config'

/**
 * GITHUB HEADERS CONFIGURATION
 * We use the 'Authorization' header if a token is present in the environment.
 * This increases our rate limit from 60 to 5,000 requests per hour.
 */
const GITHUB_HEADERS = { 
  'User-Agent': 'VitePress-Portfolio-Bot',
  'Accept': 'application/vnd.github.v3+json',
  // Use 'Authorization' if the token exists in the environment
  ...(process.env.GITHUB_TOKEN ? { 'Authorization': `token ${process.env.GITHUB_TOKEN}` } : {})
};

/**
 * Fetches data from GitHub and throws an error if the request fails.
 * Use this for critical data (like repository info) that is required for the page to exist.
 * 
 * @async
 * @param {string} url - The full GitHub API endpoint.
 * @returns {Promise<any>} The parsed JSON data.
 * @throws {Error} If the response status is not OK (200-299).
 */
export async function fetchSafe(url: string): Promise<any> {
  const res = await fetch(url, { headers: GITHUB_HEADERS });
  if (!res.ok) {
    throw new Error(`[GitHub Critical] ${res.status} ${res.statusText} at ${url}`);
  }
  return res.json();
}

/**
 * Fetches data from GitHub and returns a fallback value if the request fails.
 * Use this for optional data (like releases or languages) that isn't strictly required.
 * 
 * @async
 * @param {string} url - The full GitHub API endpoint.
 * @param {any} [fallback=null] - The value to return if the fetch fails.
 * @returns {Promise<any>} The parsed JSON data or the fallback value.
 */
export async function fetchOptional(url: string, fallback: any = null): Promise<any> {
  try {
    const res = await fetch(url, { headers: GITHUB_HEADERS });
    if (!res.ok) return fallback;
    return res.json();
  } catch (err) {
    return fallback;
  }
}

/**
 * Fetches the README for a repository and returns it as rendered HTML.
 * Utilizes the 'vnd.github.v3.html' Accept header to let GitHub handle the Markdown conversion.
 * 
 * @async
 * @param {string} owner - The GitHub username or organization.
 * @param {string} repo - The repository name.
 * @returns {Promise<string>} The README content as an HTML string.
 */
export async function fetchReadme(owner: string, repo: string): Promise<string> {
  try {
    const res = await fetch(`https://api.github.com/repos/${owner}/${repo}/readme`, {
      headers: { 
        ...GITHUB_HEADERS, 
        'Accept': 'application/vnd.github.v3.html' 
      }
    });
    if (!res.ok) return '<p>No README found for this project.</p>';
    return await res.text();
  } catch (err) {
    return '<p>Error loading project documentation.</p>';
  }
}

/**
 * Fetches the README for a repository as RAW Markdown.
 * GitHub returns the content as a Base64 encoded string.
 * 
 * @async
 * @param {string} owner - The GitHub username or organization.
 * @param {string} repo - The repository name.
 * @returns {Promise<string>} The README content as a UTF-8 Markdown string.
 */
export async function fetchReadmeRaw(owner: string, repo: string): Promise<string> {
  try {
    const res = await fetch(`https://api.github.com/repos/${owner}/${repo}/readme`, {
      headers: GITHUB_HEADERS
    });
    
    if (!res.ok) return 'No README found for this project.';
    
    const data = await res.json();
    
    // GitHub returns content in Base64. Decode to UTF-8.
    return Buffer.from(data.content, 'base64').toString('utf-8');
  } catch (err) {
    return 'Error loading project documentation.';
  }
}
