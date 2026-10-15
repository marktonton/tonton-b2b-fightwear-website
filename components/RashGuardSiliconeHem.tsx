import Link from 'next/link';
import { SILICONE_HEM_PHOTOS, SILICONE_HEM_VIDEO } from '../lib/rash-guard-silicone-hem';

export default function RashGuardSiliconeHem({ productName }: { productName: string }) {
  return (
    <section className="rg-silicone-section" id={SILICONE_HEM_VIDEO.id} aria-labelledby="silicone-hem-title">
      <div className="rg-section-heading">
        <p className="rg-eyebrow">SILICONE ANTI-SLIP ELASTIC BAND</p>
        <h2 id="silicone-hem-title">Inspect the Rash Guard grip band, seams and hem finish</h2>
        <p>A silicone anti-slip elastic band sits inside the lower hem to help reduce ride-up during BJJ, MMA and grappling movement. These original sample photos show the component and its connection to the garment; they are shared construction references, rather than the exact colorway above.</p>
      </div>
      <figure className="rg-silicone-video">
        <video controls playsInline preload="none" width="1920" height="1080" poster={SILICONE_HEM_VIDEO.poster} aria-label={SILICONE_HEM_VIDEO.title} aria-describedby="silicone-video-caption">
          <source src={SILICONE_HEM_VIDEO.src} type="video/mp4" />
          <a href={SILICONE_HEM_VIDEO.src}>Watch the Rash Guard silicone grip band overview</a>
        </video>
        <figcaption id="silicone-video-caption">Promotional visualization of sewing direction, silicone contact lines and lower-hem placement. Use the original photographs below and the approved sample to confirm physical construction.</figcaption>
      </figure>
      <div className="rg-silicone-photo-grid">
        {SILICONE_HEM_PHOTOS.map((photo) => (
          <figure key={photo.src}>
            <a className="rg-silicone-photo" href={photo.src} target="_blank" rel="noopener noreferrer" aria-label={`Open full-size image: ${photo.title}`}><img src={photo.src} alt={photo.alt} width={photo.width} height={photo.height} loading="lazy" /></a>
            <figcaption><h3>{photo.title}</h3><p>{photo.copy}</p></figcaption>
          </figure>
        ))}
      </div>
      <div className="rg-silicone-buyer-note">
        <h3>Specify the gripper hem for your private-label Rash Guard</h3>
        <p>For custom BJJ Rash Guards and MMA compression tops, review band width, hem position, stretch compatibility, grip feel and seam comfort together. Test reaching, rotation and grappling movement on the worn sample. The grip band is intended to help control ride-up; it does not guarantee zero movement.</p>
        <div className="rg-hero-actions"><Link className="rg-btn-primary" href={{ pathname: '/project-builder', query: { product: 'Rash Guard', reference: productName, source: 'silicone-hem-details' } }}>Request Custom Rash Guard Pricing</Link><Link className="rg-btn-secondary" href="/resources/rash-guard-silicone-anti-slip-band">Read the Silicone Hem Guide</Link></div>
      </div>
    </section>
  );
}
