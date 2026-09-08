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
          <img src="/assets/factory/factory-01.jpg" alt="TONTON sportswear production workspace" />
          <span>FACTORY OVERVIEW</span>
        </div>
      </section>

      <section className="factory-page-section factory-page-overview">
        <div className="factory-page-section-heading">
          <p className="factory-page-eyebrow">OVERVIEW</p>
          <h2>BUILT AROUND YOUR PROJECT BRIEF.</h2>
        </div>
        <div className="factory-page-overview-copy">
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

      <section className="factory-page-section factory-page-quality">
        <div className="factory-page-quality-media">
          <img src="/assets/factory/factory-04.jpg" alt="TONTON quality review and production detail" loading="lazy" />
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
          {['factory-02.jpg', 'factory-06.jpg', 'factory-08.jpg'].map((image, index) => (
            <figure key={image}>
              <img src={`/assets/factory/${image}`} alt={`TONTON sportswear application ${index + 1}`} loading="lazy" />
              <figcaption>{['FIGHTWEAR', 'TEAMWEAR', 'ACTIVE & GYMWEAR'][index]}</figcaption>
            </figure>
          ))}
        </div>
      </section>

      <section className="factory-page-section factory-page-certificates">
        <div>
          <p className="factory-page-eyebrow">CERTIFICATES</p>
          <h2>DOCUMENTATION AREA.</h2>
          <p>Certificates and supporting documentation will be added here after the materials are reviewed and approved.</p>
        </div>
        <div className="factory-page-placeholder">CERTIFICATES TO BE ADDED</div>
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
