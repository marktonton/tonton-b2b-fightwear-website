import Image from 'next/image';
import type { Metadata } from 'next';
import CertificatesSlider from './CertificatesSlider';
import { resolveImage } from '../../lib/image-resolver';

const SITE_URL = 'https://www.tontongear.com';

export const metadata: Metadata = {
  title: 'Custom Sportswear Factory | TONTON OEM & ODM Manufacturer',
  description: 'See inside TONTON Sportswear: intelligent hanging production, embroidery, printing, sewing, quality control, packing, and OEM/ODM support for custom fightwear.',
  alternates: { canonical: `${SITE_URL}/factory` },
  openGraph: {
    title: 'Custom Sportswear Factory | TONTON OEM & ODM Manufacturer',
    description: 'A real look inside TONTON custom fightwear production—from artwork and sampling to quality control and packing.',
    url: `${SITE_URL}/factory`,
    type: 'website',
    images: [{
      url: resolveImage('/assets/factory/hanging/hanging-line-01.jpg'),
      alt: 'TONTON intelligent hanging production line',
    }],
  },
};

const certificates = [
  {
    type: 'QUALITY MANAGEMENT',
    title: 'ISO 9001:2015',
    image: resolveImage('/assets/certificates/iso-9001-shenzhen-portrait.png'),
    imageAlt: 'ISO 9001:2015 certificate preview',
    entity: 'Tonton Sports (Shenzhen) Co., Ltd.',
    validity: '2029-04-20',
    pdf: resolveImage('/assets/certificates/iso-9001-shenzhen.pdf'),
    pdfLabel: 'View ISO document',
  },
  {
    type: 'SOCIAL AUDIT',
    title: 'amfori BSCI Monitoring Report',
    image: resolveImage('/assets/certificates/bsci-monitoring-report-preview.png'),
    imageAlt: 'amfori BSCI social audit monitoring report preview',
    entity: 'Tonton Sports (Shenzhen) Co., Ltd.',
    validity: '2027-04-20',
    note: 'Presented as a social audit monitoring report—not as a “BSCI certified” claim.',
    pdf: resolveImage('/assets/certificates/bsci-monitoring-report.pdf'),
    pdfLabel: 'View BSCI report',
  },
  {
    type: 'PRODUCT COMPLIANCE',
    title: 'RoHS Product Compliance',
    image: resolveImage('/assets/certificates/rohs-soccer-uniform-hubei.png'),
    imageAlt: 'RoHS product compliance document for soccer uniforms',
    entity: 'TONTON Sportswear (Hubei) Co., Ltd.',
    scope: 'Soccer uniform product compliance.',
    pdf: resolveImage('/assets/certificates/rohs-soccer-uniform-hubei.png'),
    pdfLabel: 'View compliance image',
  },
];

const productionSteps = [
  ['01', 'Choose the product', 'Define the garment, fit, quantities, and intended use.'],
  ['02', 'Share your artwork', 'Send logos, brand guidelines, colors, and reference ideas.'],
  ['03', 'Review mockup & sample', 'Align construction, placement, fabric, and branding details.'],
  ['04', 'Plan production', 'Confirm the approved specification before bulk work begins.'],
  ['05', 'Inspect the order', 'Review workmanship, customization details, and packing requirements.'],
  ['06', 'Pack & deliver', 'Prepare the finished order for the agreed shipping route.'],
];

const capabilities = [
  {
    number: '01',
    eyebrow: 'DIGITAL EMBROIDERY',
    title: 'BRANDING WITH DEPTH.',
    text: 'Multi-head embroidery equipment supports detailed brand marks, team identities, and durable garment decoration.',
    image: '/assets/factory/embroidery/embroidery-detail-01.jpg',
    alt: 'TONTON multi-head embroidery equipment working on sportswear',
    className: 'factory-v2-capability-wide',
  },
  {
    number: '02',
    eyebrow: 'PRINTING & LASER CUTTING',
    title: 'COLOR, CUT WITH CONTROL.',
    text: 'Dedicated printing, heat-transfer, and laser-cutting stations turn approved artwork into production-ready garment panels.',
    image: '/assets/factory/transfer-laser/transfer-machine-01.JPG',
    alt: 'TONTON large-format custom sportswear printing machine',
    className: '',
  },
  {
    number: '03',
    eyebrow: 'GARMENT CONSTRUCTION',
    title: 'BUILT AT THE WORKSTATION.',
    text: 'Experienced operators assemble custom sportswear with close attention to seams, panels, and performance construction.',
    image: '/assets/factory/sewing/sewing-worker-01.JPG',
    alt: 'TONTON garment worker assembling sportswear',
    className: '',
  },
  {
    number: '04',
    eyebrow: 'QUALITY REVIEW',
    title: 'CHECKED BEFORE PACKING.',
    text: 'Finished garments are reviewed against the confirmed project details before they move to final packing.',
    image: '/assets/factory/quality-control/quality-check-01.JPG',
    alt: 'TONTON team member reviewing finished sportswear',
    className: 'factory-v2-capability-wide',
  },
];

