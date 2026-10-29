import { BUYER_DOWNLOADS, downloadHref } from '../lib/buyer-downloads';
import './buyer-downloads.css';
export default function BuyerDownloadLinks({ slug, kind }: { slug: string; kind: 'blog' | 'resource' }) {
  const items = BUYER_DOWNLOADS.filter(item => (kind === 'blog' ? [...item.relatedBlog] : [...item.relatedResources]).some(value => value === slug));
  if (!items.length) return null;
  return <aside className="buyer-file-links" aria-label="Related downloadable files"><p>DOWNLOAD & USE WITH YOUR TEAM</p><h2>Keep a practical copy.</h2><ul>{items.map(item => <li key={item.id}><a href={downloadHref(item.file)} download={item.file}>Download {item.title} ↓</a><span>{item.format} · {item.pages} pages · English · v1.0</span></li>)}</ul><a href="/resources#downloads">Browse all downloadable resources →</a></aside>;
}
