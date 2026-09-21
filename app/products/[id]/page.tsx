import React from 'react';
import productsData from '../../../data/products.json';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { resolveImage } from '../../../lib/image-resolver';
import RashGuardLanding from './RashGuardLanding';
import { isRashGuardLandingProduct, RASH_GUARD_LANDING_CONTENT } from '../../../lib/rash-guard-products';
import GrapplingShortsLanding from './GrapplingShortsLanding';
import { HIGH_SPLIT_GRAPPLING_SHORTS_CONTENT, HIGH_SPLIT_GRAPPLING_SHORTS_FAQS, isHighSplitGrapplingShorts } from '../../../lib/grappling-shorts-product';
import { getRouteModifiedDate } from '../../../lib/content-dates';
import RelatedResources from '../../../components/RelatedResources';
import ProductLandingLinks from '../../../components/ProductLandingLinks';
import TrainingShortsLanding from './TrainingShortsLanding';
import { isTrainingShortsLandingProduct, TRAINING_SHORTS_LANDING_CONTENT } from '../../../lib/training-shorts-products';

const SITE_URL = 'https://www.tontongear.com';
const products = productsData.products;

type PageProps = { params: { id: string } };

function getProduct(id: string) {
  return products.find((product) => product.id === id);
}

function getCategoryName(categoryId: string) {
  return productsData.categories.find((category) => category.id === categoryId)?.name ?? 'Custom Sportswear';
}

function getBuilderProduct(categoryId: string) {
  const builderProducts: Record<string, string> = {
    'sublimated-rash-guards': 'Rash Guard',
    'sublimated-training-shorts': 'Training Shorts',
    'sublimated-bjj-mma-shorts': 'Coordinated Team Kit',
  };
  return builderProducts[categoryId] ?? 'Rash Guard';
}