const faqs = [
  {
    question: 'What products can TONTON manufacture?',
    answer: 'TONTON supports custom fightwear and professional sportswear programs, including rash guards, BJJ and MMA shorts, training shorts, teamwear, activewear, and related custom garments.',
  },
  {
    question: 'Do you support both OEM and ODM projects?',
    answer: 'Yes. We can work from your completed artwork and specification, or help develop a product direction from your brand requirements and references.',
  },
  {
    question: 'What should I send to start a project?',
    answer: 'Start with the product type, expected quantity, logo or artwork files, color direction, target market, and any reference garment or size requirements you already have.',
  },
  {
    question: 'Can I review a sample before bulk production?',
    answer: 'Sampling is part of the standard development route. Construction, fabric, branding, and fit details can be reviewed before the production plan is finalized.',
  },
  {
    question: 'How is quality checked?',
    answer: 'The team aligns approved specifications before production and reviews workmanship, customization details, quantity, and packing requirements before shipment preparation.',
  },
  {
    question: 'Can you support repeat orders?',
    answer: 'Yes. Share the previous project reference and any requested changes so the team can confirm the correct reorder route and current production details.',
  },
];

const factorySchema = {
  '@context': 'https://schema.org',
  '@type': 'AboutPage',
  name: 'TONTON Custom Sportswear Factory',
  url: `${SITE_URL}/factory`,
  description: 'TONTON custom sportswear factory capabilities, production workflow, quality control, and documentation.',
  mainEntity: {
    '@type': 'Organization',
    name: 'TONTON Sportswear',
    url: SITE_URL,
  },
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((faq) => ({
    '@type': 'Question',
    name: faq.question,
    acceptedAnswer: { '@type': 'Answer', text: faq.answer },
  })),
};

