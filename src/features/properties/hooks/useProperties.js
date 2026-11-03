import { useEffect, useState } from 'react';
import propertyService from '../services/propertyService';
export default function useProperties() {
  const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  useEffect(() => {
    let active = true;
    propertyService.getAll().then(data => { if(active) setProperties(Array.isArray(data) ? data : data?.data || []); })
      .catch(err => { if(active) setError(err.message || 'Unable to load properties.'); })
      .finally(() => { if(active) setLoading(false); });
    return () => { active = false; };
  }, []);
  return { properties, loading, error };
}
