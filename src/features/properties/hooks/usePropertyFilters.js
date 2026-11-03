import { useMemo, useState } from 'react';
export default function usePropertyFilters(properties = []) {
  const [filters, setFilters] = useState({ purpose: 'All', category: 'All', location: '', sort: 'featured' });
  const update = patch => setFilters(current => ({ ...current, ...patch }));
  const reset = () => setFilters({ purpose: 'All', category: 'All', location: '', sort: 'featured' });
  const filtered = useMemo(() => {
    let result = properties.filter(p =>
      (filters.purpose === 'All' || p.type === filters.purpose) &&
      (filters.category === 'All' || p.category === filters.category) &&
      (!filters.location || `${p.location} ${p.title}`.toLowerCase().includes(filters.location.toLowerCase()))
    );
    if(filters.sort === 'title') result = [...result].sort((a,b)=>a.title.localeCompare(b.title));
    if(filters.sort === 'price-low') result = [...result].sort((a,b)=>Number(String(a.price).replace(/[^0-9]/g,''))-Number(String(b.price).replace(/[^0-9]/g,'')));
    return result;
  }, [properties, filters]);
  return { filters, update, reset, filtered };
}