function getAbsoluteImage(path: string) {
  const resolved = resolveImage(path);
  return resolved.startsWith('/') ? `${SITE_URL}${resolved}` : resolved;
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
  const landingContent = isRashGuardLandingProduct(product.id)
    ? RASH_GUARD_LANDING_CONTENT[product.id]
    : isHighSplitGrapplingShorts(product.id)
      ? HIGH_SPLIT_GRAPPLING_SHORTS_CONTENT
      : isTrainingShortsLandingProduct(product.id)
        ? TRAINING_SHORTS_LANDING_CONTENT[product.id]
      : null;
  const title = landingContent?.seoTitle ?? getProductTitle(product);
  const description = landingContent?.seoDescription ?? getProductDescription(product);
  const image = resolveImage(product.image);

  return {
    title: { absolute: title },
    description,
    alternates: { canonical: url },
    robots: isHighSplitGrapplingShorts(product.id) || isTrainingShortsLandingProduct(product.id) ? { index: true, follow: true } : undefined,
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

  if (isTrainingShortsLandingProduct(product.id)) {
    const content = TRAINING_SHORTS_LANDING_CONTENT[product.id];
    const galleryImages = 'images' in product ? product.images : [product.image];
    const productUrl = `${SITE_URL}/products/${product.id}`;
    const categoryName = getCategoryName(product.categoryId);
    const categoryUrl = `/customization/${product.categoryId}`;
    const productSchema = {
      '@context': 'https://schema.org',
      '@type': 'Product',
      '@id': `${productUrl}#product`,
      name: product.name,
      description: content.seoDescription,
      image: galleryImages.map(getAbsoluteImage),
      sku: product.id,
      category: categoryName,
      url: productUrl,
      brand: { '@type': 'Brand', name: 'TONTON' },
      manufacturer: { '@type': 'Organization', name: 'TONTON Sportswear', url: SITE_URL },
      additionalProperty: content.materialRows.map(([name, value]) => ({ '@type': 'PropertyValue', name, value })),
    };
    const webPageSchema = {
      '@context': 'https://schema.org',
      '@type': 'WebPage',
      name: product.name,
      url: productUrl,
      dateModified: getRouteModifiedDate(`/products/${product.id}`),
      mainEntity: { '@id': `${productUrl}#product` },
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
    const faqSchema = {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: content.faqs.map((item) => ({
        '@type': 'Question',
        name: item.question,
        acceptedAnswer: { '@type': 'Answer', text: item.answer },
      })),
    };

    return (
      <>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify([productSchema, webPageSchema, breadcrumbSchema, faqSchema]) }} />
        <TrainingShortsLanding product={product} />
      </>
    );
  }

  if (isHighSplitGrapplingShorts(product.id)) {
    const galleryImages = 'images' in product ? product.images : [product.image];
    const content = HIGH_SPLIT_GRAPPLING_SHORTS_CONTENT;
    const productUrl = `${SITE_URL}/products/${product.id}`;
    const productSchema = {
      '@context': 'https://schema.org',
      '@type': 'Product',
      name: product.name,
      description: content.seoDescription,
      image: galleryImages.map(getAbsoluteImage),
      sku: product.id,
      category: 'Custom Grappling Shorts',
      material: content.material,
      color: content.color,
      url: productUrl,
      brand: { '@type': 'Brand', name: 'TONTON' },
      manufacturer: { '@type': 'Organization', name: 'TONTON Sportswear', url: SITE_URL },
      additionalProperty: [
        { '@type': 'PropertyValue', name: 'Cut', value: 'High Split Cut' },
        { '@type': 'PropertyValue', name: 'Construction', value: '2-in-1 grappling shorts' },
        { '@type': 'PropertyValue', name: 'Inner layer weight', value: '250gsm' },
        { '@type': 'PropertyValue', name: 'Outer layer performance', value: 'Breathable quick-dry four-way stretch' },
        { '@type': 'PropertyValue', name: 'Waistband', value: 'Adjustable drawstring with anti-slip silicone grip strip' },
        { '@type': 'PropertyValue', name: 'Stitching', value: 'Reinforced stitching' },
        { '@type': 'PropertyValue', name: 'Label', value: 'Tagless printed label' },
        { '@type': 'PropertyValue', name: 'Recommended use', value: 'MMA, wrestling, grappling, boxing and functional training' },
        { '@type': 'PropertyValue', name: 'Customization', value: 'Custom printed inner-layer patterns and branding' },
      ],
    };
    const webPageSchema = { '@context': 'https://schema.org', '@type': 'WebPage', name: product.name, url: productUrl, dateModified: getRouteModifiedDate(`/products/${product.id}`), mainEntity: { '@id': `${productUrl}#product` } };
    Object.assign(productSchema, { '@id': `${productUrl}#product` });
    const breadcrumbSchema = {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
        { '@type': 'ListItem', position: 2, name: 'Custom BJJ & MMA Shorts', item: `${SITE_URL}/customization/sublimated-bjj-mma-shorts` },
        { '@type': 'ListItem', position: 3, name: product.name, item: productUrl },
      ],
    };
    const faqSchema = {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: HIGH_SPLIT_GRAPPLING_SHORTS_FAQS.map((item) => ({
        '@type': 'Question',
        name: item.question,
        acceptedAnswer: { '@type': 'Answer', text: item.answer },
      })),
    };

    return (
      <>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify([productSchema, webPageSchema, breadcrumbSchema, faqSchema]) }} />
        <GrapplingShortsLanding product={product} />
      </>
    );
  }

  if (isRashGuardLandingProduct(product.id)) {
    const galleryImages = 'images' in product ? product.images : [product.image];
    const content = RASH_GUARD_LANDING_CONTENT[product.id];
    const productUrl = `${SITE_URL}/products/${product.id}`;
    const productSchema = {
      '@context': 'https://schema.org',
      '@type': 'Product',
      name: product.name,
      description: content.seoDescription,
      image: galleryImages.map(getAbsoluteImage),
      sku: product.id,
      category: 'Custom Rash Guard',
      material: content.material,
      color: content.color,
      url: productUrl,
      brand: { '@type': 'Brand', name: 'TONTON' },
      manufacturer: { '@type': 'Organization', name: 'TONTON Sportswear', url: SITE_URL },
      additionalProperty: product.id === 'samurai-graphic-rash-guard' ? [
        { '@type': 'PropertyValue', name: 'Fabric weight', value: '220gsm' },
        { '@type': 'PropertyValue', name: 'Material', value: 'Ultra-fine Lycra' },
        { '@type': 'PropertyValue', name: 'Coverage', value: 'Fully opaque under stretch' },
        { '@type': 'PropertyValue', name: 'Construction', value: 'Long-sleeve raglan performance fit' },
        { '@type': 'PropertyValue', name: 'Decoration', value: 'Custom sublimated panel graphics and logo placement' },
      ] : [
        { '@type': 'PropertyValue', name: 'Fabric weight', value: '220gsm' },
        { '@type': 'PropertyValue', name: 'Composition', value: '85% polyester / 15% spandex' },
        { '@type': 'PropertyValue', name: 'Coverage', value: 'Opaque under stretch' },
        { '@type': 'PropertyValue', name: 'Hem control', value: 'Silicone anti-slip elastic band' },
        { '@type': 'PropertyValue', name: 'Decoration', value: 'Custom sublimated panel artwork' },
      ],
    };
    const webPageSchema = { '@context': 'https://schema.org', '@type': 'WebPage', name: product.name, url: productUrl, dateModified: getRouteModifiedDate(`/products/${product.id}`), mainEntity: { '@id': `${productUrl}#product` } };
    Object.assign(productSchema, { '@id': `${productUrl}#product` });
    const breadcrumbSchema = {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
        { '@type': 'ListItem', position: 2, name: 'Custom Rash Guards', item: `${SITE_URL}/customization/sublimated-rash-guards` },
        { '@type': 'ListItem', position: 3, name: product.name, item: productUrl },
      ],
    };
    const faqSchema = {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: [
        ['What fabric is used for this custom Rash Guard?', product.id === 'samurai-graphic-rash-guard' ? 'This Rash Guard uses 220gsm ultra-fine Lycra with a soft hand feel, excellent elasticity and fully opaque coverage.' : 'This Rash Guard uses 220gsm ultra-fine Lycra made from 85% polyester and 15% spandex. The fabric has a soft hand feel, high elasticity and opaque coverage.'],
        ['Is the fabric see-through when stretched?', 'The 220gsm fabric is selected for opaque coverage. Fit, stretch recovery and opacity are checked again on the approved sample before bulk production.'],
        ['Can the artwork and logo positions be customized?', 'Yes. Sleeve graphics, chest branding, back-neck logos, colors and panel artwork can be reviewed in the digital mockup before sampling.'],
        ['Can I customize the colors and logos?', 'Yes. Colors, logos, sponsor marks, names and panel artwork can be reviewed in the digital mockup before sampling.'],
      ].map(([name, text]) => ({ '@type': 'Question', name, acceptedAnswer: { '@type': 'Answer', text } })),
    };

    return (
      <>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify([productSchema, webPageSchema, breadcrumbSchema, faqSchema]) }} />
        <RashGuardLanding product={product} />
      </>
    );
  }

  const galleryImages = 'images' in product ? product.images : [product.image];
  const categoryName = getCategoryName(product.categoryId);
  const categoryUrl = `/customization/${product.categoryId}`;
  const productUrl = `${SITE_URL}/products/${product.id}`;
  const builderHref = {
    pathname: '/project-builder',
    query: {
      product: getBuilderProduct(product.categoryId),
      reference: product.name,
      source: 'product-page',
    },
  };
  const quickQuoteUrl = `https://wa.me/8617722438678?text=${encodeURIComponent(`Hello TONTON, I would like to discuss ${product.name}.`)}`;
  const productSchema = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: product.name,
    description: getProductDescription(product),
    image: galleryImages.map(getAbsoluteImage),
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
          
          <div className="product-project-entry">
            <p>START WITH THIS PRODUCT</p>
            <h2>Turn this reference into a production-ready brief.</h2>
            <span>Product type and reference will be carried into the Project Builder. Add quantity, artwork status, construction and performance priorities there.</span>
            <div>
              <Link className="product-project-primary" href={builderHref}>Build This Product Brief</Link>
              <a className="product-project-secondary" href={quickQuoteUrl} target="_blank" rel="noopener noreferrer">Quick WhatsApp Question</a>
            </div>
          </div>
        </div>
      </div>
      <RelatedResources slugs={product.categoryId === 'sublimated-rash-guards' ? ['rash-guard-fabric-construction', '220gsm-rash-guard-fabric-guide', 'rash-guard-sublimation-logo-placement'] : product.categoryId === 'sublimated-bjj-mma-shorts' ? ['high-split-grappling-shorts-specifications', 'high-split-vs-standard-grappling-shorts', '2-in-1-grappling-shorts-liner-construction'] : ['custom-fightwear-sampling-moq']} />
      <ProductLandingLinks productId={product.id} />
    </div>
  );
}
