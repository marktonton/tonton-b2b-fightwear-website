import type { MetadataRoute } from 'next';

const SITE_URL = 'https://www.tontongear.com';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: '*', allow: '/' },
      { userAgent: ['OAI-SearchBot', 'ChatGPT-User', 'GPTBot'], allow: '/' },
      { userAgent: ['ClaudeBot', 'Claude-SearchBot', 'Claude-User'], allow: '/' },
      { userAgent: ['PerplexityBot', 'Perplexity-User'], allow: '/' },
      { userAgent: ['Google-Extended'], allow: '/' },
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
  };
}
