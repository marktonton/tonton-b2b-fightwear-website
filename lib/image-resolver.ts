import config from '../data/config.json';

export function resolveImage(path: string): string {
  if (path.startsWith('http')) return path;
  const cleanPath = path.startsWith('/') ? path.slice(1) : path;
  if (config.r2.useR2 && config.r2.baseUrl) {
    return `${config.r2.baseUrl}/${cleanPath}`;
  }
  return `/${cleanPath}`;
}
