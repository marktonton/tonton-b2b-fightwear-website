import Link from 'next/link';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { getResource, RESOURCE_PAGES } from '../../../lib/resource-content';

const SITE_URL = 'https://www.tontongear.com';
type PageProps = { params: { slug: string } };

export function generateStaticParams() { return RESOURCE_PAGES.map((item) => ({ slug: item.slug })); }

export function generateMetadata({ params }: PageProps): Metadata {
  const resource = getResource(params.slug);
  if (!resource) return { title: 'Resource Not Found', robots: { index: false } };
  return { title: { absolute: `${resource.title} | TONTON Sportswear` }, description: resource.description, alternates: { canonical: `${SITE_URL}/resources/${resource.slug}` }, openGraph: { type: 'article', title: resource.title, description: resource.description, url: `${SITE_URL}/resources/${resource.slug}` } };
}

export default function ResourceArticlePage({ params }: PageProps) {
  const resource = getResource(params.slug);
  if (!resource) notFound();
  const url = `${SITE_URL}/resources/${resource.slug}`;
  const reviewed = new Intl.DateTimeFormat('en-US', { month: 'long', day: 'numeric', year: 'numeric', timeZone: 'UTC' }).format(new Date(`${resource.updated}T00:00:00Z`));
  const schema = [
    { '@context': 'https://schema.org', '@type': 'Article', headline: resource.title, description: resource.description, datePublished: resource.updated, dateModified: resource.updated, mainEntityOfPage: url, author: { '@type': 'Organization', name: 'TONTON Sportswear' }, publisher: { '@type': 'Organization', name: 'TONTON Sportswear', url: SITE_URL } },
    { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [{ '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL }, { '@type': 'ListItem', position: 2, name: 'Resources', item: `${SITE_URL}/resources` }, { '@type': 'ListItem', position: 3, name: resource.title, item: url }] },
  ];
  return (
    <article className="resource-article">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <nav aria-label="Breadcrumb"><Link href="/">Home</Link><span>/</span><Link href="/resources">Resources</Link><span>/</span><span>{resource.title}</span></nav>
      <header><p>{resource.eyebrow}</p><h1>{resource.title}</h1><p>{resource.description}</p><span>Reviewed {reviewed}</span></header>
      <section className="resource-direct-answer"><p>DIRECT ANSWER</p><h2>What buyers need to know</h2><p>{resource.answer}</p></section>
      <section className="resource-specification"><div><p>SPECIFICATION SNAPSHOT</p><h2>Confirmed details at a glance</h2><p>Use this table as a starting point. Final product details are confirmed against the selected style and approved sample.</p></div><div><table><caption>{resource.title} specification summary</caption><tbody>{resource.table.map(([label, value]) => <tr key={label}><th scope="row">{label}</th><td>{value}</td></tr>)}</tbody></table></div></section>
      <section className="resource-decision" aria-labelledby="resource-decision-title">
        <div><p>BUYER DECISION TABLE</p><h2 id="resource-decision-title">Match the specification to the intended use</h2></div>
        <div className="resource-decision-table-wrap"><table><caption>Buyer decision comparison</caption><thead><tr><th>Option</th><th>Best suited to</th><th>Confirm before approval</th></tr></thead><tbody>{resource.decisionRows.map(([choice, bestFor, buyerCheck]) => <tr key={choice}><th scope="row">{choice}</th><td>{bestFor}</td><td>{buyerCheck}</td></tr>)}</tbody></table></div>
      </section>
      <div className="resource-sections">{resource.sections.map((section, index) => <section key={section.heading}><span>0{index + 1}</span><div><h2>{section.heading}</h2>{section.paragraphs?.map((text) => <p key={text}>{text}</p>)}{section.bullets && <ul>{section.bullets.map((text) => <li key={text}>{text}</li>)}</ul>}</div></section>)}</div>
      <section className="resource-boundaries"><div><p>WHEN NOT TO USE THIS DIRECTION</p><h2>Limits buyers should confirm</h2></div><ul>{resource.notFor.map((item) => <li key={item}>{item}</li>)}</ul></section>
      <aside className="resource-source" aria-label="Source and review note"><strong>Source basis</strong><span>{resource.source}</span><span>Last reviewed: {reviewed}</span></aside>
      <section className="resource-article-cta"><div><p>NEXT STEP</p><h2>Turn the guide into a product brief</h2></div><div><Link href={resource.relatedProduct.href}>{resource.relatedProduct.label} <span aria-hidden="true">→</span></Link><Link href="/project-builder">Open the Project Builder <span aria-hidden="true">→</span></Link></div></section>
    </article>
  );
}
