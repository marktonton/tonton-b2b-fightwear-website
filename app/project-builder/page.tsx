import type { Metadata } from 'next';
import ProjectBuilderForm from './ProjectBuilderForm';

const SITE_URL = 'https://www.tontongear.com';
export const metadata: Metadata = { title: { absolute: 'Custom Fightwear Project Builder | TONTON Sportswear' }, description: 'Build a structured custom fightwear specification with product, quantity, construction, artwork, size and performance requirements.', alternates: { canonical: `${SITE_URL}/project-builder` } };

export default function ProjectBuilderPage() {
  const schema = { '@context': 'https://schema.org', '@type': 'WebPage', name: 'Custom Fightwear Project Builder', url: `${SITE_URL}/project-builder`, dateModified: '2026-09-15', description: 'A guided specification and briefing tool for custom fightwear projects.' };
  return <div className="project-builder-page"><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} /><header><p>PROJECT PLANNING TOOL</p><h1>Build a production-ready custom fightwear brief</h1><p>Choose the core requirements now, then send a structured summary to TONTON for a project-specific review.</p></header><ProjectBuilderForm /></div>;
}
