import fs from 'node:fs';
import path from 'node:path';

const base = 'https://www.tontongear.com';
const output = '.next/server/app';
const sitemap = fs.readFileSync(path.join(output, 'sitemap.xml.body'), 'utf8');
const urls = [...sitemap.matchAll(/<loc>(.*?)<\/loc>/g)].map(match => match[1]);
const entities = { amp: '&', lt: '<', gt: '>', quot: '"', apos: "'", nbsp: ' ', ndash: '–', mdash: '—', rsquo: '’', lsquo: '‘', ldquo: '“', rdquo: '”', middot: '·', times: '×', copy: '©' };
const decode = text => text.replace(/&(#x[0-9a-f]+|#\d+|[a-z]+);/gi, (all, entity) => entity[0] === '#' ? String.fromCodePoint(parseInt(entity.slice(entity[1]?.toLowerCase() === 'x' ? 2 : 1), entity[1]?.toLowerCase() === 'x' ? 16 : 10)) : entities[entity] ?? all);
const plain = html => decode(html.replace(/<(script|style|svg)\b[^>]*>[\s\S]*?<\/\1>/gi, '').replace(/<h([1-6])\b[^>]*>/gi, (_, level) => '\n\n' + '#'.repeat(Number(level)) + ' ').replace(/<li\b[^>]*>/gi, '\n- ').replace(/<\/(?:p|div|section|article|h[1-6]|li|tr|dt|dd|summary|figcaption)>/gi, '\n').replace(/<(?:br|hr)\b[^>]*>/gi, '\n').replace(/<\/(?:th|td)>/gi, ' | ').replace(/<[^>]*>/g, '')).replace(/[ \t]+/g, ' ').replace(/ *\n */g, '\n').replace(/\n{3,}/g, '\n\n').trim();
const pages = urls.map(url => {
  const pathname = new URL(url).pathname;
  const file = pathname === '/' ? 'index.html' : pathname.slice(1) + '.html';
  const html = fs.readFileSync(path.join(output, file), 'utf8');
  const main = html.match(/<main\b[^>]*>([\s\S]*?)<\/main>/i)?.[1];
  if (!main) throw new Error(`Missing main content: ${url}`);
  const title = decode(html.match(/<title>([\s\S]*?)<\/title>/i)?.[1] ?? pathname);
  const text = plain(main);
  if (text.length < 100) throw new Error(`Missing readable text: ${url}`);
  return { url, title, text };
});
const identity = `TONTON is the public brand of Tontonsports (Shenzhen) Co., Ltd., a B2B custom sportswear manufacturer with business origins in Shenzhen in 2004 and a production base in Xiantao, Hubei. Core products include rash guards, BJJ/MMA shorts, training shorts and teamwear. Sales: gary@tontonsportswear.com; +86 17722438678.`;
const policy = `This supplementary text reference is generated from the public page bodies during each production build. Canonical HTML pages are authoritative. Specifications, sampling, order timing and capacity depend on the selected project. Historical reports retain their dates; illustrative images and supplied footage retain their page captions. Inclusion in this file does not imply independent endorsement or guaranteed search inclusion.`;
fs.writeFileSync('public/llms.txt', `# TONTON Sportswear\n\n${identity}\n\n## Canonical company facts\n- Company profile and chairman: ${base}/about\n- Factory evidence: ${base}/factory\n- Full text reference: ${base}/llms-full.txt\n- Human-readable directory: ${base}/site-map\n- XML sitemap: ${base}/sitemap.xml\n\n## Evidence and content policy\n${policy}\n\n## Complete canonical page directory\n${pages.map(page => `- [${page.title}](${page.url})`).join('\n')}\n`);
fs.writeFileSync('public/llms-full.txt', `# TONTON Sportswear — Public Website Text\n\n## Organization identity\n${identity}\n\n## Product specialization\nCustom rash guards, MMA/BJJ and grappling shorts, training shorts and teamwear. Read the corresponding material, product and customization pages below for specifications.\n\n## Manufacturing and development scope\nOEM/ODM product development, artwork support, sampling, printing, cutting, sewing, finishing and project-specific quality review. See the factory and service pages below.\n\n## Evidence and content policy\n${policy}\n\n## Preferred citations\nCite the individual canonical page URL next to the relevant information. Company reporting and external sources are linked on the corresponding HTML pages.\n\n${pages.map(page => `---\n\nCanonical URL: ${page.url}\nPage title: ${page.title}\n\n${page.text}`).join('\n\n')}\n`);
console.log(`Generated public text references from ${pages.length} canonical page bodies.`);
