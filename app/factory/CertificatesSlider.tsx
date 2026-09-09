import Image from 'next/image';

type Certificate = {
  type: string;
  title: string;
  image: string;
  imageAlt: string;
  entity: string;
  validity?: string;
  scope?: string;
  note?: string;
  pdf: string;
  pdfLabel: string;
};

type CertificatesSliderProps = { certificates: Certificate[] };

export default function CertificatesSlider({ certificates }: CertificatesSliderProps) {
  return (
    <div className="factory-v2-certificate-grid" aria-label="TONTON factory documents">
      {certificates.map((certificate, index) => (
        <article className="factory-v2-certificate" key={certificate.title}>
          <div className="factory-v2-certificate-document">
            <Image src={certificate.image} alt={certificate.imageAlt} fill sizes="(max-width: 700px) 100vw, 33vw" />
            <span>{String(index + 1).padStart(2, '0')}</span>
          </div>
          <div className="factory-v2-certificate-copy">
            <p className="factory-v2-kicker">{certificate.type}</p>
            <h3>{certificate.title}</h3>
            <dl>
              <div><dt>ENTITY</dt><dd>{certificate.entity}</dd></div>
              {certificate.validity && <div><dt>VALID UNTIL</dt><dd>{certificate.validity}</dd></div>}
              {certificate.scope && <div><dt>SCOPE</dt><dd>{certificate.scope}</dd></div>}
            </dl>
            {certificate.note && <p className="factory-v2-certificate-note">{certificate.note}</p>}
            <a href={certificate.pdf} target="_blank" rel="noreferrer">
              {certificate.pdfLabel}
              <svg viewBox="0 0 20 20" aria-hidden="true"><path d="M4 10h11M11 5l5 5-5 5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" /></svg>
            </a>
          </div>
        </article>
      ))}
    </div>
  );
}
