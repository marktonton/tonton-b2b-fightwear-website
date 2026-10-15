import Link from 'next/link';
import { BUYER_SOLUTIONS } from '../lib/buyer-solutions';

export default function BuyerSolutionsLinks() {
  return <section className="buyer-solutions-links" aria-labelledby="buyer-solutions-title"><p className="rg-eyebrow">PLAN AROUND YOUR BUSINESS</p><h2 id="buyer-solutions-title">Choose your custom fightwear buying route</h2><div>{BUYER_SOLUTIONS.map((item) => <article key={item.slug}><h3><Link href={`/solutions/${item.slug}`}>{item.slug === 'bjj-academy-uniforms' ? 'BJJ academy uniforms' : 'Private-label fightwear brands'}</Link></h3><p>{item.description}</p><Link href={`/solutions/${item.slug}`}>Plan this project →</Link></article>)}</div></section>;
}
