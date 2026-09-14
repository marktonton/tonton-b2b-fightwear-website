'use client';

import { useMemo, useState } from 'react';

type FormState = { product: string; quantity: string; use: string; artwork: string; priorities: string[]; sizes: string; destination: string; notes: string };
const initial: FormState = { product: 'Rash Guard', quantity: '10–49 PCS', use: 'BJJ / grappling', artwork: 'Logo ready; layout support needed', priorities: [], sizes: '', destination: '', notes: '' };

export default function ProjectBuilderForm() {
  const [form, setForm] = useState(initial);
  const setValue = (key: keyof FormState, value: string) => setForm((current) => ({ ...current, [key]: value }));
  const togglePriority = (value: string) => setForm((current) => ({ ...current, priorities: current.priorities.includes(value) ? current.priorities.filter((item) => item !== value) : [...current.priorities, value] }));
  const summary = useMemo(() => [
    'Hello TONTON, I would like a custom fightwear project review.',
    `Product: ${form.product}`,
    `Estimated quantity: ${form.quantity}`,
    `Intended use: ${form.use}`,
    `Artwork status: ${form.artwork}`,
    `Performance priorities: ${form.priorities.join(', ') || 'To be discussed'}`,
    `Size range: ${form.sizes || 'To be confirmed'}`,
    `Destination: ${form.destination || 'To be confirmed'}`,
    `Additional notes: ${form.notes || 'None'}`,
  ].join('\n'), [form]);
  const whatsapp = `https://wa.me/8617722438678?text=${encodeURIComponent(summary)}`;
  const email = `mailto:gary@tontonsportswear.com?subject=${encodeURIComponent(`Custom ${form.product} project brief`)}&body=${encodeURIComponent(summary)}`;

  return <div className="project-builder-layout">
    <form className="project-builder-form" onSubmit={(event) => event.preventDefault()}>
      <label>Product type<select value={form.product} onChange={(event) => setValue('product', event.target.value)} required><option>Rash Guard</option><option>High-Split Grappling Shorts</option><option>BJJ / MMA Shorts</option><option>Training Shorts</option><option>Coordinated Team Kit</option></select></label>
      <label>Estimated quantity<select value={form.quantity} onChange={(event) => setValue('quantity', event.target.value)} required><option>10–49 PCS</option><option>50–99 PCS</option><option>100–299 PCS</option><option>300+ PCS</option></select></label>
      <label>Intended use<select value={form.use} onChange={(event) => setValue('use', event.target.value)} required><option>BJJ / grappling</option><option>MMA / combat training</option><option>Boxing / striking</option><option>Gym / functional training</option><option>Retail / private label</option><option>Team / academy uniform</option></select></label>
      <label>Artwork status<select value={form.artwork} onChange={(event) => setValue('artwork', event.target.value)} required><option>Logo ready; layout support needed</option><option>Complete production artwork ready</option><option>References only; design support needed</option><option>Reorder / existing specification</option></select></label>
      <fieldset><legend>Performance priorities <span>optional</span></legend><div>{['Quick-dry', 'Four-way stretch', 'Opaque coverage', 'Anti-slip grip', 'Compression support', 'Custom sublimation'].map((item) => <label key={item}><input type="checkbox" checked={form.priorities.includes(item)} onChange={() => togglePriority(item)} />{item}</label>)}</div></fieldset>
      <label>Size range <span>optional</span><input value={form.sizes} onChange={(event) => setValue('sizes', event.target.value)} placeholder="Example: XS–3XL, adult and youth" /></label>
      <label>Destination country <span>optional</span><input value={form.destination} onChange={(event) => setValue('destination', event.target.value)} placeholder="Country or sales market" /></label>
      <label className="project-builder-wide">Additional requirements <span>optional</span><textarea value={form.notes} onChange={(event) => setValue('notes', event.target.value)} rows={5} placeholder="Fabric, colors, labels, packaging, timing or reference-product notes" /></label>
    </form>
    <aside className="project-builder-summary"><p>YOUR PROJECT BRIEF</p><h2>{form.product}</h2><dl><div><dt>Quantity</dt><dd>{form.quantity}</dd></div><div><dt>Use</dt><dd>{form.use}</dd></div><div><dt>Artwork</dt><dd>{form.artwork}</dd></div><div><dt>Priorities</dt><dd>{form.priorities.join(', ') || 'To be discussed'}</dd></div></dl><p className="project-builder-note">The team will confirm the applicable MOQ, materials, sample route and schedule against this brief.</p><a href={whatsapp} target="_blank" rel="noopener noreferrer">Send by WhatsApp</a><a className="project-builder-email" href={email}>Send by email</a></aside>
  </div>;
}
