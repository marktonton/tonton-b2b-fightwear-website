import type { Metadata } from 'next';
import pages from '../../data/site-directory.json';
import { SITE_URL } from '../../lib/site-entity';
import { serializeStructuredData } from '../../lib/structured-data';
import './site-map.css';

export const metadata: Metadata = {
  title: { absolute: 'Products, Fabrics, Factory & Buyer Guides | TONTON Site Directory' },
  description: 'Browse every TONTON product, fabric reference, factory process and custom fightwear buying guide from one text directory.',
  alternates: { canonical: `${SITE_URL}/site-map` },
};

const groups = ['Company and project planning', 'Custom product programs', 'Products', 'Materials', 'Factory processes', 'Buyer solutions', 'Buyer guides'];
export default function SiteMapPage() {
  const schema = { '@context': 'https://schema.org', '@type': 'CollectionPage', url: `${SITE_URL}/site-map`, name: 'TONTON products, materials and buyer guide directory', description: metadata.description, mainEntity: { '@type': 'ItemList', numberOfItems: pages.length, itemListElement: pages.map((page, index) => ({ '@type': 'ListItem', position: index + 1, item: { '@type': 'WebPage', name: page.title, description: page.description, url: `${SITE_URL}${page.path}` } })) } };
  return <article className="site-directory">
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: serializeStructuredData(schema) }} />
    <header><p>TONTON KNOWLEDGE & PRODUCT DIRECTORY</p><h1>Products, materials, factory processes and buying guides</h1><p>Find the garment, material or manufacturing information you need for a custom fightwear project. Each link opens the full page with its specifications, evidence and next steps.</p></header>
    <nav aria-label="Directory sections"><ul>{groups.map((group, index) => <li key={group}><a href={`#directory-${index}`}>{group}</a></li>)}</ul></nav>
    {groups.map((group, index) => <section id={`directory-${index}`} key={group} aria-labelledby={`directory-title-${index}`}><h2 id={`directory-title-${index}`}>{group}</h2><ul>{pages.filter(page => page.group === group).map(page => <li key={page.path}><h3><a href={page.path}>{page.title}</a></h3><p>{page.description}</p></li>)}</ul></section>)}
  </article>;
}
