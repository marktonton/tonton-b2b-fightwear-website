import ContactIcon from './ContactIcon';
import { CONTACT_DETAILS as contact } from '../lib/contact-details';
export default function HeaderContact() {
  return <div className="header-contact" role="group" aria-label="Contact TONTON">
    <a className="header-contact-phone" href={contact.phoneHref} aria-label={`Call TONTON at ${contact.phone}`}><ContactIcon kind="phone"/><span>{contact.phone}</span></a>
    <a className="header-contact-email" href={contact.emailHref}><ContactIcon kind="email"/><span>{contact.email}</span></a>
    <a className="header-contact-whatsapp" href={contact.whatsappHref} target="_blank" rel="noopener noreferrer" aria-label="Contact TONTON on WhatsApp"><ContactIcon kind="whatsapp"/><span>WhatsApp</span></a>
  </div>;
}
