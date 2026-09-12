import Link from 'next/link';
import { resolveImage } from '../../../lib/image-resolver';
import { RASH_GUARD_LANDING_CONTENT, type RashGuardProductId } from '../../../lib/rash-guard-products';

type Product = {
  id: string;
  categoryId: string;
  name: string;
  image: string;
  images?: string[];
  description: string;
  features?: string[];
};

const FAQ_ITEMS = [
  {
    question: 'What fabric is used for this custom Rash Guard?',
    answer: 'This Rash Guard uses 220gsm ultra-fine Lycra made from 85% polyester and 15% spandex. The fabric has a soft hand feel, high elasticity and opaque coverage.',
  },
  {
    question: 'Is the fabric see-through when stretched?',
    answer: 'The 220gsm fabric is selected for opaque coverage. Fit, stretch recovery and opacity are checked again on the approved sample before bulk production.',
  },
  {
    question: 'What does the silicone anti-slip elastic band do?',
    answer: 'The silicone anti-slip elastic band sits inside the lower hem and helps the Rash Guard stay in position during grappling, drilling and high-movement training.',
  },
  {
    question: 'Can I customize the colors and logos?',
    answer: 'Yes. Colors, logos, sponsor marks, names and panel artwork can be reviewed in the digital mockup before sampling.',
  },
  {
    question: 'Can this Rash Guard be made for a BJJ academy or MMA team?',
    answer: 'Yes. It is developed for custom academy, gym, club, team and private-label programs, including coordinated artwork and size runs.',
  },
  {
    question: 'Can I review a sample before bulk production?',
    answer: 'Yes. The sample is used to confirm fit, material, opacity, construction, artwork placement and branding before bulk production begins.',
  },
  {
    question: 'What should I send for a quotation?',
    answer: 'Send your quantity, target sizes, preferred color, logo or artwork files and any packaging or labeling requirements. We will review the brief and confirm the next step.',
  },
];

const DETAIL_CONTENT = [
  {
    title: 'Silicone anti-slip elastic band',
    copy: 'Silicone grip lines inside the lower hem help reduce ride-up during grappling and repeated movement.',
    alt: 'Silicone anti-slip elastic band inside a custom Rash Guard hem',
  },
  {
    title: 'Sublimation-ready surface & stretch seams',
    copy: 'The smooth polyester-spandex surface supports detailed sublimated artwork, while stretch construction follows the garment panels.',
    alt: 'Sublimated Rash Guard fabric and stretch seam construction detail',
  },
  {
    title: 'Verified 85% polyester / 15% spandex',
    copy: 'The composition combines a print-compatible polyester face with spandex stretch for close-fitting performance wear.',
    alt: 'Rash Guard care label showing 85 percent polyester and 15 percent spandex',
  },
];

