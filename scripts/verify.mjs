import { existsSync, readFileSync, readdirSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join, relative } from 'node:path';
import { spawnSync } from 'node:child_process';

const root = dirname(dirname(fileURLToPath(import.meta.url)));
const requiredFiles = [
  'package.json',
  'package-lock.json',
  'tsconfig.json',
  'next.config.js',
  'app/layout.tsx',
  'app/globals.css',
];
const textExtensions = new Set(['.css', '.js', '.mjs', '.ts', '.tsx', '.json', '.yml', '.yaml']);
const conflictMarker = /^(<<<<<<<|=======|>>>>>>>)/m;
const scanRoots = ['app', 'data', 'lib', 'scripts', '.github'];
const scanFiles = ['package.json', 'tsconfig.json', 'next.config.js'];

function walk(directory) {
  const results = [];
  for (const entry of readdirSync(directory, { withFileTypes: true })) {
    const absolute = join(directory, entry.name);
    if (entry.isDirectory()) results.push(...walk(absolute));
    else results.push(absolute);
  }
  return results;
}

function fail(message) {
  console.error(`VERIFY FAILED: ${message}`);
  process.exitCode = 1;
}

for (const file of requiredFiles) {
  if (!existsSync(join(root, file))) fail(`missing required file: ${file}`);
}

const filesToScan = [
  ...scanRoots.flatMap((directory) => existsSync(join(root, directory)) ? walk(join(root, directory)) : []),
  ...scanFiles.map((file) => join(root, file)),
];
const conflicts = [];
for (const file of filesToScan) {
  if (!textExtensions.has(file.slice(file.lastIndexOf('.')))) continue;
  const contents = readFileSync(file, 'utf8');
  if (conflictMarker.test(contents)) conflicts.push(relative(root, file));
}
if (conflicts.length) fail(`merge conflict markers found in: ${conflicts.join(', ')}`);

if (process.exitCode) process.exit(process.exitCode);

const npm = process.platform === 'win32' ? 'npm.cmd' : 'npm';
for (const args of [['run', 'typecheck'], ['run', 'build']]) {
  const result = spawnSync(npm, args, { cwd: root, stdio: 'inherit' });
  if (result.error) {
    fail(`could not run ${npm} ${args.join(' ')}: ${result.error.message}`);
    break;
  }
  if (result.status !== 0) {
    fail(`${npm} ${args.join(' ')} exited with code ${result.status}`);
    break;
  }
}

if (!process.exitCode) console.log('VERIFY PASSED: required files, conflict markers, typecheck, and build are clean.');
