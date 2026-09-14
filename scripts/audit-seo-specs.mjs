import { readFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = dirname(dirname(fileURLToPath(import.meta.url)));
const productData = JSON.parse(readFileSync(join(root, 'data/products.json'), 'utf8'));
const sourceFiles = ['app/products/[id]/RashGuardLanding.tsx', 'app/products/[id]/GrapplingShortsLanding.tsx', 'app/products/[id]/page.tsx', 'lib/rash-guard-products.ts', 'lib/grappling-shorts-product.ts'];
const sources = sourceFiles.map((file) => readFileSync(join(root, file), 'utf8')).join('\n').toLowerCase();
const coreRequirements = {
  'blue-team-rash-guard': ['220gsm', '85% polyester', '15% spandex', 'silicone anti-slip'],
  'white-logo-rash-guard': ['220gsm', '85% polyester', '15% spandex', 'silicone anti-slip'],
  'samurai-graphic-rash-guard': ['220gsm', 'ultra-fine lycra', 'opaque'],
  'high-split-grappling-shorts': ['250gsm', 'four-way stretch', 'ultra-high', 'anti-slip silicone'],
};

let failures = 0;
for (const [id, requirements] of Object.entries(coreRequirements)) {
  const product = productData.products.find((item) => item.id === id);
  if (!product) { console.error(`FAIL ${id}: product missing`); failures += 1; continue; }
  const haystack = `${JSON.stringify(product)}\n${sources}`.toLowerCase();
  const missing = requirements.filter((fact) => !haystack.includes(fact));
  if (missing.length) { console.error(`FAIL ${id}: missing ${missing.join(', ')}`); failures += 1; }
  else console.log(`PASS ${id}: ${requirements.length} verified specification signals present`);
}

const numericPattern = /\b\d+(?:\.\d+)?\s?(?:gsm|%|pcs|days?|xl|way)\b/gi;
const coverage = productData.products.map((product) => ({ id: product.id, signals: (JSON.stringify(product).match(numericPattern) || []).length }));
console.log('\nProduct-data numeric/specification signals:');
console.table(coverage);
if (failures) process.exit(1);
console.log('SEO SPEC AUDIT PASSED: core landing-page facts remain present and consistent.');
