import React from 'react';
import { useSearchParams } from 'react-router-dom';
import MainLayout from '../components/layout/MainLayout';
import Breadcrumb from '../components/common/Breadcrumb';
import SectionHeading from '../components/common/SectionHeading';
import { PropertyGrid, PropertyFilters, PropertySort, useProperties, usePropertyFilters } from '../features/properties';
import Spinner from '../components/ui/Spinner';
export default function PropertiesPage() {
 const {properties,loading,error}=useProperties();
 const [params]=useSearchParams();
 const {filters,update,reset,filtered}=usePropertyFilters(properties);
 React.useEffect(()=>{const location=params.get('location');if(location)update({location});},[params]);
 return <MainLayout><section className="ea-page-hero"><div className="ea-container"><Breadcrumb items={[{label:'Properties'}]}/><span className="ea-eyebrow">Find your place</span><h1>Explore our <em>properties.</em></h1><p>Discover considered homes and spaces across Addis Ababa.</p></div></section>
 <section className="ea-section"><div className="ea-container"><SectionHeading eyebrow="The property collection" title="Spaces worth discovering" description="Browse the current selection and refine your search to find a place that fits."/><PropertyFilters filters={filters} update={update} reset={reset}/><div className="ea-results-row"><span>{loading?'Loading listings':`${filtered.length} ${filtered.length===1?'property':'properties'} found`}</span><PropertySort value={filters.sort} onChange={sort=>update({sort})}/></div>
 {loading?<div className="ea-centered"><Spinner/></div>:error?<p className="ea-error">{error}</p>:<PropertyGrid properties={filtered}/>}</div></section></MainLayout>;
}
