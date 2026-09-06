export const isGitHubPagesBuild = process.env.GITHUB_PAGES === 'true';

export const siteBasePath = (
  process.env.NEXT_PUBLIC_BASE_PATH ?? (isGitHubPagesBuild ? '/site' : '')
).replace(/\/+$/, '');

export const siteOrigin = process.env.NEXT_PUBLIC_SITE_ORIGIN;

export function sitePath(path: `/${string}`) {
  return `${siteBasePath}${path}`;
}
