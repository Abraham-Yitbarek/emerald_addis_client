import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
export default function Dropdown({ label, children, className = '' }) {
  const [open, setOpen] = useState(false);
  return <div className={`ea-dropdown ${className}`}>
    <button type="button" className="ea-dropdown-trigger" aria-expanded={open} onClick={() => setOpen(v => !v)}>{label}<ChevronDown size={15}/></button>
    {open && <div className="ea-dropdown-menu" onClick={() => setOpen(false)}>{children}</div>}
  </div>;
}
