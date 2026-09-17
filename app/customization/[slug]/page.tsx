import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { resolveImage } from '../../../lib/image-resolver';
import { customizationPageContent } from '../../../lib/customization-content';
import {
  customizationCategories,
  getCustomizationCategory,
  getCustomizationProducts,
} from '../../../lib/customization-pages';
import type { Metadata } from 'next';
import RelatedResources from '../../../components/RelatedResources';

const SITE_URL = 'https://www.tontongear.com';

type PageProps = { params: { slug: string } };

export function generateStaticParams() {
  return customizationCategories.map((category) => ({ slug: category.id }));
}

export function generateMetadata({ params }: PageProps): Metadata {
  const category = getCustomizationCategory(params.slug);
  const content = category ? customizationPageContent[category.id] : undefined;
  if (!category || !content) {
    return {
      title: { absolute: 'Customization Page Not Found | TONTON Sportswear' },
      robots: { index: false, follow: false },
    };
  }
  const seoTitles: Record<string, string> = {
    'sublimated-rash-guards': 'Custom Sublimated Rash Guard Manufacturer | OEM',
    'sublimated-training-shorts': 'Custom Sublimated Training Shorts | Sportswear OEM',
    'sublimated-bjj-mma-shorts': 'Custom BJJ & MMA Shorts | Fightwear Manufacturer',
  };
  const title = seoTitles[category.id] ?? `${category.name} Customization | TONTON Sportswear`;
  return {
    title: { absolute: title },
    description: content.seoDescription,
    alternates: { canonical: `${SITE_URL}/customization/${category.id}` },
    openGraph: {
      title,
      description: content.seoDescription,
      url: `${SITE_URL}/customization/${category.id}`,
      type: 'website',
      images: [{ url: resolveImage(content.heroImage), alt: content.heroAlt }],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description: content.seoDescription,
      images: [resolveImage(content.heroImage)],
    },
  };
}

