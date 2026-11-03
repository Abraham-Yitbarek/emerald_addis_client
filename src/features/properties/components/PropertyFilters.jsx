import React from 'react';
import { Search, RotateCcw } from 'lucide-react';
import { Input, Select, Button } from '../../../components/ui';
export default function PropertyFilters({ filters, update, reset }) {
  return <div className="ea-filters"><div className="ea-filter-purpose">{['All','For sale','For rent'].map(value=><button key={value} className={filters.purpose===value?'active':''} onClick={()=>update({purpose:value})}>{value}</button>)}</div>
    <Input aria-label="Search location" placeholder="Search by location or name" value={filters.location} onChange={e=>update({location:e.target.value})}/>
    <Select aria-label="Property type" value={filters.category} onChange={e=>update({category:e.target.value})} options={['All','Apartment','Villa','House','Commercial']}/>
    <Button variant="outline" onClick={reset}><RotateCcw size={15}/> Reset</Button>
  </div>;
}
