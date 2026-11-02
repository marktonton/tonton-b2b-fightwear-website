import Link from 'next/link';
import './custom-order-decisions.css';

const programs = {
  rashGuard: {
    title: 'Compare your custom rash guard specification',
    intro: 'Choose the sleeve, material and finishing as one garment. These are development options, not specifications shared by every product.',
    rows: [
      ['Sleeve and fit', 'Short sleeves or long sleeves; adult and youth measurements approved separately.', 'Shoulder reach, chest fit, sleeve length and torso coverage.'],
      ['Fabric', '220 GSM, 85% polyester / 15% spandex is one supplied reference. Other product weights and blends need separate confirmation.', 'Composition, GSM tolerance, opacity under stretch, recovery and hand feel.'],
      ['Seams and ventilation', 'Flatlock seam direction; optional mesh at the underarm or side body.', 'Seam stretch, skin contact, panel joining and mesh placement.'],
      ['Hem', 'Extended torso or an optional silicone anti-slip band, depending on the selected style.', 'Body length, grip placement, skin comfort and movement in a wear trial.'],
      ['Sublimation and labels', 'Panel artwork, academy colors, sponsor graphics, neck labels and packaging.', 'Print scale, panel alignment, color reference, label content and agreed wash tests.'],
    ],
    products: [
      ['Short-sleeve team rash guard', '/products/blue-team-rash-guard', 'Compare the 220 GSM reference and available color directions.'],
      ['Samurai long-sleeve rash guard', '/products/samurai-graphic-rash-guard', 'Review long-sleeve artwork, construction and sample photography.'],
      ['Samurai Kabuto long-sleeve reference', '/products/samurai-kabuto-long-sleeve-rash-guard', 'Inspect labyrinth sleeves, samurai back artwork and finishing details.'],
    ],
    links: [
      ['220 GSM stretch-knit material reference', '/fabrics/220-gsm-stretch-knit'],
      ['Flatlock versus overlock seam guide', '/resources/flatlock-vs-overlock-rash-guard-seams'],
      ['Sublimation printing equipment and workflow', '/factory/digital-sublimation-printing'],
    ],
    quote: '/project-builder?product=Rash%20Guard&source=rash-guard-specification',
  },
  mmaShorts: {
    title: 'Compare custom MMA and BJJ shorts constructions',
    intro: 'A high-split 2-in-1 short is one reference, not the only fight-short construction. Select the shell, coverage and closure before developing the panel artwork. Share event clothing requirements separately for competition projects.',
    rows: [
      ['Outer combat short', 'A shell-based style with the chosen gusset, length and side opening; a compression liner is not assumed.', 'Shell stretch, ground-movement coverage, seams and closure security.'],
      ['High-split 2-in-1 short', 'Four-way-stretch outer shell with a compression inner layer. The supplied high-split reference uses a 250 GSM milk-silk liner.', 'Actual liner composition, weight and length; shell-to-liner fit through kicks and sprawls.'],
      ['Split and leg length', 'Standard or higher side opening and an agreed finished length, subject to pattern review.', 'Opening height, edge reinforcement, leg coverage and movement.'],
      ['Waistband', 'Elastic, drawcord or hook-and-loop direction; silicone grip only where specified.', 'Waist measurement, closure holding, cord finish and wearer comfort.'],
      ['Branding and packing', 'Sublimated graphics, sponsor logos, private labels and size-specific packaging.', 'Artwork at seams, label content, size allocation and agreed wash tests.'],
    ],
    products: [
      ['Outer MMA fight-shorts reference', '/products/pro-mma-shorts-07', 'Review the camo shell, side opening and adjustable waist.'],
      ['High-split 2-in-1 grappling shorts', '/products/high-split-grappling-shorts', 'Inspect the outer shell and compression liner as a complete garment.'],
      ['Snake-scale combat shorts', '/products/snake-scale-mma-fight-shorts', 'Compare the fly, drawcord and gusset construction.'],
    ],
    links: [
      ['Stretch shell and 250 GSM liner reference', '/fabrics/four-way-stretch-woven'],
      ['High-split versus standard shorts guide', '/resources/high-split-vs-standard-grappling-shorts'],
      ['Waistband and silicone-grip guide', '/resources/grappling-shorts-waistband-silicone-grip'],
    ],
    quote: '/project-builder?product=BJJ%20%2F%20MMA%20Shorts&source=fight-shorts-specification',
  },
} as const;

export default function CustomOrderDecisions({ family }: { family: keyof typeof programs }) {
  const program = programs[family];
  return <section className="order-decisions customization-shell" aria-labelledby="order-decisions-title">
    <p className="customization-kicker">PRIVATE LABEL / SPECIFICATION & SAMPLE CHECKS</p>
    <h2 id="order-decisions-title">{program.title}</h2>
    <p className="order-decisions-intro">{program.intro}</p>
    <div className="order-decisions-table" role="region" aria-label="Product specification comparison" tabIndex={0}>
      <table><caption>Development choices and approval checks for your custom order</caption><thead><tr><th scope="col">Decision</th><th scope="col">Development direction</th><th scope="col">Check on the physical sample</th></tr></thead><tbody>{program.rows.map(([name, option, check]) => <tr key={name}><th scope="row">{name}</th><td>{option}</td><td>{check}</td></tr>)}</tbody></table>
    </div>
    <h3 className="order-decisions-subtitle">Inspect a product before writing your brief</h3>
    <div className="order-decisions-products">{program.products.map(([title, href, text]) => <article key={href}><h4><Link href={href}>{title} →</Link></h4><p>{text}</p></article>)}</div>
    <nav className="order-decisions-links" aria-label="Material and construction evidence">{program.links.map(([title, href]) => <Link key={href} href={href}>{title} →</Link>)}</nav>
    <div className="order-decisions-approval"><div><h3>Agree the sample, quotation and reorder reference</h3><p>Send quantity by size and color, artwork or reference images, delivery country and target date. Confirm materials, labels, packaging, sample charges and shipping basis in the quote. Selected projects start from 10 pieces; minimums apply by the agreed style and design.</p><p>Sampling targets 3–7 days after details and usable artwork are confirmed. Sourcing and revisions may extend timing. Retain the approved sample, measurement tolerances, artwork version and material record; reconfirm availability when reordering.</p></div><aside><h3>Check the evidence</h3><p>See a supplied US customer's repeat-order records, specification conversations and Alibaba feedback. Private details are withheld; completed and pending orders are distinguished.</p><Link href="/cases/us-repeat-customer">Read the rash guard and shorts repeat-order case →</Link><Link href="/resources/fightwear-quality-inspection-checklist">Use the garment QC checklist →</Link><Link href="/factory">Inspect factory processes and equipment →</Link></aside></div>
    <Link className="order-decisions-quote" href={program.quote}>Request a specification-based quote →</Link>
  </section>;
}
