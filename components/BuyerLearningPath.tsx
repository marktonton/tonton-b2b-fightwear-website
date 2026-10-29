import Link from 'next/link';
import './buyer-learning-path.css';

export type BuyerFamily = 'rashGuard' | 'mmaShorts' | 'trainingShorts' | 'all';
const paths: Record<BuyerFamily, { intro: string; cards: { title: string; text: string; links: [string, string][] }[] }> = {
  rashGuard: {
    intro: 'Compare a garment reference, specify the fabric and approve a sample before ordering your own branded rash guards.',
    cards: [
      { title: 'Choose the fabric', text: 'Review weight, stretch, opacity and print requirements together.', links: [['Rash guard fabric selection guide', '/blog/how-to-choose-fabric-for-custom-rash-guards'], ['220 GSM stretch-knit reference', '/fabrics/220-gsm-stretch-knit']] },
      { title: 'Compare products and customization', text: 'Browse garment references, then define sleeves, fit, artwork and labels.', links: [['Compare rash guard products', '/products/category/rash-guards'], ['Custom rash guard manufacturing', '/customization/sublimated-rash-guards']] },
      { title: 'Approve your sample', text: 'Keep a record of measurements, artwork, seams and required corrections.', links: [['Sample approval checklist guide', '/blog/custom-fightwear-sample-approval-checklist'], ['Download the sample approval PDF', '/downloads/tonton-sample-approval-checklist-v1.pdf']] },
    ],
  },
  mmaShorts: {
    intro: 'Select the shell, liner, opening and closure as one construction, then confirm fit and branding on a garment sample.',
    cards: [
      { title: 'Specify the construction', text: 'Compare gussets, liners, side openings and waist systems.', links: [['MMA shorts construction guide', '/blog/mma-shorts-construction-guide'], ['Stretch shell and 250 GSM inner layer', '/fabrics/four-way-stretch-woven']] },
      { title: 'Compare products and customization', text: 'Choose an outer short or layered direction for your academy or brand.', links: [['Compare MMA and grappling shorts', '/products/category/mma-grappling-shorts'], ['Custom BJJ and MMA shorts manufacturing', '/customization/sublimated-bjj-mma-shorts']] },
      { title: 'Prepare the order brief', text: 'Agree on size allocation, artwork, sample checks and quote scope.', links: [['What affects custom fightwear cost?', '/blog/what-affects-custom-fightwear-cost'], ['Download the project brief PDF', '/downloads/tonton-custom-fightwear-project-brief-v1.pdf']] },
    ],
  },
  trainingShorts: {
    intro: 'Match the shell, ventilation, pocket and waistband to the intended workout before approving your training shorts sample.',
    cards: [
      { title: 'Review functional details', text: 'Confirm pocket placement, ventilation and material requirements.', links: [['Training shorts material and pocket guide', '/resources/training-shorts-fabric-ventilation-pocket-guide'], ['Stretch mesh material reference', '/fabrics/stretch-mesh']] },
      { title: 'Compare products and customization', text: 'Review garment references and define your own branded version.', links: [['Compare training shorts products', '/products/category/training-shorts'], ['Custom training shorts manufacturing', '/customization/sublimated-training-shorts']] },
      { title: 'Plan print and sample checks', text: 'Choose a decoration method suited to the fabric and logo position.', links: [['Sublimation versus heat transfer', '/blog/sublimation-vs-heat-transfer-for-fightwear'], ['Download the fabric and construction PDF', '/downloads/tonton-fabric-construction-selection-guide-v1.pdf']] },
    ],
  },
  all: {
    intro: 'Connect product choices with material decisions, production evidence and practical documents for your buying team.',
    cards: [
      { title: 'Custom rash guards', text: 'Start with fabric, compression fit, sleeve length and artwork placement.', links: [['Rash guard manufacturing and customization', '/customization/sublimated-rash-guards'], ['How to choose rash guard fabric', '/blog/how-to-choose-fabric-for-custom-rash-guards']] },
      { title: 'Custom MMA and BJJ shorts', text: 'Compare shells, gussets, liners, side openings and closure systems.', links: [['BJJ and MMA shorts manufacturing', '/customization/sublimated-bjj-mma-shorts'], ['MMA shorts construction guide', '/blog/mma-shorts-construction-guide']] },
      { title: 'Custom training shorts', text: 'Plan functional details, logo methods and a complete quote brief.', links: [['Training shorts manufacturing', '/customization/sublimated-training-shorts'], ['What affects custom fightwear cost?', '/blog/what-affects-custom-fightwear-cost']] },
    ],
  },
};
export function buyerFamilyForResource(slug: string): BuyerFamily {
  if (/rash-guard|220gsm|flatlock/.test(slug)) return 'rashGuard';
  if (/training-shorts/.test(slug)) return 'trainingShorts';
  if (/grappling|split/.test(slug)) return 'mmaShorts';
  return 'all';
}
export default function BuyerLearningPath({ family = 'all' }: { family?: BuyerFamily }) {
  const path = paths[family];
  return <section className="buyer-learning-path" aria-label="Product and procurement reading path">
    <header><p className="buyer-path-kicker">PRODUCTS · MATERIALS · SAMPLE APPROVAL</p><h2>Next steps for your order</h2><p>{path.intro}</p></header>
    <div className="buyer-path-grid">{path.cards.map(card => <article key={card.title}><h3>{card.title}</h3><p>{card.text}</p><nav aria-label={card.title}>{card.links.map(([label, href]) => <Link key={href} href={href}>{label} <span aria-hidden="true">→</span></Link>)}</nav></article>)}</div>
    <p className="buyer-path-evidence"><Link href="/factory">Inspect factory equipment and production evidence →</Link><Link href="/resources#downloads">Browse buyer downloads →</Link></p>
  </section>;
}
