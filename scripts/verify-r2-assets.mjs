import { existsSync, readFileSync, readdirSync } from 'node:fs';
import { dirname, extname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = dirname(dirname(fileURLToPath(import.meta.url)));
const manifestPath = join(root, '.r2-migration', 'assets.tsv');
const baseUrl = (process.env.R2_PUBLIC_BASE_URL || 'https://assets.tontongear.com').replace(/\/+$/, '');
const concurrency = 8;
const requestTimeoutMs = 15_000;
const requireExactBytes = process.env.R2_REQUIRE_EXACT_BYTES === '1';
const sourceRoots = ['app', 'data', 'lib'];
const sourceExtensions = new Set(['.css', '.json', '.ts', '.tsx']);
const assetPattern = /["'`](\/?assets\/[A-Za-z0-9_./()\-\u0080-\uFFFF]+\.(?:avif|gif|jpe?g|png|svg|webp|mp4|webm|pdf))[?"'`]/gi;

function walk(directory) {
  if (!existsSync(directory)) return [];
  return readdirSync(directory, { withFileTypes: true }).flatMap((entry) => {
    const absolute = join(directory, entry.name);
    return entry.isDirectory() ? walk(absolute) : [absolute];
  });
}

const referencedKeys = new Set();
for (const sourceRoot of sourceRoots) {
  for (const file of walk(join(root, sourceRoot))) {
    if (!sourceExtensions.has(extname(file).toLowerCase())) continue;
    const contents = readFileSync(file, 'utf8');
    for (const match of contents.matchAll(assetPattern)) {
      referencedKeys.add(match[1].replace(/^\//, ''));
    }
  }
}

if (!existsSync(manifestPath)) {
  console.error('R2 VERIFY FAILED: run npm run assets:manifest first.');
  process.exit(1);
}

const [, ...lines] = readFileSync(manifestPath, 'utf8').trim().split('\n');
const objects = lines.map((line) => {
  const [localPath, objectKey, bytes, contentType] = line.split('\t');
  return { localPath, objectKey, bytes: Number(bytes), contentType };
});

async function inspect(object) {
  const url = `${baseUrl}/${object.objectKey.split('/').map(encodeURIComponent).join('/')}`;
  try {
    const response = await fetch(url, {
      method: 'HEAD',
      redirect: 'follow',
      signal: AbortSignal.timeout(requestTimeoutMs),
    });
    const remoteBytes = Number(response.headers.get('content-length'));
    const remoteType = (response.headers.get('content-type') || '').split(';')[0].toLowerCase();
    const problems = [];

    if (!response.ok) problems.push(`HTTP ${response.status}`);
    if (remoteType && remoteType !== object.contentType) {
      problems.push(`type ${remoteType} != ${object.contentType}`);
    }

    const byteDifference = Number.isFinite(remoteBytes) && remoteBytes !== object.bytes
      ? `bytes ${remoteBytes} != ${object.bytes}`
      : null;
    if (requireExactBytes && byteDifference) problems.push(byteDifference);

    return { ...object, url, problems, byteDifference };
  } catch (error) {
    return { ...object, url, problems: [error instanceof Error ? error.message : String(error)], byteDifference: null };
  }
}

const results = [];
for (let index = 0; index < objects.length; index += concurrency) {
  results.push(...await Promise.all(objects.slice(index, index + concurrency).map(inspect)));
  console.log(`Checked ${Math.min(index + concurrency, objects.length)}/${objects.length}`);
}

const failures = results.filter((result) => result.problems.length && referencedKeys.has(result.objectKey));
const optionalFailures = results.filter((result) => result.problems.length && !referencedKeys.has(result.objectKey));
const optimizedCopies = results.filter((result) => result.byteDifference && !result.problems.length);
const totalBytes = objects.reduce((sum, object) => sum + object.bytes, 0);

console.log(`R2 base URL: ${baseUrl}`);
console.log(`Objects checked: ${results.length}`);
console.log(`Objects referenced by the website: ${referencedKeys.size}`);
console.log(`Expected bytes: ${totalBytes}`);
console.log(`Different-size web copies: ${optimizedCopies.length}`);

if (optionalFailures.length) {
  console.warn(`Optional/unreferenced objects unavailable: ${optionalFailures.length}`);
  for (const failure of optionalFailures) {
    console.warn(`- ${failure.objectKey}: ${failure.problems.join('; ')}`);
  }
}

if (failures.length) {
  console.error(`R2 VERIFY FAILED: ${failures.length} object(s) did not match.`);
  for (const failure of failures) {
    console.error(`- ${failure.objectKey}: ${failure.problems.join('; ')}`);
  }
  process.exit(1);
}

console.log('R2 VERIFY PASSED: every website-referenced object is available with the expected content type.');
if (!requireExactBytes && optimizedCopies.length) {
  console.log('Different byte sizes are accepted because R2 contains optimized web copies. Set R2_REQUIRE_EXACT_BYTES=1 for strict byte matching.');
}
