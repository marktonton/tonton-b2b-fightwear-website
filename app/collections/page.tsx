import React from 'react';
import Link from 'next/link';
import { resolveImage } from '../../lib/image-resolver';
import { customizationCategories as categories } from '../../lib/customization-pages';
import type { Metadata } from 'next';

const SITE_URL = 'https://www.tontongear.com';

export const metadata: Metadata = {
  title: { absolute: 'Custom Fightwear Collections | Rash Guards & MMA Shorts' },
  description: 'Explore TONTON custom sublimated rash guards, training shorts, and BJJ/MMA shorts for brands, teams, clubs, and retailers.',
  alternates: { canonical: `${SITE_URL}/collections` },
  openGraph: {
    title: 'Customization Collections | TONTON Sportswear',
    description: 'Explore TONTON custom sublimated fightwear categories for brands, teams, clubs, and retailers.',
    url: `${SITE_URL}/collections`,
    type: 'website',
  },
};

export default function CollectionsPage() {
  const collectionSchema = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'TONTON Custom Fightwear Collections',
    url: `${SITE_URL}/collections`,
    description: 'Custom sublimated rash guards, training shorts, and BJJ/MMA shorts for brands, gyms, clubs, and teams.',
    mainEntity: {
      '@type': 'ItemList',
      itemListElement: categories.map((category, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        name: category.name,
        url: `${SITE_URL}/customization/${category.id}`,
      })),
    },
  };
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
      { '@type': 'ListItem', position: 2, name: 'Customization Collections', item: `${SITE_URL}/collections` },
    ],
  };

  return (
    <div className="section">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify([collectionSchema, breadcrumbSchema]) }} />
      <div className="section-head">
        <h1>Customization Collections</h1>
        <p>Explore our specialized sublimated fightwear categories.</p>
      </div>
      
      <div className="product-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '24px' }}>
        {categories.map((category) => (
          <div className="product-card" key={category.id}>
            <img src={resolveImage(category.image)} alt={category.name} />
            <div>
              <span>Collection</span>
              <h4>{category.name}</h4>
              <p>{category.description}</p>
              <Link href={`/customization/${category.id}`} className="cert-btn" style={{ marginTop: '15px', display: 'inline-block' }}>
                View Details
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
