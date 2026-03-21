// src/.vitepress/theme/utils/github.ts

const GITHUB_HEADERS = { 
  'User-Agent': 'VitePress-Portfolio-Bot',
  // Later you can add: 'Authorization': `token ${process.env.GITHUB_TOKEN}`
};

/**
 * Fetch and throw an error if the request fails (CRITICAL data)
 */
export async function fetchSafe(url: string) {
  const res = await fetch(url, { headers: GITHUB_HEADERS });
  if (!res.ok) {
    throw new Error(`[GitHub Critical] ${res.status} ${res.statusText} at ${url}`);
  }
  return res.json();
}

/**
 * Fetch and return a fallback value if the request fails (OPTIONAL data)
 */
export async function fetchOptional(url: string, fallback: any = null) {
  try {
    const res = await fetch(url, { headers: GITHUB_HEADERS });
    if (!res.ok) return fallback;
    return res.json();
  } catch (err) {
    return fallback;
  }
}
