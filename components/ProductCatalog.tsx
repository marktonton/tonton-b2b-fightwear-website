import Link from 'next/link';
import { resolveImage } from '../lib/image-resolver';
import { serializeStructuredData } from '../lib/structured-data';
import { PRODUCT_CATALOG_CATEGORIES, catalogProducts, CATALOG_DESCRIPTION } from '../lib/product-catalog';
import './product-catalog.css';
export default function ProductCatalog({ slug }: { slug?: string }) {
  const category = PRODUCT_CATALOG_CATEGORIES.find(c => c.slug === slug);
  const products = catalogProducts(slug);
  const path = category ? `/products/category/${category.slug}` : '/products';
  const title = category?.name ?? 'Product Catalog';
  const description = category?.description ?? CATALOG_DESCRIPTION;
  const schema = { '@context':'https://schema.org', '@type':'CollectionPage', url:`https://www.tontongear.com${path}`, name:title, description, inLanguage:'en', mainEntity:{'@type':'ItemList', numberOfItems:products.length, itemListElement:products.map((p,i)=>({'@type':'ListItem',position:i+1,name:p.name,url:`https://www.tontongear.com/products/${p.id}`}))} };
  return <div className="product-catalog">
    <script type="application/ld+json" dangerouslySetInnerHTML={{__html:serializeStructuredData(schema)}} />
    <nav className="catalog-breadcrumb" aria-label="Breadcrumb"><Link href="/">Home</Link> / {category ? <><Link href="/products">All Products</Link> / {category.name}</> : 'All Products'}</nav>
    <header className="catalog-heading"><div><p className="catalog-eyebrow">TONTON · CUSTOM FIGHTWEAR</p><h1>{title}</h1><p>{description}</p></div><Link className="catalog-customization" href="/collections">Customization Options →</Link></header>
    <nav className="catalog-filters" aria-label="Product categories"><Link href="/products" aria-current={!category?'page':undefined}>All Products ({catalogProducts().length})</Link>{PRODUCT_CATALOG_CATEGORIES.map(c=><Link key={c.slug} href={`/products/category/${c.slug}`} aria-current={category?.slug===c.slug?'page':undefined}>{c.name} ({catalogProducts(c.slug).length})</Link>)}</nav>
    <p className="catalog-count">{products.length} product references · Custom colors, logos and labels reviewed by project</p>
    <div className="catalog-grid">{products.map(p=><article className="catalog-card" key={p.id}>
      <Link className={`catalog-image ${p.id === 'black-white-mma-kit' ? 'cover-team-kit' : p.id === 'olive-basic-rash-guard' ? 'catalog-clean-cover cover-olive' : p.id === 'fuji-art-rash-guard' ? 'catalog-clean-cover cover-fuji' : p.id === 'black-gold-rash-guard' ? 'catalog-clean-cover cover-red' : ''}`} href={`/products/${p.id}`} aria-label={`View ${p.name}`}><img src={resolveImage(p.image)} alt={p.name} loading="lazy" width="600" height="750" />{['jiu-jitsu-oni-long-sleeve-rash-guard','white-short-sleeve-compression-rash-guard','cyber-gradient-training-fight-shorts','snake-scale-mma-fight-shorts'].includes(p.id)?<span className="catalog-new">NEW</span>:null}</Link>
      <div className="catalog-card-copy"><h2><Link href={`/products/${p.id}`}>{p.name}</Link></h2><p>{p.description}</p>{p.id === 'snake-scale-mma-fight-shorts' ? <nav aria-label="Snake-scale shorts colors" className="catalog-colors">{['Black','Grey','White','Navy'].map(color=><Link key={color} href={`/products/${p.id}?color=${color.toLowerCase()}`}>{color}</Link>)}</nav> : null}{p.id === 'blue-team-rash-guard' ? <nav aria-label="Available color SKUs" className="catalog-colors">{['Olive','Blue','White'].map(color => <Link key={color} href={`/products/${p.id}?color=${color.toLowerCase()}`}>{color}</Link>)}</nav> : null}<ul>{p.features.slice(0,2).map(f=><li key={f}>{f}</li>)}</ul><Link className="catalog-view" href={`/products/${p.id}`}>View Product <span aria-hidden="true">→</span></Link></div>
    </article>)}</div>
    <aside className="catalog-help"><h2>Need your own branded version?</h2><p>Choose a product reference, then share artwork, quantities, sizes and your target fit. Materials, sample timing and production details are confirmed for your project.</p><Link href="/project-builder?source=product-catalog">Build Your Project →</Link><Link href="/collections">Explore Customization Options →</Link></aside>
  </div>;
}
