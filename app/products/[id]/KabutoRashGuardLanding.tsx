import Link from 'next/link';
import BuyerLearningPath from '../../../components/BuyerLearningPath';
import FactoryVideo from '../../../components/FactoryVideo';
import data from '../../../data/kabuto-product.json';
import { serializeStructuredData } from '../../../lib/structured-data';
import { ORGANIZATION_REFERENCE } from '../../../lib/site-entity';
import './oni-rash-guard.css';

const photo = (key: string) => `${data.base}samurai-kabuto-${key}.webp`;
const url = `https://www.tontongear.com/products/${data.id}`;
const quote = '/project-builder?reference=TT-RG-KABUTO-LS01&source=samurai-kabuto-rash-guard';
const details = [
  ['artwork-closeup', 'Kabuto, Oni and falling sakura', 'Gold-toned helmet ornaments, a blue mask and pink blossoms create a detailed backpiece. Review print color and placement across the finished panel.', 2048],
  ['sleeve-detail', 'Blue labyrinth sleeves', 'Blue and black maze graphics follow the sleeve panels. Curved raglan seams frame the shoulder; inspect their finish and feel on the sample.', 800],
  ['hem-closeup', 'The TONTON hem signature', 'A grey box badge sits above the bottom finish. Inspect the double-needle hem, side seam and torso length as one construction detail.', 2048],
] as const;
const views = [
  ['front-fit', 'Front fit'], ['side-fit', 'Three-quarter fit'], ['back-fit', 'Full back artwork'],
  ['chest-detail', 'Chest branding and neckline'], ['crossed-arms', 'Sleeve pattern and raglan panels'], ['hem-detail', 'Lower hem and side seam'],
] as const;
const schema = { '@context': 'https://schema.org', '@graph': [
  { '@type': 'WebPage', '@id': `${url}#webpage`, url, name: data.name, description: data.seoDescription, dateModified: '2026-10-30', mainEntity: { '@id': `${url}#product` } },
  { '@type': 'Product', '@id': `${url}#product`, url, name: data.name, description: data.seoDescription, sku: 'TT-RG-KABUTO-LS01', brand: { '@type': 'Brand', name: 'TONTON' }, manufacturer: ORGANIZATION_REFERENCE, image: [photo('front-fit'), photo('back-detail'), photo('artwork-closeup')], color: 'Black / blue with multicolor samurai and sakura artwork', material: 'Polyester / spandex compression blend; exact composition and GSM confirmed during sampling' },
  { '@type': 'VideoObject', '@id': `${url}#film`, name: 'TONTON Samurai Kabuto rash guard product film', description: 'A product film showing samurai and sakura artwork, labyrinth sleeves and compression rash guard construction.', thumbnailUrl: photo('back-detail'), contentUrl: `${data.base}samurai-kabuto-film-1080.mp4`, uploadDate: '2026-10-30T16:48:00+08:00', duration: 'PT15S' },
  { '@type': 'FAQPage', '@id': `${url}#questions`, mainEntity: data.faqs.map(([q, a]) => ({ '@type': 'Question', name: q, acceptedAnswer: { '@type': 'Answer', text: a } })) },
  { '@type': 'BreadcrumbList', itemListElement: [{ '@type': 'ListItem', position: 1, name: 'Products', item: 'https://www.tontongear.com/products' }, { '@type': 'ListItem', position: 2, name: 'Rash Guards', item: 'https://www.tontongear.com/products/category/rash-guards' }, { '@type': 'ListItem', position: 3, name: data.name, item: url }] },
] };

