import Link from 'next/link';
import ProductLandingLinks from '../../../components/ProductLandingLinks';
import ProductSpecificationTable from '../../../components/ProductSpecificationTable';
import RelatedResources from '../../../components/RelatedResources';
import { resolveImage } from '../../../lib/image-resolver';
import { TRAINING_SHORTS_LANDING_CONTENT, type TrainingShortsProductId } from '../../../lib/training-shorts-products';

type Product = {
  id: string;
  categoryId: string;
  name: string;
  image: string;
  images?: string[];
  description: string;
};

export default function TrainingShortsLanding({ product }: { product: Product }) {
  const productId = product.id as TrainingShortsProductId;
  const content = TRAINING_SHORTS_LANDING_CONTENT[productId];
  const gallery = product.images ?? [product.image];
  const isMmaFightShorts = product.id === 'custom-logo-shorts';
  const categoryHref = isMmaFightShorts ? '/customization/sublimated-bjj-mma-shorts' : '/customization/sublimated-training-shorts';
  const categoryLabel = isMmaFightShorts ? 'Custom BJJ & MMA Shorts' : 'Custom Training Shorts';
  const builderProduct = isMmaFightShorts ? 'BJJ / MMA Shorts' : 'Training Shorts';
  const detailImages = isMmaFightShorts ? gallery.slice(1) : gallery;

  return (
    <div className="rg-product-page training-shorts-page">
      <nav aria-label="Breadcrumb" className="rg-breadcrumb">
        <Link href="/">Home</Link><span>/</span>
        <Link href={categoryHref}>{categoryLabel}</Link><span>/</span>
        <span aria-current="page">{product.name}</span>
      </nav>

      <section className="rg-product-hero training-shorts-hero">
        <div className="rg-product-hero-media"><img src={resolveImage(product.image)} alt={`${product.name} product view`} /></div>
        <div className="rg-product-hero-copy">
          <p className="rg-eyebrow">{content.eyebrow}</p>
          <h1>{content.headline}</h1>
          <p className="rg-lead">{content.intro}</p>
          <div className="rg-spec-strip" aria-label="Core product specifications">
            {content.specs.map(([value, label]) => <div key={label}><strong>{value}</strong><span>{label}</span></div>)}
          </div>
          <ul className="rg-hero-features">
            {content.features.map((feature) => <li key={feature}>{feature}</li>)}
          </ul>
          <div className="rg-hero-actions">
            <Link className="rg-btn-primary" href={{ pathname: '/project-builder', query: { product: builderProduct, reference: product.name, source: 'product-page' } }}>Build This Product Brief</Link>
            <a className="rg-btn-secondary" href="#construction">Review Construction</a>
          </div>
        </div>
      </section>

      <ProductSpecificationTable title={isMmaFightShorts ? 'MMA fight-short construction at a glance' : 'Training-short construction at a glance'} intro="The page separates what is visible in the current sample from material values that must be confirmed during development." rows={content.materialRows} />

      <section className="gs-benefits-section" aria-labelledby="training-benefits-title">
        <div className="rg-section-heading"><p className="rg-eyebrow">Product Direction</p><h2 id="training-benefits-title">A clearer starting point for buyers and product teams</h2><p>Use the sample to align fit, function, branding and the questions that still need to be confirmed before production.</p></div>
        <div className="gs-benefit-grid">
          {content.benefits.map((item, index) => <article key={item.title}><span>{String(index + 1).padStart(2, '0')}</span><h3>{item.title}</h3><p>{item.copy}</p></article>)}
        </div>
      </section>

      <section className="rg-fit-section" id="construction">
        <div><p className="rg-eyebrow">Material &amp; Construction</p><h2>Confirm the construction before bulk production</h2></div>
        <div className="rg-fit-copy">
          <p>{content.materialLead}</p>
          <dl>{content.materialRows.map(([label, value]) => <div key={label}><dt>{label}</dt><dd>{value}</dd></div>)}</dl>
        </div>
      </section>

      {detailImages.length > 0 && (
        <section className="rg-detail-section" aria-labelledby="training-details-title">
          <div className="rg-section-heading"><p className="rg-eyebrow">Real Product Details</p><h2 id="training-details-title">{isMmaFightShorts ? 'Inspect the fabric, waist, crotch and reinforced hem' : 'Inspect the product from overview to finishing'}</h2><p>{isMmaFightShorts ? 'Each close-up is tied to a visible construction detail; unverified fiber, weight and print values remain sampling decisions.' : 'The available product boards show the garment, waistband, lining, hem construction and logo direction.'}</p></div>
          <div className={`rg-detail-grid${detailImages.length === 4 ? ' is-extended' : ''}`}>
            {detailImages.map((image, index) => {
              const detail = content.detailCards[index];
              return <article key={image}><div className="rg-detail-image" style={{ aspectRatio: '1 / 1', background: '#f3f3f1' }}><img src={resolveImage(image)} alt={detail?.alt ?? `${product.name} detail ${index + 1}`} loading="lazy" style={{ objectFit: 'cover' }} /></div><div className="rg-detail-copy"><span>{String(index + 1).padStart(2, '0')}</span><h3>{detail?.title ?? 'Construction detail'}</h3><p>{detail?.copy ?? 'Inspect this product detail before sampling.'}</p></div></article>;
            })}
          </div>
        </section>
      )}

      <section className="rg-custom-section">
        <div><p className="rg-eyebrow">Customization Options</p><h2>Build the shorts around your market and brand</h2><p>Fit, materials and visual identity should be reviewed as one connected product specification before sampling.</p></div>
        <ol>{content.customization.map((item, index) => <li key={item.title}><span>{String(index + 1).padStart(2, '0')}</span><div><h3>{item.title}</h3><p>{item.copy}</p></div></li>)}</ol>
      </section>

      <section className="rg-process-section">
        <div className="rg-section-heading"><p className="rg-eyebrow">OEM / ODM Process</p><h2>From product reference to approved {isMmaFightShorts ? 'MMA fight shorts' : 'training shorts'}</h2></div>
        <div className="rg-process-grid">
          <article><span>01</span><h3>Share the brief</h3><p>Send intended use, quantity, size range, logos and reference products.</p></article>
          <article><span>02</span><h3>Align the specification</h3><p>Confirm fit, fabric direction, waistband, lining, colors and decoration.</p></article>
          <article><span>03</span><h3>Approve the sample</h3><p>Review movement, material, construction and artwork before bulk work.</p></article>
          <article><span>04</span><h3>Produce &amp; inspect</h3><p>Bulk production follows the approved sample and confirmed requirements.</p></article>
        </div>
      </section>

      <section className="rg-faq-section">
        <div className="rg-faq-heading"><p className="rg-eyebrow">Buyer FAQ</p><h2>Questions to resolve before ordering</h2><p>Clear answers about specifications, customization, MOQ and sample approval.</p></div>
        <div className="rg-faq-list">{content.faqs.map((item, index) => <details key={item.question} open={index === 0}><summary><span>{String(index + 1).padStart(2, '0')}</span>{item.question}</summary><p>{item.answer}</p></details>)}</div>
      </section>

      <RelatedResources slugs={isMmaFightShorts ? ['high-split-grappling-shorts-specifications', 'high-split-vs-standard-grappling-shorts', 'custom-fightwear-sampling-moq'] : ['custom-fightwear-sampling-moq']} />
      <ProductLandingLinks productId={product.id} />
    </div>
  );
}
