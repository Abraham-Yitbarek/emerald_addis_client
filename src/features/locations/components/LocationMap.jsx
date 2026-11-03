import React from 'react';
import { MapPinned } from 'lucide-react';
export default function LocationMap({ title='Find us in Addis Ababa', address='Addis Ababa, Ethiopia' }) {
 return <div className="ea-map-placeholder"><MapPinned size={30}/><strong>{title}</strong><span>{address}</span><small>Map integration can be connected when the business address or map coordinates are confirmed.</small></div>;
}
