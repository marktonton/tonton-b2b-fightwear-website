import type { Metadata } from 'next';
import { SITE_URL } from './site-entity';

/** Keep per-page sharing metadata aligned with the canonical page. */
export function withPageSocialMetadata(metadata: Metadata): Metadata {
  const canonical = metadata.alternates?.canonical;
  const value = typeof canonical === 'string' || canonical instanceof URL ? canonical : canonical?.url;
  if (!value) return metadata;
  const url = new URL(String(value), SITE_URL).toString();
  const titleValue = metadata.title;
  const titleObject = titleValue as { absolute?: string; default?: string } | null | undefined;
  const title = typeof titleValue === 'string' ? titleValue : titleObject?.absolute ?? titleObject?.default;
  const description = metadata.description ?? undefined;
  return {
    ...metadata,
    openGraph: { type: 'website', url, title, description, ...metadata.openGraph },
    twitter: { card: 'summary_large_image', title, description, ...metadata.twitter },
  };
}
