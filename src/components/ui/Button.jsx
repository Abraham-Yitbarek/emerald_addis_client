import React from 'react';
import { LoaderCircle } from 'lucide-react';
import { cn } from '../../lib/utils';
export default function Button({ children, variant = 'primary', size = 'md', loading = false, disabled = false, className = '', type = 'button', ...props }) {
  return <button type={type} className={cn('ea-btn', `ea-btn--${variant}`, `ea-btn--${size}`, className)} disabled={disabled || loading} {...props}>
    {loading && <LoaderCircle className="ea-spin" size={16}/>} {children}
  </button>;
}
