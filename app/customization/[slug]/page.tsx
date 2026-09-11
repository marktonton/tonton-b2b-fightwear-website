import Link from 'next/link';
import { notFound } from 'next/navigation';
import { resolveImage } from '../../../lib/image-resolver';
import {
  customizationCategories,
  getCustomizationCategory,
  getCustomizationProducts,
} from '../../../lib/customization-pages';
import type { Metadata } from 'next';

const SITE_URL = 'https://www.tontongear.com';

type PageProps = { params: { slug: string } };

export function generateStaticParams() {
  return customizationCategories.map((category) => ({ slug: category.id }));
}

export function generateMetadata({ params }: PageProps): Metadata {
  const category = getCustomizationCategory(params.slug);
  if (!category) {
    return {
      title: { absolute: 'Customization Page Not Found | TONTON Sportswear' },
      robots: { index: false, follow: false },
    };
  }
  const seoTitles: Record<string, string> = {
    'sublimated-rash-guards': 'Custom Sublimated Rash Guards | OEM Sportswear Manufacturer',
    'sublimated-training-shorts': 'Custom Sublimated Training Shorts | Sportswear OEM',
    'sublimated-bjj-mma-shorts': 'Custom BJJ & MMA Shorts | Fightwear Manufacturer',
  };
  const title = seoTitles[category.id] ?? `${category.name} Customization | TONTON Sportswear`;
  return {
    title: { absolute: title },
    description: category.description,
    alternates: { canonical: `${SITE_URL}/customization/${category.id}` },
    openGraph: {
      title,
      description: category.description,
      url: `${SITE_URL}/customization/${category.id}`,
      type: 'website',
    },
  };
}

export default function CustomizationCategoryPage({ params }: { params: { slug: string } }) {
  const category = getCustomizationCategory(params.slug);

  if (!category) {
    notFound();
  }

  const products = getCustomizationProducts(category.id);
  const categoryUrl = `${SITE_URL}/customization/${category.id}`;
  const collectionSchema = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: category.name,
    url: categoryUrl,
    description: category.description,
    mainEntity: {
      '@type': 'ItemList',
      itemListElement: products.map((product, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        name: product.name,
        url: `${SITE_URL}/products/${product.id}`,
      })),
    },
  };
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
      { '@type': 'ListItem', position: 2, name: 'Customization', item: `${SITE_URL}/collections` },
      { '@type': 'ListItem', position: 3, name: category.name, item: categoryUrl },
    ],
  };

  return (
    <div className="section">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify([collectionSchema, breadcrumbSchema]) }} />
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
