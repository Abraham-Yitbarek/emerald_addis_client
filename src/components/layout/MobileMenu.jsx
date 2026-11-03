import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import { X } from 'lucide-react';
const links = [['Home','/'],['Properties','/properties'],['Projects','/projects'],['About','/about'],['Services','/services'],['Contact','/contact']];
export default function MobileMenu({ open, onClose }) {
  if (!open) return null;
  return <div className="ea-mobile-overlay"><div className="ea-mobile-panel">
    <button className="ea-icon-button" onClick={onClose} aria-label="Close menu"><X/></button>
    <nav>{links.map(([label,to]) => <NavLink key={to} to={to} onClick={onClose}>{label}</NavLink>)}</nav>
    <Link to="/contact" className="ea-btn ea-btn--primary" onClick={onClose}>Start a conversation</Link>
  </div><button className="ea-mobile-scrim" aria-label="Close menu" onClick={onClose}/></div>;
}
