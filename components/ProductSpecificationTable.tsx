type SpecificationRow = readonly [label: string, value: string];

export default function ProductSpecificationTable({
  title,
  intro,
  rows,
  reviewedDate = 'September 15, 2026',
}: {
  title: string;
  intro: string;
  rows: readonly SpecificationRow[];
  reviewedDate?: string;
}) {
  return (
    <section className="product-specification" aria-labelledby="product-specification-title">
      <div className="product-specification-heading">
        <p className="rg-eyebrow">Verified Product Specification</p>
        <h2 id="product-specification-title">{title}</h2>
        <p>{intro}</p>
        <span>Last reviewed: {reviewedDate}</span>
      </div>
      <div className="product-specification-table-wrap">
        <table>
          <caption>Product specification summary</caption>
          <tbody>{rows.map(([label, value]) => <tr key={label}><th scope="row">{label}</th><td>{value}</td></tr>)}</tbody>
        </table>
      </div>
    </section>
  );
}
