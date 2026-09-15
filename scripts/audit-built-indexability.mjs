import { existsSync, readFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = dirname(dirname(fileURLToPath(import.meta.url)));
const output = join(root, '.next/server/app');
const siteHost = 'www.tontongear.com';
let failures = 0;

const fail = (message) => { console.error(`FAIL: ${message}`); failures += 1; };
const normalize = (value) => value === `https://${siteHost}/` ? `https://${siteHost}` : value.replace(/\/$/, '');
const getAttribute = (html, expression) => html.match(expression)?.[1]?.replaceAll('&amp;', '&');

const sitemapFile = join(output, 'sitemap.xml.body');
const robotsFile = join(output, 'robots.txt.body');
if (!existsSync(sitemapFile)) fail('built sitemap.xml is missing');
if (!existsSync(robotsFile)) fail('built robots.txt is missing');
if (failures) process.exit(1);

const sitemap = readFileSync(sitemapFile, 'utf8');
const robots = readFileSync(robotsFile, 'utf8');
const urls = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map((match) => match[1]);
const duplicates = urls.filter((url, index) => urls.indexOf(url) !== index);
if (!urls.length) fail('sitemap contains no URLs');
if (duplicates.length) fail(`duplicate sitemap URLs: ${[...new Set(duplicates)].join(', ')}`);
if (!robots.includes(`Sitemap: https://${siteHost}/sitemap.xml`)) fail('robots.txt does not advertise the canonical sitemap');
if (/Disallow:\s*\//i.test(robots)) fail('robots.txt blocks the whole site');

const requiredPaths = [
  '/', '/factory', '/resources', '/project-builder',
  '/customization/sublimated-rash-guards',
  '/customization/sublimated-training-shorts',
  '/customization/sublimated-bjj-mma-shorts',
  '/products/high-split-grappling-shorts',
];
for (const pathname of requiredPaths) {
  const expected = normalize(`https://${siteHost}${pathname}`);
  if (!urls.some((url) => normalize(url) === expected)) fail(`priority URL missing from sitemap: ${pathname}`);
}

const seenTitles = new Map();
const seenDescriptions = new Map();
const report = [];
for (const urlString of urls) {
  const url = new URL(urlString);
  if (url.protocol !== 'https:' || url.host !== siteHost) {
    fail(`non-canonical sitemap host: ${urlString}`);
    continue;
  }
  const pathname = url.pathname === '/' ? 'index' : url.pathname.slice(1);
  const htmlFile = join(output, `${pathname}.html`);
  if (!existsSync(htmlFile)) {
    fail(`sitemap URL has no prerendered HTML: ${url.pathname}`);
    continue;
  }
  const html = readFileSync(htmlFile, 'utf8');
  const title = getAttribute(html, /<title>([^<]+)<\/title>/i);
  const description = getAttribute(html, /<meta\s+name="description"\s+content="([^"]*)"/i);
  const canonical = getAttribute(html, /<link\s+rel="canonical"\s+href="([^"]+)"/i);
  const robotsMeta = getAttribute(html, /<meta\s+name="robots"\s+content="([^"]+)"/i) ?? '';
  if (!title) fail(`${url.pathname}: title missing`);
  if (!description) fail(`${url.pathname}: meta description missing`);
  if (!canonical) fail(`${url.pathname}: canonical missing`);
  else if (normalize(canonical) !== normalize(urlString)) fail(`${url.pathname}: canonical does not match sitemap URL (${canonical})`);
  if (/noindex/i.test(robotsMeta)) fail(`${url.pathname}: sitemap page contains noindex`);
  if (title) {
    if (seenTitles.has(title)) fail(`${url.pathname}: duplicate title also used by ${seenTitles.get(title)}`);
    else seenTitles.set(title, url.pathname);
  }
  if (description) {
    if (seenDescriptions.has(description)) fail(`${url.pathname}: duplicate description also used by ${seenDescriptions.get(description)}`);
    else seenDescriptions.set(description, url.pathname);
  }
  report.push({ path: url.pathname, title: Boolean(title), description: Boolean(description), canonical: Boolean(canonical), indexable: !/noindex/i.test(robotsMeta) });
}

console.table(report);
if (failures) process.exit(1);
console.log(`BUILT INDEXABILITY AUDIT PASSED: ${urls.length} unique canonical sitemap URLs are prerendered and indexable.`);
