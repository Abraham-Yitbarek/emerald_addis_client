import { useState } from 'react';
export function useSearchStore(initial = {}) {
  const [search, setSearch] = useState({ purpose: 'All', location: '', category: 'All', ...initial });
  const updateSearch = patch => setSearch(current => ({ ...current, ...patch }));
  const resetSearch = () => setSearch({ purpose: 'All', location: '', category: 'All' });
  return { search, updateSearch, resetSearch };
}