export default function RashGuardLanding({ product }: { product: Product }) {
  const content = RASH_GUARD_LANDING_CONTENT[product.id as RashGuardProductId];
  const gallery = product.images ?? [product.image];
  const detailImages = gallery.slice(1, 4);

  return (
    <div className="rg-product-page">
      <nav aria-label="Breadcrumb" className="rg-breadcrumb">
        <Link href="/">Home</Link><span>/</span>
        <Link href="/customization/sublimated-rash-guards">Custom Rash Guards</Link><span>/</span>
        <span aria-current="page">{product.name}</span>
      </nav>

      <section className="rg-product-hero">
        <div className="rg-product-hero-media">
          <img src={resolveImage(product.image)} alt={`${product.name} on a pure white background`} />
        </div>
        <div className="rg-product-hero-copy">
          <p className="rg-eyebrow">{content.eyebrow}</p>
          <h1>{content.headline}</h1>
          <p className="rg-lead">{content.intro}</p>
          <div className="rg-spec-strip" aria-label="Core product specifications">
            <div><strong>220gsm</strong><span>Ultra-Fine Lycra</span></div>
            <div><strong>85 / 15</strong><span>Polyester / Spandex</span></div>
            <div><strong>Opaque</strong><span>High-Stretch Coverage</span></div>
          </div>
          <ul className="rg-hero-features">
            <li>Soft hand feel with excellent elasticity</li>
            <li>Silicone anti-slip elastic band at the lower hem</li>
            <li>Full-sublimation artwork and custom logo support</li>
            <li>OEM / ODM development for brands, gyms and teams</li>
          </ul>
          <div className="rg-hero-actions">
            <a className="rg-btn-primary" href={`https://wa.me/8617722438678?text=${encodeURIComponent(`I am interested in the ${product.name}.`)}`} target="_blank" rel="noopener noreferrer">Get Custom Pricing</a>
            <a className="rg-btn-secondary" href="#product-details">View Product Details</a>
          </div>
        </div>
      </section>

      <section className="rg-fit-section" id="product-details">
        <div>
          <p className="rg-eyebrow">Material & Performance</p>
          <h2>Built for close-fit movement without transparent stretch</h2>
        </div>
        <div className="rg-fit-copy">
          <p>The 220gsm ultra-fine Lycra uses an 85% polyester and 15% spandex composition. It combines a smooth, soft touch with high elasticity and opaque coverage for BJJ, MMA and grappling use.</p>
          <dl>
            <div><dt>Recommended for</dt><dd>{content.audience}</dd></div>
            <div><dt>Customization direction</dt><dd>{content.designDirection}</dd></div>
            <div><dt>Performance checks</dt><dd>Fit, stretch recovery, opacity, seam quality and artwork position</dd></div>
          </dl>
        </div>
      </section>

      <section className="rg-detail-section" aria-labelledby="rg-details-title">
        <div className="rg-section-heading">
          <p className="rg-eyebrow">Real Product Details</p>
          <h2 id="rg-details-title">Fabric and construction you can inspect</h2>
          <p>These close-up photos show the actual material composition, interior grip and stretch-garment construction.</p>
        </div>
        <div className="rg-detail-grid">
          {detailImages.map((image, index) => (
            <article key={image}>
              <div className="rg-detail-image"><img src={resolveImage(image)} alt={DETAIL_CONTENT[index].alt} loading="lazy" /></div>
              <div className="rg-detail-copy"><span>0{index + 1}</span><h3>{DETAIL_CONTENT[index].title}</h3><p>{DETAIL_CONTENT[index].copy}</p></div>
            </article>
          ))}
        </div>
      </section>

      <section className="rg-custom-section">
        <div>
          <p className="rg-eyebrow">Customization Options</p>
          <h2>Develop the Rash Guard around your brand</h2>
          <p>We align the visual design and garment specification before sampling so the approved product can move into a repeatable production route.</p>
        </div>
        <ol>
          <li><span>01</span><div><h3>Colors & all-over artwork</h3><p>Build the panel graphics around your brand colors, patterns and collection direction.</p></div></li>
          <li><span>02</span><div><h3>Logo placement</h3><p>Define academy marks, sponsor logos, athlete names and chest, sleeve or back positions.</p></div></li>
          <li><span>03</span><div><h3>Fit & size range</h3><p>Confirm intended users, fit direction and required size assortment during development.</p></div></li>
          <li><span>04</span><div><h3>Labels & packaging</h3><p>Add approved private labels and coordinate the packaging requirement for your order.</p></div></li>
        </ol>
      </section>

      <section className="rg-process-section">
        <div className="rg-section-heading">
          <p className="rg-eyebrow">OEM / ODM Process</p>
          <h2>From your artwork to an approved Rash Guard</h2>
        </div>
        <div className="rg-process-grid">
          <article><span>01</span><h3>Share the brief</h3><p>Send quantity, colors, sizes, artwork and target use.</p></article>
          <article><span>02</span><h3>Review the mockup</h3><p>Confirm graphics, logo positions and garment direction.</p></article>
          <article><span>03</span><h3>Approve the sample</h3><p>Review fit, opacity, material, construction and branding.</p></article>
          <article><span>04</span><h3>Produce & inspect</h3><p>Bulk production follows the approved sample and specifications.</p></article>
        </div>
      </section>

      <section className="rg-faq-section">
        <div className="rg-faq-heading"><p className="rg-eyebrow">Buyer FAQ</p><h2>Custom Rash Guard questions</h2><p>Direct answers for brands, academies, gyms and teams preparing a custom order.</p></div>
        <div className="rg-faq-list">
          {FAQ_ITEMS.map((item, index) => (
            <details key={item.question} open={index === 0}>
              <summary><span>0{index + 1}</span>{item.question}</summary>
              <p>{item.answer}</p>
            </details>
          ))}
        </div>
      </section>

      <section className="rg-final-cta">
        <p className="rg-eyebrow">Start Your Project</p>
        <h2>Ready to develop your custom Rash Guard?</h2>
        <p>Send your logo, quantity, size range and preferred color direction for a project-specific review.</p>
        <a href={`https://wa.me/8617722438678?text=${encodeURIComponent(`Please quote the ${product.name}.`)}`} target="_blank" rel="noopener noreferrer">Request a Quote</a>
      </section>
    </div>
  );
}
