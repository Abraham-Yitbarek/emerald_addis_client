import React from 'react';
export default function Badge({ children, tone = 'neutral', className = '' }) {
  return <span className={`ea-badge ea-badge--${tone} ${className}`}>{children}</span>;
}
