import React from 'react';
import ProjectCard from './ProjectCard';
export default function ProjectGrid({ projects = [] }) {
  return <div className="ea-project-grid">{projects.map(project=><ProjectCard key={project.id} project={project}/>)}</div>;
}
