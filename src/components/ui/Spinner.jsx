import React from 'react';
import { LoaderCircle } from 'lucide-react';
export default function Spinner({ size = 24, label = 'Loading' }) {
  return <span className="ea-spinner" role="status" aria-label={label}><LoaderCircle size={size}/></span>;
}
