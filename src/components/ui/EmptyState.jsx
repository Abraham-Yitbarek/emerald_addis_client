import React from 'react';
import { SearchX } from 'lucide-react';
export default function EmptyState({ title = 'Nothing to show yet', description = 'Try changing your filters or check back later.', action }) {
  return <div className="ea-empty"><span><SearchX size={25}/></span><h3>{title}</h3><p>{description}</p>{action}</div>;
}
