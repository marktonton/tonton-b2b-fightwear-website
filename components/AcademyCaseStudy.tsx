import Link from 'next/link';

export default function AcademyCaseStudy() {
  return <section className="buyer-fit-spec academy-case-study" id="academy-project-record" aria-labelledby="academy-case-title">
    <p className="rg-eyebrow">DOCUMENTED CUSTOMER PROJECT / ACADEMY TEAM KIT</p>
    <h2 id="academy-case-title">An academy kit evaluated in weekly training</h2>
    <div className="buyer-fit-columns"><figure><a href={'/assets/products/customer-reviews/academy-team-repeat-buyer-review.png'} target="_blank" rel="noopener noreferrer"><img src={'/assets/products/customer-reviews/academy-team-repeat-buyer-review.png'} alt="Original Alibaba repeat-buyer review dated January 23, 2026, with an academy wearing its coordinated rash guards and shorts" width={900} height={1000} loading="lazy" /></a><figcaption>Customer-supplied Alibaba.com review screenshot · January 23, 2026 · Buyer identity masked.</figcaption></figure>
      <div><h3>The project</h3><p>The supplied review documents an academy order of coordinated rash guards and shorts. The accompanying team photograph shows the finished kit in use.</p>
      <h3>What the buyer reported</h3><p>The repeat buyer described comfortable fit across different body types, heavy weekly training and an appearance that remained sharp after repeated washing. These are attributed buyer observations, not independent laboratory results.</p>
      <h3>What this helps your academy decide</h3><p>Review the top and shorts as a worn kit, collect separate size allocations and inspect the approved garments for movement and comfort. Keep artwork, measurements and sample approval together for future member orders.</p></div></div>
    <p className="buyer-fit-note">Evidence boundary: this source does not establish the order quantity, destination, exact fabric blend, sample revisions, delivery interval or a measured wash-test result. It is a related completed project, not proof that every current product uses the same specification.</p>
    <p><Link href="/solutions/bjj-academy-uniforms">Plan your own academy kit →</Link> <Link href="https://tontos.m.en.alibaba.com/">View the TONTON Alibaba storefront ↗</Link></p>
  </section>;
}
