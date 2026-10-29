import BuyerLearningPath from '../../../components/BuyerLearningPath';
import BuyerDownloadLinks from '../../../components/BuyerDownloadLinks';
import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { BLOG_POSTS, getBlogPost, blogReadTime, type BlogImage } from '../../../lib/blog';
import { resolveImage } from '../../../lib/image-resolver';
import { withPageSocialMetadata } from '../../../lib/page-metadata';
import { serializeStructuredData } from '../../../lib/structured-data';
import { ORGANIZATION_ID, SITE_URL } from '../../../lib/site-entity';
import '../blog.css';

type Props = { params: { slug: string } };
export function generateStaticParams() { return BLOG_POSTS.map(post => ({ slug: post.slug })); }
export function generateMetadata({ params }: Props): Metadata {
  const post = getBlogPost(params.slug);
  if (!post) return { title: 'Article not found', robots: { index: false, follow: false } };
  return withPageSocialMetadata({ title: { absolute: `${post.title} | TONTON` }, description: post.description,
    alternates: { canonical: `${SITE_URL}/blog/${post.slug}` },
    openGraph: { type: 'article', publishedTime: post.published, modifiedTime: post.updated, images: [{ url: resolveImage(post.hero.src), alt: post.hero.alt }] },
  });
}
function Photo({ image, priority = false }: { image: BlogImage; priority?: boolean }) {
  return <figure className="blog-article-photo"><img src={resolveImage(image.src)} alt={image.alt} width="1200" height="800" loading={priority ? 'eager' : 'lazy'} fetchPriority={priority ? 'high' : undefined} /><figcaption>{image.caption}</figcaption></figure>;
}
export default function BlogArticle({ params }: Props) {
  const post = getBlogPost(params.slug);
  if (!post) notFound();
  const url = `${SITE_URL}/blog/${post.slug}`;
  const quoteHref = `/project-builder?source=blog&reference=${post.slug}${post.category === 'Construction' ? '&product=BJJ%20%2F%20MMA%20Shorts' : post.category === 'Materials' ? '&product=Rash%20Guard' : ''}`;
  const date = (value: string) => new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'long', day: 'numeric', timeZone: 'UTC' }).format(new Date(`${value}T00:00:00Z`));
  const schema = [
    { '@context': 'https://schema.org', '@type': 'WebPage', url, name: post.title, description: post.description, mainEntity: { '@id': `${url}#article` } },
    { '@context': 'https://schema.org', '@type': 'BlogPosting', '@id': `${url}#article`, headline: post.title, description: post.description, url, mainEntityOfPage: url, image: new URL(resolveImage(post.hero.src), SITE_URL).href, datePublished: post.published, dateModified: post.updated, articleSection: post.category, author: { '@id': ORGANIZATION_ID }, publisher: { '@id': ORGANIZATION_ID }, isPartOf: { '@id': `${SITE_URL}/blog#blog` }, inLanguage: 'en' },
    { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [{ '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL }, { '@type': 'ListItem', position: 2, name: 'Blog', item: `${SITE_URL}/blog` }, { '@type': 'ListItem', position: 3, name: post.title, item: url }] },
    { '@context': 'https://schema.org', '@type': 'FAQPage', url, mainEntity: post.faqs.map(([q,a]) => ({ '@type': 'Question', name: q, acceptedAnswer: { '@type': 'Answer', text: a } })) },
  ];
  return <article className="tonton-blog blog-article">
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: serializeStructuredData(schema) }} />
    <nav className="blog-breadcrumb" aria-label="Breadcrumb"><Link href="/">Home</Link><span>/</span><Link href="/blog">Blog</Link><span>/</span><span>{post.category}</span></nav>
    <header className="blog-article-header"><p className="blog-kicker">{post.category}</p><h1>{post.title}</h1><p className="blog-lead">{post.description}</p><p className="blog-byline">By {post.author} · Published <time dateTime={post.published}>{date(post.published)}</time> · {blogReadTime(post)} min read{post.updated !== post.published && <> · Updated <time dateTime={post.updated}>{date(post.updated)}</time></>}</p></header>
    <div className="blog-article-layout"><aside className="blog-toc"><p className="blog-kicker">IN THIS GUIDE</p><nav aria-label="Article contents">{post.sections.map(section => <a key={section.id} href={`#${section.id}`}>{section.title.replace(/^\d+\. /,'')}</a>)}<a href="#buyer-questions">Buyer questions</a></nav><Link className="blog-toc-quote" href={quoteHref}>Discuss your specification →</Link></aside>
    <div className="blog-article-body"><section className="blog-answer" aria-labelledby="quick-answer"><p className="blog-kicker">THE SHORT ANSWER</p><h2 id="quick-answer">What buyers need to know</h2><p>{post.answer}</p>{post.download && <a href={post.download.href}>{post.download.label} ↓</a>}</section><Photo image={post.hero} priority />
    {post.sections.map(section => <section className="blog-section" key={section.id} id={section.id}><h2>{section.title}</h2>{section.paragraphs.map(text => <p key={text}>{text}</p>)}{section.bullets && <ul>{section.bullets.map(text => <li key={text}>{text}</li>)}</ul>}{section.table && <div className="blog-table-wrap" role="region" aria-label={section.table.caption} tabIndex={0}><table><caption>{section.table.caption}</caption><thead><tr>{section.table.columns.map(column => <th scope="col" key={column}>{column}</th>)}</tr></thead><tbody>{section.table.rows.map(row => <tr key={row[0]}>{row.map((cell,index) => index === 0 ? <th scope="row" key={index}>{cell}</th> : <td key={index}>{cell}</td>)}</tr>)}</tbody></table></div>}{section.image && <Photo image={section.image} />}</section>)}
    <section id="buyer-questions" className="blog-faq"><p className="blog-kicker">BUYER QUESTIONS</p><h2>Before you approve the next step</h2>{post.faqs.map(([q,a]) => <details key={q}><summary>{q}</summary><p>{a}</p></details>)}</section>
    <BuyerLearningPath family={post.category === 'Materials' ? 'rashGuard' : post.category === 'Construction' ? 'mmaShorts' : 'all'} />
    <BuyerDownloadLinks slug={post.slug} kind="blog" />
    <aside className="blog-source"><h2>Sources & product references</h2><p>{post.basis}</p><ul>{post.links.map(([label,href]) => <li key={href}><Link href={href}>{label} →</Link></li>)}{post.sources.map(source => <li key={source.url}><a href={source.url} target="_blank" rel="noopener noreferrer">{source.label} ↗</a><span>{source.note}</span></li>)}</ul></aside>
    <section className="blog-article-cta"><p className="blog-kicker">YOUR NEXT FIGHTWEAR PROJECT</p><h2>Turn these decisions into a clear brief.</h2><p>Send your product reference, quantity, artwork status, sizes and the details that matter most. We will review the material, construction and sample route with your project.</p><div className="blog-actions"><Link className="blog-button" href={quoteHref}>Request a Quote →</Link><a href={`https://wa.me/8617722438678?text=${encodeURIComponent(`Hello TONTON, I would like to discuss: ${post.title}. ${url}`)}`} target="_blank" rel="noopener noreferrer">WhatsApp Us →</a></div></section>
    </div></div>
    <section className="blog-related"><p className="blog-kicker">CONTINUE READING</p><h2>Connect the next decision.</h2><div>{post.related.map(slug => { const related = getBlogPost(slug); return related ? <Link href={`/blog/${slug}`} key={slug}><span>{related.category}</span><h3>{related.title}</h3><p>{related.description}</p><strong>Read the guide →</strong></Link> : null; })}</div><Link href="/blog">← All articles</Link></section>
  </article>;
}
