import React from 'react';
import { MapPin } from 'lucide-react';
export default function PropertyLocation({ location }) {
  return <section className="ea-detail-section"><h2>Location</h2><div className="ea-location-placeholder"><MapPin size={25}/><strong>{location}</strong><span>Add a map provider or exact property coordinates when available.</span></div></section>;
}
