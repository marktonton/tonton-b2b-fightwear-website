type SpecificationRow = readonly [label: string, value: string];

export default function ProductSpecificationTable({
  title,
  intro,
  rows,
}: {
  title: string;
  intro: string;
  rows: readonly SpecificationRow[];
}) {
  return (
    <section className="product-specification" aria-labelledby="product-specification-title">
      <div className="product-specification-heading">
        <p className="rg-eyebrow">Verified Product Specification</p>
        <h2 id="product-specification-title">{title}</h2>
        <p>{intro}</p>
        <span>Last reviewed: September 14, 2026</span>
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
