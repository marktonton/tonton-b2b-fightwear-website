import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { resolveImage } from '../../lib/image-resolver';
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
  ['Operating structure', 'Shenzhen business and brand operations with a smart-production base in Xiantao, Hubei'],
  ['Business model', 'B2B custom sportswear manufacturing; OEM and ODM development'],
  ['Core product focus', 'Rash guards, MMA and BJJ shorts, grappling shorts, training shorts, teamwear and related performance apparel'],
  ['Typical buyers', 'Fightwear brands, gyms, academies, clubs, teams and retailers'],
  ['Manufacturing scope', 'Product development, artwork support, sampling, printing, embroidery, cutting, sewing, quality review and packing'],
  ['Sales contact', 'gary@tontonsportswear.com · +86 17722438678'],
];

const milestones = [
  ['2004', 'TONTON began in Shenzhen with a focus on custom sportswear and international B2B orders.'],
  ['2014', 'The team took part in the Chinese supplier network that completed 130,000 Alibaba listing commemorative garments in 12 days.'],
  ['2023', 'TONTON established its Hubei manufacturing company and expanded production in Xiantao.'],
  ['2025', 'Hubei Daily reported the launch of an intelligent production system using AI-assisted design, QR-tracked panels, smart sorting and hanging lines.'],
  ['2026', 'Public reporting documented further AI-supported manufacturing development and university-industry work on smart sizing and virtual fitting.'],
];

const officialReports = [
  {
    source: 'Hubei Daily',
    date: '20 Mar 2025',
    isoDate: '2025-03-20',
    title: 'TONTON custom apparel ships within two days',
    summary: 'A factory report covering AI-assisted design, QR-tracked garment panels, smart sorting, four hanging lines and 200 intelligent devices.',
    href: 'https://epaper.hubeidaily.net/pad/content/202503/20/content_308570.html',
  },
  {
    source: 'Xiantao Municipal Government',
    date: '12 Sep 2024',
    isoDate: '2024-09-12',
    title: 'TONTON uses intelligent manufacturing to raise output',
    summary: 'A government report on intelligent design, automated panel checking, digital operations and the company\'s manufacturing upgrade.',
    href: 'https://www.xiantao.gov.cn/zwgk/xtyw/202409/t20240912_5334264.shtml',
  },
  {
    source: 'Hubei Daily',
    date: '7 May 2025',
    isoDate: '2025-05-07',
    title: 'From Guangdong to a smart factory in Hubei',
    summary: 'Reporting on TONTON\'s return investment in Hubei, smart-factory development and high-tech enterprise recognition.',
    href: 'https://epaper.hubeidaily.net/pad/content/202505/07/content_313625.html',
  },
  {
    source: 'Hubei Daily · Xiantao Government',
    date: '10 Apr 2026',
    isoDate: '2026-04-10',
    title: 'AI-supported manufacturing accelerates production',
    summary: 'Coverage of the company\'s material database, AI design workflow, connected equipment and digitally identified production pieces.',
    href: 'https://www.xiantao.gov.cn/zwgk/xtyw/202604/t20260410_5911323_app.shtml',
  },
  {
    source: 'Xiantao Daily',
    date: '8 Apr 2026',
    isoDate: '2026-04-08',
    title: 'Interview with TONTON chairman Hu Xinzhen',
    summary: 'A long-form profile covering the company\'s founding, cross-border e-commerce development, manufacturing history and community work.',
    href: 'http://www.cnxiantao.com/2026xtxw/202604/t20260408_474794.shtml',
  },
  {
    source: 'Xiantao Daily',
    date: '19 May 2026',
    isoDate: '2026-05-19',
    title: 'Wuhan Textile University team visits TONTON',
    summary: 'A report on industry-university discussions around digital transformation, smart measurement and virtual fitting technology.',
    href: 'http://www.cnxiantao.com/2026xtxw/202605/t20260519_477231.shtml',
  },
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
  citation: officialReports.map((report) => ({
    '@type': 'NewsArticle',
    headline: report.title,
    url: report.href,
    datePublished: report.isoDate,
    publisher: { '@type': 'Organization', name: report.source },
  })),
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
        <div className="entity-hero-copy">
          <p>VERIFIED COMPANY PROFILE</p>
          <h1>About TONTON Sportswear</h1>
          <p>TONTON Sportswear is a B2B custom fightwear and performance-apparel manufacturer founded in 2004. We help brands, gyms, academies, clubs, teams and retailers develop products from the initial brief through sampling, production review and packing.</p>
          <div>
            <Link href="/factory">Inspect the Factory</Link>
            <Link href="/project-builder?source=about-page">Build Your Project Brief</Link>
          </div>
        </div>
        <figure className="entity-hero-banner" aria-label="TONTON Sportswear company and manufacturing summary">
          <Image
            src={resolveImage('/assets/factory/hanging/hanging-line-01.jpg')}
            alt="TONTON intelligent hanging workshop for custom fightwear and performance apparel"
            fill
            priority
            sizes="(max-width: 900px) 100vw, 52vw"
          />
          <div className="entity-hero-banner-shade" />
          <figcaption>
            <span>TONTON SPORTSWEAR</span>
            <h2>B2B CUSTOM FIGHTWEAR &amp; PERFORMANCE APPAREL MANUFACTURER</h2>
            <strong>FOUNDED IN 2004</strong>
            <p>For brands, gyms, academies, clubs, teams and retailers.</p>
            <p>From project brief to sampling, production review and packing.</p>
          </figcaption>
        </figure>
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

      <section className="entity-section entity-history" aria-labelledby="entity-history-title">
        <header>
          <p>COMPANY DEVELOPMENT</p>
          <h2 id="entity-history-title">From a Shenzhen sportswear business to connected manufacturing</h2>
          <p>A concise timeline based on company records and published reporting. It explains how TONTON's commercial operations and Hubei production base fit together.</p>
        </header>
        <div className="entity-timeline">
          {milestones.map(([year, text]) => (
            <article key={year}>
              <strong>{year}</strong>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="entity-section entity-coverage" aria-labelledby="entity-coverage-title">
        <header>
          <p>INDEPENDENT SOURCES</p>
          <h2 id="entity-coverage-title">Official reporting about TONTON</h2>
          <p>These third-party reports provide source-level evidence for TONTON's history, factory digitization and manufacturing development. Links open the original Chinese-language reports.</p>
        </header>
        <div className="entity-coverage-grid">
          {officialReports.map((report) => (
            <article key={report.href}>
              <div><span>{report.source}</span><time>{report.date}</time></div>
              <h3>{report.title}</h3>
              <p>{report.summary}</p>
              <a href={report.href} target="_blank" rel="noopener noreferrer">Read original report ↗</a>
            </article>
          ))}
        </div>
        <p className="entity-source-note">Source note: figures and statements above are attributed to the linked publishers. Current project specifications, capacity and delivery timing are confirmed separately for each order.</p>
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
