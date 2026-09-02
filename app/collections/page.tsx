import React from 'react';
import Link from 'next/link';
import { resolveImage } from '../../lib/image-resolver';
import { customizationCategories as categories } from '../../lib/customization-pages';

export default function CollectionsPage() {
  return (
    <div className="section">
      <div className="section-head">
        <h2>Customization Collections</h2>
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
