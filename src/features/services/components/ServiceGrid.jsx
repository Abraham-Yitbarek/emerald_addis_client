import React from 'react';
import ServiceCard from './ServiceCard';
export default function ServiceGrid({ services = [] }) {
 return <div className="ea-service-grid">{services.map(service=><ServiceCard key={service.id} service={service}/>)}</div>;
}
