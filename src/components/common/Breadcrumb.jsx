import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
export default function Breadcrumb({ items = [] }) {
  return <nav className="ea-breadcrumb" aria-label="Breadcrumb"><Link to="/">Home</Link>{items.map((item,i) => <React.Fragment key={`${item.label}-${i}`}><ChevronRight size={13}/>{item.to ? <Link to={item.to}>{item.label}</Link> : <span aria-current="page">{item.label}</span>}</React.Fragment>)}</nav>;
}
