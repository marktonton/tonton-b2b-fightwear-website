import Link from 'next/link';
import ProductLandingLinks from '../../../components/ProductLandingLinks';
import ProductSpecificationTable from '../../../components/ProductSpecificationTable';
import RelatedResources from '../../../components/RelatedResources';
import { resolveImage } from '../../../lib/image-resolver';
import { TRAINING_SHORTS_LANDING_CONTENT, type TrainingShortsProductId } from '../../../lib/training-shorts-products';

type Product = {
  id: string;
  name: string;
  image: string;
  images?: string[];
  description: string;
};

export default function TrainingShortsLanding({ product }: { product: Product }) {
  const productId = product.id as TrainingShortsProductId;
  const content = TRAINING_SHORTS_LANDING_CONTENT[productId];
  const gallery = product.images ?? [product.image];
  const isLightweight = product.id === 'lightweight-quick-dry-training-shorts';

  return (
    <div className="rg-product-page training-shorts-page">
      <nav aria-label="Breadcrumb" className="rg-breadcrumb">
        <Link href="/">Home</Link><span>/</span>
        <Link href="/customization/sublimated-training-shorts">Custom Training Shorts</Link><span>/</span>
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
            <Link className="rg-btn-primary" href={{ pathname: '/project-builder', query: { product: 'Training Shorts', reference: product.name, source: 'product-page' } }}>Build This Product Brief</Link>
            <a className="rg-btn-secondary" href="#construction">Review Construction</a>
          </div>
        </div>
      </section>

      <ProductSpecificationTable title="Training-short construction at a glance" intro="The page separates what is visible in the current sample from material values that must be confirmed during development." rows={content.materialRows} />

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

      {gallery.length > 1 && (
        <section className="rg-detail-section" aria-labelledby="training-details-title">
          <div className="rg-section-heading"><p className="rg-eyebrow">Real Product Details</p><h2 id="training-details-title">Inspect the product from overview to finishing</h2><p>The available product boards show the garment, waistband, lining, hem construction and logo direction.</p></div>
          <div className="rg-detail-grid">
            {gallery.map((image, index) => <article key={image}><div className="rg-detail-image" style={{ aspectRatio: '1 / 1', background: '#f3f3f1' }}><img src={resolveImage(image)} alt={`${product.name} ${index === 0 ? 'overview' : `detail ${index + 1}`}`} loading={index === 0 ? undefined : 'lazy'} style={{ objectFit: 'contain' }} /></div><div className="rg-detail-copy"><span>{String(index + 1).padStart(2, '0')}</span><h3>{index === 0 ? 'Complete product direction' : index === 1 ? 'Performance features' : 'Construction details'}</h3><p>{index === 0 ? 'Review the complete silhouette and the main development baseline.' : index === 1 ? 'Compare the logo, lining, waistband and curved-hem performance direction.' : 'Inspect the waist, fabric, lining and finishing details before sampling.'}</p></div></article>)}
          </div>
        </section>
      )}

      {!isLightweight && (
        <section className="rg-fit-section" aria-label="Competition shorts product evidence">
          <div><p className="rg-eyebrow">Real Sample</p><h2>One verified product image. No invented material claims.</h2><p>The current image clearly confirms the athletic silhouette, elastic waist, front-waist branding and leg logo placement. Exact composition, GSM and stretch are kept as project decisions until a sample is approved.</p></div>
          <div className="rg-fit-copy"><img src={resolveImage(product.image)} alt="Front detail of black custom competition shorts with waistband and leg branding" loading="lazy" style={{ display: 'block', width: '100%', maxHeight: '720px', objectFit: 'contain', borderRadius: '22px', background: '#fff' }} /></div>
        </section>
      )}

      <section className="rg-custom-section">
        <div><p className="rg-eyebrow">Customization Options</p><h2>Build the shorts around your market and brand</h2><p>Fit, materials and visual identity should be reviewed as one connected product specification before sampling.</p></div>
        <ol>{content.customization.map((item, index) => <li key={item.title}><span>{String(index + 1).padStart(2, '0')}</span><div><h3>{item.title}</h3><p>{item.copy}</p></div></li>)}</ol>
      </section>

      <section className="rg-process-section">
        <div className="rg-section-heading"><p className="rg-eyebrow">OEM / ODM Process</p><h2>From product reference to approved training shorts</h2></div>
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

      <RelatedResources slugs={['custom-fightwear-sampling-moq']} />
      <ProductLandingLinks productId={product.id} />
    </div>
  );
}
