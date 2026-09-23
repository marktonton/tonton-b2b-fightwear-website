import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ORGANIZATION_ID } from '../../../lib/site-entity';
import type { Metadata } from 'next';
import { getResource, RESOURCE_PAGES } from '../../../lib/resource-content';

const SITE_URL = 'https://www.tontongear.com';
type PageProps = { params: { slug: string } };

export function generateStaticParams() { return RESOURCE_PAGES.map((item) => ({ slug: item.slug })); }

export function generateMetadata({ params }: PageProps): Metadata {
  const resource = getResource(params.slug);
  if (!resource) return { title: 'Resource Not Found', robots: { index: false } };
  return { title: { absolute: `${resource.title} | TONTON Sportswear` }, description: resource.description, alternates: { canonical: `${SITE_URL}/resources/${resource.slug}` }, openGraph: { type: 'article', title: resource.title, description: resource.description, url: `${SITE_URL}/resources/${resource.slug}`, images: resource.media?.map((item) => ({ url: `${SITE_URL}${item.src}`, alt: item.alt })) } };
}

export default function ResourceArticlePage({ params }: PageProps) {
  const resource = getResource(params.slug);
  if (!resource) notFound();
  const url = `${SITE_URL}/resources/${resource.slug}`;
  const reviewed = new Intl.DateTimeFormat('en-US', { month: 'long', day: 'numeric', year: 'numeric', timeZone: 'UTC' }).format(new Date(`${resource.updated}T00:00:00Z`));
  const schema = [
    { '@context': 'https://schema.org', '@type': 'Article', headline: resource.title, description: resource.description, datePublished: resource.updated, dateModified: resource.updated, mainEntityOfPage: url, image: resource.media?.map((item) => `${SITE_URL}${item.src}`), author: { '@id': ORGANIZATION_ID }, reviewedBy: { '@type': 'Organization', name: 'TONTON Product Development & Quality Control Team', parentOrganization: { '@id': ORGANIZATION_ID } }, publisher: { '@id': ORGANIZATION_ID } },
    { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [{ '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL }, { '@type': 'ListItem', position: 2, name: 'Resources', item: `${SITE_URL}/resources` }, { '@type': 'ListItem', position: 3, name: resource.title, item: url }] },
    ...(resource.faqs?.length ? [{ '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: resource.faqs.map(([question, answer]) => ({ '@type': 'Question', name: question, acceptedAnswer: { '@type': 'Answer', text: answer } })) }] : []),
  ];
  return (
    <article className="resource-article">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <nav aria-label="Breadcrumb"><Link href="/">Home</Link><span>/</span><Link href="/resources">Resources</Link><span>/</span><span>{resource.title}</span></nav>
      <header><p>{resource.eyebrow}</p><h1>{resource.title}</h1><p>{resource.description}</p><span>Reviewed {reviewed}</span></header>
      <section className="resource-direct-answer"><p>DIRECT ANSWER</p><h2>What buyers need to know</h2><p>{resource.answer}</p></section>
      {resource.media?.length ? <section className="resource-evidence" aria-labelledby="resource-evidence-title">
        <div><p>REAL PRODUCT & PROCESS EVIDENCE</p><h2 id="resource-evidence-title">Inspect the material, construction and workflow</h2><p>Original product or production photos support the specification. No generated product imagery is used.</p></div>
        <div className="resource-evidence-grid">{resource.media.map((item, index) => <figure key={item.src}><div><img src={item.src} alt={item.alt} width="1152" height="2048" loading="lazy" /></div><figcaption><span>{String(index + 1).padStart(2, '0')}</span><p>{item.caption}</p></figcaption></figure>)}</div>
      </section> : null}
      <section className="resource-specification"><div><p>SPECIFICATION SNAPSHOT</p><h2>Confirmed details at a glance</h2><p>Use this table as a starting point. Final product details are confirmed against the selected style and approved sample.</p></div><div><table><caption>{resource.title} specification summary</caption><tbody>{resource.table.map(([label, value]) => <tr key={label}><th scope="row">{label}</th><td>{value}</td></tr>)}</tbody></table></div></section>
      <section className="resource-decision" aria-labelledby="resource-decision-title">
        <div><p>BUYER DECISION TABLE</p><h2 id="resource-decision-title">Match the specification to the intended use</h2></div>
        <div className="resource-decision-table-wrap"><table><caption>Buyer decision comparison</caption><thead><tr><th>Option</th><th>Best suited to</th><th>Confirm before approval</th></tr></thead><tbody>{resource.decisionRows.map(([choice, bestFor, buyerCheck]) => <tr key={choice}><th scope="row">{choice}</th><td>{bestFor}</td><td>{buyerCheck}</td></tr>)}</tbody></table></div>
      </section>
      <div className="resource-sections">{resource.sections.map((section, index) => <section key={section.heading}><span>0{index + 1}</span><div><h2>{section.heading}</h2>{section.paragraphs?.map((text) => <p key={text}>{text}</p>)}{section.bullets && <ul>{section.bullets.map((text) => <li key={text}>{text}</li>)}</ul>}</div></section>)}</div>
      <section className="resource-boundaries"><div><p>WHEN NOT TO USE THIS DIRECTION</p><h2>Limits buyers should confirm</h2></div><ul>{resource.notFor.map((item) => <li key={item}>{item}</li>)}</ul></section>
      {resource.faqs?.length ? <section className="resource-faq" aria-labelledby="resource-faq-title"><div><p>BUYER FAQ</p><h2 id="resource-faq-title">Questions to confirm before approval</h2></div><div>{resource.faqs.map(([question, answer]) => <details key={question}><summary>{question}</summary><p>{answer}</p></details>)}</div></section> : null}
      <aside className="resource-source" aria-label="Source and review note"><strong>Source basis</strong><span>{resource.source}</span><span>Reviewed by: TONTON Product Development &amp; Quality Control Team</span><span>Last reviewed: {reviewed}</span></aside>
      {resource.relatedGuides?.length ? <nav className="resource-cluster-links" aria-label="Related buyer guides"><strong>Continue this topic</strong><div>{resource.relatedGuides.map((slug) => { const item = getResource(slug); return item ? <Link href={`/resources/${item.slug}`} key={item.slug}>{item.title} <span aria-hidden="true">→</span></Link> : null; })}</div></nav> : null}
      <section className="resource-article-cta"><div><p>NEXT STEP</p><h2>Turn the guide into a product brief</h2></div><div><Link href={resource.relatedProduct.href}>{resource.relatedProduct.label} <span aria-hidden="true">→</span></Link><Link href="/project-builder">Open the Project Builder <span aria-hidden="true">→</span></Link><a href={`https://wa.me/8617722438678?text=${encodeURIComponent(`Hello TONTON, I would like to discuss a project after reading: ${resource.title}. ${url}`)}`} target="_blank" rel="noopener noreferrer">Ask on WhatsApp <span aria-hidden="true">→</span></a></div></section>
    </article>
  );
}
