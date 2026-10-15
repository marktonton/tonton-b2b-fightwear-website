import Link from 'next/link';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { BUYER_SOLUTIONS, getBuyerSolution, buyerBriefHref } from '../../../lib/buyer-solutions';
import { SITE_URL, ORGANIZATION_ID } from '../../../lib/site-entity';
import { resolveImage } from '../../../lib/image-resolver';
import CustomerProjectProof from '../../../components/CustomerProjectProof';
import BuyerSolutionsLinks from '../../../components/BuyerSolutionsLinks';

export const dynamicParams = false;
export function generateStaticParams() { return BUYER_SOLUTIONS.map(({ slug }) => ({ slug })); }
export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const item = getBuyerSolution(params.slug);
  if (!item) return {};
  return { title: { absolute: `${item.title} | TONTON` }, description: item.description, alternates: { canonical: `${SITE_URL}/solutions/${item.slug}` }, openGraph: { title: item.title, description: item.description, url: `${SITE_URL}/solutions/${item.slug}`, type: 'website', images: [{ url: `${SITE_URL}${item.evidence[0].image}`, alt: item.evidence[0].alt }] } };
}

export default function BuyerSolutionPage({ params }: { params: { slug: string } }) {
  const item = getBuyerSolution(params.slug);
  if (!item) notFound();
  const url = `${SITE_URL}/solutions/${item.slug}`;
  const schema = { '@context': 'https://schema.org', '@graph': [
    { '@type': 'WebPage', '@id': `${url}#page`, url, name: item.title, description: item.description, datePublished: '2026-10-15', dateModified: '2026-10-15', inLanguage: 'en', publisher: { '@id': ORGANIZATION_ID }, mainEntity: { '@id': `${url}#service` } },
    { '@type': 'Service', '@id': `${url}#service`, name: item.heading, description: item.answer, provider: { '@id': ORGANIZATION_ID }, url, serviceType: 'Custom fightwear OEM / ODM project development' },
    { '@type': 'BreadcrumbList', itemListElement: [{ '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL }, { '@type': 'ListItem', position: 2, name: item.title, item: url }] },
    { '@type': 'FAQPage', '@id': `${url}#faq`, mainEntity: item.faqs.map((faq) => ({ '@type': 'Question', name: faq.question, acceptedAnswer: { '@type': 'Answer', text: faq.answer } })) },
  ] };
  return <div className="buyer-solution-page">
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, '\\u003c') }} />
    <nav className="buyer-breadcrumb" aria-label="Breadcrumb"><Link href="/">Home</Link><span>/</span><span>{item.slug === 'bjj-academy-uniforms' ? 'BJJ academy uniforms' : 'Private-label fightwear'}</span></nav>
    <header className="buyer-solution-hero"><div><p className="rg-eyebrow">{item.eyebrow}</p><h1>{item.heading}</h1><p>{item.intro}</p><Link className="buyer-primary" href={buyerBriefHref(item)}>{item.cta} →</Link><Link className="buyer-secondary" href="#project-evidence">Inspect customer project evidence ↓</Link></div><figure><img src={resolveImage(item.evidence[0].image)} alt={item.evidence[0].alt} width={800} height={1000} fetchPriority="high" /><figcaption>Original customer-supplied production reference. Artwork belongs to the customer.</figcaption></figure></header>
    <section className="buyer-answer" aria-labelledby="buyer-answer-title"><p className="rg-eyebrow">A PRACTICAL STARTING POINT</p><h2 id="buyer-answer-title">{item.slug === 'bjj-academy-uniforms' ? 'What should an academy prepare before ordering custom teamwear?' : 'What does a private-label fightwear project need?'}</h2><p>{item.answer}</p><small>Reviewed October 15, 2026 · TONTON Product Development & Quality Control Team · Based on published product specifications and customer-supplied production references.</small></section>
    <section className="buyer-decisions" aria-labelledby="buyer-decisions-title"><h2 id="buyer-decisions-title">Three decisions to make before sampling</h2><div>{item.decisions.map((decision, index) => <article key={decision.title}><span>0{index + 1}</span><h3>{decision.title}</h3><p>{decision.text}</p></article>)}</div></section>
    <div id="project-evidence"><CustomerProjectProof title={item.evidenceTitle} intro={item.evidenceIntro} items={item.evidence} /></div>
    <section className="buyer-checklist" aria-labelledby="buyer-checklist-title"><h2 id="buyer-checklist-title">{item.tableTitle}</h2><table><caption>Information to include in your project brief</caption><thead><tr><th scope="col">Decision</th><th scope="col">What to send or confirm</th></tr></thead><tbody>{item.rows.map(([label, value]) => <tr key={label}><th scope="row">{label}</th><td>{value}</td></tr>)}</tbody></table><Link className="buyer-primary" href={buyerBriefHref(item)}>{item.cta} →</Link></section>
    <section className="buyer-product-section" aria-labelledby="buyer-products-title"><p className="rg-eyebrow">COMPARE REAL PRODUCT REFERENCES</p><h2 id="buyer-products-title">Connect your brief to a garment you can inspect</h2><div>{item.products.map((product) => <article key={product.id}><h3><Link href={`/products/${product.id}`}>{product.name}</Link></h3><p>{product.copy}</p><Link href={`/products/${product.id}`}>View specifications, photos and video →</Link></article>)}</div><p>Browse <Link href="/customization/sublimated-rash-guards">custom Rash Guards</Link> or <Link href="/customization/sublimated-bjj-mma-shorts">custom BJJ & MMA shorts</Link> for more construction directions.</p></section>
    <section className="buyer-followup"><h2>{item.followupTitle}</h2><p>{item.followup}</p><nav aria-label="Sample and factory guidance"><Link href="/resources/custom-fightwear-sampling-moq">Sampling & MOQ guide →</Link><Link href="/resources/fightwear-quality-inspection-checklist">Quality inspection checklist →</Link><Link href="/resources/prepare-artwork-for-sublimation">Artwork preparation →</Link><Link href="/factory">Inspect factory evidence →</Link></nav></section>
    <section className="buyer-faq" aria-labelledby="buyer-faq-title"><p className="rg-eyebrow">BUYER QUESTIONS</p><h2 id="buyer-faq-title">{item.slug === 'bjj-academy-uniforms' ? 'BJJ academy uniform ordering FAQ' : 'Private-label fightwear development FAQ'}</h2>{item.faqs.map((faq) => <details key={faq.question}><summary>{faq.question}</summary><p>{faq.answer}</p></details>)}</section>
    <section className="buyer-final"><h2>Send the brief. Confirm the specification together.</h2><p>Product direction and intended use are preselected. Add your quantities, size range, artwork status and contact details. TONTON reviews the requirements before confirming materials, sampling, quotation and schedule.</p><Link className="buyer-primary" href={buyerBriefHref(item)}>{item.cta} →</Link><Link className="buyer-secondary" href="/service-support">Review the development process →</Link></section>
    <BuyerSolutionsLinks />
  </div>;
}
