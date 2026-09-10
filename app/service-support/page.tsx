import Image from 'next/image';
import type { Metadata } from 'next';
import { resolveImage } from '../../lib/image-resolver';

const SITE_URL = 'https://www.tontongear.com';

export const metadata: Metadata = {
  title: 'Service & Support | Custom Fightwear Development',
  description: 'Explore TONTON custom fightwear services—from product planning, artwork and sampling to production, quality control, packing, and delivery support.',
  alternates: { canonical: `${SITE_URL}/service-support` },
  openGraph: {
    title: 'Service & Support | TONTON Sportswear',
    description: 'A clear, supported route from your first product brief to finished custom fightwear.',
    url: `${SITE_URL}/service-support`,
    type: 'website',
    images: [{
      url: resolveImage('/assets/factory/transfer-laser/transfer-workshop-01.JPG'),
      alt: 'TONTON custom sportswear production support',
    }],
  },
};

const services = [
  ['01', 'Product planning', 'Clarify the garment, intended use, quantity, fit, budget, and delivery priorities.'],
  ['02', 'Artwork support', 'Turn logos, colors, references, and brand guidelines into a production-ready visual direction.'],
  ['03', 'Material guidance', 'Match fabric weight, stretch, breathability, hand feel, and durability to the product.'],
  ['04', 'Sample development', 'Confirm construction, sizing, print placement, and finish before bulk production begins.'],
];

const steps = [
  {
    number: '01',
    eyebrow: 'Define the brief',
    title: 'Choose your product and project direction',
    text: 'Tell us what you are making, who will wear it, the expected quantities, target market, and required delivery window. Our team turns the initial request into a clear development brief.',
    image: '/assets/products/rashguard-blue-main.png',
    alt: 'Custom blue performance rash guard product direction',
  },
  {
    number: '02',
    eyebrow: 'Develop the design',
    title: 'Build artwork around your brand',
    text: 'Share vector logos, brand colors, sketches, or reference images. We support layout development and provide a digital mockup so placement, scale, and color direction can be reviewed before sampling.',
    image: '/assets/factory/transfer-laser/transfer-workshop-01.JPG',
    alt: 'TONTON print and transfer workshop preparing custom artwork',
  },
  {
    number: '03',
    eyebrow: 'Confirm material and fit',
    title: 'Select fabric, construction, and sizing',
    text: 'We help compare fabric performance, stretch, weight, panel construction, and size requirements for rash guards, fight shorts, training wear, and team apparel.',
    image: '/assets/factory/sewing/sewing-detail-01.JPG',
    alt: 'Detailed sportswear sewing and construction',
  },
  {
    number: '04',
    eyebrow: 'Review the sample',
    title: 'Approve the product before bulk production',
    text: 'A physical sample allows your team to check fit, workmanship, colors, branding, and functional details. Feedback is recorded before the approved specification moves into production.',
    image: '/assets/factory/quality-control/quality-check-01.JPG',
    alt: 'TONTON specialist reviewing a custom garment sample',
  },
  {
    number: '05',
    eyebrow: 'Produce and control',
    title: 'Follow a connected manufacturing route',
    text: 'Cutting, decoration, sewing, finishing, and inspection follow the approved project details. Production coordination keeps customization requirements visible at each control point.',
    image: '/assets/factory/hanging/hanging-line-03.JPG',
    alt: 'TONTON connected sportswear production line',
  },
  {
    number: '06',
    eyebrow: 'Finish and deliver',
    title: 'Inspect, pack, and prepare for shipment',
    text: 'Finished garments are checked against the order requirements, organized for packing, and prepared for the agreed shipping route with clear order communication.',
    image: '/assets/factory/packing/packing-02.JPG',
    alt: 'TONTON team packing finished custom sportswear',
  },
];

const techniques = [
  ['Full sublimation', 'Vibrant, all-over graphics integrated into performance fabric.'],
  ['Embroidery', 'A dimensional, professional finish for logos and identity details.'],
  ['Heat transfer', 'Precise application for names, numbers, and selected branding.'],
  ['Laser cutting', 'Accurate cutting for repeatable panels and construction details.'],
  ['Performance sewing', 'Construction planned around stretch, movement, and durability.'],
];

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Custom Fightwear Development and Production Support',
  provider: { '@type': 'Organization', name: 'TONTON Sportswear' },
  url: `${SITE_URL}/service-support`,
  description: 'OEM and ODM custom fightwear support from product planning and sampling through production, quality control, packing, and delivery preparation.',
  areaServed: 'Worldwide',
};

function ArrowIcon() {
  return <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6" /></svg>;
}

