import { BUYER_DOWNLOADS, DOWNLOAD_DATE, DOWNLOAD_VERSION, downloadHref, downloadSize } from '../lib/buyer-downloads';
import './buyer-downloads.css';

export default function BuyerDownloads() {
  return <section id="downloads" className="buyer-downloads" aria-labelledby="buyer-download-title">
    <header><p className="download-kicker">FREE BUYER DOWNLOADS</p><h2 id="buyer-download-title">Take the specification with you.</h2><p>Practical files for custom rash guard, MMA shorts and training shorts projects. Preview online or download directly. No registration required.</p></header>
    <div className="buyer-download-grid">{BUYER_DOWNLOADS.map((item,index) => <article key={item.id}>
      <div className={`download-cover download-cover-${index}`} aria-hidden="true"><span>TONTON / BUYER RESOURCES</span><strong>{item.title}</strong><div><span>{item.format.toUpperCase()}</span><b>{String(index+1).padStart(2,'0')}</b></div></div>
      <div className="download-copy"><p className="download-kicker">{item.category}</p><h3>{item.title}</h3><p>{item.description}</p><dl><div><dt>File</dt><dd>{item.format} · {item.pages} pages · {downloadSize(item.bytes)}</dd></div><div><dt>Edition</dt><dd>English · v{DOWNLOAD_VERSION} · <time dateTime={DOWNLOAD_DATE}>29 Oct 2026</time></dd></div></dl><p className="download-use">{item.use}</p><div className="download-actions"><a className="download-primary" href={downloadHref(item.file)} download={item.file} aria-label={`Download ${item.title} PDF`}>Download PDF ↓</a><a href={downloadHref(item.file)} target="_blank" rel="noopener noreferrer" aria-label={`Preview ${item.title} PDF in a new tab`}>Preview PDF ↗</a></div></div>
    </article>)}</div>
    <aside className="download-help"><strong>Using the fillable files</strong><p>Download and save a local copy, open it in a PDF reader that supports forms, fill in your details and save again. Attach the saved file to your email or WhatsApp inquiry. If your browser does not support form filling, use a compatible PDF reader or print the worksheet.</p><p>Files contain project guidance and blank approval records. Product-specific measurements, tolerances, tests, quotations and timing are confirmed for your selected project.</p><a href="/project-builder?source=resource-downloads">Start an online project brief instead →</a></aside>
  </section>;
}
