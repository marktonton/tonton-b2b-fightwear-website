import Link from 'next/link';
import { CUSTOMER_CASES } from '../lib/customer-cases';
import './customer-case-teaser.css';
export default function CustomerCaseTeaser() {
  const item = CUSTOMER_CASES[0];
  return <section className="customer-case-teaser" aria-label="Featured customer case"><div><p className="case-teaser-kicker">CUSTOMER CASE / UNITED STATES</p><h2>From an order to a continuing collaboration.</h2><p>Explore a repeat customer's rash guard and shorts order history, specification conversations and Alibaba feedback. Customer identity and commercial details are withheld.</p><Link className="case-teaser-button" href={`/cases/${item.slug}`}>View Case Study →</Link><Link className="case-teaser-all" href="/cases">All customer cases →</Link></div><dl><div><dt>Order records</dt><dd>2025–2026</dd></div><div><dt>Product scope</dt><dd>Rash guards &amp; shorts</dd></div><div><dt>Evidence</dt><dd>Orders, conversations &amp; feedback</dd></div></dl></section>;
}
