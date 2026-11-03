import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { ArrowLeft, Phone } from 'lucide-react';
import MainLayout from '../components/layout/MainLayout';
import Breadcrumb from '../components/common/Breadcrumb';
import Spinner from '../components/ui/Spinner';
import { PropertyGallery, PropertyDetails, PropertyFeatures, PropertyLocation, RelatedProperties } from '../features/properties';
import propertyService from '../features/properties/services/propertyService';
import propertyData from '../features/properties/data/propertyData';
import InquiryForm from '../features/inquiries/components/InquiryForm';
export default function PropertyDetailsPage() {
 const {slug}=useParams();const [property,setProperty]=useState(null);const [loading,setLoading]=useState(true);
 useEffect(()=>{let active=true;propertyService.getBySlug(slug).then(data=>{if(active)setProperty(data?.data||data)}).finally(()=>{if(active)setLoading(false)});return()=>{active=false}},[slug]);
 if(loading)return <MainLayout><div className="ea-centered ea-loading-block"><Spinner/></div></MainLayout>;
 if(!property)return <MainLayout><div className="ea-container ea-not-found"><h1>Property not found</h1><p>This listing may no longer be available.</p><Link to="/properties">Back to properties</Link></div></MainLayout>;
 return <MainLayout><section className="ea-section"><div className="ea-container"><Breadcrumb items={[{label:'Properties',to:'/properties'},{label:property.title}]}/><Link to="/properties" className="ea-back-link"><ArrowLeft size={15}/> Back to properties</Link><PropertyGallery property={property}/><div className="ea-detail-layout"><div><PropertyDetails property={property}/><PropertyFeatures features={property.features}/><PropertyLocation location={property.location}/></div><aside className="ea-enquiry-panel"><span className="ea-eyebrow">Interested in this property?</span><h2>Let's arrange a conversation.</h2><p>Share your details and our team will get back to you.</p><a className="ea-btn ea-btn--outline ea-full" href="tel:+251911000000"><Phone size={15}/> Call our team</a><InquiryForm compact initialService="Property enquiry"/></aside></div><RelatedProperties properties={propertyData.filter(p=>p.id!==property.id&&p.category===property.category)}/></div></section></MainLayout>;
}
