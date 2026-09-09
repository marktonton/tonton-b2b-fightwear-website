import { existsSync, readFileSync, readdirSync, statSync } from 'node:fs';
import { extname, join, relative } from 'node:path';

const root = new URL('..', import.meta.url).pathname;
const publicRoot = join(root, 'public');
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

const references = new Map();
for (const sourceRoot of sourceRoots) {
  for (const file of walk(join(root, sourceRoot))) {
    if (!sourceExtensions.has(extname(file).toLowerCase())) continue;
    const contents = readFileSync(file, 'utf8');
    for (const match of contents.matchAll(assetPattern)) {
      const asset = match[1].replace(/^\//, '');
      const sources = references.get(asset) || [];
      sources.push(relative(root, file));
      references.set(asset, sources);
    }
  }
}

const missing = [...references.keys()].filter((asset) => !existsSync(join(publicRoot, asset)));
const files = walk(join(publicRoot, 'assets'));
const totalBytes = files.reduce((sum, file) => sum + statSync(file).size, 0);

console.log(`Asset files: ${files.length}`);
console.log(`Asset bytes: ${totalBytes}`);
console.log(`Referenced asset paths: ${references.size}`);

if (missing.length) {
  console.error('\nMissing referenced assets:');
  for (const asset of missing) console.error(`- ${asset} (${references.get(asset).join(', ')})`);
  process.exit(1);
}

console.log('ASSET AUDIT PASSED: every detected local asset reference exists.');
