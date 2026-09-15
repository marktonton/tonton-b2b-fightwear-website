import Link from 'next/link';
import type { Metadata } from 'next';
import { RESOURCE_PAGES } from '../../lib/resource-content';

const SITE_URL = 'https://www.tontongear.com';

export const metadata: Metadata = {
  title: { absolute: 'Custom Fightwear Buyer Resources | TONTON Sportswear' },
  description: 'Buyer resources for custom Rash Guard materials, sublimation, grappling shorts construction, mobility, waistbands, sampling and project preparation.',
  alternates: { canonical: `${SITE_URL}/resources` },
};

export default function ResourcesPage() {
  const schema = { '@context': 'https://schema.org', '@type': 'CollectionPage', name: 'Custom Fightwear Buyer Resources', url: `${SITE_URL}/resources`, dateModified: '2026-09-15', hasPart: RESOURCE_PAGES.map((item) => ({ '@type': 'Article', name: item.title, url: `${SITE_URL}/resources/${item.slug}`, dateModified: item.updated })) };
  return (
    <div className="resource-page">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <header className="resource-hub-hero">
        <p>TECHNICAL BUYER RESOURCES</p>
        <h1>Build a clearer custom fightwear specification</h1>
        <div><p>Practical, product-linked guidance for brands, gyms, academies and private-label buyers preparing materials, artwork, samples and production requirements.</p><Link href="/project-builder">Build your project brief <span aria-hidden="true">→</span></Link></div>
      </header>
      {[
        { id: 'rash-guard', title: 'Rash Guard buyer cluster', copy: 'Material, hem construction and artwork decisions linked to real Rash Guard product examples.' },
        { id: 'grappling-shorts', title: 'Grappling Shorts buyer cluster', copy: 'Mobility, liner and waistband decisions linked to the High-Split 2-in-1 sample.' },
        { id: 'project', title: 'Project planning', copy: 'Prepare the information needed to move from inquiry to a reviewable product brief.' },
      ].map((group) => {
        const items = RESOURCE_PAGES.filter((resource) => resource.cluster === group.id);
        return <section className="resource-cluster" key={group.id} aria-labelledby={`cluster-${group.id}`}><header><p>CONTENT CLUSTER</p><h2 id={`cluster-${group.id}`}>{group.title}</h2><p>{group.copy}</p></header><div className="resource-hub-grid">{items.map((resource, index) => <article key={resource.slug}><span>{String(index + 1).padStart(2, '0')}</span><p>{resource.eyebrow}</p><h3>{resource.title}</h3><p>{resource.description}</p><Link href={`/resources/${resource.slug}`}>Read the guide <span aria-hidden="true">→</span></Link></article>)}</div></section>;
      })}
    </div>
  );
}
