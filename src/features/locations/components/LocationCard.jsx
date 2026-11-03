import React from 'react';
import { MapPin, ArrowUpRight } from 'lucide-react';
export default function LocationCard({ location }) {
 return <article className="ea-location-card"><MapPin/><h3>{location.name}</h3><p>{location.description}</p><a href={`/properties?location=${encodeURIComponent(location.name)}`}>Explore properties <ArrowUpRight size={14}/></a></article>;
}
