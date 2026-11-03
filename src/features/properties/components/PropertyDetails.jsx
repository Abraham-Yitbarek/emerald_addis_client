import React from 'react';
import { BedDouble, Bath, Maximize2, MapPin } from 'lucide-react';
import Badge from '../../../components/ui/Badge';
export default function PropertyDetails({ property }) {
  if(!property) return null;
  return <div className="ea-detail-copy"><div className="ea-detail-heading"><div><Badge tone="success">{property.type}</Badge><h1>{property.title}</h1><p><MapPin size={16}/>{property.location}</p></div><strong>{property.price}</strong></div>
    <div className="ea-detail-stats">{property.beds>0&&<span><BedDouble/>{property.beds} Bedrooms</span>}<span><Bath/>{property.baths} Bathrooms</span><span><Maximize2/>{property.area}</span></div>
    <h2>About this property</h2><p>{property.description}</p>
  </div>;
}
