import { existsSync, readFileSync } from 'node:fs';
import { resolve } from 'node:path';

const config = JSON.parse(readFileSync(new URL('../data/search-submission.json', import.meta.url), 'utf8'));
const host = process.env.INDEXNOW_HOST || config.host;
const key = process.env.INDEXNOW_KEY || config.indexNowKey;
const siteUrl = `https://${host}`;
const requestedUrls = process.argv.slice(2);

if (!key) {
  console.error('INDEXNOW NOT SENT: set INDEXNOW_KEY after the domain key has been approved.');
  process.exit(1);
}

const keyFile = resolve(`public/${key}.txt`);
if (!existsSync(keyFile) || readFileSync(keyFile, 'utf8').trim() !== key) {
  console.error(`INDEXNOW NOT SENT: create public/${key}.txt containing only the approved key.`);
  process.exit(1);
}

const defaults = ['/', '/factory', '/resources', '/project-builder'];
const urlList = (requestedUrls.length ? requestedUrls : defaults).map((path) => {
  const url = new URL(path, siteUrl);
  if (url.host !== host) throw new Error(`URL must use ${host}: ${url}`);
  return url.toString();
});

const keyResponse = await fetch(`${siteUrl}/${key}.txt`, { signal: AbortSignal.timeout(15000) });
if (!keyResponse.ok || (await keyResponse.text()).trim() !== key) throw new Error('INDEXNOW NOT SENT: production key file is not yet accessible or does not match.');

const response = await fetch('https://api.indexnow.org/indexnow', {
  method: 'POST',
  headers: { 'content-type': 'application/json; charset=utf-8' },
  body: JSON.stringify({ host, key, keyLocation: `${siteUrl}/${key}.txt`, urlList }),
});

if (!response.ok) {
  console.error(`INDEXNOW FAILED: HTTP ${response.status} ${await response.text()}`);
  process.exit(1);
}

console.log(`INDEXNOW RECEIVED: HTTP ${response.status}; ${urlList.length} URL(s). ${response.status === 202 ? 'Key validation is pending.' : 'This confirms receipt, not indexing.'}`);
