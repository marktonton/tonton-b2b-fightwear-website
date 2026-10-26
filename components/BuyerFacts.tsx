import { COMPANY_NAME } from '../lib/site-entity';
import './buyer-facts.css';

const facts = [
  { name: 'Manufacturer', text: `${COMPANY_NAME} (TONTON), established in 2004, supports custom fightwear and sportswear projects.`, href: '/about', link: 'Company profile' },
  { name: 'Products and buyers', text: 'Custom rash guards, training shorts and BJJ/MMA shorts for brands, gyms, academies, clubs and teams.', href: '/collections', link: 'Compare product categories' },
  { name: 'Materials', text: 'Rash guard reference: 220gsm, 85% polyester / 15% spandex. Two-layer shorts reference: four-way stretch outer fabric and 250gsm milk-silk liner. Final specifications depend on the selected style and approved sample.', href: '/factory#fabrics', link: 'Explore the fabric library' },
  { name: 'MOQ and sampling', text: 'Selected styles start from 10 pcs. Target sampling is 3–7 days after product details and usable artwork are confirmed. Final quantity, timing and price are confirmed with your brief.', href: '/resources/custom-fightwear-sampling-moq', link: 'MOQ and sampling guide' },
];

export default function BuyerFacts() {
  return <section className="buyer-facts" aria-labelledby="buyer-facts-title">
    <h2 id="buyer-facts-title">Custom fightwear manufacturing at a glance</h2>
    <p>Use these starting points to define your OEM / ODM project, then confirm the specification for your selected product.</p>
    <dl>{facts.map(fact => <div key={fact.name}><dt>{fact.name}</dt><dd>{fact.text} <a href={fact.href}>{fact.link} →</a></dd></div>)}</dl>
    <p><a href="/project-builder?source=buyer-facts">Send your product, quantity, artwork and delivery requirements →</a></p>
  </section>;
}
