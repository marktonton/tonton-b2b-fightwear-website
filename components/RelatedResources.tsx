import Link from 'next/link';
import { RESOURCE_PAGES } from '../lib/resource-content';

export default function RelatedResources({ slugs }: { slugs?: string[] }) {
  const resources = slugs?.length ? RESOURCE_PAGES.filter((item) => slugs.includes(item.slug)) : RESOURCE_PAGES;
  return (
    <section className="related-resources" aria-labelledby="related-resources-title">
      <div className="related-resources-heading">
        <p>BUYER RESOURCES</p>
        <h2 id="related-resources-title">Plan the specification before production</h2>
        <Link href="/resources">View all resources <span aria-hidden="true">→</span></Link>
      </div>
      <div className="related-resources-grid">
        {resources.map((resource) => <article key={resource.slug}><span>{resource.eyebrow}</span><h3>{resource.title}</h3><p>{resource.description}</p><Link href={`/resources/${resource.slug}`}>Read guide <span aria-hidden="true">→</span></Link></article>)}
      </div>
    </section>
  );
}
