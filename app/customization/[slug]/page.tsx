import Link from 'next/link';
import { notFound } from 'next/navigation';
import { resolveImage } from '../../../lib/image-resolver';
import {
  customizationCategories,
  getCustomizationCategory,
  getCustomizationProducts,
} from '../../../lib/customization-pages';

export function generateStaticParams() {
  return customizationCategories.map((category) => ({ slug: category.id }));
}

export default function CustomizationCategoryPage({ params }: { params: { slug: string } }) {
  const category = getCustomizationCategory(params.slug);

  if (!category) {
    notFound();
  }

  const products = getCustomizationProducts(category.id);

  return (
    <div className="section">
      <div className="section-head">
        <span style={{ color: '#e11d2e', fontWeight: '900', textTransform: 'uppercase', letterSpacing: '2px', fontSize: '12px' }}>
          Customization Collection
        </span>
        <h1>{category.name}</h1>
        <p>{category.description}</p>
      </div>

      <div className="product-grid">
        {products.map((product) => (
          <article className="product-card" key={product.id}>
            <img src={resolveImage(product.image)} alt={product.name} />
            <div>
              <span>Custom {category.name}</span>
              <h2>{product.name}</h2>
              <p>{product.description}</p>
              <Link href={`/products/${product.id}`} className="cert-btn" style={{ marginTop: '15px', display: 'inline-block' }}>
                View Details
              </Link>
            </div>
          </article>
        ))}
      </div>

      <div style={{ textAlign: 'center', marginTop: '48px' }}>
        <Link href="/collections" className="cert-btn">Back to Collections</Link>
      </div>
    </div>
  );
}
