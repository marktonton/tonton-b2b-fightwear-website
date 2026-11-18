'use client';

import Link from 'next/link';
import { useState } from 'react';
import { ALLOCATION_SIZES, allocationTotals, allocationSummary } from '../lib/size-allocation';
import { sendAnalyticsEvent } from '../lib/analytics';
import './size-quantity-planner.css';

export default function SizeQuantityPlanner() {
  const [counts, setCounts] = useState(() => ALLOCATION_SIZES.map(size => ({ size, tops: '', shorts: '' })));
  const [status, setStatus] = useState('');
  const rows = counts.map(row => ({ size: row.size, tops: Number(row.tops || 0), shorts: Number(row.shorts || 0) }));
  const totals = allocationTotals(rows);
  const summary = allocationSummary(rows);
  const allocation = rows.filter(row => row.tops || row.shorts).map(row => `${row.size}:${row.tops}:${row.shorts}`).join(',');
  const href = `/project-builder?${new URLSearchParams({ product: 'Coordinated Team Kit', use: 'Team / academy uniform', source: 'size-quantity-planner', reference: 'Team size and quantity plan', allocation }).toString()}`;
  function update(index: number, field: 'tops' | 'shorts', value: string) {
    if (!/^\d{0,4}$/.test(value)) return;
    setCounts(current => current.map((row, i) => i === index ? { ...row, [field]: value } : row));
    setStatus('');
  }
  function download() {
    const csv = '\uFEFF' + ['Size label,Rash guards,Shorts', ...rows.map(row => `${row.size},${row.tops},${row.shorts}`), `TOTAL,${totals.tops},${totals.shorts}`, `Total garment units,${totals.units},`, 'Planning quantities only; confirm the selected style size chart and MOQ,,'].join('\r\n');
    const url = URL.createObjectURL(new Blob([csv], { type: 'text/csv;charset=utf-8;' }));
    const a = document.createElement('a'); a.href = url; a.download = 'tonton-team-quantity-plan.csv'; a.click();
    setTimeout(() => URL.revokeObjectURL(url), 1000);
    sendAnalyticsEvent('size_quantity_export', { action: 'csv', page_path: window.location.pathname });
    setStatus('CSV downloaded. Confirm the selected size chart before ordering.');
  }
  async function copy() {
    try { await navigator.clipboard.writeText(summary); setStatus('Quantity brief copied.'); sendAnalyticsEvent('size_quantity_export', { action: 'copy', page_path: window.location.pathname }); }
    catch { setStatus('Copy unavailable. Download the CSV or continue to the project brief.'); }
  }
  return <section id="quantity-planner" className="size-planner" aria-labelledby="size-planner-title">
    <p className="size-planner-kicker">FREE TEAM ORDER TOOL</p>
    <h2 id="size-planner-title">Plan your rash guard and shorts quantities</h2>
    <p>Enter each garment separately. The size labels below are planning placeholders, not a TONTON measurement chart or a promise that every style offers every size. Keep adult, youth, different sleeve styles and colorways in separate plans.</p>
    <div className="size-planner-table" role="region" aria-label="Team quantity entry" tabIndex={0}><table><caption>Quantity by size label — no recommended size ratio is applied</caption><thead><tr><th scope="col">Size label</th><th scope="col">Rash guards</th><th scope="col">Shorts</th></tr></thead><tbody>{counts.map((row,index) => <tr key={row.size}><th scope="row">{row.size}</th>{(['tops','shorts'] as const).map(field => <td key={field}><input type="text" inputMode="numeric" pattern="[0-9]*" maxLength={4} aria-label={`${row.size} ${field === 'tops' ? 'rash guards' : 'shorts'} quantity`} placeholder="0" value={row[field]} onChange={e => update(index,field,e.target.value)} /></td>)}</tr>)}</tbody></table></div>
    <div className="size-planner-totals" aria-live="polite"><span><strong>{totals.tops}</strong> Rash guards</span><span><strong>{totals.shorts}</strong> Shorts</span><span><strong>{totals.units}</strong> Total garment units</span></div>
    <p>{totals.tops !== totals.shorts ? 'The garment totals differ. This may be intentional; reconcile the roster if you need one top and one short per member.' : 'Equal totals do not confirm kit pairing. Check each member’s top and shorts size independently.'} MOQ, garment measurements and production timing still need project-specific confirmation.</p>
    <div className="size-planner-actions"><button type="button" disabled={!totals.units} onClick={download}>Download CSV</button><button type="button" disabled={!totals.units} onClick={copy}>Copy quantity brief</button>{totals.units > 0 && <Link href={href}>Continue with this quantity plan →</Link>}</div>
    <p role="status">{status}</p>
    <p className="size-planner-note">Quantities are calculated in your browser and are not an order submission. Continuing opens an editable project brief; it does not send an inquiry.</p>
  </section>;
}
