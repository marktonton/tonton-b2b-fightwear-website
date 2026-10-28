// Store only a controlled source label and a path, never prompts, contact data or raw queries.
export const DISCOVERY_SOURCES = ['chatgpt', 'claude', 'perplexity', 'copilot', 'gemini', 'google', 'bing', 'other', 'direct'] as const;
export type DiscoverySource = (typeof DISCOVERY_SOURCES)[number];
type Attribution = { discovery_source: DiscoverySource; discovery_landing: string };
const STORAGE_KEY = 'tonton-discovery-v1';

export function classifyDiscovery(source: string): DiscoverySource {
  const value = source.toLowerCase().replace(/^www\./, '');
  if (/^(chatgpt|chatgpt\.com|chat\.openai\.com)$/.test(value)) return 'chatgpt';
  if (/^(claude|claude\.ai)$/.test(value)) return 'claude';
  if (/^(perplexity|perplexity\.ai)$/.test(value)) return 'perplexity';
  if (/^(copilot|copilot\.microsoft\.com)$/.test(value)) return 'copilot';
  if (/^(gemini|gemini\.google\.com)$/.test(value)) return 'gemini';
  if (/^(google|google\.[a-z.]+)$/.test(value)) return 'google';
  if (/^(bing|bing\.com)$/.test(value)) return 'bing';
  return value ? 'other' : 'direct';
}

export function discoveryFromLocation(href: string, referrer: string): Attribution {
  const current = new URL(href);
  let referringHost = '';
  try { referringHost = referrer ? new URL(referrer).hostname : ''; } catch { /* No usable referrer. */ }
  const externalHost = referringHost === current.hostname ? '' : referringHost;
  return {
    discovery_source: classifyDiscovery(current.searchParams.get('utm_source') || externalHost),
    discovery_landing: current.pathname.slice(0, 200),
  };
}

export function getDiscoveryAttribution(): Attribution {
  if (typeof window === 'undefined') return { discovery_source: 'direct', discovery_landing: '/' };
  const current = discoveryFromLocation(window.location.href, document.referrer);
  try {
    const saved = JSON.parse(window.sessionStorage.getItem(STORAGE_KEY) || 'null');
    if (saved && DISCOVERY_SOURCES.includes(saved.discovery_source) && typeof saved.discovery_landing === 'string' && /^\/[a-zA-Z0-9/_-]*$/.test(saved.discovery_landing)) return saved;
    window.sessionStorage.setItem(STORAGE_KEY, JSON.stringify(current));
  } catch { /* Attribution still works for this page if browser storage is unavailable. */ }
  return current;
}
