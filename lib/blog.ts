import fabric from '../data/blog/how-to-choose-fabric-for-custom-rash-guards.json';
import printing from '../data/blog/sublimation-vs-heat-transfer-for-fightwear.json';
import construction from '../data/blog/mma-shorts-construction-guide.json';
import approval from '../data/blog/custom-fightwear-sample-approval-checklist.json';
import cost from '../data/blog/what-affects-custom-fightwear-cost.json';

export type BlogImage = { src: string; alt: string; caption: string };
export type BlogPost = {
  slug: string; title: string; category: string; description: string; answer: string;
  published: string; updated: string; author: string; hero: BlogImage; basis: string;
  sections: Array<{ id: string; title: string; paragraphs: string[]; bullets?: string[];
    table?: { caption: string; columns: string[]; rows: string[][] }; image?: BlogImage }>;
  faqs: string[][]; related: string[]; links: string[][];
  sources: Array<{ label: string; url: string; note: string }>;
  download?: { href: string; label: string };
};
// Register one JSON content file here to publish another article. Dates live in the content.
export const BLOG_POSTS: BlogPost[] = [construction, fabric, printing, approval, cost];
export const getBlogPost = (slug: string) => BLOG_POSTS.find(post => post.slug === slug);
export const blogReadTime = (post: BlogPost) => {
  const words = [post.answer, ...post.sections.flatMap(section => [
    ...section.paragraphs, ...(section.bullets ?? []), ...(section.table?.rows.flat() ?? []),
  ]), ...post.faqs.flat()].join(' ').split(/\s+/).length;
  return Math.max(1, Math.ceil(words / 200));
};
