import React from 'react';
import MainLayout from '../components/layout/MainLayout';
import Breadcrumb from '../components/common/Breadcrumb';
import SectionHeading from '../components/common/SectionHeading';
import { ProjectGrid, useProjects } from '../features/projects';
import Spinner from '../components/ui/Spinner';
export default function ProjectsPage() {
 const {projects,loading,error}=useProjects();
 return <MainLayout><section className="ea-page-hero"><div className="ea-container"><Breadcrumb items={[{label:'Projects'}]}/><span className="ea-eyebrow">Beyond the address</span><h1>Places <em>taking shape.</em></h1><p>Explore selected developments and places designed around the way we want to live.</p></div></section><section className="ea-section"><div className="ea-container"><SectionHeading eyebrow="Our developments" title="A closer look at what's next" description="Learn about the ideas, locations and progress behind selected projects."/>{loading?<div className="ea-centered"><Spinner/></div>:error?<p className="ea-error">{error}</p>:<ProjectGrid projects={projects}/>}</div></section></MainLayout>;
}
