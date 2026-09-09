'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';

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
  const [activeIndex, setActiveIndex] = useState(0);
  const activeCertificate = certificates[activeIndex];

  const goTo = (index: number) => {
    setActiveIndex((index + certificates.length) % certificates.length);
  };

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'ArrowLeft') goTo(activeIndex - 1);
      if (event.key === 'ArrowRight') goTo(activeIndex + 1);
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [activeIndex]);

  return (
    <div className="factory-certificates-slider" aria-label="Certificate document viewer">
      <div className="factory-certificates-slider-viewport">
        <div className="factory-certificates-slider-track" style={{ transform: `translateX(-${activeIndex * 100}%)` }}>
          {certificates.map((certificate) => (
            <article className="factory-certificate-slide" key={certificate.title}>
              <div className="factory-certificate-slide-document">
                <Image src={certificate.image} alt={certificate.imageAlt} fill sizes="(max-width: 680px) 78vw, 330px" />
              </div>
              <div className="factory-certificate-slide-copy">
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
      </div>
      <div className="factory-certificates-slider-controls">
        <button type="button" className="factory-certificates-slider-arrow" onClick={() => goTo(activeIndex - 1)} aria-label="Show previous certificate">←</button>
        <div className="factory-certificates-slider-dots" aria-label="Choose certificate">
          {certificates.map((certificate, index) => (
            <button key={certificate.title} type="button" className={index === activeIndex ? 'is-active' : ''} onClick={() => goTo(index)} aria-label={`Show ${certificate.title}`} aria-current={index === activeIndex ? 'true' : undefined} />
          ))}
        </div>
        <button type="button" className="factory-certificates-slider-arrow" onClick={() => goTo(activeIndex + 1)} aria-label="Show next certificate">→</button>
      </div>
      <p className="factory-certificates-slider-status" aria-live="polite">Showing {activeIndex + 1} of {certificates.length}: {activeCertificate.title}</p>
    </div>
  );
}
