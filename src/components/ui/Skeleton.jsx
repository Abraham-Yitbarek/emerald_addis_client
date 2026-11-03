import React from 'react';
export default function Skeleton({ width = '100%', height = 16, radius = 8, className = '' }) {
  return <span aria-hidden="true" className={`ea-skeleton ${className}`} style={{ width, height, borderRadius: radius }}/>;
}
