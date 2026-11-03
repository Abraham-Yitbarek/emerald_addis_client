import React from 'react';
import { useSearchParams } from 'react-router-dom';
import MainLayout from '../components/layout/MainLayout';
import Breadcrumb from '../components/common/Breadcrumb';
import ContactInfo from '../components/common/ContactInfo';
import LocationMap from '../features/locations/components/LocationMap';
import InquiryForm from '../features/inquiries/components/InquiryForm';
export default function ContactPage() {
 const [params]=useSearchParams();const service=params.get('service')||'';
 return <MainLayout><section className="ea-page-hero"><div className="ea-container"><Breadcrumb items={[{label:'Contact'}]}/><span className="ea-eyebrow">Let's talk</span><h1>Good things start with <em>a conversation.</em></h1><p>Tell us a little about what you need. We'd be glad to help.</p></div></section><section className="ea-section"><div className="ea-container ea-contact-layout"><div><span className="ea-eyebrow">Send an enquiry</span><h2>How can we help?</h2><p className="ea-muted">Share a few details and someone from our team will be in touch.</p><InquiryForm initialService={service}/></div><aside><div className="ea-contact-aside"><h3>Contact details</h3><ContactInfo/></div><LocationMap/></aside></div></section></MainLayout>;
}
