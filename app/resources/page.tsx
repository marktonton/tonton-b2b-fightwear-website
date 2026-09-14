import Link from 'next/link';
import type { Metadata } from 'next';
import { RESOURCE_PAGES } from '../../lib/resource-content';

const SITE_URL = 'https://www.tontongear.com';

export const metadata: Metadata = {
  title: { absolute: 'Custom Fightwear Buyer Resources | TONTON Sportswear' },
  description: 'Practical specification guides for custom Rash Guards, high-split grappling shorts, sampling and MOQ preparation.',
  alternates: { canonical: `${SITE_URL}/resources` },
};

export default function ResourcesPage() {
  const schema = { '@context': 'https://schema.org', '@type': 'CollectionPage', name: 'Custom Fightwear Buyer Resources', url: `${SITE_URL}/resources`, dateModified: '2026-09-14', hasPart: RESOURCE_PAGES.map((item) => ({ '@type': 'Article', name: item.title, url: `${SITE_URL}/resources/${item.slug}` })) };
  return (
    <div className="resource-page">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <header className="resource-hub-hero">
        <p>TECHNICAL BUYER RESOURCES</p>
        <h1>Build a clearer custom fightwear specification</h1>
        <div><p>Practical, product-linked guidance for brands, gyms, academies and private-label buyers preparing materials, artwork, samples and production requirements.</p><Link href="/project-builder">Build your project brief <span aria-hidden="true">→</span></Link></div>
      </header>
      <section className="resource-hub-grid" aria-label="Available buyer guides">
        {RESOURCE_PAGES.map((resource, index) => <article key={resource.slug}><span>0{index + 1}</span><p>{resource.eyebrow}</p><h2>{resource.title}</h2><p>{resource.description}</p><Link href={`/resources/${resource.slug}`}>Read the guide <span aria-hidden="true">→</span></Link></article>)}
      </section>
    </div>
  );
}
