import React from 'react';
import MainLayout from '../components/layout/MainLayout';
import Breadcrumb from '../components/common/Breadcrumb';
import SectionHeading from '../components/common/SectionHeading';
import { ServiceGrid, serviceData } from '../features/services';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
export default function ServicesPage() {
 return <MainLayout><section className="ea-page-hero"><div className="ea-container"><Breadcrumb items={[{label:'Services'}]}/><span className="ea-eyebrow">How we can help</span><h1>Guidance for every <em>next step.</em></h1><p>From finding a home to managing a property, we're here to make the process clearer.</p></div></section><section className="ea-section"><div className="ea-container"><SectionHeading eyebrow="Our services" title="A considered approach to real estate" description="Practical support shaped around your property goals."/><ServiceGrid services={serviceData}/></div></section><section className="ea-cta-band"><div className="ea-container"><div><span className="ea-eyebrow">Not sure where to start?</span><h2>Tell us what you're looking for.</h2></div><Link to="/contact" className="ea-btn ea-btn--light">Start a conversation <ArrowUpRight size={16}/></Link></div></section></MainLayout>;
}
