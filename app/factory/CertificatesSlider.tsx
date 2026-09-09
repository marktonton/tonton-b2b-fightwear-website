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

type CertificatesSliderProps = {
  certificates: Certificate[];
};

export default function CertificatesSlider({ certificates }: CertificatesSliderProps) {
  return (
    <div className="factory-certificates-grid" aria-label="Certificate documents">
      {certificates.map((certificate) => (
        <article className="factory-certificate-card" key={certificate.title}>
          <div className="factory-certificate-card-document">
            <Image src={certificate.image} alt={certificate.imageAlt} fill sizes="(max-width: 600px) 100vw, (max-width: 820px) 50vw, 33vw" />
          </div>
          <div className="factory-certificate-card-copy">
            <p className="factory-page-certificate-type">{certificate.type}</p>
            <h3>{certificate.title}</h3>
            <p><strong>Certified Entity:</strong> {certificate.entity}</p>
            {certificate.validity && <p><strong>Valid Until:</strong> {certificate.validity}</p>}
            {certificate.scope && <p><strong>Scope:</strong> {certificate.scope}</p>}
            {certificate.note && <p>{certificate.note}</p>}
            <a href={certificate.pdf} target="_blank" rel="noreferrer">{certificate.pdfLabel}</a>
          </div>
        </article>
      ))}
    </div>
  );
}