function ArrowIcon() {
  return (
    <svg viewBox="0 0 20 20" aria-hidden="true">
      <path d="M4 10h11M11 5l5 5-5 5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function FactoryPage() {
  return (
    <div className="factory-v2">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify([factorySchema, faqSchema]) }} />

      <section className="factory-v2-hero">
        <Image className="factory-v2-hero-image" src={resolveImage('/assets/factory/hanging/hanging-line-01.jpg')} alt="TONTON intelligent hanging production workshop" fill priority sizes="100vw" />
        <div className="factory-v2-hero-shade" />
        <div className="factory-v2-hero-content">
          <p className="factory-v2-kicker factory-v2-kicker-light">INSIDE TONTON</p>
          <h1>TONTON CUSTOM<br />SPORTSWEAR FACTORY</h1>
          <p className="factory-v2-hero-lead">Real people. Real equipment. A connected production route for custom fightwear, teamwear, and performance apparel.</p>
          <div className="factory-v2-hero-actions">
            <a className="factory-v2-button factory-v2-button-red" href="#factory-v2-process">Explore our process <ArrowIcon /></a>
            <a className="factory-v2-text-link" href="/#inquiry">Start a custom project <ArrowIcon /></a>
          </div>
        </div>
        <div className="factory-v2-hero-facts" aria-label="Factory highlights">
          <div><strong>SINCE 2004</strong><span>Sportswear experience</span></div>
          <div><strong>OEM / ODM</strong><span>Custom project support</span></div>
          <div><strong>SMART FLOW</strong><span>Intelligent hanging system</span></div>
        </div>
        <span className="factory-v2-scroll-note">SCROLL TO EXPLORE</span>
      </section>

      <section className="factory-v2-intro">
        <div className="factory-v2-intro-copy">
          <p className="factory-v2-kicker">MANUFACTURING PARTNER</p>
          <h2>MORE THAN A SUPPLIER.<br />A TEAM BEHIND YOUR PRODUCT.</h2>
          <p className="factory-v2-intro-lead">Founded in 2004, TONTON combines sportswear development experience with an organized, technology-supported production environment. We work with brands, gyms, clubs, teams, and retailers to turn a product brief into a production-ready custom program.</p>
          <div className="factory-v2-intro-points">
            <div><span>01</span><p><strong>Product development</strong>Support from artwork and material direction through sample review.</p></div>
            <div><span>02</span><p><strong>Connected production</strong>Clear movement from printing and cutting to sewing, inspection, and packing.</p></div>
            <div><span>03</span><p><strong>B2B project focus</strong>Built around the needs of brands, teams, clubs, and custom apparel buyers.</p></div>
          </div>
        </div>
        <div className="factory-v2-intro-media">
          <figure className="factory-v2-intro-main">
            <Image src={resolveImage('/assets/factory/overview/factory-exterior-02.JPG')} alt="TONTON sportswear production facility exterior" fill sizes="(max-width: 900px) 100vw, 42vw" />
            <figcaption>PRODUCTION FACILITY</figcaption>
          </figure>
          <figure className="factory-v2-intro-inset">
            <Image src={resolveImage('/assets/factory/overview/showroom-02.JPG')} alt="TONTON sportswear showroom" fill sizes="(max-width: 900px) 44vw, 18vw" />
            <figcaption>SHOWROOM</figcaption>
          </figure>
        </div>
      </section>

      <section className="factory-v2-proof-strip">
        <figure className="factory-v2-asset-board">
          <Image
            src={resolveImage('/assets/pages/factory-smart-factory-overview.webp')}
            alt="TONTON smart sportswear factory with intelligent hanging production and quality-control highlights"
            width={1920}
            height={720}
            sizes="(max-width: 760px) 960px, 100vw"
          />
          <figcaption>Smart factory overview · OEM and ODM · Low MOQ · Multi-step quality control</figcaption>
        </figure>
      </section>

      <section className="factory-v2-smart">
        <div className="factory-v2-section-heading factory-v2-section-heading-light">
          <div>
            <p className="factory-v2-kicker factory-v2-kicker-light">INTELLIGENT HANGING WORKSHOP</p>
            <h2>A PRODUCTION FLOW<br />YOU CAN SEE.</h2>
          </div>
          <p>Garments move between organized stations while the production dashboard makes workflow progress more visible to the workshop team.</p>
        </div>
        <figure className="factory-v2-asset-board factory-v2-asset-board-dark">
          <Image
            src={resolveImage('/assets/pages/factory-intelligent-hanging-workshop.webp')}
            alt="TONTON intelligent hanging workshop with connected production stations"
            width={1920}
            height={767}
            sizes="(max-width: 760px) 960px, 100vw"
          />
          <figcaption>Intelligent hanging workshop: automation, precision, efficiency, and organized production flow.</figcaption>
        </figure>
        <div className="factory-v2-smart-grid">
          <figure className="factory-v2-smart-main">
            <Image src={resolveImage('/assets/factory/hanging/hanging-line-03.JPG')} alt="TONTON intelligent hanging line across the workshop" fill sizes="(max-width: 800px) 100vw, 66vw" />
            <figcaption><span>01</span> Connected production stations</figcaption>
          </figure>
          <div className="factory-v2-smart-side">
            <figure>
              <Image src={resolveImage('/assets/factory/hanging/hanging-dashboard.jpg')} alt="Intelligent hanging system production dashboard" fill sizes="(max-width: 800px) 100vw, 30vw" />
              <figcaption><span>02</span> Visible workflow dashboard</figcaption>
            </figure>
            <figure>
              <Image src={resolveImage('/assets/factory/hanging/hanging-worker-01.jpg')} alt="TONTON operator working at an intelligent hanging station" fill sizes="(max-width: 800px) 100vw, 30vw" />
              <figcaption><span>03</span> Organized workstations</figcaption>
            </figure>
          </div>
        </div>
      </section>

      <section className="factory-v2-capabilities">
        <div className="factory-v2-section-heading">
          <div>
            <p className="factory-v2-kicker">CRAFT & CAPABILITY</p>
            <h2>FROM ARTWORK<br />TO FINISHED GARMENT.</h2>
          </div>
          <p>A curated view of the capabilities a buyer needs to verify—with fewer words, stronger real imagery, and no decorative claims.</p>
        </div>
        <figure className="factory-v2-asset-board factory-v2-capability-overview">
          <Image
            src={resolveImage('/assets/pages/factory-built-for-performance.webp')}
            alt="TONTON digital printing, precision sewing, embroidery, and cutting capabilities"
            width={1920}
            height={720}
            sizes="(max-width: 760px) 960px, 100vw"
          />
          <figcaption>Core production capabilities for custom performance apparel.</figcaption>
        </figure>
        <div className="factory-v2-capability-grid">
          {capabilities.map((item) => (
            <article className={`factory-v2-capability ${item.className}`} key={item.number}>
              <div className="factory-v2-capability-media">
                <Image src={resolveImage(item.image)} alt={item.alt} fill sizes="(max-width: 760px) 100vw, 50vw" />
                <span>{item.number}</span>
              </div>
              <div className="factory-v2-capability-copy">
                <p className="factory-v2-kicker">{item.eyebrow}</p>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>
            </article>
          ))}
        </div>
        <figure className="factory-v2-asset-board factory-v2-manufacturing-overview">
          <Image
            src={resolveImage('/assets/pages/factory-smart-manufacturing-center.webp')}
            alt="TONTON smart manufacturing center covering design, production, quality control, and packing"
            width={1920}
            height={720}
            sizes="(max-width: 760px) 960px, 100vw"
          />
          <figcaption>A connected view of design, sample development, production, quality review, and packing.</figcaption>
        </figure>
      </section>

      <section className="factory-v2-process" id="factory-v2-process">
        <div className="factory-v2-process-heading">
          <p className="factory-v2-kicker">OEM / ODM WORKFLOW</p>
          <h2>ONE CLEAR ROUTE.<br />SIX CONTROL POINTS.</h2>
          <p>Each step answers a question buyers ask before trusting a custom manufacturer: what happens next, what needs approval, and where quality is checked.</p>
        </div>
        <div className="factory-v2-process-list">
          {productionSteps.map(([number, title, text]) => (
            <article key={number}>
              <span>{number}</span>
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="factory-v2-quality">
        <div className="factory-v2-quality-copy">
          <p className="factory-v2-kicker factory-v2-kicker-light">QUALITY CONTROL & PACKING</p>
          <h2>THE ORDER IS NOT FINISHED<br />WHEN SEWING STOPS.</h2>
          <p>Final review connects the approved project details with the finished garments. Workmanship, customization, quantity, and packing requirements are checked before shipment preparation.</p>
          <ul>
            <li>Specification and customization review</li>
            <li>Finished-garment workmanship check</li>
            <li>Order and packing-detail confirmation</li>
          </ul>
        </div>
        <div className="factory-v2-quality-gallery">
          <figure className="factory-v2-quality-large"><Image src={resolveImage('/assets/factory/quality-control/quality-room-01.JPG')} alt="TONTON quality inspection workshop" fill sizes="(max-width: 800px) 100vw, 45vw" /></figure>
          <figure><Image src={resolveImage('/assets/factory/packing/packing-02.JPG')} alt="TONTON team member packing custom sportswear" fill sizes="(max-width: 800px) 48vw, 22vw" /></figure>
          <figure><Image src={resolveImage('/assets/factory/packing/packing-detail-01.JPG')} alt="Finished sportswear prepared in the packing area" fill sizes="(max-width: 800px) 48vw, 22vw" /></figure>
        </div>
      </section>

      <section className="factory-v2-certificates">
        <div className="factory-v2-section-heading">
          <div>
            <p className="factory-v2-kicker">DOCUMENTED TRUST</p>
            <h2>CLEAR DOCUMENTS.<br />CLEAR SCOPE.</h2>
          </div>
          <p>Every displayed document is identified by entity and scope. Buyers can open the source document instead of relying on decorative certificate badges.</p>
        </div>
        <CertificatesSlider certificates={certificates} />
      </section>

      <section className="factory-v2-faq">
        <div className="factory-v2-faq-heading">
          <p className="factory-v2-kicker">FACTORY FAQ</p>
          <h2>BEFORE YOU START<br />A CUSTOM PROJECT.</h2>
        </div>
        <div className="factory-v2-faq-list">
          {faqs.map((faq, index) => (
            <details key={faq.question} open={index === 0}>
              <summary><span>{String(index + 1).padStart(2, '0')}</span>{faq.question}</summary>
              <p>{faq.answer}</p>
            </details>
          ))}
        </div>
      </section>

      <section className="factory-v2-cta" id="factory-inquiry">
        <Image src={resolveImage('/assets/factory/overview/showroom-01.jpg')} alt="TONTON custom sportswear showroom" fill sizes="100vw" />
        <div className="factory-v2-cta-shade" />
        <div className="factory-v2-cta-content">
          <p className="factory-v2-kicker factory-v2-kicker-light">YOUR NEXT CUSTOM PROGRAM</p>
          <h2>BRING US THE IDEA.<br />LET’S BUILD THE PRODUCT.</h2>
          <p>Tell us what you want to make, who it is for, and what matters most to your brand.</p>
          <a className="factory-v2-button factory-v2-button-red" href="/#inquiry">Request a project review <ArrowIcon /></a>
        </div>
      </section>
    </div>
  );
}
