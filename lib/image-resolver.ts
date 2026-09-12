const ASSET_BASE_URL = (process.env.NEXT_PUBLIC_ASSET_BASE_URL || '').replace(/\/+$/, '');
const ASSET_VERSION = (process.env.NEXT_PUBLIC_ASSET_VERSION || '').trim();

function withVersion(url: string): string {
  if (!ASSET_VERSION) return url;
  const separator = url.includes('?') ? '&' : '?';
  return `${url}${separator}v=${encodeURIComponent(ASSET_VERSION)}`;
}

/**
 * Resolve a repository-relative public asset path.
 *
 * - Production can point at a Cloudflare R2 custom domain with
 *   NEXT_PUBLIC_ASSET_BASE_URL.
 * - Preview/local builds fall back to Next.js public/ when the variable is unset.
 * - Absolute HTTP(S) URLs are preserved for intentionally external assets.
 */
export function resolveImage(path: string): string {
  if (/^https?:\/\//i.test(path)) return path;

  const cleanPath = path.replace(/^\/+/, '');
  // Versioned launch assets ship atomically with the website so a new page
  // cannot reference an R2 object that has not been uploaded yet.
  if (cleanPath.startsWith('assets/products/rash-guard-products/')) {
    return withVersion(`/${cleanPath}`);
  }
  const resolved = ASSET_BASE_URL
    ? `${ASSET_BASE_URL}/${cleanPath}`
    : `/${cleanPath}`;

  return withVersion(resolved);
}
