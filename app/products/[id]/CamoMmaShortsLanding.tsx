import Link from 'next/link';
import { resolveImage } from '../../../lib/image-resolver';
import { CAMO_MMA_SHORTS_FAQS } from '../../../lib/camo-mma-shorts-product';
import ProductSpecificationTable from '../../../components/ProductSpecificationTable';
import RelatedResources from '../../../components/RelatedResources';
import ProductLandingLinks from '../../../components/ProductLandingLinks';
import AnswerEvidencePanel from '../../../components/AnswerEvidencePanel';

type Product = { id: string; name: string; image: string; images?: string[]; description: string; features?: string[] };

const ASSET_ROOT = 'assets/products/grappling-shorts-products/camo-side-split';

const BENEFITS = [
  { title: 'Fight-focused silhouette', copy: 'A short, fitted profile with no exposed storage pockets keeps the exterior clean for combat training.' },
  { title: 'Stretch mobility', copy: 'The polyester-spandex body moves through kicks, hip rotation, sprawls, squats and lunges.' },
  { title: 'Triple waist control', copy: 'Elastic support, a hook-and-loop fly and an internal drawcord work together for an adjustable hold.' },
  { title: 'Reinforced side split', copy: 'A short outer-leg opening releases the thigh while reinforcement supports repeated high-mobility use.' },
  { title: 'Smooth sublimation', copy: 'Artwork is dyed into the synthetic fibers for complex graphics without a thick raised print layer.' },
  { title: 'Panelled construction', copy: 'Front, back, side and crotch panels shape the shorts around the hips, seat and upper leg.' },
] as const;

const DETAIL_PANELS = [
  { image: `${ASSET_ROOT}/black-camo-construction.webp`, eyebrow: 'CAMO & CONSTRUCTION', title: 'Inspect the split, hem and sublimated surface', copy: 'The tonal camouflage direction, reinforced split and parallel hem stitching can be reviewed together before sampling.', alt: 'Black camouflage MMA fight shorts with close-up views of the side split and reinforced hem stitching' },
  { image: `${ASSET_ROOT}/waist-and-inner-structure.webp`, eyebrow: 'ADJUST YOUR FIT', title: 'Outer closure and inner adjustment', copy: 'Front and back views are paired with close-ups of the hook-and-loop waist and internal drawcord system.', alt: 'Front and back MMA shorts views with hook-and-loop waistband and internal drawstring close-ups' },
  { image: `${ASSET_ROOT}/training-applications.webp`, eyebrow: 'TRAINING APPLICATIONS', title: 'Built around high-output movement', copy: 'Illustrated scenarios show the intended movement range across combat drills, squats, lunges and HIIT conditioning.', alt: 'Illustrated MMA, gym squat and HIIT lunge training scenarios for side-split fight shorts' },
] as const;

