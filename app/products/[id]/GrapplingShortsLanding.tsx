import Link from 'next/link';
import { resolveImage } from '../../../lib/image-resolver';
import { HIGH_SPLIT_GRAPPLING_SHORTS_CONTENT, HIGH_SPLIT_GRAPPLING_SHORTS_FAQS } from '../../../lib/grappling-shorts-product';
import ProductSpecificationTable from '../../../components/ProductSpecificationTable';
import RelatedResources from '../../../components/RelatedResources';
import ProductLandingLinks from '../../../components/ProductLandingLinks';
import AnswerEvidencePanel from '../../../components/AnswerEvidencePanel';

type Product = { id: string; name: string; image: string; images?: string[]; description: string; features?: string[] };

const DETAIL_CONTENT = [
  { title: 'Athletic 2-in-1 construction', copy: 'A breathable four-way stretch outer short works with a soft, supportive compression liner for secure coverage.', alt: 'High-split two-in-one grappling shorts construction' },
  { title: 'Ultra-high split mobility', copy: 'The gladiator-style side opening releases the thigh for high kicks, sprawls and wide grappling positions.', alt: 'Athlete demonstrating high-kick mobility in high-split grappling shorts' },
  { title: 'Custom printed inner liner', copy: 'The 250gsm milk-silk liner can carry approved colors, patterns, logos and team artwork.', alt: 'Custom printed inner compression layer of grappling shorts' },
  { title: 'Quick-dry fight performance', copy: 'Breathable stretch fabric supports fast transitions and helps manage moisture through demanding training.', alt: 'High-split grappling shorts used in fight training' },
  { title: 'Coverage through every position', copy: 'The deep-cut shell maximizes leg clearance while the fitted inner layer maintains support and coverage.', alt: 'Deep side-split detail on custom grappling shorts' },
] as const;

const PERFORMANCE_BENEFITS = [
  { title: '2-in-1 support', copy: 'A built-in compression liner adds soft support and reliable coverage beneath the high-split outer shell.' },
  { title: 'Maximum mobility', copy: 'The ultra-high gladiator split opens freely for kicks, shots, sprawls and ground transitions.' },
  { title: 'Breathable & quick-dry', copy: 'The performance outer layer releases heat and dries quickly through high-intensity sessions.' },
  { title: 'Secure waistband', copy: 'An adjustable drawstring and anti-slip silicone grip strip help keep the shorts stable in motion.' },
  { title: 'Reinforced construction', copy: 'Reinforced stitching supports repeated pulling, rotation and contact during combat training.' },
  { title: 'Multi-sport performance', copy: 'Built for MMA, wrestling, grappling, boxing and demanding functional gym training.' },
] as const;

const SAMPLE_DETAIL_CONTENT = [
  { title: 'Waistband, liner & split system', copy: 'A complete view of the internal drawstring, silicone grip, compression liner and ultra-high split construction.', alt: 'Technical view of the waistband, compression liner and high split construction' },
  { title: 'Rear fit sample', copy: 'The finished sample shows the stable waistband, clean rear fit and the outer layer sitting over the inner liner.', alt: 'Rear view of blue and white two-in-one grappling shorts sample' },
  { title: 'Tagless waistband finish', copy: 'Printed brand and size information keeps the inside clean and avoids a loose sewn-in neck-style label.', alt: 'Tagless printed label and reinforced waistband stitching detail' },
  { title: 'Anti-slip silicone grip', copy: 'The internal silicone strip creates added grip against the inner layer to help control waistband movement.', alt: 'Close-up of the silicone anti-slip grip strip inside the waistband' },
  { title: 'Production size reference', copy: 'An XS–3XL reference chart gives buyers a clear starting point; final measurements are confirmed with the approved specification.', alt: 'XS to 3XL custom grappling shorts size chart' },
] as const;

