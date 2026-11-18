export const ALLOCATION_SIZES = ['XS', 'S', 'M', 'L', 'XL', '2XL', '3XL', '4XL'] as const;
export type AllocationRow = { size: string; tops: number; shorts: number };
export function parseAllocation(value: string | null): AllocationRow[] {
  if (!value || value.length > 200) return [];
  const seen = new Set<string>();
  const rows: AllocationRow[] = [];
  for (const item of value.split(',')) {
    const parts = item.split(':');
    if (parts.length !== 3 || !ALLOCATION_SIZES.includes(parts[0] as typeof ALLOCATION_SIZES[number]) || seen.has(parts[0]) || !parts.slice(1).every(n => /^\d{1,4}$/.test(n))) return [];
    seen.add(parts[0]);
    rows.push({ size: parts[0], tops: Number(parts[1]), shorts: Number(parts[2]) });
  }
  return rows;
}
export function allocationTotals(rows: AllocationRow[]) {
  const tops = rows.reduce((total, row) => total + row.tops, 0);
  const shorts = rows.reduce((total, row) => total + row.shorts, 0);
  return { tops, shorts, units: tops + shorts };
}
export function allocationSummary(rows: AllocationRow[]) {
  const totals = allocationTotals(rows);
  return ['Team quantity plan (size labels require approved chart confirmation):', ...rows.filter(row => row.tops || row.shorts).map(row => `${row.size}: ${row.tops} rash guards; ${row.shorts} shorts`), `Totals: ${totals.tops} rash guards + ${totals.shorts} shorts = ${totals.units} garment units.`, 'Confirm adult/youth pattern, sleeve and shorts construction, size chart, MOQ per style/design/colorway, and sample fit. Equal garment totals do not verify individual kit pairing.'].join('\n');
}
