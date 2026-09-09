import { mkdirSync, readdirSync, statSync, writeFileSync } from 'node:fs';
import { extname, join, relative } from 'node:path';

const root = new URL('..', import.meta.url).pathname;
const assetRoot = join(root, 'public', 'assets');
const outputDirectory = join(root, '.r2-migration');
const outputFile = join(outputDirectory, 'assets.tsv');

const contentTypes = {
  '.avif': 'image/avif',
  '.gif': 'image/gif',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.png': 'image/png',
  '.svg': 'image/svg+xml',
  '.webp': 'image/webp',
  '.mp4': 'video/mp4',
  '.webm': 'video/webm',
  '.pdf': 'application/pdf',
};

function walk(directory) {
  return readdirSync(directory, { withFileTypes: true }).flatMap((entry) => {
    const absolute = join(directory, entry.name);
    return entry.isDirectory() ? walk(absolute) : [absolute];
  });
}

const rows = walk(assetRoot)
  .sort((a, b) => a.localeCompare(b))
  .map((file) => {
    const objectKey = `assets/${relative(assetRoot, file).replaceAll('\\', '/')}`;
    const extension = extname(file).toLowerCase();
    const contentType = contentTypes[extension] || 'application/octet-stream';
    const cacheControl = /-[a-f0-9]{8,}\./i.test(file)
      ? 'public, max-age=31536000, immutable'
      : 'public, max-age=86400, stale-while-revalidate=604800';
    return [relative(root, file).replaceAll('\\', '/'), objectKey, statSync(file).size, contentType, cacheControl];
  });

mkdirSync(outputDirectory, { recursive: true });
writeFileSync(outputFile, [
  ['local_path', 'object_key', 'bytes', 'content_type', 'cache_control'],
  ...rows,
].map((row) => row.join('\t')).join('\n') + '\n');

console.log(`Wrote ${rows.length} objects to ${relative(root, outputFile)}`);