export default function KabutoRashGuardLanding() {
  return <div className="oni-page">
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: serializeStructuredData(schema) }} />
    <nav className="oni-breadcrumb" aria-label="Breadcrumb"><Link href="/products">Products</Link> / <Link href="/products/category/rash-guards">Rash Guards</Link> / Samurai Kabuto</nav>
    <section className="oni-hero" aria-labelledby="kabuto-title">
      <div className="oni-hero-copy"><p className="oni-eyebrow">PRIVATE LABEL · OEM / ODM</p><h1 id="kabuto-title">Custom Samurai Kabuto Long-Sleeve Compression Rash Guard</h1>
        <p className="oni-lead">Samurai artwork. Blue labyrinth sleeves. Built around your brand's next training collection.</p>
        <p>Develop a long-sleeve BJJ and MMA rash guard with Kabuto helmet artwork, a blue Oni mask and falling sakura blossoms. Review the compression knit, shoulder fit and seam finish before approving your branded version.</p>
        <ul><li>Polyester / spandex compression fabric options</li><li>Full-panel sublimation and custom branding</li><li>Raglan sleeves and reinforced flatlock seam brief</li><li>Selected custom projects from 10 pieces</li></ul>
        <Link className="oni-button" href={quote}>Request custom pricing →</Link><p className="oni-note">Top only. Shorts are styling references. Exact fabric composition, GSM, measurements and finishing are confirmed on the approved sample.</p>
      </div>
      <figure className="oni-hero-image"><img src={photo('back-detail')} width="800" height="1067" fetchPriority="high" alt="TONTON Samurai Kabuto long-sleeve rash guard with blue Oni mask, helmet and sakura back artwork" /><figcaption>Samurai Kabuto · supplied garment reference</figcaption></figure>
    </section>
    <div className="oni-content">
      <section className="oni-intro"><div className="oni-pair">{[['front-fit', 'Front silhouette'], ['side-fit', 'Raglan sleeve profile']].map(([key, label]) => <figure key={key}><img src={photo(key)} width="800" height="1067" loading="lazy" alt={`Samurai Kabuto rash guard — ${label}`} /><figcaption>{label}</figcaption></figure>)}</div><div><p className="oni-eyebrow">TT-RG-KABUTO-LS01 / PRODUCT REFERENCE</p><h2>A Custom Rash Guard for BJJ Brands and Academies</h2><p>A restrained black front contrasts with a detailed samurai backpiece. Blue maze graphics connect the sleeves to the chest's vintage TON lettering, while the lower TONTON box badge completes the garment.</p><p>Use this reference to discuss your own academy graphics, sleeve design, labels and fit. Approve artwork alignment, measurements and fabric performance together before bulk production.</p><Link href={quote}>Discuss your branded version →</Link></div></section>
      <section><p className="oni-eyebrow">ARTWORK / CONSTRUCTION / FINISH</p><h2>Inspect the Product Details</h2><div className="oni-details">{details.map(([key, title, copy, width], i) => <article key={key}><img src={photo(key)} width={width} height={width === 2048 ? 2048 : 1067} loading="lazy" alt={`${title} — Samurai Kabuto rash guard detail`} /><p className="oni-eyebrow">0{i + 1} / DETAIL REFERENCE</p><h3>{title}</h3><p>{copy}</p></article>)}</div><p className="oni-note">Detail visuals support artwork and construction review. Fabric weight, print durability and seam comfort must be checked on the approved physical sample.</p></section>
      <section><p className="oni-eyebrow">FABRIC & CONSTRUCTION</p><h2>Four Decisions Before Sample Approval</h2><div className="oni-four">{[
        ['01', 'Compression stretch knit', 'Select the polyester/spandex blend for its hand feel, stretch and recovery. Confirm GSM, opacity, abrasion resistance and moisture handling against your requirements.'],
        ['02', 'Reinforced flatlock seams', 'The construction brief specifies 4-needle 6-thread flatlock seams. Review the neckline, shoulders and side seams for smoothness, stretch and workmanship.'],
        ['03', 'Full-panel sublimation', 'Develop the backpiece, labyrinth sleeves and chest graphics as one print layout. Approve color standards, panel matching, stretch appearance and wash testing.'],
        ['04', 'Raglan cut and extended hem', 'Review overhead reach, shoulder rotation and torso coverage. Confirm the double-needle bottom finish and whether your version needs an optional silicone gripper.'],
      ].map(([n, title, copy]) => <article key={n}><span>{n}</span><h3>{title}</h3><p>{copy}</p></article>)}</div></section>
      <section className="oni-film"><div><p className="oni-eyebrow">SAMURAI KABUTO / IN MOTION</p><h2>Product Video</h2><p>Watch the samurai back artwork, sleeve pattern and garment details in this 15-second product film.</p><p>The smaller 720p version is selected by default. Switch to 1080p for a closer view.</p></div><FactoryVideo src={`${data.base}samurai-kabuto-film-1080.mp4`} lighterSrc={`${data.base}samurai-kabuto-film-720.mp4`} poster={photo('back-detail')} label="TONTON Samurai Kabuto long-sleeve rash guard product film" width={810} height={1080} preload="none" /></section>
      <section><p className="oni-eyebrow">PRODUCT SPECIFICATION</p><h2>Samurai Kabuto Rash Guard Specifications</h2><table><caption>Development brief — final specifications confirmed on the approved sample</caption><tbody>{data.specs.map(([name, value]) => <tr key={name}><th scope="row">{name}</th><td>{value}</td></tr>)}</tbody></table></section>
      <section><p className="oni-eyebrow">FIT / ALL ANGLES</p><h2>Garment Views and Finishing Details</h2><p>Review the front, back, shoulder panels and lower hem. Matching shorts shown in the photographs are not included in this product reference.</p><div className="oni-gallery">{views.map(([key, label]) => <figure key={key}><img src={photo(key)} width="800" height="1067" loading="lazy" alt={`Samurai Kabuto long-sleeve rash guard — ${label}`} /><figcaption>{label}</figcaption></figure>)}</div></section>
      <section className="oni-artwork"><figure><img src={photo('artwork-closeup')} width="2048" height="2048" loading="lazy" alt="Close view of Samurai Kabuto helmet, blue Oni mask and pink sakura sublimation artwork" /><figcaption>Back artwork · 2K detail reference</figcaption></figure><div><p className="oni-eyebrow">MAKE THE BRIEF YOURS</p><h2>Private-Label Artwork and Branding</h2><p>Bring your academy crest, original back graphic and color palette. Review the artwork across the back, chest and sleeve panels, then confirm neck labels, lower-hem branding and packaging.</p><p>For repeat orders, keep the approved sample, print files, material specification and size chart together.</p><Link className="oni-button" href={quote}>Plan your custom sample →</Link></div></section>
      <section><p className="oni-eyebrow">FOR BRANDS / GYMS / TEAMS</p><h2>Order Planning</h2><table><caption>Information to confirm before sampling and bulk production</caption><tbody>{[
        ['Quantity', 'Selected custom projects from 10 pieces. Confirm minimums per design, material and colorway.'],
        ['Sizes and fit', 'Provide quantities by size and approve a measurement chart, grading and tolerances.'],
        ['Sampling', 'The advertised 3–7 day target starts after artwork and details are confirmed. Material sourcing, new patterns and revisions may extend timing.'],
        ['Quote scope', 'Confirm garment specifications, branding, labels, packaging, sampling costs, shipping basis and delivery country.'],
        ['Approval', 'Inspect fit, seams, hem movement, print appearance under stretch and agreed wash-test requirements. Retain the approved specification for reorders.'],
      ].map(([name, value]) => <tr key={name}><th scope="row">{name}</th><td>{value}</td></tr>)}</tbody></table></section>
      <section id="questions"><p className="oni-eyebrow">BUYER QUESTIONS</p><h2>Frequently Asked Questions</h2>{data.faqs.map(([q, a]) => <details key={q}><summary>{q}</summary><p>{a}</p></details>)}</section>
      <section className="oni-cta"><p className="oni-eyebrow">START WITH A CLEAR BRIEF</p><h2>Start Your Custom Samurai Rash Guard Project</h2><p>Send your artwork, quantity, size range and target delivery date.</p><Link className="oni-button" href={quote}>Build your rash guard project →</Link><p><Link href="/customization/sublimated-rash-guards">Rash guard customization</Link> · <Link href="/products/category/rash-guards">Compare rash guards</Link> · <Link href="/resources/custom-fightwear-sampling-moq">Sampling &amp; MOQ</Link></p></section>
    </div><BuyerLearningPath family="rashGuard" />
  </div>;
}
