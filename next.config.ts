import type { NextConfig } from 'next';
import { isGitHubPagesBuild, siteBasePath } from './site.config';

const nextConfig: NextConfig = {
  output: isGitHubPagesBuild ? 'export' : undefined,
  // Vinext beta.5 prerenders unprefixed route URLs. Keep those routes at the
  // root during export; assetPrefix and sitePath provide the public prefix.
  basePath: isGitHubPagesBuild ? '' : siteBasePath,
  assetPrefix: isGitHubPagesBuild ? siteBasePath : undefined,
};

export default nextConfig;
