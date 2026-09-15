import { existsSync, readFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = dirname(dirname(fileURLToPath(import.meta.url)));
const read = (path) => readFileSync(join(root, path), 'utf8');
let failures = 0;
const fail = (message) => { console.error(`FAIL: ${message}`); failures += 1; };

const resources = read('lib/resource-content.ts');
const resourcePage = read('app/resources/[slug]/page.tsx');
const productPage = read('app/products/[id]/page.tsx');
const builder = read('app/project-builder/ProjectBuilderForm.tsx');

const resourceSlugs = [...resources.matchAll(/slug: '([^']+)'/g)].map((match) => match[1]);
for (const slug of resourceSlugs) {
  if (!read('public/llms.txt').includes(`/resources/${slug}`)) fail(`${slug} missing from llms.txt`);
}

for (const required of ['decisionRows:', 'notFor:', 'source:', 'resource.source', 'resource.notFor', 'resource.decisionRows']) {
  if (!`${resources}\n${resourcePage}`.includes(required)) fail(`resource decision evidence missing: ${required}`);
}

for (const required of ['Construction direction:', 'Decoration / branding:', 'copy_specification', 'project_builder_action']) {
  if (!builder.includes(required)) fail(`Project Builder output or analytics hook missing: ${required}`);
}

if (/['"]@type['"]\s*:\s*['"]Offer['"]/.test(productPage) || /\boffers\s*:/.test(productPage)) {
  fail('Product Offer detected without a verified public price policy');
}

const dates = [...read('lib/content-dates.ts').matchAll(/20\d{2}-\d{2}-\d{2}/g)].map((match) => match[0]);
const today = new Date();
for (const date of dates) {
  const ageDays = Math.floor((today.getTime() - new Date(`${date}T00:00:00Z`).getTime()) / 86400000);
  if (ageDays > 120) fail(`content review date is ${ageDays} days old: ${date}`);
  if (ageDays < -2) fail(`content review date is unexpectedly in the future: ${date}`);
}

if (!existsSync(join(root, 'public/llms.txt'))) fail('public/llms.txt is missing');

if (failures) process.exit(1);
console.log(`CONTENT QUALITY AUDIT PASSED: ${resourceSlugs.length} buyer guides, Project Builder outputs, freshness and no unverified Offer schema.`);
