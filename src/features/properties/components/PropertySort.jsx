import React from 'react';
import { Select } from '../../../components/ui';
export default function PropertySort({ value, onChange }) {
  return <div className="ea-sort"><span>Sort by</span><Select aria-label="Sort properties" value={value} onChange={e=>onChange(e.target.value)} options={[{value:'featured',label:'Featured'},{value:'title',label:'Name'},{value:'price-low',label:'Price: low to high'}]}/></div>;
}
