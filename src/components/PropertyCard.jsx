import React from 'react';
import { BedDouble, Bath, Maximize2, ArrowUpRight, Heart, MapPin } from 'lucide-react';

export default function PropertyCard({ property, onFavorite, saved }) {
  return <article className="property-card">
    <div className="property-image-wrap">
      <img src={property.image} alt={property.title} className="property-image" loading="lazy"/>
      <span className="property-tag">{property.tag}</span>
      <button className={`favorite-button ${saved ? 'is-saved' : ''}`} aria-label="Save property" onClick={() => onFavorite(property.id)}><Heart size={18} fill={saved ? 'currentColor' : 'none'}/></button>
    </div>
    <div className="property-info">
      <div className="property-meta"><span>{property.type}</span><span className="dot"></span><span>{property.category}</span></div>
      <h3>{property.title}</h3>
      <p className="property-location"><MapPin size={14}/>{property.location}</p>
      <div className="property-specs">
        {property.beds > 0 && <span><BedDouble size={16}/>{property.beds} beds</span>}
        <span><Bath size={16}/>{property.baths} baths</span>
        <span><Maximize2 size={15}/>{property.area}</span>
      </div>
      <div className="property-card-bottom"><strong>{property.price}</strong><a href="#contact" aria-label={`Enquire about ${property.title}`}><ArrowUpRight size={19}/></a></div>
    </div>
  </article>;
}