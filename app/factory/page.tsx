import Image from 'next/image';
import type { Metadata } from 'next';

const SITE_URL = 'https://www.tontongear.com';

export const metadata: Metadata = {
  title: 'Factory & Production Capabilities',
  description: 'Explore TONTON Sportswear manufacturing capabilities, production workflow, quality review, and custom fightwear project support.',
  alternates: { canonical: `${SITE_URL}/factory` },
  openGraph: {
    title: 'Factory & Production Capabilities | TONTON Sportswear',
    description: 'A practical overview of TONTON custom sportswear production support, workflow, and quality review.',
    url: `${SITE_URL}/factory`,
    type: 'website',
  },
};

const capabilityCards = [
  {
    title: 'Custom Fightwear',
    text: 'Design coordination for custom fightwear projects, including rash guards, shorts, and related team apparel.',
  },
  {
    title: 'Team & Activewear',
    text: 'Support for teamwear, activewear, gymwear, and custom apparel concepts based on your project brief.',
  },
  {
    title: 'Production Support',
    text: 'A clear path from artwork and product requirements to sample review and bulk-production planning.',
  },
];

const processSteps = [
  ['01', 'Share your brief', 'Send product direction, artwork, logo files, and any project references.'],
  ['02', 'Review the route', 'Our team confirms the suitable product and customization path for the project.'],
  ['03', 'Align the sample', 'Review the sample direction and finalize the details needed for production.'],
  ['04', 'Plan production', 'The production schedule and order details are confirmed before the order moves forward.'],
];

const qualityPoints = [
  'Artwork and product details are reviewed before production planning.',
  'Color, labels, packaging, and customization requirements are aligned around the project brief.',
  'Progress communication follows the agreed production plan and contact channel.',
];

const factoryStages = [
  {
    eyebrow: 'EMBROIDERY',
    title: 'DETAILS THAT MAKE THE PROGRAM YOURS.',
    text: 'Embroidery and logo-work references show the detail-focused stage behind custom sportswear development.',
    images: [
      ['/assets/factory/embroidery/embroidery-detail-01.jpg', 'Embroidery detail'],
      ['/assets/factory/embroidery/embroidery-line-01.JPG', 'Embroidery line'],
      ['/assets/factory/embroidery/embroidery-worker-01.JPG', 'Embroidery operator'],
    ],
  },
  {
    eyebrow: 'SMART HANGING',
    title: 'A VISIBLE PRODUCTION FLOW.',
    text: 'The smart hanging line keeps garments moving through the workshop with a visible production dashboard and organized stations.',
    images: [
      ['/assets/factory/hanging/hanging-dashboard.jpg', 'Smart hanging production dashboard'],
      ['/assets/factory/hanging/hanging-line-01.jpg', 'Smart hanging line'],
      ['/assets/factory/hanging/hanging-worker-01.jpg', 'Smart hanging operator'],
      ['/assets/factory/hanging/hanging-line-03.JPG', 'Smart hanging line detail'],
    ],
  },
  {
    eyebrow: 'SEWING',
    title: 'CONSTRUCTION IN THE WORKSHOP.',
    text: 'Sewing-line and construction details provide a closer look at the garment assembly stage.',
    images: [
      ['/assets/factory/sewing/sewing-detail-01.JPG', 'Sewing detail'],
      ['/assets/factory/sewing/sewing-line-01.JPG', 'Sewing line'],
      ['/assets/factory/sewing/sewing-worker-01.JPG', 'Sewing operator'],
    ],
  },
  {
    eyebrow: 'HEAT TRANSFER / LASER',
    title: 'CUSTOMIZATION THROUGH THE FINISHING STAGE.',
    text: 'Transfer and laser-cutting equipment support the customization and finishing requirements of sportswear projects.',
    images: [
      ['/assets/factory/transfer-laser/transfer-machine-01.JPG', 'Heat transfer machine'],
      ['/assets/factory/transfer-laser/laser-cutting-01.JPG', 'Laser cutting workstation'],
      ['/assets/factory/transfer-laser/transfer-workshop-01.JPG', 'Transfer workshop'],
    ],
  },
  {
    eyebrow: 'QUALITY CONTROL',
    title: 'CHECKS BEFORE PACKING.',
    text: 'Quality-check, line, and inspection-room references show the review stage before finished goods are packed.',
    images: [
      ['/assets/factory/quality-control/quality-check-01.JPG', 'Quality check'],
      ['/assets/factory/quality-control/quality-line-01.JPG', 'Quality line'],
      ['/assets/factory/quality-control/quality-room-01.JPG', 'Quality inspection room'],
    ],
  },
  {
    eyebrow: 'PACKING',
    title: 'READY FOR THE NEXT STEP.',
    text: 'Packing details complete the production story from workshop review to finished apparel preparation.',
    images: [
      ['/assets/factory/packing/DSC04811(1).JPG', 'Packing area'],
      ['/assets/factory/packing/packing-02.JPG', 'Packing process'],
      ['/assets/factory/packing/packing-detail-01.JPG', 'Packing detail'],
    ],
  },
];

