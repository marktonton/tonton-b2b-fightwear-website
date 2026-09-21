import Link from 'next/link';
import productsData from '../data/products.json';
import { resolveImage } from '../lib/image-resolver';

const CURATED_RELATED: Record<string, string[]> = {
  'high-split-grappling-shorts': [
    'lightweight-quick-dry-training-shorts',
    'custom-logo-shorts',
    'pro-mma-shorts-07',
  ],
  'lightweight-quick-dry-training-shorts': [
    'high-split-grappling-shorts',
    'custom-logo-shorts',
    'pro-mma-shorts-08',
  ],
  'custom-logo-shorts': [
    'lightweight-quick-dry-training-shorts',
    'high-split-grappling-shorts',
    'pro-mma-shorts-07',
  ],
};

function getBuilderProduct(productId: string, categoryId: string) {
  if (productId === 'high-split-grappling-shorts') return 'High-Split Grappling Shorts';
  if (productId === 'custom-logo-shorts') return 'BJJ / MMA Shorts';

  const builderProducts: Record<string, string> = {
    'sublimated-rash-guards': 'Rash Guard',
    'sublimated-training-shorts': 'Training Shorts',
    'sublimated-bjj-mma-shorts': 'Coordinated Team Kit',
  };

  return builderProducts[categoryId] ?? 'Rash Guard';
}

export default function ProductLandingLinks({ productId }: { productId: string }) {
  const product = productsData.products.find((item) => item.id === productId);
  if (!product) return null;

  const category = productsData.categories.find((item) => item.id === product.categoryId);
  if (!category) return null;

  const curatedIds = CURATED_RELATED[productId];
  const sameCategory = productsData.products
    .filter((item) => item.categoryId === product.categoryId && item.id !== product.id)
    .map((item) => item.id);
  const selectedIds = [...(curatedIds ?? []), ...sameCategory]
    .filter((id, index, ids) => id !== product.id && ids.indexOf(id) === index)
    .slice(0, 3);
  const relatedProducts = selectedIds
    .map((id) => productsData.products.find((item) => item.id === id))
    .filter((item): item is (typeof productsData.products)[number] => Boolean(item));

  const builderHref = {
    pathname: '/project-builder',
    query: {
      product: getBuilderProduct(product.id, product.categoryId),
      reference: product.name,
      source: 'product-related-links',
    },
  };
  const whatsappHref = `https://wa.me/8617722438678?text=${encodeURIComponent(`Hello TONTON, I would like to discuss ${product.name}.`)}`;

  return (
    <section className="product-link-hub" aria-labelledby="product-link-hub-title">
      <div className="product-link-hub-heading">
        <div>
          <p>KEEP EXPLORING</p>
          <h2 id="product-link-hub-title">Compare the category, related products and next step</h2>
        </div>
        <Link href={`/customization/${category.id}`}>
          View {category.name} <span aria-hidden="true">→</span>
        </Link>
      </div>

      {relatedProducts.length > 0 && (
        <div className="product-link-hub-grid" aria-label="Similar products">
          {relatedProducts.map((item) => (
            <Link href={`/products/${item.id}`} key={item.id} className="product-link-card">
              <div><img src={resolveImage(item.image)} alt={item.name} loading="lazy" /></div>
              <span>SIMILAR PRODUCT</span>
              <h3>{item.name}</h3>
              <p>{item.description}</p>
              <strong>View product details <span aria-hidden="true">→</span></strong>
            </Link>
          ))}
        </div>
      )}

      <div className="product-link-hub-cta">
        <div>
          <p>PROJECT BUILDER</p>
          <h2>Turn this product reference into your RFQ.</h2>
          <span>The product and source will be prefilled. Add quantity, artwork status, construction, destination and contact details in one brief.</span>
        </div>
        <div>
          <Link href={builderHref}>Build This Product Brief</Link>
          <a href={whatsappHref} target="_blank" rel="noopener noreferrer">Ask on WhatsApp</a>
        </div>
      </div>
    </section>
  );
}