export default function GrapplingShortsLanding({ product }: { product: Product }) {
  const content = HIGH_SPLIT_GRAPPLING_SHORTS_CONTENT;
  const gallery = product.images ?? [product.image];
  const detailImages = gallery.slice(1, 6);
  const sampleImages = gallery.slice(6);

  return (
    <div className="rg-product-page gs-product-page">
      <nav aria-label="Breadcrumb" className="rg-breadcrumb">
        <Link href="/">Home</Link><span>/</span>
        <Link href="/customization/sublimated-bjj-mma-shorts">Custom BJJ &amp; MMA Shorts</Link><span>/</span>
        <span aria-current="page">{product.name}</span>
      </nav>

      <section className="rg-product-hero gs-product-hero">
        <div className="rg-product-hero-media"><img src={resolveImage(product.image)} alt={`${product.name} front view`} /></div>
        <div className="rg-product-hero-copy">
          <p className="rg-eyebrow">{content.eyebrow}</p>
          <h1 aria-label={content.headline}>
            <span>High-Split 2-in-1</span>
            <span>Custom Grappling Shorts</span>
          </h1>
          <p className="rg-lead">{content.intro}</p>
          <div className="rg-spec-strip" aria-label="Core product specifications">
            <div><strong>Ultra-High</strong><span>Gladiator Split Mobility</span></div>
            <div><strong>4-Way</strong><span>Quick-Dry Stretch Shell</span></div>
            <div><strong>250gsm</strong><span>Supportive Milk-Silk Liner</span></div>
          </div>
          <ul className="rg-hero-features">
            <li>Built-in compression liner for support and coverage</li>
            <li>Breathable, quick-dry four-way stretch outer layer</li>
            <li>Drawstring waistband with anti-slip silicone grip</li>
            <li>Reinforced stitching and a tagless printed label</li>
            <li>Custom inner-layer patterns, logos and team artwork</li>
          </ul>
          <div className="rg-hero-actions">
            <Link className="rg-btn-primary" href={{ pathname: '/project-builder', query: { product: 'High-Split Grappling Shorts', reference: product.name, source: 'product-page' } }}>Build This Product Brief</Link>
            <a className="rg-btn-secondary" href="#construction">View Construction</a>
          </div>
        </div>
      </section>

      <AnswerEvidencePanel
        question="What defines these high-split 2-in-1 grappling shorts?"
        answer="The confirmed construction combines a four-way-stretch outer layer, a supportive 250gsm milk-silk compression liner, an ultra-high gladiator split, reinforced stitching and an adjustable waistband with silicone grip. Final fit, graphics, sizing and movement performance are checked on the approved sample."
      />

      <ProductSpecificationTable title="Fight-short construction at a glance" intro="These verified specifications match the real sample imagery and the structured product data on this page." rows={[
        ['Silhouette', 'Athletic 2-in-1 construction'],
        ['Outer layer', 'Breathable, quick-dry four-way stretch fabric'],
        ['Inner liner', 'Soft, supportive 250gsm milk-silk compression layer'],
        ['Side cut', 'Ultra-high gladiator split'],
        ['Waistband', 'Adjustable drawstring with anti-slip silicone grip strip'],
        ['Finishing', 'Reinforced stitching and tagless printed label'],
      ]} />

      <section className="gs-benefits-section" aria-labelledby="gs-benefits-title">
        <div className="rg-section-heading"><p className="rg-eyebrow">Combat Performance</p><h2 id="gs-benefits-title">Engineered for movement, support and hard training</h2><p>Every element is designed to keep the athlete mobile, covered and comfortable through striking, grappling and functional training.</p></div>
        <div className="gs-benefit-grid">
          {PERFORMANCE_BENEFITS.map((item, index) => <article key={item.title}><span>{String(index + 1).padStart(2, '0')}</span><h3>{item.title}</h3><p>{item.copy}</p></article>)}
        </div>
      </section>

      <section className="rg-fit-section" id="construction">
        <div><p className="rg-eyebrow">Material &amp; Construction</p><h2>Fight-ready details from waistband to liner</h2></div>
        <div className="rg-fit-copy">
          <p>The athletic 2-in-1 construction combines a breathable quick-dry shell with a soft 250gsm milk-silk compression liner. Secure waist control and reinforced finishing support high-intensity combat movement.</p>
          <dl>
            <div><dt>Silhouette</dt><dd>Athletic 2-in-1 construction with a high-split outer short and fitted inner liner</dd></div>
            <div><dt>Outer layer</dt><dd>Breathable, quick-dry four-way stretch performance fabric</dd></div>
            <div><dt>Inner liner</dt><dd>Soft, supportive 250gsm milk-silk with customizable graphics</dd></div>
            <div><dt>Waistband</dt><dd>Adjustable drawstring with anti-slip silicone grip strip</dd></div>
            <div><dt>Side construction</dt><dd>Ultra-high gladiator split for unrestricted leg movement</dd></div>
            <div><dt>Finishing</dt><dd>Reinforced stitching with a comfortable tagless printed label</dd></div>
          </dl>
        </div>
      </section>

      <section className="gs-sample-section" aria-labelledby="gs-sample-title">
        <div className="rg-section-heading"><p className="rg-eyebrow">Sample-Verified Details</p><h2 id="gs-sample-title">Construction you can inspect before bulk production</h2><p>Real sample and specification images make the waistband, fit, anti-slip system and size direction clear before approval.</p></div>
        <div className="gs-sample-grid">
          {sampleImages.map((image, index) => {
            const item = SAMPLE_DETAIL_CONTENT[index];
            return <figure key={image}><div className="gs-sample-image"><img src={resolveImage(image)} alt={item.alt} loading="lazy" /></div><figcaption><span>{String(index + 1).padStart(2, '0')}</span><h3>{item.title}</h3><p>{item.copy}</p></figcaption></figure>;
          })}
        </div>
      </section>

      <section className="rg-detail-section" aria-labelledby="gs-details-title">
        <div className="rg-section-heading"><p className="rg-eyebrow">Real Product Details</p><h2 id="gs-details-title">See the cut, layers and movement in detail</h2><p>These product and training images show the high split, fitted inner layer, custom-print direction and mobility of the finished shorts.</p></div>
        <div className="rg-detail-grid gs-detail-grid">
          {detailImages.map((image, index) => {
            const item = DETAIL_CONTENT[index];
            return <article key={image}><div className="rg-detail-image"><img src={resolveImage(image)} alt={item.alt} loading="lazy" /></div><div className="rg-detail-copy"><span>{String(index + 1).padStart(2, '0')}</span><h3>{item.title}</h3><p>{item.copy}</p></div></article>;
          })}
        </div>
      </section>

      <section className="rg-custom-section">
        <div><p className="rg-eyebrow">Customization Options</p><h2>Build the shorts around your fightwear brand</h2><p>As a custom grappling shorts manufacturer, TONTON develops the visual direction and garment specification together before sampling.</p></div>
        <ol>
          <li><span>01</span><div><h3>Inner-layer artwork</h3><p>Create custom printed patterns, colors and graphics on the fitted liner.</p></div></li>
          <li><span>02</span><div><h3>Outer-shell branding</h3><p>Place team logos, sponsor marks and brand graphics on the stretch shell.</p></div></li>
          <li><span>03</span><div><h3>Waistband &amp; labels</h3><p>Review drawstring, silicone grip strip, waistband branding and tagless printed label details.</p></div></li>
          <li><span>04</span><div><h3>Fit &amp; split direction</h3><p>Confirm size range, fit and split height on the approved sample.</p></div></li>
        </ol>
      </section>

      <section className="rg-process-section">
        <div className="rg-section-heading"><p className="rg-eyebrow">OEM / ODM Process</p><h2>From product brief to approved grappling shorts</h2></div>
        <div className="rg-process-grid">
          <article><span>01</span><h3>Share the brief</h3><p>Send quantity, size range, colors, artwork and intended use.</p></article>
          <article><span>02</span><h3>Review the mockup</h3><p>Confirm outer branding and the custom inner-layer pattern.</p></article>
          <article><span>03</span><h3>Approve the sample</h3><p>Check fit, split height, materials, movement and artwork.</p></article>
          <article><span>04</span><h3>Produce &amp; inspect</h3><p>Bulk production follows the approved sample and specifications.</p></article>
        </div>
      </section>

      <section className="rg-faq-section">
        <div className="rg-faq-heading"><p className="rg-eyebrow">Buyer FAQ</p><h2>Custom grappling shorts questions</h2><p>Clear answers for BJJ brands, MMA gyms, fight teams and private-label buyers.</p></div>
        <div className="rg-faq-list">{HIGH_SPLIT_GRAPPLING_SHORTS_FAQS.map((item, index) => <details key={item.question} open={index === 0}><summary><span>{String(index + 1).padStart(2, '0')}</span>{item.question}</summary><p>{item.answer}</p></details>)}</div>
      </section>

      <RelatedResources slugs={['high-split-grappling-shorts-specifications', 'high-split-vs-standard-grappling-shorts', '2-in-1-grappling-shorts-liner-construction', 'grappling-shorts-waistband-silicone-grip']} />

      <ProductLandingLinks productId={product.id} />
    </div>
  );
}