export default function ServiceSupportPage() {
  return (
    <div className="service-page">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />

      <section className="service-hero">
        <Image
          className="service-hero-image"
          src={resolveImage('/assets/factory/transfer-laser/transfer-workshop-01.JPG')}
          alt="TONTON custom fightwear service and production workshop"
          fill
          priority
          sizes="100vw"
        />
        <div className="service-hero-shade" />
        <div className="service-shell service-hero-content">
          <p className="service-kicker service-kicker-light">FROM BRIEF TO DELIVERY</p>
          <h1>Service<br />&amp; Support</h1>
          <p className="service-hero-lead">A clear, supported development route for custom fightwear—built around your product, brand, and order requirements.</p>
          <div className="service-hero-actions">
            <a className="service-button service-button-red" href="#service-process">Explore the process <ArrowIcon /></a>
            <a className="service-text-link" href="/#inquiry">Start your project <ArrowIcon /></a>
          </div>
        </div>
        <div className="service-hero-facts">
          <div><strong>10 PCS MOQ</strong><span>Small-batch friendly</span></div>
          <div><strong>FREE MOCKUP</strong><span>Review your direction</span></div>
          <div><strong>3–7 DAYS</strong><span>Sample target</span></div>
        </div>
      </section>

      <section className="service-intro service-shell">
        <div className="service-intro-heading">
          <p className="service-kicker">DEVELOPMENT PARTNER</p>
          <h2>More clarity.<br />Fewer production surprises.</h2>
        </div>
        <div className="service-intro-copy">
          <p className="service-intro-lead">Good custom manufacturing starts before the first garment is sewn. TONTON helps buyers define the product, prepare artwork, select materials, review a sample, and keep the approved details connected to production.</p>
          <p>Whether you are launching a brand, building a gym uniform, or organizing a repeat team order, our service is designed to make decisions visible and communication practical.</p>
        </div>
        <div className="service-card-grid">
          {services.map(([number, title, text]) => (
            <article key={number}>
              <span>{number}</span>
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="service-process" id="service-process">
        <div className="service-shell">
          <div className="service-section-heading">
            <div>
              <p className="service-kicker">SIX-STEP CUSTOM ROUTE</p>
              <h2>One process.<br />Six clear decisions.</h2>
            </div>
            <p>Every stage has a practical purpose: define what is needed, confirm it visually and physically, then manufacture against an approved direction.</p>
          </div>

          <div className="service-step-list">
            {steps.map((step) => (
              <article className="service-step" key={step.number}>
                <div className="service-step-copy">
                  <span className="service-step-number">STEP {step.number}</span>
                  <p className="service-kicker">{step.eyebrow}</p>
                  <h3>{step.title}</h3>
                  <p>{step.text}</p>
                </div>
                <figure>
                  <Image src={resolveImage(step.image)} alt={step.alt} fill sizes="(max-width: 800px) 100vw, 52vw" />
                </figure>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="service-techniques">
        <div className="service-shell service-techniques-layout">
          <div className="service-techniques-media">
            <figure className="service-techniques-main">
              <Image src={resolveImage('/assets/factory/embroidery/embroidery-detail-01.jpg')} alt="TONTON multi-head embroidery production detail" fill sizes="(max-width: 900px) 100vw, 48vw" />
            </figure>
            <figure className="service-techniques-inset">
              <Image src={resolveImage('/assets/factory/transfer-laser/laser-cutting-01.JPG')} alt="TONTON laser cutting production technique" fill sizes="(max-width: 900px) 46vw, 21vw" />
            </figure>
          </div>
          <div className="service-techniques-copy">
            <p className="service-kicker service-kicker-light">DECORATION &amp; CONSTRUCTION</p>
            <h2>Choose the right technique for the product.</h2>
            <p>Decoration is selected around the artwork, material, use case, finish, and order needs—not simply added at the end.</p>
            <div className="service-technique-list">
              {techniques.map(([title, text], index) => (
                <div key={title}>
                  <span>{String(index + 1).padStart(2, '0')}</span>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="service-support-band">
        <div className="service-shell">
          <div className="service-section-heading">
            <div>
              <p className="service-kicker">SUPPORT THAT CONTINUES</p>
              <h2>Built for first orders—and what comes next.</h2>
            </div>
            <p>Production support also means keeping the important order details organized for revisions, repeat programs, and future product development.</p>
          </div>
          <div className="service-support-grid">
            <article><span>01</span><h3>Before ordering</h3><p>Product consultation, reference review, material direction, artwork preparation, and quotation support.</p></article>
            <article><span>02</span><h3>During development</h3><p>Mockup review, sample coordination, feedback tracking, and specification confirmation.</p></article>
            <article><span>03</span><h3>During production</h3><p>Order communication, customization checks, workmanship inspection, and packing confirmation.</p></article>
            <article><span>04</span><h3>For repeat orders</h3><p>Reference to approved project details so your next order starts with a clearer foundation.</p></article>
          </div>
        </div>
      </section>

      <section className="service-cta">
        <Image src={resolveImage('/assets/factory/overview/showroom-01.jpg')} alt="TONTON custom sportswear showroom and project support" fill sizes="100vw" />
        <div className="service-cta-shade" />
        <div className="service-shell service-cta-content">
          <p className="service-kicker service-kicker-light">READY TO DEVELOP YOUR PRODUCT?</p>
          <h2>Bring us the idea.<br />We will map the next steps.</h2>
          <p>Share your product type, quantities, logos, reference images, and target timing. Our team will help turn them into a practical custom project brief.</p>
          <a className="service-button service-button-red" href="/#inquiry">Request a project review <ArrowIcon /></a>
        </div>
      </section>
    </div>
  );
}
