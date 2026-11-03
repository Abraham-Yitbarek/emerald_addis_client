import React from 'react';
import { CheckCircle2 } from 'lucide-react';
export default function PropertyFeatures({ features = [] }) {
  return <section className="ea-detail-section"><h2>Property features</h2><div className="ea-feature-list">{features.map(feature=><span key={feature}><CheckCircle2 size={16}/>{feature}</span>)}</div></section>;
}
