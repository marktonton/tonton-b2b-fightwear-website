import { serializeStructuredData } from '../../../lib/structured-data';
import Image from 'next/image';
import WovenFabricDetails from './WovenFabricDetails';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { MATERIAL_GUIDES } from '../../../lib/fabric-library';
import { SITE_URL, ORGANIZATION_ID } from '../../../lib/site-entity';
import '../../factory/digital-sublimation-printing/sublimation.css';
import '../220-gsm-stretch-knit/fabric.css';
import './material.css';

type Props = { params: { slug: string } };
export function generateStaticParams() { return MATERIAL_GUIDES.map(({ slug }) => ({ slug })); }
export const dynamicParams = false;
export function generateMetadata({ params }: Props): Metadata {
  const fabric = MATERIAL_GUIDES.find((item) => item.slug === params.slug);
  if (!fabric) return { title: 'Material not found', robots: { index: false } };
  const url = `${SITE_URL}/fabrics/${fabric.slug}`;
  return { title: { absolute: `${fabric.title} for Custom Fightwear | TONTON` }, description: fabric.description, alternates: { canonical: url }, openGraph: { title: `${fabric.title} | TONTON Fabric Library`, description: fabric.description, url, images: [{ url: fabric.image, alt: fabric.alt }] } };
}
export default function MaterialPage({ params }: Props) {
  const fabric = MATERIAL_GUIDES.find((item) => item.slug === params.slug);
  if (!fabric) notFound();
  if (fabric.slug === 'four-way-stretch-woven') return <WovenFabricDetails />;
  const url = `${SITE_URL}/fabrics/${fabric.slug}`;
  const schema = [{ '@context': 'https://schema.org', '@type': 'WebPage', name: fabric.title, url, description: fabric.description, dateModified: '2026-10-26', publisher: { '@id': ORGANIZATION_ID } }, { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [{ '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL }, { '@type': 'ListItem', position: 2, name: 'Factory Fabric Library', item: `${SITE_URL}/factory#fabrics` }, { '@type': 'ListItem', position: 3, name: fabric.title, item: url }] }];
  return <article className="sublimation-page fabric-page material-guide">
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: serializeStructuredData(schema) }} />
    <section className="material-hero"><div><nav aria-label="Breadcrumb"><a href="/factory#fabrics">Factory / Fabric Library</a></nav><p className="sub-kicker">{fabric.category}</p><h1>{fabric.title}</h1><p className="material-spec">{fabric.specification}</p><p>{fabric.intro}</p><a className="sub-button" href={`/project-builder?source=fabric-${fabric.slug}`}>Discuss this material →</a></div><figure><div className={`material-photo material-photo-${fabric.mediaClass}`}><Image src={fabric.image} alt={fabric.alt} width={1000} height={1000} priority sizes={'(max-width:760px) 180vw, 90vw'} /></div><figcaption>{fabric.caption}. Final material specifications are confirmed by sample.</figcaption></figure></section>
    <section className="sub-section"><div className="sub-heading"><p className="sub-kicker">BEFORE SAMPLE APPROVAL</p><h2>Connect the swatch to the finished garment</h2><p>Use these checks to define a material brief with your TONTON product team.</p></div><div className="sub-cards">{fabric.checks.map((check, index) => <div className="material-check" key={check}><span>0{index + 1}</span><p>{check}</p></div>)}</div></section>
    <section className="sub-section sub-tinted"><div className="sub-heading"><h2>Review the product and manufacturing route</h2><p>Fabric, pattern, branding and construction are approved together before bulk production.</p></div><div className="sub-cards"><a href={fabric.productHref}><h3>Garment reference</h3><p>{fabric.productLabel}</p><span>View product details →</span></a><a href="/customization/sublimated-bjj-mma-shorts"><h3>Custom fight shorts</h3><p>Plan shell, liner, waistband, artwork and order quantities.</p><span>Explore customization →</span></a><a href="/customization/sublimated-rash-guards"><h3>Custom rash guards</h3><p>Review main knits, mesh inserts and garment finishing.</p><span>Explore customization →</span></a></div></section>
    <section className="sub-cta"><div><h2>Request a swatch and garment sample</h2><p>Share your product reference, estimated quantity, size range, artwork and target delivery date. Mention {fabric.title}.</p></div><div className="sub-actions"><a className="sub-button" href={`/project-builder?source=fabric-${fabric.slug}`}>Start your project brief →</a><a className="sub-button sub-outline" href="/factory#fabrics">Back to Fabric Library</a></div></section>
  </article>;
}
