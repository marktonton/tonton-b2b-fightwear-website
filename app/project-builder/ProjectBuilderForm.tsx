'use client';

import { useEffect, useMemo, useRef, useState } from 'react';
import type { FormEvent } from 'react';

type FormState = {
  product: string; quantity: string; use: string; artwork: string; construction: string;
  decoration: string; priorities: string[]; sizes: string; destination: string; notes: string;
};

type ContactState = { name: string; company: string; email: string; phone: string };
type SubmitStatus = { state: 'idle' | 'submitting' | 'success' | 'error'; message: string; reference?: string };
type ProductConfig = { constructionLabel: string; constructionOptions: string[]; priorities: string[] };

const productConfigs: Record<string, ProductConfig> = {
  'Rash Guard': {
    constructionLabel: 'Sleeve and fit direction',
    constructionOptions: ['Short sleeve / close fit', 'Long sleeve / close fit', 'Adult and youth team range', 'To be discussed'],
    priorities: ['Quick-dry', 'Four-way stretch', 'Opaque coverage', 'Anti-slip hem', 'Flat-seam comfort', 'Custom sublimation'],
  },
  'High-Split Grappling Shorts': {
    constructionLabel: 'Cut and liner direction',
    constructionOptions: ['Ultra-high split / 2-in-1 liner', 'High split / custom liner length', 'Outer short only', 'To be discussed'],
    priorities: ['Quick-dry', 'Four-way stretch', 'High-split mobility', 'Compression support', 'Anti-slip waistband', 'Custom liner artwork'],
  },
  'BJJ / MMA Shorts': {
    constructionLabel: 'Short construction',
    constructionOptions: ['Board-short construction', '2-in-1 construction', 'Custom side split', 'To be discussed'],
    priorities: ['Quick-dry', 'Four-way stretch', 'Reinforced seams', 'Secure waistband', 'Lightweight feel', 'Custom sublimation'],
  },
  'Training Shorts': {
    constructionLabel: 'Training-short direction',
    constructionOptions: ['Lightweight woven short', '2-in-1 training short', 'Elastic waist / drawstring', 'To be discussed'],
    priorities: ['Quick-dry', 'Four-way stretch', 'Breathability', 'Pocket requirement', 'Secure waistband', 'Custom branding'],
  },
  'Coordinated Team Kit': {
    constructionLabel: 'Kit direction',
    constructionOptions: ['Rash Guard and shorts set', 'Training top and shorts set', 'Mixed adult and youth range', 'To be discussed'],
    priorities: ['Coordinated colors', 'Sponsor placement', 'Size assortment', 'Repeat-order consistency', 'Private labels', 'Custom packaging'],
  },
};

const initial: FormState = {
  product: 'Rash Guard', quantity: 'Under 50 PCS', use: 'BJJ / grappling',
  artwork: 'Logo ready; layout support needed', construction: productConfigs['Rash Guard'].constructionOptions[0],
  decoration: 'Full sublimation artwork', priorities: [], sizes: '', destination: '', notes: '',
};

const initialContact: ContactState = { name: '', company: '', email: '', phone: '' };

const MAX_FILE_SIZE = 4 * 1024 * 1024;

const productAliases: Record<string, string> = {
  'sublimated-rash-guards': 'Rash Guard',
  'rash guard': 'Rash Guard',
  'sublimated-training-shorts': 'Training Shorts',
  'training shorts': 'Training Shorts',
  'sublimated-bjj-mma-shorts': 'BJJ / MMA Shorts',
  'bjj / mma shorts': 'BJJ / MMA Shorts',
  'high-split-grappling-shorts': 'High-Split Grappling Shorts',
  'high-split grappling shorts': 'High-Split Grappling Shorts',
  'coordinated team kit': 'Coordinated Team Kit',
};

function resolveBuilderProduct(value: string | null) {
  if (!value) return null;
  const normalized = value.trim().toLowerCase();
  return Object.keys(productConfigs).find((product) => product.toLowerCase() === normalized)
    ?? productAliases[normalized]
    ?? null;
}

function formatSource(value: string | null) {
  if (!value) return 'Direct visit';
  return value.replace(/[-_]+/g, ' ').replace(/\b\w/g, (letter) => letter.toUpperCase());
}

