import React from 'react';
import ProjectStatus from './ProjectStatus';
export default function ProjectDetails({ project }) {
  if(!project)return null;
  return <div className="ea-detail-copy"><ProjectStatus status={project.status}/><h1>{project.name}</h1><p className="ea-muted">{project.place}</p><h2>About the project</h2><p>{project.overview}</p><h2>Project highlights</h2><div className="ea-feature-list">{project.highlights.map(item=><span key={item}>✓ {item}</span>)}</div></div>;
}
