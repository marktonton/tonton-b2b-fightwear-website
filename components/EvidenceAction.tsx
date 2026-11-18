'use client';
import Link from 'next/link';
import { sendAnalyticsEvent } from '../lib/analytics';
export default function EvidenceAction({ href, label, family, action }: { href: string; label: string; family: string; action: string }) {
  return <Link href={href} onClick={() => sendAnalyticsEvent('procurement_evidence_action', { product_family: family, action, page_path: window.location.pathname })}>{label} →</Link>;
}
