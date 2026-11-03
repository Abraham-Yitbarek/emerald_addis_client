import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, MapPin } from 'lucide-react';
import Badge from '../../../components/ui/Badge';
export default function ProjectCard({ project }) {
  return <article className="ea-project-card"><Link to={`/projects/${project.slug}`} className="ea-project-image"><img src={project.image} alt={project.name} loading="lazy"/><Badge tone="light">{project.status}</Badge></Link><div className="ea-project-copy"><p><MapPin size={14}/>{project.place}</p><h3><Link to={`/projects/${project.slug}`}>{project.name}</Link></h3><span>{project.text}</span><Link className="ea-text-link" to={`/projects/${project.slug}`}>Explore project <ArrowUpRight size={16}/></Link></div></article>;
}
