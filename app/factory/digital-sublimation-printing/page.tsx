import Image from 'next/image';
import type { Metadata } from 'next';
import { resolveImage } from '../../../lib/image-resolver';
import { ORGANIZATION_ID, SITE_URL } from '../../../lib/site-entity';
import './sublimation.css';

const PATH = '/factory/digital-sublimation-printing';
const URL = `${SITE_URL}${PATH}`;
const MEDIA = '/assets/factory/digital-sublimation/';
const asset = (name: string) => resolveImage(`${MEDIA}${name}`);
const absoluteAsset = (name: string) => new globalThis.URL(asset(name), SITE_URL).href;

export const metadata: Metadata = {
  title: { absolute: 'Digital Sublimation Printing for Custom Sportswear | TONTON Factory' },
  description: 'Inside TONTON’s in-house roll-to-roll sublimation printing workshop: transfer-paper printing, polyester heat transfer, personalized teamwear, real equipment photos and videos.',
  alternates: { canonical: URL },
  openGraph: {
    title: 'Digital Sublimation Printing at the TONTON Factory',
    description: 'From approved artwork to printed transfer paper and custom polyester sportswear.',
    url: URL,
    type: 'website',
    images: [{ url: absoluteAsset('workshop.webp'), width: 2048, height: 1365, alt: 'TONTON industrial digital sublimation printing workshop' }],
  },
};

const videos = [
  { file: 'printing-130.mp4', poster: 'printing-130-poster.webp', title: 'Names, numbers & panel artwork', text: 'Numbered sportswear artwork moving through the roll-to-roll printing stage.', duration: 'PT11.9S' },
  { file: 'printing-133.mp4', poster: 'printing-133-poster.webp', title: 'Printhead movement & paper feed', text: 'A close view of the printer carriage and continuous printed output.', duration: 'PT12.833S' },
  { file: 'printing-142.mp4', poster: 'printing-142-poster.webp', title: 'Printing equipment in operation', text: 'A wider operating view of the printer and printed sportswear graphics.', duration: 'PT5.733S' },
];

const workflow = [
  ['Artwork & order review', 'Confirm the design version, garment panels, logo placement, names, numbers and size quantities. Prepare the approved file for the selected printing route.'],
  ['Print to transfer paper', 'The industrial roll-to-roll printer outputs the design onto sublimation transfer paper. This is the printing stage shown in the photographs and videos on this page.'],
  ['Roller heat transfer', 'The printed paper and suitable polyester fabric pass through separate roller heat-transfer equipment. Heat transfers the dye from the paper into the polyester fibers.'],
  ['Cut & match panels', 'After transfer, the printed fabric is cut into the required garment components. Panels are organized by order, size and personalized design before assembly.'],
  ['Sew, inspect & pack', 'The garment is sewn and finished, then reviewed against the approved specification, personalization list and packing requirements.'],
];

const faqs = [
  { q: 'What does TONTON’s digital sublimation printer do?', a: 'Our in-house industrial roll-to-roll printer prints full-color sportswear artwork, logos, names and numbers onto sublimation transfer paper. Separate roller heat-transfer equipment then transfers that design onto suitable polyester fabric before cutting and sewing.' },
  { q: 'Is this direct-to-fabric printing?', a: 'The process described here prints onto transfer paper first. The paper-to-polyester transfer is a separate heat-transfer stage. The printer itself does not cut, sew or embroider the garment.' },
  { q: 'Can every garment have a different name or number?', a: 'Yes. The print artwork can vary by garment, including names, numbers, team crests, sponsor logos and color combinations. Confirm the final roster, spelling, sizes and artwork before output. Different fits or patterns require separate garment-development approval.' },
  { q: 'Which fabrics and products are suitable?', a: 'This route is intended for suitable polyester fabrics and polyester-based performance materials confirmed through sampling. Applications include football, basketball and American football teamwear, cycling and running apparel, training kits and other compatible custom sportswear. Do not assume every fabric blend or stretch fabric uses the same transfer settings.' },
  { q: 'Does sublimation printing peel or crack?', a: 'In a correctly matched sublimation process, dye enters the polyester fibers rather than forming a separate printed film on the surface. The result can retain a soft fabric feel without a film layer that peels or cracks. Wash and rubbing performance still depend on the fabric, ink, transfer process and care conditions; confirm any required tests on the finished sample.' },
  { q: 'Is digital sublimation suitable for samples and small orders?', a: 'Digital output does not require a separate screen for each printed color, making it suitable for complex artwork, sample development and personalized small runs. Garment MOQ, sample cost and timing depend on the complete product and must be confirmed with the team.' },
  { q: 'What should I send before printing starts?', a: 'Send your artwork or references, logo files, color targets, placement instructions, names and numbers, product type, fabric direction and quantities by size. Confirm the final artwork and the relevant transferred-fabric or garment sample before bulk production.' },
];

