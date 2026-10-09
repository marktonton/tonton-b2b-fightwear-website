import Link from 'next/link';
import AnswerEvidencePanel from '../../../components/AnswerEvidencePanel';
import ProductLandingLinks from '../../../components/ProductLandingLinks';
import ProductSpecificationTable from '../../../components/ProductSpecificationTable';
import RelatedResources from '../../../components/RelatedResources';
import { CATALOG_PRODUCT_CONTENT, type CatalogProductId } from '../../../lib/catalog-product-content';
import { resolveImage } from '../../../lib/image-resolver';

type Product = {
  id: string;
  name: string;
  image: string;
  images?: string[];
};

export default function CatalogProductLanding({ product }: { product: Product }) {
  const content = CATALOG_PRODUCT_CONTENT[product.id as CatalogProductId];
  const gallery = product.images ?? [product.image];
  const whatsappHref = `https://wa.me/8617722438678?text=${encodeURIComponent(`Hello TONTON, I would like to discuss ${content.headline}.`)}`;

  return (
    <div className="rg-product-page catalog-product-page">
      <nav aria-label="Breadcrumb" className="rg-breadcrumb">
        <Link href="/">Home</Link><span>/</span>
        <Link href={content.categoryHref}>{content.categoryLabel}</Link><span>/</span>
        <span aria-current="page">{content.headline}</span>
      </nav>

      <section className="rg-product-hero catalog-product-hero">
        <div className="rg-product-hero-media">
          <img src={resolveImage(product.image)} alt={`${content.headline} product reference`} />
        </div>
        <div className="rg-product-hero-copy">
          <p className="rg-eyebrow">{content.eyebrow}</p>
          <h1>{content.headline}</h1>
          <p className="rg-lead">{content.intro}</p>
          <div className="rg-spec-strip" aria-label="Core product specifications">
            {content.specs.map(([label, value]) => <div key={label}><strong>{value}</strong><span>{label}</span></div>)}
          </div>
          <ul className="rg-hero-features">
            {content.verifiedFeatures.map((feature) => <li key={feature}>{feature}</li>)}
          </ul>
          <div className="rg-hero-actions">
            <Link className="rg-btn-primary" href={{ pathname: '/project-builder', query: { product: content.builderProduct, reference: content.headline, source: 'product-page' } }}>Build This Product Brief</Link>
            <a className="rg-btn-secondary" href={whatsappHref} target="_blank" rel="noopener noreferrer">Ask on WhatsApp</a>
          </div>
        </div>
      </section>

      <AnswerEvidencePanel question={content.buyerQuestion} answer={content.buyerAnswer} />

      <ProductSpecificationTable
        title="A buyer-ready specification, without invented claims"
        intro="Visible product evidence is separated from values that still require a fabric swatch, artwork approval or physical sample."
        rows={content.specificationRows}
      />

      <section className="gs-benefits-section" aria-labelledby="catalog-decision-title">
        <div className="rg-section-heading">
          <p className="rg-eyebrow">BUYER DECISION GUIDE</p>
          <h2 id="catalog-decision-title">Why this product direction is distinct</h2>
          <p>{content.audience}. Compare the visible construction, intended use and approval points before opening a custom brief.</p>
        </div>
        <div className="gs-benefit-grid">
          {content.decisionCards.map((item, index) => (
            <article key={item.title}><span>{String(index + 1).padStart(2, '0')}</span><h3>{item.title}</h3><p>{item.copy}</p></article>
          ))}
        </div>
      </section>

      {gallery.length > 1 && (
        <section className="rg-detail-section" aria-labelledby="catalog-gallery-title">
          <div className="rg-section-heading"><p className="rg-eyebrow">PRODUCT EVIDENCE</p><h2 id="catalog-gallery-title">Inspect the available product references</h2><p>Use these images to discuss silhouette, panel direction and branding. Final technical values are confirmed separately.</p></div>
          <div className="rg-detail-grid">
            {gallery.slice(1).map((image, index) => (
              <article key={image}><div className="rg-detail-image"><img src={resolveImage(image)} alt={`${content.headline} product detail ${index + 1}`} loading="lazy" /></div></article>
            ))}
          </div>
        </section>
      )}

      <section className="rg-custom-section">
        <div>
          <p className="rg-eyebrow">CUSTOM DEVELOPMENT</p>
          <h2>Convert the visual reference into an approved specification</h2>
          <p>AI-readable product facts help discovery, but buyer confidence comes from a brief that clearly separates what is shown from what must be confirmed.</p>
        </div>
        <ol>
          {content.customization.map((item, index) => <li key={item.title}><span>{String(index + 1).padStart(2, '0')}</span><div><h3>{item.title}</h3><p>{item.copy}</p></div></li>)}
        </ol>
      </section>

      <section className="rg-process-section">
        <div className="rg-section-heading"><p className="rg-eyebrow">OEM / ODM PROCESS</p><h2>From reference image to repeatable team order</h2></div>
        <div className="rg-process-grid">
          <article><span>01</span><h3>Share the buyer brief</h3><p>Send intended use, quantity, sizes, artwork status and target delivery window.</p></article>
          <article><span>02</span><h3>Confirm the specification</h3><p>Align fit, fabric, construction, colors, logo methods, labels and packing.</p></article>
          <article><span>03</span><h3>Approve the sample</h3><p>Review movement, measurements, opacity, seams, artwork and finishing.</p></article>
          <article><span>04</span><h3>Produce and inspect</h3><p>Bulk production follows the approved sample and documented order requirements.</p></article>
        </div>
      </section>

      <section className="rg-faq-section">
        <div className="rg-faq-heading"><p className="rg-eyebrow">BUYER FAQ</p><h2>Questions AI tools and procurement teams need answered</h2><p>Direct answers clarify product fit, evidence boundaries, customization and the next purchasing step.</p></div>
        <div className="rg-faq-list">
          {content.faqs.map((item, index) => <details key={item.question} open={index === 0}><summary><span>{String(index + 1).padStart(2, '0')}</span>{item.question}</summary><p>{item.answer}</p></details>)}
        </div>
      </section>

      <RelatedResources slugs={content.relatedGuides} />
      <ProductLandingLinks productId={product.id} />
    </div>
  );
}
