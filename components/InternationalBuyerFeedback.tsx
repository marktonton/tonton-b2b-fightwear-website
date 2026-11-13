import Link from 'next/link';
import { internationalBuyerReviews, reviewSources } from '../lib/international-buyer-feedback';
import './international-buyer-feedback.css';
const base = 'https://assets.tontongear.com/assets/reviews/international-buyer-feedback/';
export default function InternationalBuyerFeedback({family}:{family?: 'rash' | 'shorts'}) {
 const selected = family === 'rash' ? ['us-gym','nz-fabric','au-colour'] : family === 'shorts' ? ['uk-shorts','ca-kit','uk-print'] : null;
 const reviews = selected ? internationalBuyerReviews.filter(r => selected.includes(r.id)) : internationalBuyerReviews;
 return <section className="international-feedback" id="international-buyer-feedback" aria-labelledby="international-feedback-title">
 <header><p className="international-feedback-kicker">DOCUMENTED BUYER FEEDBACK · 2023–2025</p>
 <h2 id="international-feedback-title">{family === 'rash' ? 'Custom rash guard buyer feedback' : family === 'shorts' ? 'Custom MMA and grappling shorts buyer feedback' : 'International buyer feedback on custom fightwear'}</h2>
 <p>Buyer comments on custom rash guards, MMA shorts and team fightwear: fabric, fit, artwork and communication. These are individual experiences from Alibaba review screenshots supplied by TONTON.</p>
 {!family && <p>13 distinct review records after removing duplicate appearances: 11 five-star and 2 four-star reviews. These records are not a sitewide rating or a count of unique buyers.</p>}</header>
 <div className="international-feedback-grid">{reviews.map(r => <article className="international-feedback-card" key={r.id}>
 <p className="international-feedback-topic">{r.topic}</p><h3>{r.buyer} · {r.country}</h3>
 <p className="international-feedback-meta"><span aria-label={`${r.stars} out of 5 in this review`}>{'★'.repeat(r.stars)}{'☆'.repeat(5-r.stars)} · {r.stars}/5</span> · <time dateTime={r.date}>{r.date}</time></p>
 <blockquote lang={r.id === 'fr-team' ? 'fr' : 'en'}>{r.quote}</blockquote>
 {r.id === 'fr-team' && <p className="international-feedback-note">English translation: A great team, attentive and very responsive; the rash guards are of excellent quality.</p>}
 {(r.id === 'uk-rash' || r.id === 'uk-shorts') && <p className="international-feedback-note">Excerpt from the visible review. The screenshot cuts off the remaining text.</p>}
 <a href={base+reviewSources[r.source]} target="_blank" rel="noopener noreferrer">View source screenshot ↗</a>
 </article>)}</div>
 {!family && <details className="international-feedback-sources"><summary>Original review screenshots and source notes</summary><p>Original wording, dates and star ratings are retained, including fit and print criticisms. The same New Zealand review appears in two screenshots; the UK 2-in-1 shorts review appears under two listings. Each is counted once. A purchase badge in a supplied screenshot is the source platform’s label, not independent verification by this website. Historical listing prices and the source page’s aggregate rating are not current TONTON prices or a website-wide rating.</p><div className="international-feedback-source-grid">{reviewSources.map((file,i) => <figure key={file}><a href={base+file} target="_blank" rel="noopener noreferrer"><img src={base+file} alt={['Buyer review screenshot with seven reviews from 2023 and 2024','Rash guard buyer review screenshot from 2025','UK 2-in-1 shorts review shown under two product listings','New Zealand, France and UK buyer review screenshot from 2025'][i]} width={[919,884,977,978][i]} height={[1880,737,579,563][i]} loading="lazy" /></a><figcaption>Supplied Alibaba review screenshot · open full size</figcaption></figure>)}</div></details>}
 <div className="international-feedback-links">{family ? <Link href="/cases#international-buyer-feedback">Read all international buyer feedback →</Link> : <><Link href="/customization/sublimated-rash-guards">Custom rash guards →</Link><Link href="/customization/sublimated-bjj-mma-shorts">Custom BJJ &amp; MMA shorts →</Link></>}</div>
 </section>;
}
