export default function PlanningLinks() {
  return <nav aria-label="Product and order planning references" style={{ maxWidth: '1200px', margin: '32px auto', padding: '24px', background: '#f5f4f1', color: '#171717' }}>
    <h2 style={{ fontSize: '26px', margin: '0 0 14px' }}>Review the details before sending your brief</h2>
    <ul style={{ display: 'flex', flexWrap: 'wrap', gap: '16px 28px', paddingLeft: '20px', fontSize: '17px', lineHeight: 1.6 }}>
      <li><a href="/collections">Compare custom product categories</a></li>
      <li><a href="/factory#fabrics">Review fabric references</a></li>
      <li><a href="/resources/custom-fightwear-sampling-moq">Check MOQ and sampling requirements</a></li>
      <li><a href="/resources/prepare-artwork-for-sublimation">Prepare logos and sublimation artwork</a></li>
      <li><a href="/resources/fightwear-quality-inspection-checklist">Review the garment quality checklist</a></li>
    </ul>
  </nav>;
}
