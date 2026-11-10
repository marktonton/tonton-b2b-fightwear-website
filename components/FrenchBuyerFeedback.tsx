import Link from 'next/link';
import './french-buyer-feedback.css';

export default function FrenchBuyerFeedback() {
  return <section className="french-buyer-feedback" aria-labelledby="french-buyer-heading">
    <div><p className="french-buyer-kicker">CUSTOMER FEEDBACK · FRANCE</p><h2 id="french-buyer-heading">A French brand’s repeat-buyer feedback</h2>
      <p>Custom rash guards and shorts for a French brand. In the supplied Alibaba review, the buyer describes an order of approximately 100 pieces and comments on quality, design accuracy, service and delivery.</p>
      <p className="french-buyer-meta">A***W · France · Repeat buyer · March 10, 2026 · 5/5 in this review</p>
      <blockquote>“I am happy for this big order (like 100 pieces of Rashguard and short for my brand). I am a french brand.”</blockquote>
      <p className="french-buyer-source">Source: customer review from TONTON’s Alibaba store, supplied by TONTON. The image is a reformatted presentation of that review, not the original platform screenshot. Quantity is the buyer’s description.</p>
      <div className="french-buyer-links"><Link href="/project-builder?source=french-repeat-buyer-feedback&product=rash-guard">Start Your Custom Rash Guard Project →</Link><a href="https://tontos.m.en.alibaba.com/" target="_blank" rel="noopener noreferrer">Visit our Alibaba store ↗</a></div>
    </div>
    <figure><a href="https://assets.tontongear.com/assets/Feedback/Feedback.png" target="_blank" rel="noopener noreferrer" aria-label="Open the reformatted French buyer review image"><img src="https://assets.tontongear.com/assets/Feedback/Feedback.png" alt="Reformatted five-star Alibaba review from a French repeat buyer, with a green and blue custom rash guard photograph" width="1568" height="1003" loading="lazy" /></a><figcaption>Reformatted customer review · Click to enlarge</figcaption></figure>
  </section>;
}
