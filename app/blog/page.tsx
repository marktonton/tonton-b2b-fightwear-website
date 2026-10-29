import type { Metadata } from 'next';
import Link from 'next/link';
import { BLOG_POSTS, blogReadTime } from '../../lib/blog';
import { resolveImage } from '../../lib/image-resolver';
import { SITE_URL } from '../../lib/site-entity';
import { serializeStructuredData } from '../../lib/structured-data';
import { withPageSocialMetadata } from '../../lib/page-metadata';
import BlogExplorer from './BlogExplorer';
import './blog.css';

export const metadata: Metadata = withPageSocialMetadata({
  title: { absolute: 'Fightwear Manufacturing Blog & Buying Guides | TONTON' },
  description: 'Practical guides for custom rash guard and MMA shorts buyers: fabric selection, printing, garment construction, sample approval and cost planning.',
  alternates: { canonical: `${SITE_URL}/blog` },
  openGraph: { images: [{ url: resolveImage(BLOG_POSTS[0].hero.src), alt: BLOG_POSTS[0].hero.alt }] },
});
export default function BlogPage() {
  const schema = { '@context': 'https://schema.org', '@type': 'Blog', '@id': `${SITE_URL}/blog#blog`, url: `${SITE_URL}/blog`, name: 'TONTON Fightwear Manufacturing Blog', description: metadata.description,
    blogPost: BLOG_POSTS.map(post => ({ '@type': 'BlogPosting', headline: post.title, url: `${SITE_URL}/blog/${post.slug}`, datePublished: post.published, dateModified: post.updated })) };
  return <div className="tonton-blog">
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: serializeStructuredData([schema, { '@context': 'https://schema.org', '@type': 'CollectionPage', url: `${SITE_URL}/blog`, name: 'Fightwear Manufacturing Blog & Buying Guides', mainEntity: { '@id': `${SITE_URL}/blog#blog` } }]) }} />
    <header className="blog-hero"><div><p className="blog-kicker">TONTON / THE MANUFACTURING JOURNAL</p><h1>Better briefs.<br/>Better fightwear.</h1><p className="blog-lead">Fabric, construction and production decisions — explained for brands, gyms and teams.</p><p>Start with a buying question. Follow the details through real garment references, practical comparisons and sample checks.</p><div className="blog-actions"><a href="#articles" className="blog-button">Explore the articles ↓</a><Link href="/resources">Browse technical resources →</Link></div></div><figure><img src={resolveImage('/assets/process/03-stitching-size-inspection.webp')} alt="TONTON staff reviewing garment stitching and measurements" width="1152" height="1536" fetchPriority="high" /><figcaption>FROM THE FACTORY FLOOR · PRODUCT & QUALITY DETAILS</figcaption></figure></header>
    <BlogExplorer posts={BLOG_POSTS.map(post => ({ slug: post.slug, title: post.title, category: post.category, description: post.description, src: resolveImage(post.hero.src), alt: post.hero.alt, minutes: blogReadTime(post), updated: post.updated }))} />
    <aside className="blog-hub-note"><div><p className="blog-kicker">FROM READING TO SPECIFYING</p><h2>Bring the guide into your next project.</h2><p>Choose a product reference, collect your priorities, then share artwork, quantities and the size allocation for review.</p></div><div className="blog-actions"><Link className="blog-button" href="/project-builder?source=blog-hub">Build your project brief →</Link><Link href="/products">Compare product references →</Link></div></aside>
  </div>;
}
