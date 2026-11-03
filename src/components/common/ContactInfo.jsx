import React from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { CONTACT } from '../../lib/constants';
export default function ContactInfo() {
  return <div className="ea-contact-info"><div><MapPin/><span><strong>Visit us</strong>{CONTACT.address}</span></div><div><Phone/><span><strong>Call us</strong><a href={`tel:${CONTACT.phone}`}>{CONTACT.phone}</a></span></div><div><Mail/><span><strong>Email us</strong><a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a></span></div><div><Clock/><span><strong>Office hours</strong>Monday – Friday, 9:00 – 17:00</span></div></div>;
}