export default function CamoMmaShortsLanding({ product }: { product: Product }) {
  const whatsappHref = `https://wa.me/8617722438678?text=${encodeURIComponent(`Hello TONTON, I would like a quote for ${product.name}. Please advise MOQ, sample timing and customization options.`)}`;

  return (
    <div className="rg-product-page mf-product-page">
      <section className="mf-banner" aria-label="Camo side-split MMA fight shorts collection">
        <img src={resolveImage(`${ASSET_ROOT}/fight-shorts-banner.webp`)} alt="Black, navy and olive custom side-split MMA fight shorts" />
      </section>

      <nav aria-label="Breadcrumb" className="rg-breadcrumb">
        <Link href="/">Home</Link><span>/</span>
        <Link href="/customization/sublimated-bjj-mma-shorts">Custom BJJ &amp; MMA Shorts</Link><span>/</span>
        <span aria-current="page">{product.name}</span>
      </nav>

      <section className="rg-product-hero mf-product-hero">
        <div className="rg-product-hero-media mf-hero-media"><img src={resolveImage(`${ASSET_ROOT}/black-camo-construction.webp`)} alt="Men's custom camo side-split MMA fight shorts construction" /></div>
        <div className="rg-product-hero-copy">
          <p className="rg-eyebrow">Custom MMA Fight Shorts</p>
          <h1>Men&apos;s Camo Side-Split MMA Fight Shorts</h1>
          <p className="rg-lead">A short, fitted fight-short construction made for kicks, hip rotation and conditioning—not a tactical storage short. Smooth stretch fabric, a secure three-part waist and a reinforced side split support high-output combat movement.</p>
          <div className="rg-spec-strip" aria-label="Core product specifications">
            <div><strong>88 / 12</strong><span>Polyester / Spandex</span></div>
            <div><strong>3-Part</strong><span>Waist Adjustment</span></div>
            <div><strong>Side Split</strong><span>Reinforced Mobility</span></div>
          </div>
          <ul className="rg-hero-features">
            <li>Lightweight, smooth stretch performance fabric</li>
            <li>Elastic waist, hook-and-loop fly and internal drawcord</li>
            <li>Short reinforced split for kicks, knees and wide stances</li>
            <li>Sublimated camo, logo and sponsor artwork</li>
            <li>No exposed storage pockets</li>
          </ul>
          <div className="rg-hero-actions">
            <Link className="rg-btn-primary" href={{ pathname: '/project-builder', query: { product: 'MMA Fight Shorts', reference: product.name, source: 'product-page' } }}>Build This Product Brief</Link>
            <a className="rg-btn-secondary" href={whatsappHref} target="_blank" rel="noopener noreferrer">Quote on WhatsApp</a>
          </div>
        </div>
      </section>

      <AnswerEvidencePanel
        question="What defines these camo side-split MMA fight shorts?"
        answer="The confirmed construction uses 88% polyester and 12% spandex, an elastic waist with hook-and-loop fly and internal drawcord, a reinforced side split and sublimated graphics. Competition requirements and real-wear movement remain separate checks for the buyer and approved sample."
      />

      <ProductSpecificationTable title="Fight-short construction at a glance" intro="Confirmed materials and visible construction are separated from performance checks that should be completed on the approved sample." reviewedDate="September 22, 2026" rows={[
        ['Product type', "Men's camo side-split MMA fight shorts"],
        ['Main body', '88% polyester / 12% spandex stretch performance fabric'],
        ['Waist system', 'Broad elastic waist, hook-and-loop fly and internal drawcord'],
        ['Leg opening', 'Short reinforced side split'],
        ['Graphics', 'Full-color sublimation for camo, logos and team artwork'],
        ['Construction', 'Panelled front, back, side and crotch shaping with reinforced stitching'],
        ['Pockets', 'No exposed storage pockets specified'],
        ['Recommended use', 'MMA, kickboxing, bag work, martial-arts practice and conditioning'],
      ]} />

      <section className="gs-benefits-section" aria-labelledby="mf-benefits-title">
        <div className="rg-section-heading"><p className="rg-eyebrow">Movement-First Design</p><h2 id="mf-benefits-title">A combat short—not a tactical utility short</h2><p>The construction prioritizes a secure waist, unrestricted leg movement and a smooth exterior rather than cargo storage.</p></div>
        <div className="gs-benefit-grid">{BENEFITS.map((item, index) => <article key={item.title}><span>{String(index + 1).padStart(2, '0')}</span><h3>{item.title}</h3><p>{item.copy}</p></article>)}</div>
      </section>

      <section className="rg-fit-section" id="construction">
        <div><p className="rg-eyebrow">Material &amp; Construction</p><h2>Light, smooth and shaped for rotation</h2></div>
        <div className="rg-fit-copy">
          <p>The 88% polyester and 12% spandex body balances low weight, strength and stretch. Its smooth surface is suited to repeated training contact, while panelled shaping and the side split reduce pull across the hip, crotch and thigh.</p>
          <dl>
            <div><dt>Fabric behavior</dt><dd>Lightweight stretch with a smooth hand and less water weight than bulky traditional satin constructions</dd></div>
            <div><dt>Waist control</dt><dd>Elastic support plus hook-and-loop closure and an internal drawcord for adjustable security</dd></div>
            <div><dt>Mobility</dt><dd>A reinforced short split creates extra clearance for kicks, knee strikes, lunges and deep squats</dd></div>
            <div><dt>Panel shaping</dt><dd>Separated front, back, side and crotch areas follow the hips, seat and upper leg through rotation</dd></div>
            <div><dt>Artwork</dt><dd>Sublimated graphics enter the synthetic fibers, avoiding a thick raised surface and reducing large-area cracking</dd></div>
            <div><dt>Sample checks</dt><dd>Confirm abrasion, stretch recovery, seam strength, hook-and-loop comfort and logo color on the approved sample</dd></div>
          </dl>
        </div>
      </section>

      <section className="mf-detail-section" aria-labelledby="mf-detail-title">
        <div className="rg-section-heading"><p className="rg-eyebrow">Product Evidence</p><h2 id="mf-detail-title">See the construction before you brief the factory</h2><p>Each panel highlights a different buying decision: exterior finish, waist security and intended movement.</p></div>
        <div className="mf-detail-grid">{DETAIL_PANELS.map((item, index) => <figure key={item.image}><div><img src={resolveImage(item.image)} alt={item.alt} loading="lazy" /></div><figcaption><span>{String(index + 1).padStart(2, '0')} / {item.eyebrow}</span><h3>{item.title}</h3><p>{item.copy}</p></figcaption></figure>)}</div>
      </section>

      <section className="rg-custom-section">
        <div><p className="rg-eyebrow">Customization Scope</p><h2>Turn the base construction into your team short</h2><p>Use the product as a starting point, then confirm artwork, fit and construction on the digital mockup and physical sample.</p></div>
        <ol>
          <li><span>01</span><div><h3>Camo &amp; artwork direction</h3><p>Develop custom camouflage, solid colors, team graphics, sponsor marks and logo placement through sublimation.</p></div></li>
          <li><span>02</span><div><h3>Waist presentation</h3><p>Review waistband color, hook-and-loop tab, inner drawcord and branding direction.</p></div></li>
          <li><span>03</span><div><h3>Fit &amp; split height</h3><p>Confirm short length, leg opening and split position against the intended training use and size range.</p></div></li>
          <li><span>04</span><div><h3>Labels &amp; packaging</h3><p>Add approved private labels, size identification and packing requirements for the production brief.</p></div></li>
        </ol>
      </section>

      <section className="mf-use-section" aria-labelledby="mf-use-title">
        <div className="rg-section-heading"><p className="rg-eyebrow">Recommended Applications</p><h2 id="mf-use-title">Combat training first, conditioning second</h2><p>Designed around MMA and striking movement, with useful crossover into strength and high-intensity training.</p></div>
        <div className="mf-use-grid">
          <article><h3>Combat training</h3><p>MMA drills, kickboxing, bag work, pad sessions, karate practice and general martial-arts training.</p></article>
          <article><h3>Strength &amp; conditioning</h3><p>Squats, lunges, mobility work, gym sessions and HIIT where a secure waist and free leg movement matter.</p></article>
          <article><h3>Competition check</h3><p>For formal competition or grappling, verify the relevant equipment rules and approve real-wear performance before bulk production.</p></article>
        </div>
      </section>

      <section className="rg-faq-section">
        <div className="rg-faq-heading"><p className="rg-eyebrow">Buyer FAQ</p><h2>Custom MMA fight shorts questions</h2><p>Clear answers about fabric, waist construction, side splits, sublimation and intended use.</p></div>
        <div className="rg-faq-list">{CAMO_MMA_SHORTS_FAQS.map((item, index) => <details key={item.question} open={index === 0}><summary><span>{String(index + 1).padStart(2, '0')}</span>{item.question}</summary><p>{item.answer}</p></details>)}</div>
      </section>

      <RelatedResources slugs={['high-split-grappling-shorts-specifications', 'high-split-vs-standard-grappling-shorts', 'custom-fightwear-sampling-moq']} />
      <ProductLandingLinks productId={product.id} />
    </div>
  );
}
