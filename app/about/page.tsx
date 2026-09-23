import type { Metadata } from 'next';
import Link from 'next/link';
import { ORGANIZATION_ID, SITE_URL } from '../../lib/site-entity';

export const metadata: Metadata = {
  title: { absolute: 'About TONTON | Custom Fightwear Manufacturer Since 2004' },
  description: 'Verified facts about TONTON Sportswear, its custom fightwear capabilities, OEM and ODM process, product focus, factory evidence, and buyer contact routes.',
  alternates: { canonical: `${SITE_URL}/about` },
  robots: { index: true, follow: true },
};

const facts = [
  ['Company', 'Tontonsports (Shenzhen) Co., Ltd.'],
  ['Public brand', 'TONTON Sportswear'],
  ['Founded', '2004'],
  ['Business model', 'B2B custom sportswear manufacturing; OEM and ODM development'],
  ['Core product focus', 'Rash guards, MMA and BJJ shorts, grappling shorts, training shorts, teamwear and related performance apparel'],
  ['Typical buyers', 'Fightwear brands, gyms, academies, clubs, teams and retailers'],
  ['Manufacturing scope', 'Product development, artwork support, sampling, printing, embroidery, cutting, sewing, quality review and packing'],
  ['Sales contact', 'gary@tontonsportswear.com · +86 17722438678'],
];

const faqs = [
  {
    question: 'What is TONTON Sportswear?',
    answer: 'TONTON Sportswear is the public brand of Tontonsports (Shenzhen) Co., Ltd., a B2B custom fightwear and sportswear manufacturer founded in 2004.',
  },
  {
    question: 'What products does TONTON specialize in?',
    answer: 'The website focuses on custom rash guards, MMA and BJJ shorts, grappling shorts, training shorts, teamwear and related performance sportswear programs.',
  },
  {
    question: 'Who does TONTON manufacture for?',
    answer: 'TONTON supports fightwear brands, gyms, academies, clubs, teams, retailers and other private-label buyers.',
  },
  {
    question: 'Does TONTON support OEM and ODM projects?',
    answer: 'Yes. Buyers can provide a completed specification or work with the team to develop product, artwork, material and construction direction before sampling.',
  },
  {
    question: 'How can a buyer verify TONTON manufacturing capabilities?',
    answer: 'The Factory page contains real workshop imagery, production stages, quality-control information and source documents. Product pages and buyer guides provide product-specific construction evidence.',
  },
];

const aboutSchema = {
  '@context': 'https://schema.org',
  '@type': 'AboutPage',
  '@id': `${SITE_URL}/about#webpage`,
  url: `${SITE_URL}/about`,
  name: 'About TONTON Sportswear',
  description: 'Verified company facts, manufacturing scope, product focus, and evidence routes for TONTON Sportswear.',
  dateModified: '2026-09-23',
  mainEntity: { '@id': ORGANIZATION_ID },
  isPartOf: { '@id': `${SITE_URL}/#website` },
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

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
    { '@type': 'ListItem', position: 2, name: 'About TONTON', item: `${SITE_URL}/about` },
  ],
};

export default function AboutPage() {
  return (
    <div className="entity-page">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify([aboutSchema, faqSchema, breadcrumbSchema]) }} />

      <section className="entity-hero">
        <p>VERIFIED COMPANY PROFILE</p>
        <h1>About TONTON Sportswear</h1>
        <p>TONTON Sportswear is a B2B custom fightwear and performance-apparel manufacturer founded in 2004. We help brands, gyms, academies, clubs, teams and retailers develop products from the initial brief through sampling, production review and packing.</p>
        <div>
          <Link href="/factory">Inspect the Factory</Link>
          <Link href="/project-builder?source=about-page">Build Your Project Brief</Link>
        </div>
      </section>

      <section className="entity-section" aria-labelledby="company-facts-title">
        <header>
          <p>ENTITY FACTS</p>
          <h2 id="company-facts-title">Company facts in one verifiable place</h2>
          <p>These names and descriptions are used consistently across TONTON product, factory, resource and structured-data pages.</p>
        </header>
        <div className="entity-fact-table" role="table" aria-label="TONTON company facts">
          {facts.map(([label, value]) => (
            <div role="row" key={label}>
              <strong role="rowheader">{label}</strong>
              <span role="cell">{value}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="entity-section entity-proof" aria-labelledby="entity-proof-title">
        <header>
          <p>HOW TO VERIFY TONTON</p>
          <h2 id="entity-proof-title">Follow the evidence, not a generic claim</h2>
        </header>
        <div className="entity-card-grid">
          <article><span>01</span><h3>Factory evidence</h3><p>Review real workshops, equipment, production flow, quality checks and source documents.</p><Link href="/factory">View Factory Evidence →</Link></article>
          <article><span>02</span><h3>Product evidence</h3><p>Compare visible construction, material notes, customization limits and sample questions on individual product pages.</p><Link href="/collections">Review Product Examples →</Link></article>
          <article><span>03</span><h3>Technical guidance</h3><p>Use reviewed buyer guides for fabric, seams, waistbands, liners, sublimation, sampling and quality inspection.</p><Link href="/resources">Read Buyer Guides →</Link></article>
        </div>
      </section>

      <section className="entity-section" aria-labelledby="entity-faq-title">
        <header><p>DIRECT ANSWERS</p><h2 id="entity-faq-title">Questions buyers and AI search tools ask</h2></header>
        <div className="entity-faq-list">
          {faqs.map((faq) => <details key={faq.question}><summary>{faq.question}</summary><p>{faq.answer}</p></details>)}
        </div>
      </section>
    </div>
  );
}
