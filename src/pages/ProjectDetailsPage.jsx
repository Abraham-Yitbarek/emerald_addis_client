import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import MainLayout from '../components/layout/MainLayout';
import Breadcrumb from '../components/common/Breadcrumb';
import Spinner from '../components/ui/Spinner';
import projectService from '../features/projects/services/projectService';
import { ProjectDetails, ProjectGallery } from '../features/projects';
import InquiryForm from '../features/inquiries/components/InquiryForm';
export default function ProjectDetailsPage() {
 const {slug}=useParams();const [project,setProject]=useState(null);const [loading,setLoading]=useState(true);
 useEffect(()=>{let active=true;projectService.getBySlug(slug).then(data=>{if(active)setProject(data?.data||data)}).finally(()=>{if(active)setLoading(false)});return()=>{active=false}},[slug]);
 if(loading)return <MainLayout><div className="ea-centered ea-loading-block"><Spinner/></div></MainLayout>;
 if(!project)return <MainLayout><div className="ea-container ea-not-found"><h1>Project not found</h1><Link to="/projects">Back to projects</Link></div></MainLayout>;
 return <MainLayout><section className="ea-section"><div className="ea-container"><Breadcrumb items={[{label:'Projects',to:'/projects'},{label:project.name}]}/><Link to="/projects" className="ea-back-link"><ArrowLeft size={15}/> Back to projects</Link><ProjectGallery project={project}/><div className="ea-detail-layout"><ProjectDetails project={project}/><aside className="ea-enquiry-panel"><span className="ea-eyebrow">Interested in this development?</span><h2>Talk to our team.</h2><p>Send us your questions about this project.</p><InquiryForm compact initialService="Project enquiry"/></aside></div></div></section></MainLayout>;
}
