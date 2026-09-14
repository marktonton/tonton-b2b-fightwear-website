import Link from 'next/link';
import { resolveImage } from '../../../lib/image-resolver';
import { HIGH_SPLIT_GRAPPLING_SHORTS_CONTENT, HIGH_SPLIT_GRAPPLING_SHORTS_FAQS } from '../../../lib/grappling-shorts-product';

type Product = { id: string; name: string; image: string; images?: string[]; description: string; features?: string[] };

const DETAIL_CONTENT = [
  { title: 'High-split 2-in-1 construction', copy: 'The stretch outer short and fitted inner layer work together as one fight-ready garment.', alt: 'High-split two-in-one grappling shorts construction' },
  { title: 'More freedom for high kicks', copy: 'The deep side split opens through wide leg positions so the shell does not restrict kicking or scrambling.', alt: 'Athlete demonstrating high-kick mobility in high-split grappling shorts' },
  { title: 'Custom printed inner layer', copy: 'The 250gsm milk-silk liner can carry custom colors, patterns and brand artwork after sample approval.', alt: 'Custom printed inner compression layer of grappling shorts' },
  { title: 'Built for fight movement', copy: 'Four-way stretch supports stance changes, shots, guard work and rotational movement in BJJ and MMA training.', alt: 'High-split grappling shorts used in fight training' },
  { title: 'Deep side-split detail', copy: 'The high-cut outer panel provides generous thigh clearance while the inner layer maintains coverage.', alt: 'Deep side-split detail on custom grappling shorts' },
] as const;

export default function GrapplingShortsLanding({ product }: { product: Product }) {
  const content = HIGH_SPLIT_GRAPPLING_SHORTS_CONTENT;
  const gallery = product.images ?? [product.image];
  const detailImages = gallery.slice(1);
  const whatsapp = `https://wa.me/8617722438678?text=${encodeURIComponent(`I am interested in the ${product.name}.`)}`;

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
            <div><strong>High Split</strong><span>Unrestricted Leg Clearance</span></div>
            <div><strong>4-Way</strong><span>Stretch Outer Shell</span></div>
            <div><strong>250gsm</strong><span>Milk-Silk Inner Layer</span></div>
          </div>
          <ul className="rg-hero-features">
            <li>Deep side split for high kicks and wider grappling positions</li>
            <li>Reinforced lightweight four-way stretch outer shell</li>
            <li>Substantial 250gsm milk-silk compression liner</li>
            <li>Custom inner-layer patterns, logos and team artwork</li>
          </ul>
          <div className="rg-hero-actions">
            <a className="rg-btn-primary" href={whatsapp} target="_blank" rel="noopener noreferrer">Get Custom Pricing</a>
            <a className="rg-btn-secondary" href="#construction">View Construction</a>
          </div>
        </div>
      </section>

      <section className="rg-fit-section" id="construction">
        <div><p className="rg-eyebrow">Material &amp; Construction</p><h2>Two layers built for unrestricted fight movement</h2></div>
        <div className="rg-fit-copy">
          <p>The reinforced lightweight four-way stretch shell opens into a high side split, while the 250gsm milk-silk inner liner provides flexible coverage underneath. The result supports aggressive kicking and fast grappling transitions without exposing the leg.</p>
          <dl>
            <div><dt>Outer shell</dt><dd>Reinforced lightweight four-way stretch fabric</dd></div>
            <div><dt>Inner layer</dt><dd>250gsm milk-silk fabric with customizable graphics</dd></div>
            <div><dt>Cut</dt><dd>High split for leg clearance, high kicks and flexible grappling</dd></div>
          </dl>
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
          <li><span>03</span><div><h3>Waistband &amp; labels</h3><p>Review waistband branding, private labels and size identification.</p></div></li>
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

      <section className="rg-final-cta"><p className="rg-eyebrow">Start Your Project</p><h2>Develop high-split grappling shorts for your brand</h2><p>Send your artwork, quantity, size range and target use for a project-specific review.</p><a href={whatsapp} target="_blank" rel="noopener noreferrer">Request a Quote</a></section>
    </div>
  );
}