export default function CustomizationCategoryPage({ params }: { params: { slug: string } }) {
  const category = getCustomizationCategory(params.slug);

  if (!category) {
    notFound();
  }

  const content = customizationPageContent[category.id];
  if (!content) {
    notFound();
  }

  const products = getCustomizationProducts(category.id);
  const isRashGuardPage = category.id === 'sublimated-rash-guards';
  const builderProduct = category.id === 'sublimated-rash-guards'
    ? 'Rash Guard'
    : category.id === 'sublimated-training-shorts'
      ? 'Training Shorts'
      : 'BJJ / MMA Shorts';
  const builderHref = {
    pathname: '/project-builder',
    query: { product: builderProduct, reference: category.name, source: 'customization-page' },
  };
  const categoryUrl = `${SITE_URL}/customization/${category.id}`;
  const collectionSchema = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: category.name,
    url: categoryUrl,
    description: content.seoDescription,
    primaryImageOfPage: resolveImage(content.heroImage),
    about: content.projectTypes.map((item) => ({ '@type': 'Thing', name: item.title })),
    ...(isRashGuardPage && content.productDetails ? {
      hasPart: content.productDetails.map((detail) => ({
        '@type': 'ImageObject',
        name: detail.title,
        description: detail.text,
        contentUrl: new URL(resolveImage(detail.image), SITE_URL).toString(),
      })),
    } : {}),
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
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: content.faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: { '@type': 'Answer', text: faq.answer },
    })),
  };
  const videoSchema = isRashGuardPage ? {
    '@context': 'https://schema.org',
    '@type': 'VideoObject',
    name: 'Custom Rash Guard product construction video',
    description: 'Real product footage showing a custom long-sleeve Rash Guard, panel construction, breathable side panels, artwork placement, and finishing details.',
    thumbnailUrl: `${SITE_URL}/assets/products/rash-guard-products/video/custom-rash-guard-product-video-poster.webp`,
    uploadDate: '2026-09-15',
    duration: 'PT43S',
    contentUrl: `${SITE_URL}/assets/products/rash-guard-products/video/custom-rash-guard-product-video.mp4`,
    embedUrl: `${categoryUrl}#rash-guard-video`,
  } : null;

  const processSteps = [
    {
      title: 'Define the product brief',
      text: `Share the ${content.processProduct}.`,
    },
    {
      title: 'Review artwork and options',
      text: 'Send logos, brand colors, references, and feature requirements so the mockup and specification can be prepared.',
    },
    {
      title: 'Confirm the sample',
      text: 'Review fit, material, construction, color, branding, and functional details before bulk work begins.',
    },
    {
      title: 'Produce, inspect, and deliver',
      text: 'Production follows the approved details, followed by finished-garment inspection, packing, and shipment preparation.',
    },
  ];

  return (
    <div className={`customization-page customization-page-${category.id}`}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify([collectionSchema, breadcrumbSchema, faqSchema, ...(videoSchema ? [videoSchema] : [])]) }} />

      <section className="customization-hero">
        <div className="customization-shell customization-hero-grid">
          <div className="customization-hero-copy">
            <nav className="customization-breadcrumb" aria-label="Breadcrumb">
              <Link href="/">Home</Link><span>/</span><Link href="/collections">Customization</Link><span>/</span><span>{category.name}</span>
            </nav>
            <p className="customization-kicker">{content.kicker}</p>
            <h1>{isRashGuardPage ? 'Custom Sublimated Graphic Rash Guards' : `Custom ${category.name}`}</h1>
            <p className="customization-hero-lead">{content.heroLead}</p>
            <div className="customization-hero-actions">
              <Link className="customization-button customization-button-red" href={builderHref}>Build Your Project <span aria-hidden="true">→</span></Link>
              <Link className="customization-text-link" href="/service-support">View Customization Process <span aria-hidden="true">→</span></Link>
            </div>
          </div>
          <figure className="customization-hero-media">
            <Image src={resolveImage(content.heroImage)} alt={content.heroAlt} fill priority unoptimized={isRashGuardPage} sizes="(max-width: 900px) 100vw, 52vw" />
          </figure>
        </div>
        <div className="customization-shell customization-facts" aria-label="Project benefits">
          <div><strong>10 PCS</strong><span>Low MOQ</span></div>
          <div><strong>FREE</strong><span>Custom mockup</span></div>
          <div><strong>OEM / ODM</strong><span>Development support</span></div>
          <div><strong>2004</strong><span>Sportswear experience</span></div>
        </div>
      </section>

      <section className="customization-overview customization-shell">
        <div className="customization-overview-heading">
          <p className="customization-kicker">PRODUCT DIRECTION</p>
          <h2>{content.overviewTitle}</h2>
        </div>
        <div className="customization-overview-copy">
          <p className="customization-overview-lead">{content.overviewLead}</p>
          <p>{content.overviewText}</p>
        </div>
        <div className="customization-audience-grid">
          {content.projectTypes.map((item, index) => (
            <article key={item.title}>
              <span>0{index + 1}</span>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="customization-options">
        <div className="customization-shell customization-options-grid">
          <figure className="customization-options-media">
            <Image src={resolveImage(content.optionsImage)} alt={content.optionsAlt} fill unoptimized={isRashGuardPage} sizes="(max-width: 900px) 100vw, 50vw" />
          </figure>
          <div className="customization-options-copy">
            <p className="customization-kicker customization-kicker-light">CUSTOMIZATION OPTIONS</p>
            <h2>{content.optionsTitle}</h2>
            <p className="customization-options-lead">{content.optionsLead}</p>
            <div className="customization-option-list">
              {content.options.map((option, index) => (
                <article key={option.title}>
                  <span>0{index + 1}</span>
                  <div><h3>{option.title}</h3><p>{option.text}</p></div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="customization-products customization-shell" id="custom-products">
        <div className="customization-section-heading">
          <div><p className="customization-kicker">{isRashGuardPage ? 'REAL PRODUCT REFERENCES' : 'PRODUCT EXAMPLES'}</p><h2>{isRashGuardPage ? 'Compare two custom Rash Guard directions.' : `Explore ${category.name.toLowerCase()} directions`}</h2></div>
          <p>{isRashGuardPage ? 'A long-sleeve sublimated graphic sample and a tonal black short-sleeve sample are shown from multiple angles so buyers can review fit, fabric, seam direction, labeling, and branding areas.' : 'Use these products as a starting point. Colors, artwork, sizing, and selected construction details can be reviewed for your project.'}</p>
        </div>
        {content.skuGroups ? (
          <>
            <div className="customization-sku-grid">
              {content.skuGroups.map((group) => (
                <article className="customization-sku-card" key={group.name}>
                  <div className="customization-sku-gallery">
                    {group.images.map((image, index) => (
                      <figure className={index === 0 ? 'customization-sku-image customization-sku-image-featured' : 'customization-sku-image'} key={image.src}>
                        <Image src={resolveImage(image.src)} alt={image.alt} fill unoptimized sizes={index === 0 ? '(max-width: 660px) 100vw, (max-width: 1000px) 50vw, 33vw' : '(max-width: 660px) 33vw, 12vw'} />
                      </figure>
                    ))}
                  </div>
                  <div className="customization-sku-copy">
                    <span className="customization-sku-swatch" style={{ backgroundColor: group.color }} aria-hidden="true" />
                    <div><h3>{group.name}</h3><p>{group.summary}</p></div>
                  </div>
                </article>
              ))}
            </div>
            <div className="customization-product-links" aria-label="Related Rash Guard product specifications">
              <span>Related product specifications</span>
              {products.map((product) => <Link href={`/products/${product.id}`} key={product.id}>{product.name}<span aria-hidden="true">→</span></Link>)}
            </div>
          </>
        ) : (
          <div className="customization-product-grid">
            {products.map((product) => (
              <article className="customization-product-card" key={product.id}>
                <Link className="customization-product-image" href={`/products/${product.id}`}>
                  <Image src={resolveImage(product.image)} alt={product.name} fill sizes="(max-width: 720px) 100vw, (max-width: 1100px) 50vw, 33vw" />
                </Link>
                <div className="customization-product-copy">
                  <p>Custom {category.name}</p>
                  <h3><Link href={`/products/${product.id}`}>{product.name}</Link></h3>
                  <span>{product.description}</span>
                  <Link className="customization-card-link" href={`/products/${product.id}`}>View product details <span aria-hidden="true">→</span></Link>
                </div>
              </article>
            ))}
          </div>
        )}
      </section>

      {isRashGuardPage && (
        <section className="customization-video" id="rash-guard-video">
          <div className="customization-shell customization-video-grid">
            <div className="customization-video-copy">
              <p className="customization-kicker">REAL PRODUCT VIDEO</p>
              <h2>Inspect the Rash Guard construction in motion.</h2>
              <p className="customization-video-lead">Real product footage gives buyers a closer view of how artwork, stretch panels, seams, and finishing details work together on a custom long-sleeve Rash Guard.</p>
              <div className="customization-video-points">
                <article><span>01</span><div><h3>Panel construction</h3><p>Review the neckline, raglan sleeve shape, side-panel direction, and visible seam transitions.</p></div></article>
                <article><span>02</span><div><h3>Breathable side panel</h3><p>See the mesh-panel area and how it is integrated into the body construction.</p></div></article>
                <article><span>03</span><div><h3>Custom artwork placement</h3><p>Check how full-body graphics, color blocking, and logo areas read on the finished sample.</p></div></article>
              </div>
            </div>
            <figure className="customization-video-media">
              <video controls playsInline preload="metadata" poster="/assets/products/rash-guard-products/video/custom-rash-guard-product-video-poster.webp" aria-label="Custom long-sleeve Rash Guard product video">
                <source src="/assets/products/rash-guard-products/video/custom-rash-guard-product-video.mp4" type="video/mp4" />
                Your browser does not support the video element.
              </video>
              <figcaption>Real product footage · Custom long-sleeve Rash Guard sample</figcaption>
            </figure>
          </div>
        </section>
      )}

      {content.productDetails && (
        <section className="customization-details">
          <div className="customization-shell">
            <div className="customization-section-heading">
              <div><p className="customization-kicker customization-kicker-light">PERFORMANCE CONSTRUCTION</p><h2>Inspect the fabric, seams, mesh, and finishing details.</h2></div>
              <p>Real sample photography shows the product areas a buyer should review before approving a custom sublimated graphic Rash Guard for BJJ, MMA, grappling, or training.</p>
            </div>
            {isRashGuardPage && (
              <dl className="customization-detail-specs" aria-label="Custom sublimated Rash Guard construction summary">
                <div><dt>Fabric direction</dt><dd>Polyester-spandex stretch performance fabric</dd></div>
                <div><dt>Ventilation option</dt><dd>Underarm and side mesh panel</dd></div>
                <div><dt>Seam direction</dt><dd>Low-profile flatlock construction</dd></div>
                <div><dt>Hem option</dt><dd>Silicone anti-slip grip</dd></div>
              </dl>
            )}
            <div className="customization-detail-grid">
              {content.productDetails.map((detail, index) => (
                <article className="customization-detail-card" key={detail.title}>
                  <figure><Image src={resolveImage(detail.image)} alt={detail.alt} fill unoptimized sizes="(max-width: 660px) 100vw, (max-width: 1000px) 50vw, 25vw" /></figure>
                  <div><span>0{index + 1}</span><h3>{detail.title}</h3><p>{detail.text}</p></div>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}

      {content.fabricGuide && content.craftSteps && (
        <section className="customization-technical customization-shell">
          <div className="customization-fabric-guide">
            <p className="customization-kicker">FABRIC DIRECTION</p>
            <h2>{content.fabricGuide.title}</h2>
            <p className="customization-technical-lead">{content.fabricGuide.intro}</p>
            <div className="customization-fabric-grid">
              {content.fabricGuide.items.map((item) => <article key={item.title}><h3>{item.title}</h3><p>{item.text}</p></article>)}
            </div>
          </div>
          <div className="customization-craft">
            <p className="customization-kicker">RASH GUARD CRAFT</p>
            <h2>How a sublimated Rash Guard moves from artwork to inspection.</h2>
            <div className="customization-craft-list">
              {content.craftSteps.map((step, index) => <article key={step.title}><span>0{index + 1}</span><div><h3>{step.title}</h3><p>{step.text}</p></div></article>)}
            </div>
          </div>
        </section>
      )}

      <section className="customization-process">
        <div className="customization-shell customization-process-grid">
          <div className="customization-process-heading">
            <p className="customization-kicker">OEM / ODM PROCESS</p>
            <h2>From your idea to an approved custom product.</h2>
            <p>{content.processLead}</p>
            <Link className="customization-text-link customization-text-link-dark" href="/service-support">See the detailed service process <span aria-hidden="true">→</span></Link>
          </div>
          <div className="customization-process-list">
            {processSteps.map((step, index) => (
              <article key={step.title}>
                <span>0{index + 1}</span><h3>{step.title}</h3><p>{step.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="customization-proof customization-shell">
        <figure className="customization-proof-media">
          <Image
            src={resolveImage(isRashGuardPage ? '/assets/products/rash-guard-products/rash-guard-3-features.webp' : '/assets/pages/factory-built-for-performance.webp')}
            alt={isRashGuardPage ? 'Rash Guard 3.0 construction features showing neck label, breathable underarm mesh, flatlock sleeve seams, and silicone nonslip hem band' : 'TONTON sportswear manufacturing team and production environment'}
            fill
            sizes="(max-width: 900px) 100vw, 52vw"
          />
        </figure>
        <div className="customization-proof-copy">
          <p className="customization-kicker">PRODUCTION SUPPORT</p>
          <h2>Check the people, process, and workshop behind the product.</h2>
          <p>Product pages show what can be developed. Our Factory and Service &amp; Support pages show how artwork, materials, sampling, manufacturing, quality checks, and packing connect.</p>
          <div className="customization-proof-links">
            <Link className="customization-button customization-button-dark" href="/factory">Explore Factory <span aria-hidden="true">→</span></Link>
            <Link className="customization-card-link" href="/service-support">Service &amp; Support <span aria-hidden="true">→</span></Link>
          </div>
        </div>
      </section>

      <section className="customization-faq customization-shell">
        <div className="customization-faq-heading">
          <p className="customization-kicker">BUYER FAQ</p>
          <h2>{content.faqTitle}</h2>
          <p>Clear answers for brands, gyms, academies, teams, distributors, and private-label buyers.</p>
          <div className="customization-faq-actions">
            <Link href="/resources">Read Buyer Resources <span aria-hidden="true">→</span></Link>
            <Link href={builderHref}>Build Your Project Brief <span aria-hidden="true">→</span></Link>
          </div>
        </div>
        <div className="customization-faq-list">
          {content.faqs.map((faq, index) => (
            <details key={faq.question} open={index === 0}>
              <summary><span>0{index + 1}</span>{faq.question}</summary>
              <p>{faq.answer}</p>
            </details>
          ))}
        </div>
      </section>

      <section className="customization-related">
        <div className="customization-shell customization-related-inner">
          <p className="customization-kicker customization-kicker-light">EXPLORE RELATED CUSTOMIZATION</p>
          <h2>Build a coordinated product range.</h2>
          <div className="customization-related-links">
            {customizationCategories.filter((item) => item.id !== category.id).map((item) => (
              <Link href={`/customization/${item.id}`} key={item.id}>{item.name}<span aria-hidden="true">→</span></Link>
            ))}
          </div>
        </div>
      </section>

      <RelatedResources slugs={category.id === 'sublimated-rash-guards' ? ['rash-guard-fabric-construction', '220gsm-rash-guard-fabric-guide', 'rash-guard-silicone-anti-slip-band', 'rash-guard-sublimation-logo-placement'] : category.id === 'sublimated-bjj-mma-shorts' ? ['high-split-grappling-shorts-specifications', 'high-split-vs-standard-grappling-shorts', '2-in-1-grappling-shorts-liner-construction', 'grappling-shorts-waistband-silicone-grip'] : ['custom-fightwear-sampling-moq']} />

      <section className="customization-cta">
        <div className="customization-shell customization-cta-inner">
          <div><p className="customization-kicker customization-kicker-light">START YOUR PROJECT</p><h2>Tell us what you want to make.</h2></div>
          <div><p>Share your product type, quantity, target market, size range, artwork, and reference ideas. We will use them to clarify the next development step.</p><Link className="customization-button customization-button-red" href={builderHref}>Build Your Project Brief <span aria-hidden="true">→</span></Link></div>
        </div>
      </section>
    </div>
  );
}
