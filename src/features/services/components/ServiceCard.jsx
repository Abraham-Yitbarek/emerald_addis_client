import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
export default function ServiceCard({ service }) {
 const Icon=service.icon;
 return <article className="ea-service-card"><span className="ea-service-icon"><Icon size={24}/></span><h3>{service.title}</h3><p>{service.description}</p><Link to={`/contact?service=${encodeURIComponent(service.title)}`} className="ea-text-link">Discuss this service <ArrowUpRight size={15}/></Link></article>;
}
