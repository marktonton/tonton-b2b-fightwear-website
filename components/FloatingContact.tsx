'use client';
import { useState } from 'react';
import ContactIcon from './ContactIcon';
import { CONTACT_DETAILS as contact } from '../lib/contact-details';
export default function FloatingContact() {
  const [open, setOpen] = useState(false);
  return <aside className={`contact-dock${open ? ' is-open' : ''}`} aria-label="Quick contact" onKeyDown={event => { if (event.key === 'Escape') setOpen(false); }}>
    <button className="contact-dock-toggle" type="button" aria-expanded={open} aria-controls="tonton-contact-options" onClick={() => setOpen(!open)}><ContactIcon kind={open ? 'close' : 'contact'}/><span>{open ? 'Close' : 'Contact'}</span></button>
    <div className="contact-dock-options" id="tonton-contact-options"><p className="contact-dock-heading">CONTACT</p>
      <a className="contact-dock-whatsapp" href={contact.whatsappHref} target="_blank" rel="noopener noreferrer" aria-label="Chat with TONTON on WhatsApp"><ContactIcon kind="whatsapp"/><span>WhatsApp</span></a>
      <a className="contact-dock-email" href={contact.emailHref} aria-label={`Email TONTON at ${contact.email}`}><ContactIcon kind="email"/><span>Email</span></a>
      <a className="contact-dock-phone" href={contact.phoneHref} aria-label={`Call TONTON at ${contact.phone}`}><ContactIcon kind="phone"/><span>Call</span></a>
      <a className="contact-dock-inquiry" href="/project-builder?source=floating-contact" aria-label="Send TONTON your project inquiry"><ContactIcon kind="inquiry"/><span>Inquiry</span></a>
    </div>
  </aside>;
}
