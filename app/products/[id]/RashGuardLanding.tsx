import Link from 'next/link';
import { resolveImage } from '../../../lib/image-resolver';
import { RASH_GUARD_LANDING_CONTENT, type RashGuardProductId } from '../../../lib/rash-guard-products';
import ProductSpecificationTable from '../../../components/ProductSpecificationTable';
import RelatedResources from '../../../components/RelatedResources';
import ProductLandingLinks from '../../../components/ProductLandingLinks';
import CustomerProjectProof from '../../../components/CustomerProjectProof';
import AnswerEvidencePanel from '../../../components/AnswerEvidencePanel';

type Product = {
  id: string;
  categoryId: string;
  name: string;
  image: string;
  images?: string[];
  description: string;
  features?: string[];
};

const STANDARD_FAQ_ITEMS = [
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

const SAMURAI_FAQ_ITEMS = [
  { question: 'What fabric is used for the Samurai Rash Guard?', answer: 'It uses 220gsm ultra-fine Lycra with a soft hand feel, excellent elasticity and fully opaque coverage.' },
  { question: 'Is the 220gsm fabric see-through when stretched?', answer: 'No. The fabric is selected for fully opaque coverage, and opacity, stretch recovery and fit are checked again on the approved sample before bulk production.' },
  { question: 'Is this Rash Guard designed for BJJ and MMA?', answer: 'Yes. The close fit, long raglan sleeves and high-stretch fabric are suited to BJJ, MMA, grappling and other high-movement training.' },
  { question: 'Can I customize the sleeve graphics and logos?', answer: 'Yes. Sleeve artwork, chest branding, back-neck logos, colors and panel graphics can be reviewed in a digital mockup before sampling.' },
  { question: 'Can the artwork be produced without a heavy print layer?', answer: 'Yes. Sublimation integrates compatible artwork into the fabric surface, supporting detailed graphics without a thick raised print layer.' },
  { question: 'Can I review a sample before bulk production?', answer: 'Yes. The sample is used to review fit, opacity, stretch, construction, color and artwork placement before bulk production begins.' },
  { question: 'What should I send for a custom quote?', answer: 'Send the required quantity, size range, logo or artwork files, preferred colors and any labeling or packaging requirements.' },
];

const STANDARD_DETAIL_CONTENT = [
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

const SAMURAI_DETAIL_CONTENT = [
  { title: 'Sculpted side-panel fit', copy: 'The close-fit body and side panel follow the torso while the fabric retains a smooth, supportive profile.', alt: 'Side panel and close-fit construction of a black and gold Samurai Rash Guard' },
  { title: 'Coordinated waist construction', copy: 'The matching black-and-gold set shows a secure elastic waist and a consistent collection-level graphic direction.', alt: 'Elastic waist construction on a coordinated black and gold grappling set' },
  { title: 'Overhead mobility', copy: 'Long raglan sleeves and high elasticity support reaching, framing and rotational movement during training.', alt: 'Athlete demonstrating overhead mobility in a long-sleeve Samurai Rash Guard' },
  { title: 'All-over sleeve artwork', copy: 'Detailed gold graphics run across the printable sleeve panels without adding a heavy surface layer.', alt: 'Gold sublimated artwork detail on a black Rash Guard sleeve' },
  { title: 'Bound neckline & chest logo', copy: 'A clean round neckline and centered chest mark create a controlled, production-ready branding layout.', alt: 'Round neckline and TONTON chest logo on a Samurai Rash Guard' },
  { title: 'Rear panel alignment', copy: 'The solid back body and printed sleeves show how panel direction can balance brand impact and visual clarity.', alt: 'Back view of a black and gold long-sleeve Samurai Rash Guard' },
  { title: 'Shoulder fit under movement', copy: 'The raglan seam direction follows the shoulder to help the garment move naturally with the athlete.', alt: 'Shoulder and sleeve fit on a black and gold BJJ Rash Guard' },
  { title: 'Back-neck branding', copy: 'A focused back-neck logo provides a clear secondary brand position without crowding the main artwork.', alt: 'Back-neck logo detail on a custom long-sleeve Rash Guard' },
];

const CONSTRUCTION_EVIDENCE = [
  { image: '/assets/products/rash-guard-products/construction-details/stretch-fabric-seam.webp', title: 'Stretch fabric & seam control', copy: 'The real sample shows the smooth stretch surface and parallel stitch rows that stabilize the joined panels.', alt: 'Close-up of stretch Rash Guard fabric and parallel seam construction' },
  { image: '/assets/products/rash-guard-products/construction-details/breathable-mesh-panel.webp', title: 'Breathable panel transition', copy: 'A perforated mesh inset is joined cleanly to the surrounding fabric for targeted airflow and a controlled panel edge.', alt: 'Close-up of breathable mesh panel joined to Rash Guard fabric' },
  { image: '/assets/products/rash-guard-products/construction-details/reinforced-seam-junction.webp', title: 'Reinforced panel junction', copy: 'Multiple seam lines meet at a high-movement junction, making alignment and finishing visible before sample approval.', alt: 'Close-up of reinforced Rash Guard seam intersection' },
] as const;

const BLUE_TEAM_PRODUCT_VIEWS = [
  {
    image: '/assets/products/rash-guard-products/blue-team-gallery/front-fit.webp',
    label: '01 / Front',
    title: 'Front fit & chest branding',
    copy: 'Review the close athletic fit, round neckline and centered chest logo position.',
    alt: 'Front view of the blue short-sleeve Elite Team Rash Guard worn by an athlete',
  },
  {
    image: '/assets/products/rash-guard-products/blue-team-gallery/front-reference.webp',
    label: '02 / Fit reference',
    title: 'Production fit reference',
    copy: 'A second front angle makes the sleeve length, torso proportion and hem position easier to compare.',
    alt: 'Full front fit reference for the blue Elite Team Rash Guard',
  },
  {
    image: '/assets/products/rash-guard-products/blue-team-gallery/three-quarter-fit.webp',
    label: '03 / Angle',
    title: 'Shoulder & side-panel direction',
    copy: 'The angled view shows how the raglan sleeve and side construction follow the upper body.',
    alt: 'Three-quarter view showing the shoulder and side construction of the blue Elite Team Rash Guard',
  },
  {
    image: '/assets/products/rash-guard-products/blue-team-gallery/back-panel.webp',
    label: '04 / Back',
    title: 'Rear panel & back-neck mark',
    copy: 'Confirm the clean rear body, shoulder logo balance and secondary branding position.',
    alt: 'Back view of the blue Elite Team Rash Guard showing rear panel and neck branding',
  },
] as const;

const CUSTOMER_RASH_GUARD_PROOF = [{
  image: 'assets/products/customer-production-proof/customer-kuzushi-rash-guard-event-wear.webp',
  label: 'EVENT WEAR REFERENCE',
  title: 'Private-label short-sleeve Rash Guard in use',
  description: 'A customer-supplied event photograph shows a related short-sleeve team Rash Guard worn in a live combat-sport environment.',
  alt: 'Customer athlete wearing a black Kuzushi short-sleeve private-label Rash Guard at a combat sports event',
  signals: ['Close athletic torso fit', 'Short raglan-style sleeve direction', 'High-contrast chest branding'],
}] as const;

const CUSTOMER_RASH_GUARD_CASES: Record<RashGuardProductId, {
  eyebrow: string;
  title: string;
  intro: string;
  note: string;
  items: Array<{
    image: string;
    label: string;
    title: string;
    copy: string;
    alt: string;
    evidence: string[];
  }>;
}> = {
  'blue-team-rash-guard': {
    eyebrow: 'Customer-Supplied Production Reference',
    title: 'A finished short-sleeve team Rash Guard, front and back',
    intro: 'These original customer-supplied photographs document a completed short-sleeve project with coordinated front, sleeve and rear artwork. They help buyers evaluate layout possibilities before preparing an academy or team brief.',
    note: 'This is a related custom production reference. Colors, graphics, fabric specifications and construction are confirmed separately for each order.',
    items: [
      {
        image: '/assets/products/customer-production-proof/rash-guard-cases/satori-short-sleeve-front.webp',
        label: 'Delivered Project / Front',
        title: 'Honeycomb artwork with controlled chest branding',
        copy: 'The front view shows how a dark all-over pattern, contrast side panels and a centered wordmark can be organized within a short-sleeve team design.',
        alt: 'Customer-supplied front photograph of a finished Satori short-sleeve custom Rash Guard with honeycomb sublimation artwork',
        evidence: ['Short raglan-style sleeve direction', 'All-over torso and sleeve artwork', 'Contrast side panels and seam lines'],
      },
      {
        image: '/assets/products/customer-production-proof/rash-guard-cases/satori-short-sleeve-back.webp',
        label: 'Delivered Project / Back',
        title: 'Continuous rear artwork and secondary logo position',
        copy: 'The rear view makes the back-panel graphic continuity, sleeve treatment and lower-back branding position visible for production review.',
        alt: 'Customer-supplied back photograph of a finished Satori short-sleeve custom Rash Guard with honeycomb sublimation artwork',
        evidence: ['Full rear-panel print direction', 'Sleeve-to-body color coordination', 'Lower-back secondary brand placement'],
      },
    ],
  },
  'white-logo-rash-guard': {
    eyebrow: 'Customer-Supplied Production Reference',
    title: 'A clean short-sleeve private-label colorway',
    intro: 'This original customer-supplied photograph shows how a simple high-contrast identity can be applied to a short-sleeve Rash Guard without overcrowding the garment.',
    note: 'This pink project is shown as a branding and color-layout reference; it is not the exact white-base product specification shown above.',
    items: [
      {
        image: '/assets/products/customer-production-proof/rash-guard-cases/kuzushi-pink-short-sleeve-front.webp',
        label: 'Delivered Project / Front',
        title: 'Single-color base with high-contrast club branding',
        copy: 'A bright base color, large centered chest mark and printed inside-neck information create a direct private-label presentation for clubs and team programs.',
        alt: 'Customer-supplied photograph of a finished pink Kuzushi short-sleeve custom Rash Guard with white chest branding',
        evidence: ['Short-sleeve close-fit silhouette', 'High-contrast centered chest logo', 'Printed inside-neck brand information'],
      },
    ],
  },
  'samurai-graphic-rash-guard': {
    eyebrow: 'Customer-Supplied Production References',
    title: 'Two completed long-sleeve Rash Guard directions',
    intro: 'These original front-and-back photographs show two different long-sleeve projects: a restrained color-block layout and a full-body contour graphic. Together they demonstrate how panel artwork and brand positions can change while the performance silhouette remains consistent.',
    note: 'These are related custom production references, not universal specifications. Final material, fit, print color, seams and labels are approved through the project sample.',
    items: [
      {
        image: '/assets/products/customer-production-proof/rash-guard-cases/scarz-long-sleeve-front.webp',
        label: 'Delivered Project / Front',
        title: 'Color-block front with team identity',
        copy: 'The front uses a solid center body, contrast sleeves and direct chest branding for a clean academy or national-team visual direction.',
        alt: 'Customer-supplied front photograph of a finished white and purple Scarz long-sleeve custom Rash Guard',
        evidence: ['Long raglan-style sleeves', 'Contrast body and sleeve panels', 'Centered chest and sleeve branding'],
      },
      {
        image: '/assets/products/customer-production-proof/rash-guard-cases/scarz-long-sleeve-back.webp',
        label: 'Delivered Project / Back',
        title: 'Rear identity and sleeve mark continuity',
        copy: 'The back view documents the large rear identifier, sleeve logo positions and consistent color blocking across the garment.',
        alt: 'Customer-supplied back photograph of a finished white and purple Scarz long-sleeve custom Rash Guard with Argentina graphics',
        evidence: ['Large rear team identifier', 'Repeated sleeve brand positions', 'Front-to-back color consistency'],
      },
      {
        image: '/assets/products/customer-production-proof/rash-guard-cases/athleta-long-sleeve-front.webp',
        label: 'Delivered Project / Front',
        title: 'Contour-line all-over graphic treatment',
        copy: 'This project uses continuous contour artwork across the torso and sleeves with a contrasting upper-chest panel for a more graphic private-label direction.',
        alt: 'Customer-supplied front photograph of a finished black and white Athleta long-sleeve custom Rash Guard with contour-line graphics',
        evidence: ['All-over contour sublimation direction', 'Contrasting upper-chest panel', 'Front chest and sleeve logo placement'],
      },
      {
        image: '/assets/products/customer-production-proof/rash-guard-cases/athleta-long-sleeve-back.webp',
        label: 'Delivered Project / Back',
        title: 'Full rear pattern with controlled brand zone',
        copy: 'The rear view shows how the repeating line pattern can continue across the main body while a dedicated upper panel preserves logo clarity.',
        alt: 'Customer-supplied back photograph of a finished black and white Athleta long-sleeve custom Rash Guard with contour-line graphics',
        evidence: ['Continuous rear-body artwork', 'Defined upper-back logo zone', 'Visible panel and seam alignment'],
      },
    ],
  },
};

export default function RashGuardLanding({ product }: { product: Product }) {
  const content = RASH_GUARD_LANDING_CONTENT[product.id as RashGuardProductId];
  const gallery = product.images ?? [product.image];
  const isSamurai = product.id === 'samurai-graphic-rash-guard';
  const isBlueTeam = product.id === 'blue-team-rash-guard';
  const customerCases = CUSTOMER_RASH_GUARD_CASES[product.id as RashGuardProductId];
  const detailImages = isSamurai ? gallery.slice(1) : gallery.slice(1, 4);
  const detailContent = isSamurai ? SAMURAI_DETAIL_CONTENT : STANDARD_DETAIL_CONTENT;
  const faqItems = isSamurai ? SAMURAI_FAQ_ITEMS : STANDARD_FAQ_ITEMS;
  const materialCopy = isSamurai
    ? 'This long-sleeve Rash Guard uses 220gsm ultra-fine Lycra with a soft hand feel, excellent elasticity and fully opaque coverage. The close-fit fabric supports BJJ, MMA and grappling movement while keeping the black-and-gold artwork crisp.'
    : 'The 220gsm ultra-fine Lycra uses an 85% polyester and 15% spandex composition. It combines a smooth, soft touch with high elasticity and opaque coverage for BJJ, MMA and grappling use.';
  const specificationRows = isSamurai ? [
    ['Fabric weight', '220gsm'],
    ['Material', 'Ultra-fine Lycra'],
    ['Hand feel', 'Soft touch with excellent elasticity'],
    ['Coverage', 'Fully opaque under stretch'],
    ['Construction', 'Long-sleeve raglan performance fit'],
    ['Decoration', 'Custom sublimated panel graphics and logo placement'],
  ] as const : [
    ['Fabric weight', '220gsm'],
    ['Composition', '85% polyester / 15% spandex'],
    ['Performance', 'Soft touch, high elasticity and opaque coverage'],
    ['Hem control', 'Silicone anti-slip elastic band'],
    ['Decoration', 'Custom sublimated panel artwork'],
    ['Recommended use', 'BJJ, MMA, grappling and team training'],
  ] as const;

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
            {content.specs.map((spec) => <div key={spec.label}><strong>{spec.value}</strong><span>{spec.label}</span></div>)}
          </div>
          <ul className="rg-hero-features">
            {content.features.map((feature) => <li key={feature}>{feature}</li>)}
          </ul>
          <div className="rg-hero-actions">
            <Link className="rg-btn-primary" href={{ pathname: '/project-builder', query: { product: 'Rash Guard', reference: product.name, source: 'product-page' } }}>Build This Product Brief</Link>
            <a className="rg-btn-secondary" href="#product-details">View Product Details</a>
          </div>
        </div>
      </section>

      <AnswerEvidencePanel
        question={`What should buyers know about ${product.name}?`}
        answer={`${product.name} is a custom sublimated Rash Guard reference for buyers comparing fit, performance fabric, panel construction, seams, artwork placement and hem control. The visible specification and physical sample evidence on this page provide the starting point; final measurements, colors and project-specific construction are confirmed before bulk production.`}
      />

      <ProductSpecificationTable title="A specification buyers can compare" intro="The visible product data below matches the material and construction information used in this landing page and its structured data." rows={specificationRows} />

      {isBlueTeam && (
        <section className="rg-angle-section" aria-labelledby="rg-angle-title">
          <div className="rg-section-heading">
            <p className="rg-eyebrow">Multi-Angle Product Review</p>
            <h2 id="rg-angle-title">Inspect the production fit from every side</h2>
            <p>Four original product photographs let buyers compare the front, shoulder, side and rear construction before opening a custom brief.</p>
          </div>
          <div className="rg-angle-grid">
            {BLUE_TEAM_PRODUCT_VIEWS.map((item) => (
              <figure key={item.image}>
                <div className="rg-angle-image">
                  <img src={item.image} alt={item.alt} width="800" height="1067" loading="lazy" />
                </div>
                <figcaption>
                  <span>{item.label}</span>
                  <h3>{item.title}</h3>
                  <p>{item.copy}</p>
                </figcaption>
              </figure>
            ))}
          </div>
        </section>
      )}

      <section className="rg-fit-section" id="product-details">
        <div>
          <p className="rg-eyebrow">Material & Performance</p>
          <h2>Built for close-fit movement without transparent stretch</h2>
        </div>
        <div className="rg-fit-copy">
          <p>{materialCopy}</p>
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
          <p>{isSamurai ? 'These real product photos show the fit, panel construction, branding positions, artwork continuity and movement performance from multiple angles.' : 'These close-up photos show the actual material composition, interior grip and stretch-garment construction.'}</p>
        </div>
        <div className={`rg-detail-grid${isSamurai ? ' is-extended' : ''}`}>
          {detailImages.map((image, index) => (
            <article key={image}>
              <div className="rg-detail-image"><img src={resolveImage(image)} alt={detailContent[index].alt} loading="lazy" /></div>
              <div className="rg-detail-copy"><span>{String(index + 1).padStart(2, '0')}</span><h3>{detailContent[index].title}</h3><p>{detailContent[index].copy}</p></div>
            </article>
          ))}
        </div>
      </section>

      <section className="rg-evidence-section" aria-labelledby="rg-evidence-title">
        <div className="rg-section-heading"><p className="rg-eyebrow">Added Sample Evidence</p><h2 id="rg-evidence-title">See the seams, panel transition and fabric surface</h2><p>Three original close-up photographs document construction details that buyers can review alongside fit, opacity and artwork.</p></div>
        <div className="rg-evidence-grid">{CONSTRUCTION_EVIDENCE.map((item, index) => <figure key={item.image}><div><img src={item.image} alt={item.alt} width="1152" height="2048" loading="lazy" /></div><figcaption><span>{String(index + 1).padStart(2, '0')}</span><h3>{item.title}</h3><p>{item.copy}</p></figcaption></figure>)}</div>
      </section>

      {product.id === 'white-logo-rash-guard' && (
        <CustomerProjectProof
          title="See a related private-label Rash Guard in a real event setting"
          intro="This field image supports the private-label use case with visible fit and branding evidence. It documents a separate customer project rather than the exact white base style shown above."
          items={CUSTOMER_RASH_GUARD_PROOF}
        />
      )}

      <section className="rg-customer-case-section" aria-labelledby="rg-customer-case-title">
        <div className="rg-section-heading">
          <p className="rg-eyebrow">{customerCases.eyebrow}</p>
          <h2 id="rg-customer-case-title">{customerCases.title}</h2>
          <p>{customerCases.intro}</p>
        </div>
        <div className={`rg-customer-case-grid${customerCases.items.length === 1 ? ' is-single' : ''}`}>
          {customerCases.items.map((item) => (
            <article key={item.image}>
              <div className="rg-customer-case-image">
                <img src={item.image} alt={item.alt} width="1600" height="1200" loading="lazy" />
              </div>
              <div className="rg-customer-case-copy">
                <span>{item.label}</span>
                <h3>{item.title}</h3>
                <p>{item.copy}</p>
                <ul aria-label="Visible project evidence">
                  {item.evidence.map((evidence) => <li key={evidence}>{evidence}</li>)}
                </ul>
              </div>
            </article>
          ))}
        </div>
        <p className="rg-customer-case-note"><strong>Project context:</strong> {customerCases.note}</p>
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
          {faqItems.map((item, index) => (
            <details key={item.question} open={index === 0}>
              <summary><span>0{index + 1}</span>{item.question}</summary>
              <p>{item.answer}</p>
            </details>
          ))}
        </div>
      </section>

      <RelatedResources slugs={['rash-guard-fabric-construction', '220gsm-rash-guard-fabric-guide', 'rash-guard-silicone-anti-slip-band', 'rash-guard-sublimation-logo-placement']} />

      <ProductLandingLinks productId={product.id} />
    </div>
  );
}