function Photo({ file, alt, priority = false }: { file: string; alt: string; priority?: boolean }) {
  return <Image src={asset(file)} alt={alt} width={2048} height={1365} priority={priority} sizes="(max-width: 760px) 100vw, 50vw" />;
}

export default function SublimationPrintingPage() {
  const schema = [
    {
      '@context': 'https://schema.org', '@type': 'WebPage', '@id': `${URL}#webpage`,
      name: 'Digital Sublimation Printing at the TONTON Factory', url: URL,
      inLanguage: 'en', datePublished: '2026-10-20', dateModified: '2026-10-20',
      publisher: { '@id': ORGANIZATION_ID },
      about: { '@id': `${URL}#service` },
      primaryImageOfPage: { '@type': 'ImageObject', contentUrl: absoluteAsset('workshop.webp'), caption: 'TONTON digital sublimation printing workshop in Xiantao, Hubei, China' },
      video: videos.map((v, i) => ({ '@id': `${URL}#video-${i + 1}` })),
    },
    {
      '@context': 'https://schema.org', '@type': 'Service', '@id': `${URL}#service`,
      name: 'Custom Sportswear Digital Sublimation Printing',
      serviceType: 'In-house roll-to-roll sublimation transfer-paper printing for custom polyester sportswear',
      provider: { '@id': ORGANIZATION_ID }, areaServed: 'Worldwide', url: URL,
      description: 'Custom full-color sportswear artwork, logos, names and numbers printed onto transfer paper for a separate polyester heat-transfer stage, followed by cutting and sewing.',
    },
    ...videos.map((v, i) => ({
      '@context': 'https://schema.org', '@type': 'VideoObject', '@id': `${URL}#video-${i + 1}`,
      name: `TONTON sublimation printing: ${v.title}`, description: v.text,
      thumbnailUrl: absoluteAsset(v.poster), contentUrl: absoluteAsset(v.file),
      uploadDate: '2026-10-20T00:00:00+08:00', duration: v.duration,
      width: 540, height: 960, publisher: { '@id': ORGANIZATION_ID },
      isPartOf: { '@id': `${URL}#webpage` },
    })),
    { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faqs.map(({ q, a }) => ({ '@type': 'Question', name: q, acceptedAnswer: { '@type': 'Answer', text: a } })) },
    { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
      { '@type': 'ListItem', position: 2, name: 'Factory', item: `${SITE_URL}/factory` },
      { '@type': 'ListItem', position: 3, name: 'Digital Sublimation Printing', item: URL },
    ] },
  ];

  return <article className="sublimation-page">
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
    <nav className="sub-breadcrumb" aria-label="Breadcrumb"><a href="/">Home</a><span>/</span><a href="/factory">Factory</a><span>/</span><span>Digital Sublimation Printing</span></nav>
    <header className="sub-hero">
      <div><p className="sub-kicker">INSIDE OUR FACTORY · PRINTING DEPARTMENT</p><h1>Digital Sublimation Printing for Custom Sportswear</h1><p className="sub-lead">Your artwork. Printed on paper. Transferred into polyester.</p><p>At TONTON’s Xiantao production base, our in-house industrial roll-to-roll printing equipment outputs full-color designs, team logos, player names and numbers onto sublimation transfer paper. Separate heat-transfer equipment brings the design onto the selected polyester fabric.</p><div className="sub-actions"><a className="sub-button" href="/project-builder?source=factory-sublimation">Discuss your custom project →</a><a className="sub-button sub-outline" href="#workshop-videos">Watch the machines run ↓</a></div></div>
      <figure><Photo file="workshop.webp" alt="Rows of industrial roll-to-roll printing equipment in the TONTON workshop" priority /><figcaption>Our printing workshop · Xiantao, Hubei, China</figcaption></figure>
    </header>
    <section className="sub-snapshot" aria-label="Printing capability summary">
      <div><strong>In-house equipment</strong><span>TONTON-owned printing operation</span></div><div><strong>Transfer-paper output</strong><span>Separate polyester heat-transfer stage</span></div><div><strong>Individual personalization</strong><span>Names, numbers, crests and sponsor logos</span></div><div><strong>Sample-led approval</strong><span>Confirm artwork, fabric and final appearance</span></div>
    </section>
    <nav className="sub-jump" aria-label="Printing page sections"><a href="#equipment">Equipment</a><a href="#workshop-videos">Videos</a><a href="#printing-process">Process</a><a href="#applications">Applications</a><a href="#print-quality">Quality review</a><a href="#buyer-checklist">Prepare your order</a></nav>

    <section id="equipment" className="sub-section">
      <div className="sub-heading"><p className="sub-kicker">01 / EQUIPMENT & OUTPUT</p><h2>From digital design to continuous printed paper</h2><p>The printer handles image output. Roller heat transfer, cutting, sewing and embroidery are separate operations in the garment production route.</p></div>
      <div className="sub-photo-grid">
        <figure><Photo file="printer-front.webp" alt="Front view of a TONTON roll-to-roll sublimation printer producing sportswear graphics" /><figcaption><strong>Continuous roll-to-roll printing.</strong> Sportswear panel artwork moves through the printer.</figcaption></figure>
        <figure><Photo file="paper-output.webp" alt="Full-color sportswear designs on the output roll of a TONTON sublimation printer" /><figcaption><strong>Full-color pattern output.</strong> Large graphic areas, panel layouts and contrasting colors.</figcaption></figure>
        <figure><Photo file="printhead-detail.webp" alt="Close view of the printer carriage and rail in TONTON’s sublimation printing department" /><figcaption><strong>Equipment detail.</strong> A closer look at the carriage and printing area.</figcaption></figure>
      </div>
      <p className="sub-note">These are actual workshop photographs. Equipment brands, models, print width, speed and resolution are not specified here; ask the team for the information relevant to your project.</p>
    </section>

    <section id="workshop-videos" className="sub-section sub-tinted">
      <div className="sub-heading"><p className="sub-kicker">02 / REAL WORKSHOP FOOTAGE</p><h2>Watch the printing stage in action</h2><p>Three short views of equipment operation and printed output. These clips show paper printing; they do not show the separate roller heat-transfer stage.</p></div>
      <div className="sub-video-grid">{videos.map((v) => <figure key={v.file}>
        <video controls playsInline muted preload="none" poster={asset(v.poster)} width={540} height={960} aria-label={v.title}>
          <source src={asset(v.file)} type="video/mp4" />Your browser does not support embedded video. <a href={asset(v.file)}>Open the workshop video</a>.
        </video><figcaption><h3>{v.title}</h3><p>{v.text}</p><a href={asset(v.file)} target="_blank" rel="noreferrer">Open video →</a></figcaption>
      </figure>)}</div>
    </section>

    <section id="printing-process" className="sub-section">
      <div className="sub-heading"><p className="sub-kicker">03 / PRINTING TO GARMENT</p><h2>How the sublimation production route works</h2><p>Digital artwork → transfer-paper printing → roller heat transfer to polyester → cutting → sewing and inspection.</p></div>
      <ol className="sub-process">{workflow.map(([title, text], i) => <li key={title}><span>{String(i + 1).padStart(2, '0')}</span><div><h3>{title}</h3><p>{text}</p></div></li>)}</ol>
      <div className="sub-callout"><h3>Approve color on the transferred fabric</h3><p>The printed paper is an intermediate output. Screen colors and paper appearance are not the final garment approval reference. Review the design after transfer onto the selected fabric, then check the relevant garment sample.</p></div>
    </section>

    <section id="applications" className="sub-section sub-tinted">
      <div className="sub-heading"><p className="sub-kicker">04 / APPLICATIONS & PERSONALIZATION</p><h2>Built for complex artwork and individual team identities</h2><p>Digital artwork can change between pieces, supporting all-over designs, gradients and personalized teamwear without making a separate printing screen for every color.</p></div>
      <div className="sub-cards">
        <div><h3>Team & event apparel</h3><p>Football and soccer kits, basketball uniforms, American football apparel, school teamwear, supporter jerseys and event clothing.</p></div>
        <div><h3>Performance sportswear</h3><p>Cycling, running and training apparel, sports sets, leggings and other styles where the selected polyester material and garment construction suit sublimation.</p></div>
        <div><h3>Samples & custom runs</h3><p>Develop complex prints and test personalized designs before bulk production. Confirm the complete garment MOQ, sample plan and timing for your project.</p></div>
      </div>
      <div className="sub-personalization"><h3>What can change from garment to garment?</h3><p>Player names · numbers · team crests · sponsor logos · approved color combinations.</p><p>Size and fit are handled through the garment patterns and order allocation, alongside the print artwork. A different printed number does not require a new fit; a different cut or silhouette requires its own development review.</p></div>
      <p className="sub-note">Material suitability comes first: confirm polyester content, fabric color, stretch, heat tolerance and the final transferred result. Do not assume this paper-transfer route is suitable for untreated cotton or every fabric blend.</p>
    </section>

    <section id="print-quality" className="sub-section">
      <div className="sub-heading"><p className="sub-kicker">05 / QUALITY REVIEW</p><h2>The details to confirm before a print becomes an order</h2><p>Use the approved artwork and sample as the reference. The following points form a practical review checklist to agree with the production team.</p></div>
      <div className="sub-table-wrap"><table><caption>Review points for your sublimation project</caption><thead><tr><th scope="col">Stage</th><th scope="col">Review focus</th><th scope="col">Why it matters</th></tr></thead><tbody>
        <tr><th scope="row">Artwork & roster</th><td>Version, spelling, numbers, sponsor logos, sizes and panel placement.</td><td>A clearly printed design still needs to match the correct person and order.</td></tr>
        <tr><th scope="row">Paper output</th><td>Visible banding, missing image areas, sharpness, alignment and consistent feed.</td><td>Identify print defects before the separate transfer stage.</td></tr>
        <tr><th scope="row">Transferred fabric</th><td>Color against the approved sample, image clarity, ghosting, fabric appearance and distortion.</td><td>The transferred fabric shows the result the garment will carry.</td></tr>
        <tr><th scope="row">Cutting & assembly</th><td>Panel identity, print position, size matching and joins across the garment.</td><td>Keep the artwork and personalization aligned through sewing.</td></tr>
        <tr><th scope="row">Finished garment</th><td>Appearance, measurements, roster counts, labels and required performance tests.</td><td>Review the complete product before packing and dispatch.</td></tr>
      </tbody></table></div>
      <div className="sub-callout"><h3>Soft feel and durability depend on the complete process</h3><p>With a suitable polyester fabric and correctly matched process, sublimation dye enters the fibers rather than creating a separate surface film. This can preserve the fabric’s feel without a film layer that peels or cracks.</p><p>Wash fastness, rubbing fastness and color retention depend on the fabric, ink, transfer conditions and garment care. Agree any test method and acceptance criteria before production; no universal wash-cycle or fastness rating is claimed here.</p></div>
    </section>

    <section id="buyer-checklist" className="sub-section sub-tinted">
      <div className="sub-heading"><p className="sub-kicker">06 / BUYER PREPARATION</p><h2>What to send for a custom sublimation project</h2></div>
      <div className="sub-checklist"><div><h3>Artwork & personalization</h3><ul><li>Design files or clear visual references.</li><li>Logo files, sponsor marks and placement instructions.</li><li>Color targets or an existing physical reference.</li><li>Final names and numbers, matched to garment sizes.</li></ul></div><div><h3>Garment & delivery brief</h3><ul><li>Product type, intended activity and fabric direction.</li><li>Fit or pattern references and quantities by size.</li><li>Destination and requested delivery date.</li><li>Sample approval and any testing requirements.</li></ul></div></div>
      <p>Final artwork is not required for the first discussion. Before bulk printing, confirm the final artwork version and personalization list, plus the relevant transferred-fabric or garment sample.</p>
      <div className="sub-actions"><a className="sub-button" href="/project-builder?source=factory-sublimation-checklist">Start your project brief →</a><a href="/resources/prepare-artwork-for-sublimation">Read the artwork preparation guide →</a></div>
    </section>

    <section className="sub-section sub-related"><div className="sub-heading"><p className="sub-kicker">07 / CONNECT THE PROCESS TO YOUR PRODUCT</p><h2>Explore the next detail</h2></div><div className="sub-cards">
      <a href="/customization/sublimated-rash-guards"><h3>Custom sublimated rash guards</h3><p>Develop artwork around the approved stretch fabric and garment panels.</p><span>Explore the product program →</span></a>
      <a href="/customization/sublimated-bjj-mma-shorts"><h3>Custom BJJ & MMA shorts</h3><p>Connect print layout with shell, liner and construction choices.</p><span>Explore the product program →</span></a>
      <a href="/factory#workflow"><h3>The complete factory route</h3><p>See how printing connects with cutting, sewing, quality review and packing.</p><span>Return to Factory →</span></a>
    </div></section>

    <section className="sub-section sub-faq"><div className="sub-heading"><p className="sub-kicker">PRINTING FAQ</p><h2>Questions buyers ask</h2></div>{faqs.map(({ q, a }) => <details key={q}><summary>{q}</summary><p>{a}</p></details>)}</section>
    <aside className="sub-source"><p>Process background: <a href="https://blog.epson.com/unlock-new-creative-potential-with-dye-sublimation-printing/" target="_blank" rel="noreferrer">Epson’s explanation of dye-sublimation printing</a>. This reference explains the general process and does not identify the brand of TONTON’s equipment.</p><p>Factory information and original media supplied by TONTON · Reviewed 20 October 2026.</p></aside>
    <footer className="sub-cta"><div><h2>Bring your teamwear artwork to TONTON</h2><p>Tell us the product, quantity and personalization requirements. We’ll review the practical production route.</p></div><div className="sub-actions"><a className="sub-button" href="/project-builder?source=factory-sublimation-footer">Start your custom project →</a><a className="sub-button sub-outline" href="https://wa.me/8617722438678">WhatsApp us →</a></div></footer>
  </article>;
}
