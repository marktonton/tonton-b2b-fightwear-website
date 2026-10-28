import Link from 'next/link';
import { PROCUREMENT_DIRECTIONS, ORDER_CONFIRMATION_ROWS, type ProcurementFamily } from '../lib/product-procurement';

export default function BuyerFitSpecification({ family }: { family: ProcurementFamily }) {
  const item = PROCUREMENT_DIRECTIONS[family];
  return <section className="buyer-fit-spec" aria-labelledby="buyer-fit-title">
    <p className="rg-eyebrow">PROJECT FIT &amp; ORDER CONDITIONS</p>
    <h2 id="buyer-fit-title">Is this the right starting point for your order?</h2>
    <div className="buyer-fit-columns"><article><h3>Best suited to</h3><p>{item.fit}</p></article><article><h3>Consider another direction when</h3><p>{item.limit}</p></article></div>
    <div className="buyer-fit-table"><table><caption>{item.label}: material, fit and procurement decisions</caption><tbody>
      {([['Material record', item.material], ['Measurements and fit', item.sizing], ['Customization scope', item.customization], ['Evidence behind this direction', item.evidence], ...ORDER_CONFIRMATION_ROWS] as const).map(([name, value]) => <tr key={name}><th scope="row">{name}</th><td>{value}</td></tr>)}
    </tbody></table></div>
    <p><Link href="/resources/custom-fightwear-sampling-moq">Review sampling and MOQ conditions →</Link> <Link href="/project-builder?source=product-fit-specification">Request a project-specific quote →</Link></p>
  </section>;
}
