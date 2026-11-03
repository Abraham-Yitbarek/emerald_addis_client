import React from 'react';
import { Leaf } from 'lucide-react';

export default function Logo({ light = false }) {
  return <a className={`brand ${light ? 'brand-light' : ''}`} href="#home" aria-label="Emerald Addis home">
    <span className="brand-mark"><Leaf size={23} strokeWidth={1.7} /></span>
    <span className="brand-copy"><strong>EMERALD</strong><small>ADDIS</small></span>
  </a>;
}