const faqs = [
  {
    question: 'What does the factory page cover?',
    answer: 'This page introduces TONTON Sportswear capabilities, workflow, quality review approach, and the information needed to start a custom sportswear project.',
  },
  {
    question: 'Can I request a project review?',
    answer: 'Yes. Use the inquiry CTA to share your product, artwork, quantity, and project requirements so the team can review the next step.',
  },
];

export default function FactoryPage() {
  return (
    <div className="factory-page">
      <section className="factory-page-hero">
        <div className="factory-page-hero-copy">
          <p className="factory-page-eyebrow">TONTON SPORTSWEAR CO., LTD</p>
          <h1>FROM CONCEPT TO CUSTOM SPORTSWEAR.</h1>
          <p className="factory-page-lead">
            A practical look at how TONTON supports custom fightwear, teamwear, activewear, and gymwear projects.
          </p>
          <div className="factory-page-actions">
            <a className="factory-page-button factory-page-button-primary" href="#factory-inquiry">START A PROJECT</a>
            <a className="factory-page-button factory-page-button-secondary" href="#factory-process">VIEW THE PROCESS</a>
          </div>
        </div>
        <div className="factory-page-hero-media">
          <Image src="/assets/factory/overview/factory-exterior-01.JPG" alt="TONTON Sportswear factory exterior" fill priority sizes="(max-width: 820px) 100vw, 48vw" />
          <span>FACTORY OVERVIEW</span>
        </div>
      </section>

      <section className="factory-page-section factory-page-overview">
        <div className="factory-page-overview-media">
          <div className="factory-page-media-frame factory-page-media-frame-overview">
            <Image src="/assets/factory/overview/factory-exterior-02.JPG" alt="TONTON Sportswear production facility" fill sizes="(max-width: 820px) 100vw, 48vw" />
          </div>
        </div>
        <div className="factory-page-overview-copy">
          <p className="factory-page-eyebrow">OVERVIEW</p>
          <h2>BUILT AROUND YOUR PROJECT BRIEF.</h2>
          <p>
            TONTON Sportswear brings more than 20 years of fightwear and professional sportswear experience to custom apparel projects.
          </p>
          <p>
            We work with custom sportswear companies, brand buyers, start-up retailers, sports clubs, and teams to turn product ideas into clear production-ready requirements.
          </p>
        </div>
      </section>

      <section className="factory-page-section factory-page-capabilities">
        <div className="factory-page-section-heading">
          <p className="factory-page-eyebrow">PRODUCTION CAPABILITY</p>
          <h2>SUPPORT FOR CUSTOM APPAREL PROGRAMS.</h2>
        </div>
        <div className="factory-page-card-grid">
          {capabilityCards.map((card) => (
            <article className="factory-page-card" key={card.title}>
              <span className="factory-page-card-index">/</span>
              <h3>{card.title}</h3>
              <p>{card.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="factory-page-section factory-page-process" id="factory-process">
        <div className="factory-page-section-heading">
          <p className="factory-page-eyebrow">PROCESS</p>
          <h2>A CLEARER PATH TO PRODUCTION.</h2>
        </div>
        <div className="factory-page-process-grid">
          {processSteps.map(([number, title, text]) => (
            <article className="factory-page-process-step" key={number}>
              <strong>{number}</strong>
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </section>

      {factoryStages.map((stage) => (
        <section className="factory-page-section factory-page-stage" key={stage.eyebrow}>
          <div className="factory-page-stage-heading">
            <p className="factory-page-eyebrow">{stage.eyebrow}</p>
            <h2>{stage.title}</h2>
            <p>{stage.text}</p>
          </div>
          <div className="factory-page-stage-gallery">
            {stage.images.map(([src, alt]) => (
              <figure key={src}>
                <div className="factory-page-media-frame factory-page-media-frame-stage">
                  <Image src={src} alt={alt} fill sizes="(max-width: 600px) 100vw, (max-width: 820px) 50vw, 33vw" />
                </div>
                <figcaption>{alt}</figcaption>
              </figure>
            ))}
          </div>
        </section>
      ))}

      <section className="factory-page-section factory-page-quality">
        <div className="factory-page-quality-media">
          <div className="factory-page-media-frame factory-page-media-frame-quality">
            <Image src="/assets/factory/quality-control/quality-room-01.JPG" alt="TONTON quality inspection room" fill sizes="(max-width: 820px) 100vw, 48vw" />
          </div>
        </div>
        <div className="factory-page-quality-copy">
          <p className="factory-page-eyebrow">QUALITY CONTROL</p>
          <h2>DETAILS REVIEWED BEFORE THE ORDER MOVES FORWARD.</h2>
          <ul>
            {qualityPoints.map((point) => <li key={point}>{point}</li>)}
          </ul>
        </div>
      </section>

      <section className="factory-page-section factory-page-gallery">
        <div className="factory-page-section-heading">
          <p className="factory-page-eyebrow">PRODUCT APPLICATIONS</p>
          <h2>FIGHT, TEAM, ACTIVE, AND GYM APPAREL.</h2>
        </div>
        <div className="factory-page-gallery-grid">
          {[
            ['/assets/factory/overview/showroom-01.jpg', 'Fightwear showroom'],
            ['/assets/factory/overview/showroom-02.JPG', 'Teamwear showroom'],
            ['/assets/factory/packing/packing-detail-01.JPG', 'Active and gymwear packing'],
          ].map(([src, alt]) => (
            <figure key={src}>
                <div className="factory-page-media-frame factory-page-media-frame-gallery">
                  <Image src={src} alt={alt} fill sizes="(max-width: 600px) 100vw, (max-width: 820px) 50vw, 33vw" />
                </div>
              <figcaption>{alt}</figcaption>
            </figure>
          ))}
        </div>
      </section>

      <section className="factory-page-section factory-page-certificates">
        <div className="factory-page-section-heading">
          <p className="factory-page-eyebrow">CERTIFICATES & DOCUMENTATION</p>
          <h2>REAL DOCUMENTATION, CLEARLY IDENTIFIED.</h2>
          <p>Download the relevant document or review the product-compliance image below. Each record is identified by its issuing subject and scope.</p>
        </div>
        <div className="factory-page-certificate-grid">
          <article className="factory-page-certificate-card">
            <p className="factory-page-certificate-type">ISO CERTIFICATE</p>
            <h3>ISO 9001:2015</h3>
            <p><strong>主体：</strong>Tonton Sports (Shenzhen) Co., Ltd.</p>
            <p><strong>有效期至：</strong>2029-04-20</p>
            <a href="/assets/certificates/iso-9001-shenzhen.pdf" target="_blank" rel="noreferrer">VIEW ISO PDF</a>
          </article>
          <article className="factory-page-certificate-card">
            <p className="factory-page-certificate-type">AMFORI BSCI DOCUMENT</p>
            <h3>Social Audit Monitoring Report</h3>
            <p><strong>主体：</strong>Tonton Sports (Shenzhen) Co., Ltd.</p>
            <p><strong>有效期至：</strong>2027-04-20</p>
            <p>This is an amfori BSCI social audit monitoring report, not a statement of “BSCI certified”.</p>
            <a href="/assets/certificates/bsci-monitoring-report.pdf" target="_blank" rel="noreferrer">VIEW BSCI REPORT PDF</a>
          </article>
          <article className="factory-page-certificate-card factory-page-certificate-card-image">
            <div className="factory-page-certificate-image">
              <Image src="/assets/certificates/rohs-soccer-uniform-hubei.png" alt="RoHS product compliance document for soccer uniforms" fill sizes="(max-width: 600px) 100vw, 33vw" />
            </div>
            <p className="factory-page-certificate-type">PRODUCT COMPLIANCE</p>
            <h3>RoHS Product Compliance</h3>
            <p><strong>主体：</strong>TONTON SPORTSWEAR (HUBEI) CO., LTD.</p>
            <p><strong>范围：</strong>Soccer uniform product compliance.</p>
          </article>
        </div>
      </section>

      <section className="factory-page-section factory-page-faq">
        <div className="factory-page-section-heading">
          <p className="factory-page-eyebrow">FAQ</p>
          <h2>START WITH THE RIGHT INFORMATION.</h2>
        </div>
        <div className="factory-page-faq-grid">
          {faqs.map((faq) => (
            <details key={faq.question}>
              <summary>{faq.question}</summary>
              <p>{faq.answer}</p>
            </details>
          ))}
        </div>
      </section>

      <section className="factory-page-cta" id="factory-inquiry">
        <p className="factory-page-eyebrow">NEXT STEP</p>
        <h2>READY TO REVIEW YOUR PROJECT?</h2>
        <p>Share your design, product direction, and requirements with the TONTON team.</p>
        <a className="factory-page-button factory-page-button-primary" href="/#inquiry">SEND YOUR INQUIRY</a>
      </section>
    </div>
  );
}
