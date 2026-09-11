import React from 'react';
import productsData from '../../../data/products.json';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { resolveImage } from '../../../lib/image-resolver';

const SITE_URL = 'https://www.tontongear.com';
const products = productsData.products;

type PageProps = { params: { id: string } };

function getProduct(id: string) {
  return products.find((product) => product.id === id);
}

function getCategoryName(categoryId: string) {
  return productsData.categories.find((category) => category.id === categoryId)?.name ?? 'Custom Sportswear';
}

function getProductTitle(product: (typeof products)[number]) {
  const suffixes: Record<string, string> = {
    'sublimated-rash-guards': 'Custom Rash Guard Manufacturer',
    'sublimated-training-shorts': 'Custom Training Shorts OEM',
    'sublimated-bjj-mma-shorts': 'Custom BJJ & MMA Teamwear',
  };
  return `${product.name} | ${suffixes[product.categoryId] ?? 'TONTON Sportswear'}`;
}

function getProductDescription(product: (typeof products)[number]) {
  return `Custom ${product.name}: ${product.description} OEM/ODM colors, logos, and production support for brands, gyms, clubs, and teams.`;
}

export function generateStaticParams() {
  return products.map((product) => ({ id: product.id }));
}

export function generateMetadata({ params }: PageProps): Metadata {
  const product = getProduct(params.id);
  if (!product) {
    return {
      title: { absolute: 'Product Not Found | TONTON Sportswear' },
      robots: { index: false, follow: false },
    };
  }

  const url = `${SITE_URL}/products/${product.id}`;
  const title = getProductTitle(product);
  const description = getProductDescription(product);
  const image = resolveImage(product.image);

  return {
    title: { absolute: title },
    description,
    alternates: { canonical: url },
    openGraph: {
      type: 'website',
      url,
      siteName: 'TONTON Sportswear',
      title,
      description,
      images: [{ url: image, alt: product.name }],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [image],
    },
  };
}

export default function ProductDetailPage({ params }: PageProps) {
  const product = getProduct(params.id);

  if (!product) {
    notFound();
  }

  const galleryImages = 'images' in product ? product.images : [product.image];
  const categoryName = getCategoryName(product.categoryId);
  const categoryUrl = `/customization/${product.categoryId}`;
  const productUrl = `${SITE_URL}/products/${product.id}`;
  const relatedProducts = products
    .filter((item) => item.categoryId === product.categoryId && item.id !== product.id)
    .slice(0, 3);
  const productSchema = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: product.name,
    description: getProductDescription(product),
    image: galleryImages.map((image) => resolveImage(image)),
    sku: product.id,
    category: categoryName,
    url: productUrl,
    brand: { '@type': 'Brand', name: 'TONTON' },
    manufacturer: {
      '@type': 'Organization',
      name: 'TONTON Sportswear',
      url: SITE_URL,
    },
  };
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
      { '@type': 'ListItem', position: 2, name: categoryName, item: `${SITE_URL}${categoryUrl}` },
      { '@type': 'ListItem', position: 3, name: product.name, item: productUrl },
    ],
  };

  return (
    <div className="section">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify([productSchema, breadcrumbSchema]) }} />
      <nav aria-label="Breadcrumb" className="product-breadcrumb">
        <Link href="/">Home</Link>
        <span aria-hidden="true">/</span>
        <Link href={categoryUrl}>{categoryName}</Link>
        <span aria-hidden="true">/</span>
        <span aria-current="page">{product.name}</span>
      </nav>
      <div className="inquiry" style={{ background: 'none', color: '#151515', padding: '0', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '40px' }}>
        <div className="inquiry-copy">
          <Link href={categoryUrl} style={{ color: '#e11d2e', marginBottom: '20px', display: 'block' }}>← Back to {categoryName}</Link>
          <div className="product-detail-gallery">
            {galleryImages.map((image, index) => (
              <img
                key={image}
                src={resolveImage(image)}
                alt={`${product.name}${index === 0 ? '' : ` — detail ${index + 1}`}`}
                className={index === 0 ? 'product-detail-gallery-main' : ''}
              />
            ))}
          </div>
        </div>
        
        <div style={{ padding: '0 20px' }}>
          <span style={{ color: '#e11d2e', fontWeight: '900', textTransform: 'uppercase', letterSpacing: '2px', fontSize: '12px' }}>
            {product.categoryId.replace(/-/g, ' ')}
          </span>
          <h1 style={{ fontSize: '48px', margin: '10px 0 20px' }}>{product.name}</h1>
          <p style={{ fontSize: '20px', color: '#666', lineHeight: '1.6', marginBottom: '30px' }}>{product.description}</p>
          
          <h3 style={{ fontSize: '24px', marginBottom: '15px' }}>Key Features:</h3>
          <ul style={{ marginBottom: '40px' }}>
            {(product.features || []).map((feature: any, index: number) => (
              <li key={index} style={{ marginBottom: '10px', display: 'flex', alignItems: 'center' }}>
                <span style={{ color: '#e11d2e', marginRight: '10px' }}>✓</span> {feature}
              </li>
            ))}
          </ul>
          
          <div className="inquiry-form" style={{ background: '#f7f7f8', border: '1px solid #eee', padding: '30px', borderRadius: '20px' }}>
            <h3 style={{ marginBottom: '20px' }}>Request a Quotation</h3>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px' }}>
              <input type="text" placeholder="Your Name" style={{ padding: '12px', borderRadius: '8px', border: '1px solid #ddd' }} />
              <input type="email" placeholder="Your Email" style={{ padding: '12px', borderRadius: '8px', border: '1px solid #ddd' }} />
              <textarea placeholder="Tell us about your project (Quantity, Logo, etc.)" style={{ gridColumn: '1/-1', padding: '12px', borderRadius: '8px', border: '1px solid #ddd', minHeight: '100px' }}></textarea>
              <button className="btn-red" style={{ gridColumn: '1/-1', padding: '15px', borderRadius: '8px', border: 'none', background: '#e11d2e', color: '#fff', fontWeight: 'bold', cursor: 'pointer' }}>Send Inquiry</button>
            </div>
          </div>
        </div>
      </div>
      {relatedProducts.length > 0 && (
        <section className="product-related" aria-labelledby="related-products-title">
          <h2 id="related-products-title">More {categoryName}</h2>
          <div>
            {relatedProducts.map((item) => (
              <Link href={`/products/${item.id}`} key={item.id}>{item.name}</Link>
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
