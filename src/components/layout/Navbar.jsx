import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import { ArrowUpRight, Leaf } from 'lucide-react';
const links = [['Properties','/properties'],['Projects','/projects'],['About','/about'],['Services','/services']];
function BrandLink() {
  return <Link to="/" className="brand" aria-label="Emerald Addis home"><span className="brand-mark"><Leaf size={23} strokeWidth={1.7}/></span><span className="brand-copy"><strong>EMERALD</strong><small>ADDIS</small></span></Link>;
}
export default function Navbar() {
  return <header className="ea-navbar"><div className="ea-container ea-navbar-inner">
    <BrandLink/>
    <nav>{links.map(([label, to]) => <NavLink key={to} to={to}>{label}</NavLink>)}</nav>
    <Link className="ea-btn ea-btn--primary ea-btn--sm" to="/contact">Get in touch <ArrowUpRight size={15}/></Link>
  </div></header>;
}
