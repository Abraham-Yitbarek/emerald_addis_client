import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
export default function SectionHeading({ eyebrow, title, description, link, to = '/properties', align = 'left' }) {
  return <div className={`ea-section-heading ea-section-heading--${align}`}><div>{eyebrow && <span className="ea-eyebrow">{eyebrow}</span>}<h2>{title}</h2>{description && <p>{description}</p>}</div>{link && <Link to={to} className="ea-text-link">{link}<ArrowUpRight size={16}/></Link>}</div>;
}
