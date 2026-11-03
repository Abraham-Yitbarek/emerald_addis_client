import React from 'react';
import { Link } from 'react-router-dom';
import { BedDouble, Bath, Maximize2, MapPin, ArrowUpRight, Heart } from 'lucide-react';
import EmptyState from '../../../components/ui/EmptyState';
import Badge from '../../../components/ui/Badge';
import { useFavoriteStore } from '../../../store/useFavoriteStore';
export default function PropertyGrid({ properties = [] }) {
  const { toggleFavorite, isFavorite } = useFavoriteStore();
  if (!properties.length) return <EmptyState title="No matching properties" description="Try adjusting your search filters to see more listings."/>;
  return <div className="ea-property-grid">{properties.map(p => <article className="ea-property-card" key={p.id}>
    <Link to={`/properties/${p.slug}`} className="ea-property-image"><img src={p.image} alt={p.title} loading="lazy"/><Badge tone="light">{p.tag || p.type}</Badge></Link>
    <button className={`ea-favorite ${isFavorite(p.id)?'is-active':''}`} onClick={()=>toggleFavorite(p.id)} aria-label={isFavorite(p.id)?'Remove from saved':'Save property'}><Heart size={18} fill={isFavorite(p.id)?'currentColor':'none'}/></button>
    <div className="ea-property-content"><span className="ea-property-type">{p.type} <i/> {p.category}</span><h3><Link to={`/properties/${p.slug}`}>{p.title}</Link></h3><p className="ea-muted"><MapPin size={14}/>{p.location}</p>
    <div className="ea-property-specs">{p.beds > 0 && <span><BedDouble size={15}/>{p.beds} beds</span>}<span><Bath size={15}/>{p.baths} baths</span><span><Maximize2 size={14}/>{p.area}</span></div>
    <div className="ea-property-bottom"><strong>{p.price}</strong><Link to={`/properties/${p.slug}`} aria-label={`View ${p.title}`}><ArrowUpRight size={19}/></Link></div></div>
  </article>)}</div>;
}
