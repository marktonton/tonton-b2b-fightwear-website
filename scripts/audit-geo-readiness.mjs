import { existsSync, readFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = dirname(dirname(fileURLToPath(import.meta.url)));
const read = (path) => readFileSync(join(root, path), 'utf8');
let failures = 0;
const fail = (message) => { console.error(`FAIL: ${message}`); failures += 1; };

for (const path of ['public/llms.txt', 'public/llms-full.txt', 'app/about/page.tsx', 'lib/site-entity.ts']) {
  if (!existsSync(join(root, path))) fail(`${path} is missing`);
}

const entity = read('lib/site-entity.ts');
const layout = read('app/layout.tsx');
const about = read('app/about/page.tsx');
const robots = read('app/robots.ts');
const sitemap = read('app/sitemap.ts');
const products = read('app/products/[id]/page.tsx');
const resources = read('app/resources/[slug]/page.tsx');

for (const required of ['ORGANIZATION_ID', "legalName: 'Tontonsports (Shenzhen) Co., Ltd.'", 'sameAs:', 'knowsAbout:', 'contactPoint:']) {
  if (!entity.includes(required)) fail(`organization entity is missing ${required}`);
}

for (const bot of ['OAI-SearchBot', 'ChatGPT-User', 'ClaudeBot', 'Claude-SearchBot', 'PerplexityBot', 'Google-Extended']) {
  if (!robots.includes(bot)) fail(`AI crawler policy does not mention ${bot}`);
}

for (const required of ['/about', 'FAQPage', 'mainEntity:', 'ORGANIZATION_ID']) {
  if (!`${about}\n${sitemap}`.includes(required)) fail(`About entity page or sitemap is missing ${required}`);
}

if (!layout.includes('ORGANIZATION_SCHEMA') || !layout.includes('WEBSITE_SCHEMA')) fail('root structured data is not connected to the canonical entity module');
if (!products.includes("manufacturer: { '@id': ORGANIZATION_REFERENCE['@id'] }")) fail('product schema is not connected to the canonical organization ID');
if (!resources.includes("publisher: { '@id': ORGANIZATION_ID }")) fail('resource publisher is not connected to the canonical organization ID');

const full = read('public/llms-full.txt');
for (const section of ['Organization identity', 'Product specialization', 'Manufacturing and development scope', 'Evidence and content policy', 'Preferred citations']) {
  if (!full.includes(section)) fail(`llms-full.txt is missing ${section}`);
}

if (failures) process.exit(1);
console.log('GEO READINESS AUDIT PASSED: canonical entity, direct-answer page, AI crawler access, evidence paths, and AI-readable references are present.');
