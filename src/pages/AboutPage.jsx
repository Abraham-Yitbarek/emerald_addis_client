import React from 'react';
import MainLayout from '../components/layout/MainLayout';
import Breadcrumb from '../components/common/Breadcrumb';
import { CompanyIntroduction, MissionVision, CompanyValues, TeamSection } from '../features/about';
import SectionHeading from '../components/common/SectionHeading';
export default function AboutPage() {
 return <MainLayout><section className="ea-page-hero"><div className="ea-container"><Breadcrumb items={[{label:'About us'}]}/><span className="ea-eyebrow">A little about us</span><h1>Property, with <em>people</em> at its heart.</h1><p>Local understanding. Thoughtful service. A better way to find your place.</p></div></section><div className="ea-container ea-section"><CompanyIntroduction/></div><section className="ea-soft-section"><div className="ea-container ea-section"><SectionHeading eyebrow="What guides us" title="A clear purpose, a thoughtful approach"/><MissionVision/></div></section><section className="ea-container ea-section"><SectionHeading eyebrow="What matters to us" title="The values behind every conversation"/><CompanyValues/></section><section className="ea-soft-section"><div className="ea-container ea-section"><TeamSection/></div></section></MainLayout>;
}
