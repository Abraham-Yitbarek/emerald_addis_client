import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, Instagram, Facebook, Linkedin, MapPin, Phone, Mail, Leaf } from 'lucide-react';
import { CONTACT } from '../../lib/constants';
function BrandLink() {
  return <Link to="/" className="brand" aria-label="Emerald Addis home"><span className="brand-mark"><Leaf size={23} strokeWidth={1.7}/></span><span className="brand-copy"><strong>EMERALD</strong><small>ADDIS</small></span></Link>;
}
export default function Footer() {
  return <footer className="ea-footer"><div className="ea-container">
    <div className="ea-footer-top"><div><BrandLink/><p>Property, thoughtfully considered.<br/>Helping you find your place in Addis Ababa.</p></div>
      <div><h4>Explore</h4><Link to="/properties">Properties</Link><Link to="/projects">Projects</Link><Link to="/about">About us</Link><Link to="/services">Services</Link></div>
      <div><h4>Get in touch</h4><span><MapPin size={15}/>{CONTACT.address}</span><a href={`tel:${CONTACT.phone}`}><Phone size={15}/>{CONTACT.phone}</a><a href={`mailto:${CONTACT.email}`}><Mail size={15}/>{CONTACT.email}</a></div>
      <div><h4>Follow along</h4><div className="ea-socials"><a href="https://instagram.com" aria-label="Instagram"><Instagram/></a><a href="https://facebook.com" aria-label="Facebook"><Facebook/></a><a href="https://linkedin.com" aria-label="LinkedIn"><Linkedin/></a></div><Link to="/contact" className="ea-footer-cta">Let's talk <ArrowUpRight size={15}/></Link></div>
    </div><div className="ea-footer-bottom"><span>© {new Date().getFullYear()} Emerald Addis. All rights reserved.</span><Link to="/privacy-policy">Privacy policy</Link><span>Made for meaningful spaces.</span></div>
  </div></footer>;
}
