import Link from 'next/link';
import './south-africa-buyer-feedback.css';
const BASE = 'https://assets.tontongear.com/assets/Feedback/';
const photos = [
  ['flow-rash-guard-side.webp', 'Front view of the customer-supplied black FLOW academy rash guard with blue and orange graphics', 'Front · Customer photograph'],
  ['flow-rash-guard-back.webp', 'Back view of the FLOW Jiu Jitsu Academy custom rash guard', 'Back · Academy artwork'],
  ['flow-rash-guard-front.webp', 'Side panel, sleeve print and stitching on the customer-supplied rash guard', 'Side · Printed panel and seam'],
  ['flow-rash-guard-hem-detail.webp', 'Inside hem showing the grip band and stitching on the customer-supplied rash guard', 'Hem · Grip band detail'],
];
export default function SouthAfricaBuyerFeedback() {
  return <section className="sa-buyer-feedback" aria-labelledby="sa-buyer-heading">
    <header><p className="sa-buyer-kicker">CUSTOMER FEEDBACK · SOUTH AFRICA</p><h2 id="sa-buyer-heading">Custom academy rash guards, photographed by the buyer</h2><p>A South African repeat buyer shared a five-star Alibaba review and these photographs of a custom rash guard carrying FLOW Jiu Jitsu Academy artwork.</p><p className="sa-buyer-meta">M***Y · South Africa · Repeat buyer · December 9, 2025 · 5/5 in this review</p><blockquote>“I loved the product; the quality is excellent, one of the best”</blockquote><p>The buyer also recommends the company to customers looking for a custom rash guard. This is one customer’s feedback on their order.</p></header>
    <div className="sa-buyer-gallery">{photos.map(([file, alt, caption]) => <figure key={file}><a href={BASE + file} target="_blank" rel="noopener noreferrer" aria-label={`Enlarge: ${caption}`}><img src={BASE + file} alt={alt} width="1536" height="2048" loading="lazy" /></a><figcaption>{caption} · Click to enlarge</figcaption></figure>)}</div>
    <details className="sa-buyer-evidence"><summary>Read the supplied Alibaba review screenshot</summary><a href={BASE + 'south-africa-buyer-review.webp'} target="_blank" rel="noopener noreferrer"><img src={BASE + 'south-africa-buyer-review.webp'} alt="Supplied Alibaba review screenshot showing a five-star review from a South African repeat buyer dated December 9, 2025" width="995" height="718" loading="lazy" /></a><p>The screenshot preserves the platform record. Any price displayed is historical platform information, not a current TONTON quotation.</p></details>
    <p className="sa-buyer-source">Source: customer photographs and Alibaba review screenshot supplied by TONTON. Images were compressed for web delivery; customer artwork is retained. The store link below is not a direct link to this review.</p>
    <div className="sa-buyer-actions"><Link href="/project-builder?source=south-africa-buyer-feedback&product=rash-guard">Plan Your Academy Rash Guards →</Link><Link href="/solutions/bjj-academy-uniforms">Explore Academy Teamwear →</Link><a href="https://tontos.m.en.alibaba.com/" target="_blank" rel="noopener noreferrer">Our Alibaba Store ↗</a></div>
  </section>;
}
