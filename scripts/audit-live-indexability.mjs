const siteUrl = new URL(process.env.SEO_AUDIT_SITE_URL || 'https://www.tontongear.com');
const concurrency = 5;
let failures = 0;

const fail = (message) => { console.error(`FAIL: ${message}`); failures += 1; };
const normalize = (value) => value.replace(/\/$/, '');
const getAttribute = (html, expression) => html.match(expression)?.[1]?.replaceAll('&amp;', '&');

async function get(url) {
  const response = await fetch(url, { redirect: 'follow', headers: { 'user-agent': 'TONTON-SEO-Audit/1.0' } });
  return { response, body: await response.text() };
}

const robotsUrl = new URL('/robots.txt', siteUrl);
const sitemapUrl = new URL('/sitemap.xml', siteUrl);
const [{ response: robotsResponse, body: robots }, { response: sitemapResponse, body: sitemap }] = await Promise.all([get(robotsUrl), get(sitemapUrl)]);
if (!robotsResponse.ok) fail(`robots.txt returned HTTP ${robotsResponse.status}`);
if (!sitemapResponse.ok) fail(`sitemap.xml returned HTTP ${sitemapResponse.status}`);
if (/Disallow:\s*\//i.test(robots)) fail('robots.txt blocks the whole site');

const urls = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map((match) => match[1]);
if (!urls.length) fail('sitemap contains no URLs');
const duplicates = urls.filter((url, index) => urls.indexOf(url) !== index);
if (duplicates.length) fail(`duplicate sitemap URLs: ${[...new Set(duplicates)].join(', ')}`);

const report = [];
for (let start = 0; start < urls.length; start += concurrency) {
  const batch = urls.slice(start, start + concurrency);
  const results = await Promise.all(batch.map(async (url) => {
    try {
      const { response, body } = await get(url);
      const title = getAttribute(body, /<title>([^<]+)<\/title>/i);
      const description = getAttribute(body, /<meta\s+name="description"\s+content="([^"]*)"/i);
      const canonical = getAttribute(body, /<link\s+rel="canonical"\s+href="([^"]+)"/i);
      const robotsMeta = getAttribute(body, /<meta\s+name="robots"\s+content="([^"]+)"/i) ?? '';
      const finalUrl = response.url;
      if (response.status !== 200) fail(`${url}: HTTP ${response.status}`);
      if (new URL(finalUrl).host !== siteUrl.host) fail(`${url}: redirected away from ${siteUrl.host}`);
      if (!title) fail(`${url}: title missing`);
      if (!description) fail(`${url}: meta description missing`);
      if (!canonical) fail(`${url}: canonical missing`);
      else if (normalize(canonical) !== normalize(url)) fail(`${url}: canonical mismatch (${canonical})`);
      if (/noindex/i.test(robotsMeta)) fail(`${url}: contains noindex`);
      return { path: new URL(url).pathname, http: response.status, title: Boolean(title), description: Boolean(description), canonical: Boolean(canonical), indexable: !/noindex/i.test(robotsMeta) };
    } catch (error) {
      fail(`${url}: ${error instanceof Error ? error.message : error}`);
      return { path: new URL(url).pathname, http: 'ERROR', title: false, description: false, canonical: false, indexable: false };
    }
  }));
  report.push(...results);
}

console.table(report);
if (failures) process.exit(1);
console.log(`LIVE INDEXABILITY AUDIT PASSED: ${urls.length} sitemap URLs return HTTP 200 with indexable metadata.`);
