import { ORGANIZATION_ID, WEBSITE_ID, SITE_URL } from './site-entity';

// Keep every page connected to the same public website and manufacturer entities.
// Preserve page-specific facts, entity types, dates and existing relationships.
export function serializeStructuredData(value: unknown): string {
  const connect = (node: unknown): unknown => {
    if (Array.isArray(node)) return node.map(connect);
    if (!node || typeof node !== 'object') return node;
    const result: Record<string, unknown> = Object.fromEntries(
      Object.entries(node).map(([key, item]) => [key, connect(item)]),
    );
    const types = Array.isArray(result['@type']) ? result['@type'] : [result['@type']];
    const identity = result.url ?? result['@id'] ?? result.mainEntityOfPage;
    const external = typeof identity === 'string' && /^https?:/.test(identity) && new URL(identity).origin !== new URL(SITE_URL).origin;
    if (!external && types.some(type => ['WebPage', 'AboutPage', 'CollectionPage', 'FAQPage', 'Article'].includes(String(type)))) {
      result.inLanguage ??= 'en';
      result.isPartOf ??= { '@id': WEBSITE_ID };
      result.publisher ??= { '@id': ORGANIZATION_ID };
      if (typeof result.url === 'string') result['@id'] ??= `${result.url}#webpage`;
    }
    return result;
  };
  return JSON.stringify(connect(value)).replace(/</g, '\\u003c');
}
