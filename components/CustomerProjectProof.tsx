import { resolveImage } from '../lib/image-resolver';

type ProofItem = {
  image: string;
  alt: string;
  label: string;
  title: string;
  description: string;
  signals: readonly string[];
};

export default function CustomerProjectProof({
  eyebrow = 'Customer-Supplied Project Evidence',
  title,
  intro,
  items,
}: {
  eyebrow?: string;
  title: string;
  intro: string;
  items: readonly ProofItem[];
}) {
  return (
    <section className="customer-field-proof" aria-label={title}>
      <div className="rg-section-heading">
        <p className="rg-eyebrow">{eyebrow}</p>
        <h2>{title}</h2>
        <p>{intro}</p>
      </div>
      <div className={`customer-field-proof-grid${items.length === 1 ? ' is-single' : ''}`}>
        {items.map((item) => (
          <figure key={item.image}>
            <div className="customer-field-proof-image">
              <img src={resolveImage(item.image)} alt={item.alt} loading="lazy" />
            </div>
            <figcaption>
              <span>{item.label}</span>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
              <ul aria-label="Visible product evidence">
                {item.signals.map((signal) => <li key={signal}>{signal}</li>)}
              </ul>
            </figcaption>
          </figure>
        ))}
      </div>
      <p className="customer-field-proof-note">Customer-supplied photographs document related completed projects. Final materials, measurements, artwork and performance are confirmed separately for each approved sample.</p>
    </section>
  );
}