function recordBuilderEvent(action: string, product: string, source: string) {
  const analyticsWindow = window as typeof window & { dataLayer?: Array<Record<string, string>>; gtag?: (...args: unknown[]) => void };
  if (analyticsWindow.gtag) analyticsWindow.gtag('event', 'project_builder_action', { action, product_type: product, entry_source: source });
  else analyticsWindow.dataLayer?.push({ event: 'project_builder_action', action, product_type: product, entry_source: source });
}

export default function ProjectBuilderForm() {
  const [form, setForm] = useState(initial);
  const [copyState, setCopyState] = useState('Copy specification');
  const [referenceProduct, setReferenceProduct] = useState('');
  const [entrySource, setEntrySource] = useState('Direct visit');
  const [contact, setContact] = useState(initialContact);
  const [attachment, setAttachment] = useState<File | null>(null);
  const [website, setWebsite] = useState('');
  const [submitStatus, setSubmitStatus] = useState<SubmitStatus>({ state: 'idle', message: '' });
  const startedRef = useRef(false);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const requestedProduct = resolveBuilderProduct(params.get('product'));
    const reference = params.get('reference')?.trim() ?? '';
    const source = formatSource(params.get('source'));

    if (requestedProduct) {
      setForm((current) => ({
        ...current,
        product: requestedProduct,
        construction: productConfigs[requestedProduct].constructionOptions[0],
        priorities: [],
      }));
    }
    setReferenceProduct(reference);
    setEntrySource(source);
  }, []);

  const config = productConfigs[form.product];
  const setValue = (key: keyof FormState, value: string) => setForm((current) => ({ ...current, [key]: value }));
  const setProduct = (product: string) => setForm((current) => ({ ...current, product, construction: productConfigs[product].constructionOptions[0], priorities: [] }));
  const togglePriority = (value: string) => setForm((current) => ({ ...current, priorities: current.priorities.includes(value) ? current.priorities.filter((item) => item !== value) : [...current.priorities, value] }));
  const summary = useMemo(() => [
    'Hello TONTON, I would like a custom fightwear project review.',
    `Name: ${contact.name || 'Not provided'}`,
    `Company: ${contact.company || 'Not provided'}`,
    `Email: ${contact.email || 'Not provided'}`,
    `WhatsApp / phone: ${contact.phone || 'Not provided'}`,
    `Product: ${form.product}`,
    `Reference product: ${referenceProduct || 'Not specified'}`,
    `Entry source: ${entrySource}`,
    `Estimated quantity: ${form.quantity}`,
    `Intended use: ${form.use}`,
    `Construction direction: ${form.construction}`,
    `Decoration / branding: ${form.decoration}`,
    `Artwork status: ${form.artwork}`,
    `Performance priorities: ${form.priorities.join(', ') || 'To be discussed'}`,
    `Size range: ${form.sizes || 'To be confirmed'}`,
    `Destination: ${form.destination || 'To be confirmed'}`,
    `Additional notes: ${form.notes || 'None'}`,
  ].join('\n'), [form, contact, referenceProduct, entrySource]);
  const whatsapp = `https://wa.me/8617722438678?text=${encodeURIComponent(summary)}`;
  const email = `mailto:gary@tontonsportswear.com?subject=${encodeURIComponent(`Custom ${form.product} project brief`)}&body=${encodeURIComponent(summary)}`;

  const markStarted = () => {
    if (startedRef.current) return;
    startedRef.current = true;
    recordBuilderEvent('start_form', form.product, entrySource);
  };

  const setContactValue = (key: keyof ContactState, value: string) => {
    setContact((current) => ({ ...current, [key]: value }));
  };

  const selectAttachment = (file: File | null) => {
    if (file && file.size > MAX_FILE_SIZE) {
      setAttachment(null);
      setSubmitStatus({ state: 'error', message: 'Please choose a file smaller than 4MB.' });
      return;
    }
    setAttachment(file);
    setSubmitStatus({ state: 'idle', message: '' });
    if (file) recordBuilderEvent('upload_attachment', form.product, entrySource);
  };

  const submitRfq = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (submitStatus.state === 'submitting') return;

    setSubmitStatus({ state: 'submitting', message: 'Sending your project brief…' });
    recordBuilderEvent('submit_attempt', form.product, entrySource);

    const payload = new FormData();
    payload.set('name', contact.name.trim());
    payload.set('company', contact.company.trim());
    payload.set('email', contact.email.trim());
    payload.set('phone', contact.phone.trim());
    payload.set('website', website);
    payload.set('product', form.product);
    payload.set('quantity', form.quantity);
    payload.set('intendedUse', form.use);
    payload.set('construction', form.construction);
    payload.set('decoration', form.decoration);
    payload.set('artwork', form.artwork);
    payload.set('priorities', form.priorities.join(', '));
    payload.set('sizes', form.sizes.trim());
    payload.set('destination', form.destination.trim());
    payload.set('notes', form.notes.trim());
    payload.set('referenceProduct', referenceProduct);
    payload.set('entrySource', entrySource);
    payload.set('summary', summary);
    if (attachment) payload.set('attachment', attachment);

    try {
      const response = await fetch('/api/rfq', { method: 'POST', body: payload });
      const result = await response.json().catch(() => ({ message: 'The server returned an unexpected response.' }));
      if (!response.ok) throw new Error(result.message || 'Unable to send the project brief.');

      setSubmitStatus({
        state: 'success',
        message: 'Your project brief has been sent. TONTON will review the details and confirm the practical next step.',
        reference: result.reference,
      });
      recordBuilderEvent('submit_success', form.product, entrySource);
    } catch (error) {
      setSubmitStatus({
        state: 'error',
        message: error instanceof Error ? error.message : 'Unable to send the project brief. Please use WhatsApp or email below.',
      });
      recordBuilderEvent('submit_error', form.product, entrySource);
    }
  };

  const copySummary = async () => {
    try {
      await navigator.clipboard.writeText(summary);
      setCopyState('Specification copied');
      recordBuilderEvent('copy_specification', form.product, entrySource);
      window.setTimeout(() => setCopyState('Copy specification'), 2200);
    } catch { setCopyState('Copy unavailable — use email'); }
  };

  return <div className="project-builder-layout">
    <form id="project-builder-rfq" className="project-builder-form" onSubmit={submitRfq} onChange={markStarted} encType="multipart/form-data">
      {(referenceProduct || entrySource !== 'Direct visit') && (
        <div className="project-builder-context" role="status">
          <span>PROJECT CONTEXT</span>
          <strong>{referenceProduct || form.product}</strong>
          <p>Started from {entrySource}. The product type below has been preselected and can still be changed.</p>
        </div>
      )}
      <label>Product type<select value={form.product} onChange={(event) => setProduct(event.target.value)} required>{Object.keys(productConfigs).map((product) => <option key={product}>{product}</option>)}</select></label>
      <label>Estimated quantity<select value={form.quantity} onChange={(event) => setValue('quantity', event.target.value)} required><option>Under 50 PCS</option><option>50–99 PCS</option><option>100–299 PCS</option><option>300+ PCS</option></select></label>
      <label>Intended use<select value={form.use} onChange={(event) => setValue('use', event.target.value)} required><option>BJJ / grappling</option><option>MMA / combat training</option><option>Boxing / striking</option><option>Gym / functional training</option><option>Retail / private label</option><option>Team / academy uniform</option></select></label>
      <label>{config.constructionLabel}<select value={form.construction} onChange={(event) => setValue('construction', event.target.value)} required>{config.constructionOptions.map((option) => <option key={option}>{option}</option>)}</select></label>
      <label>Decoration and branding<select value={form.decoration} onChange={(event) => setValue('decoration', event.target.value)} required><option>Full sublimation artwork</option><option>Logo placement only</option><option>Private label and packaging</option><option>Mixed decoration / to be reviewed</option></select></label>
      <label>Artwork status<select value={form.artwork} onChange={(event) => setValue('artwork', event.target.value)} required><option>Logo ready; layout support needed</option><option>Complete production artwork ready</option><option>References only; design support needed</option><option>Reorder / existing specification</option></select></label>
      <fieldset><legend>Performance priorities <span>optional</span></legend><div>{config.priorities.map((item) => <label key={item}><input type="checkbox" checked={form.priorities.includes(item)} onChange={() => togglePriority(item)} />{item}</label>)}</div></fieldset>
      <label>Size range <span>optional</span><input value={form.sizes} onChange={(event) => setValue('sizes', event.target.value)} placeholder="Example: XS–3XL, adult and youth" /></label>
      <label>Destination country <span>optional</span><input value={form.destination} onChange={(event) => setValue('destination', event.target.value)} placeholder="Country or sales market" /></label>
      <label className="project-builder-wide">Additional requirements <span>optional</span><textarea value={form.notes} onChange={(event) => setValue('notes', event.target.value)} rows={5} placeholder="Fabric, colors, labels, packaging, timing or reference-product notes" /></label>
      <section className="project-builder-contact project-builder-wide" aria-labelledby="project-builder-contact-title">
        <div className="project-builder-contact-heading">
          <p>CONTACT & SEND</p>
          <h2 id="project-builder-contact-title">Where should we send the project review?</h2>
          <span>No final artwork is required to start. Attach a logo or reference only if it helps explain the direction.</span>
        </div>
        <div className="project-builder-contact-grid">
          <label>Name<input value={contact.name} onChange={(event) => setContactValue('name', event.target.value)} autoComplete="name" placeholder="Your name" required /></label>
          <label>Company <span>optional</span><input value={contact.company} onChange={(event) => setContactValue('company', event.target.value)} autoComplete="organization" placeholder="Brand, gym or company" /></label>
          <label>Email<input type="email" value={contact.email} onChange={(event) => setContactValue('email', event.target.value)} autoComplete="email" placeholder="you@company.com" required /></label>
          <label>WhatsApp / phone <span>optional</span><input type="tel" value={contact.phone} onChange={(event) => setContactValue('phone', event.target.value)} autoComplete="tel" placeholder="+1 234 567 8900" /></label>
          <label className="project-builder-contact-file">Logo or reference file <span>optional · PNG, JPG, WEBP, PDF or AI · max 4MB</span><input type="file" accept=".png,.jpg,.jpeg,.webp,.pdf,.ai,image/png,image/jpeg,image/webp,application/pdf,application/postscript" onChange={(event) => selectAttachment(event.target.files?.[0] ?? null)} /></label>
          <label className="project-builder-honeypot" aria-hidden="true">Website<input value={website} onChange={(event) => setWebsite(event.target.value)} tabIndex={-1} autoComplete="off" /></label>
        </div>
      </section>
    </form>
    <aside className="project-builder-summary"><p>YOUR PROJECT BRIEF</p><h2>{form.product}</h2><dl>{referenceProduct && <div><dt>Reference</dt><dd>{referenceProduct}</dd></div>}<div><dt>Quantity</dt><dd>{form.quantity}</dd></div><div><dt>Use</dt><dd>{form.use}</dd></div><div><dt>Build</dt><dd>{form.construction}</dd></div><div><dt>Branding</dt><dd>{form.decoration}</dd></div><div><dt>Priorities</dt><dd>{form.priorities.join(', ') || 'To be discussed'}</dd></div></dl><p className="project-builder-note">The team will confirm the applicable MOQ, materials, sample route and schedule against this brief.</p><button form="project-builder-rfq" type="submit" className="project-builder-submit" disabled={submitStatus.state === 'submitting'}>{submitStatus.state === 'submitting' ? 'SENDING PROJECT BRIEF…' : 'SEND PROJECT BRIEF'}</button>{submitStatus.message && <div className={`project-builder-status project-builder-status-${submitStatus.state}`} role="status" aria-live="polite"><strong>{submitStatus.state === 'success' ? 'PROJECT RECEIVED' : submitStatus.state === 'error' ? 'SEND FAILED' : 'SENDING'}</strong><p>{submitStatus.message}</p>{submitStatus.reference && <span>Reference: {submitStatus.reference}</span>}</div>}<p className="project-builder-privacy">Your details are used only to review and respond to this project request.</p><button type="button" className="project-builder-copy" onClick={copySummary} aria-live="polite">{copyState}</button><a href={whatsapp} target="_blank" rel="noopener noreferrer" onClick={() => recordBuilderEvent('whatsapp', form.product, entrySource)}>Send by WhatsApp</a><a className="project-builder-email" href={email} onClick={() => recordBuilderEvent('email', form.product, entrySource)}>Send by email</a></aside>
  </div>;
}
