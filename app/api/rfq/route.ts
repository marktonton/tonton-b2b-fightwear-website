import { randomUUID } from 'node:crypto';
import { NextResponse } from 'next/server';

export const runtime = 'nodejs';
export const maxDuration = 15;

const MAX_FILE_SIZE = 4 * 1024 * 1024;
const MAX_TEXT_LENGTH = 4000;
const ALLOWED_EXTENSIONS = new Set(['png', 'jpg', 'jpeg', 'webp', 'pdf', 'ai']);

function readText(formData: FormData, key: string, maxLength = MAX_TEXT_LENGTH) {
  const value = formData.get(key);
  return typeof value === 'string' ? value.trim().slice(0, maxLength) : '';
}

function escapeHtml(value: string) {
  return value.replace(/[&<>"']/g, (character) => ({
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#039;',
  }[character] ?? character));
}

function cleanFilename(value: string) {
  return value.replace(/[^a-zA-Z0-9._-]/g, '-').slice(-120) || 'reference-file';
}

function getExtension(filename: string) {
  return filename.split('.').pop()?.toLowerCase() ?? '';
}

function createReference() {
  const date = new Date().toISOString().slice(0, 10).replace(/-/g, '');
  return `RFQ-${date}-${randomUUID().slice(0, 6).toUpperCase()}`;
}

export async function POST(request: Request) {
  let formData: FormData;

  try {
    formData = await request.formData();
  } catch {
    return NextResponse.json({ message: 'The project brief could not be read. Please try again.' }, { status: 400 });
  }

  const website = readText(formData, 'website', 200);
  if (website) {
    return NextResponse.json({ ok: true, reference: createReference() });
  }

  const fields = {
    name: readText(formData, 'name', 120),
    company: readText(formData, 'company', 160),
    email: readText(formData, 'email', 254),
    phone: readText(formData, 'phone', 80),
    product: readText(formData, 'product', 160),
    quantity: readText(formData, 'quantity', 80),
    intendedUse: readText(formData, 'intendedUse', 160),
    construction: readText(formData, 'construction', 240),
    decoration: readText(formData, 'decoration', 240),
    artwork: readText(formData, 'artwork', 240),
    priorities: readText(formData, 'priorities', 600),
    sizes: readText(formData, 'sizes', 240),
    destination: readText(formData, 'destination', 160),
    notes: readText(formData, 'notes'),
    referenceProduct: readText(formData, 'referenceProduct', 240),
    entrySource: readText(formData, 'entrySource', 160),
  };

  if (!fields.name || !fields.email || !fields.product || !fields.quantity) {
    return NextResponse.json({ message: 'Please provide your name, email, product and estimated quantity.' }, { status: 400 });
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(fields.email)) {
    return NextResponse.json({ message: 'Please enter a valid email address.' }, { status: 400 });
  }

  const rawAttachment = formData.get('attachment');
  const attachment = rawAttachment && typeof rawAttachment !== 'string' && rawAttachment.size > 0
    ? rawAttachment
    : null;

  if (attachment && attachment.size > MAX_FILE_SIZE) {
    return NextResponse.json({ message: 'Please choose a file smaller than 4MB.' }, { status: 413 });
  }

  if (attachment && !ALLOWED_EXTENSIONS.has(getExtension(attachment.name))) {
    return NextResponse.json({ message: 'Please attach a PNG, JPG, WEBP, PDF or AI file.' }, { status: 415 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  const fromEmail = process.env.RFQ_FROM_EMAIL;
  const toEmail = process.env.RFQ_TO_EMAIL || 'gary@tontonsportswear.com';

  if (!apiKey || !fromEmail) {
    return NextResponse.json(
      { message: 'Online submission is being configured. Please use WhatsApp or email below.' },
      { status: 503 },
    );
  }

  const reference = createReference();
  const receivedAt = new Date().toISOString();
  const rows: Array<[string, string]> = [
    ['Reference', reference],
    ['Received', receivedAt],
    ['Name', fields.name],
    ['Company', fields.company || 'Not provided'],
    ['Email', fields.email],
    ['WhatsApp / phone', fields.phone || 'Not provided'],
    ['Product', fields.product],
    ['Reference product', fields.referenceProduct || 'Not specified'],
    ['Entry source', fields.entrySource || 'Direct visit'],
    ['Estimated quantity', fields.quantity],
    ['Intended use', fields.intendedUse],
    ['Construction direction', fields.construction],
    ['Decoration / branding', fields.decoration],
    ['Artwork status', fields.artwork],
    ['Performance priorities', fields.priorities || 'To be discussed'],
    ['Size range', fields.sizes || 'To be confirmed'],
    ['Destination', fields.destination || 'To be confirmed'],
    ['Additional notes', fields.notes || 'None'],
    ['Attachment', attachment?.name || 'None'],
  ];

  const textBody = [
    'New TONTON Project Builder RFQ',
    '',
    ...rows.map(([label, value]) => `${label}: ${value}`),
  ].join('\n');

  const htmlRows = rows.map(([label, value]) =>
    `<tr><th style="padding:8px 12px;text-align:left;vertical-align:top;border-bottom:1px solid #ddd">${escapeHtml(label)}</th><td style="padding:8px 12px;border-bottom:1px solid #ddd;white-space:pre-wrap">${escapeHtml(value)}</td></tr>`,
  ).join('');

  const resendPayload: {
    from: string;
    to: string[];
    reply_to: string;
    subject: string;
    text: string;
    html: string;
    attachments?: Array<{ filename: string; content: string }>;
  } = {
    from: fromEmail,
    to: [toEmail],
    reply_to: fields.email,
    subject: `[${reference}] Custom ${fields.product} RFQ${fields.company ? ` — ${fields.company}` : ''}`,
    text: textBody,
    html: `<h1>New Project Builder RFQ</h1><table style="border-collapse:collapse;width:100%;max-width:760px">${htmlRows}</table>`,
  };

  if (attachment) {
    resendPayload.attachments = [{
      filename: cleanFilename(attachment.name),
      content: Buffer.from(await attachment.arrayBuffer()).toString('base64'),
    }];
  }

  let resendResponse: Response;
  try {
    resendResponse = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(resendPayload),
    });
  } catch (error) {
    console.error('RFQ delivery request failed', error instanceof Error ? error.message : 'Unknown error');
    return NextResponse.json({ message: 'The brief could not be delivered. Please use WhatsApp or email below.' }, { status: 502 });
  }

  if (!resendResponse.ok) {
    const responseText = await resendResponse.text();
    console.error('RFQ delivery was rejected', resendResponse.status, responseText.slice(0, 500));
    return NextResponse.json({ message: 'The brief could not be delivered. Please use WhatsApp or email below.' }, { status: 502 });
  }

  return NextResponse.json({ ok: true, reference });
}
