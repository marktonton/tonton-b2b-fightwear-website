'use client';
import { useState } from 'react';
import Link from 'next/link';
type Card = { slug: string; title: string; category: string; description: string; src: string; alt: string; minutes: number; updated: string };
export default function BlogExplorer({ posts }: { posts: Card[] }) {
  const [query, setQuery] = useState('');
  const [category, setCategory] = useState('All articles');
  const categories = ['All articles', ...Array.from(new Set(posts.map(post => post.category)))];
  const matches = posts.filter(post => (category === 'All articles' || post.category === category) &&
    `${post.title} ${post.description} ${post.category}`.toLowerCase().includes(query.trim().toLowerCase()));
  return <section className="blog-library" id="articles" aria-labelledby="article-library-title">
    <div className="blog-library-heading"><div><p className="blog-kicker">THE ARTICLE LIBRARY</p><h2 id="article-library-title">Make the next decision clearer.</h2></div><div className="blog-search"><label htmlFor="blog-search">Search articles</label><input id="blog-search" type="search" placeholder="Try fabric, waistband or sample…" value={query} onChange={event => setQuery(event.target.value)} /></div></div>
    <div className="blog-filters" role="group" aria-label="Filter articles by topic">{categories.map(item => <button key={item} type="button" aria-pressed={category === item} onClick={() => setCategory(item)}>{item}</button>)}</div>
    <p className="blog-results" aria-live="polite">{matches.length} {matches.length === 1 ? 'article' : 'articles'}</p>
    <div className="blog-grid">{matches.map(post => <article className="blog-card" key={post.slug}>
      <Link href={`/blog/${post.slug}`} className="blog-card-image" aria-label={`Read ${post.title}`}><img src={post.src} alt={post.alt} width="960" height="640" loading="lazy" /></Link>
      <div className="blog-card-copy"><p className="blog-kicker">{post.category} <span>· {post.minutes} min read</span></p><h3><Link href={`/blog/${post.slug}`}>{post.title}</Link></h3><p>{post.description}</p><div className="blog-card-bottom"><time dateTime={post.updated}>{post.updated}</time><Link href={`/blog/${post.slug}`}>Read the guide →</Link></div></div>
    </article>)}</div>
    {!matches.length && <p className="blog-empty">No articles match this search. Try a broader term or choose All articles.</p>}
  </section>;
}
