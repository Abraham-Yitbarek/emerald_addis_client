import React from 'react';
import { cn } from '../../lib/utils';
export default function Input({ label, error, hint, className = '', id, ...props }) {
  const fieldId = id || props.name;
  return <div className="ea-field">
    {label && <label htmlFor={fieldId}>{label}{props.required && <span className="ea-required"> *</span>}</label>}
    <input id={fieldId} className={cn('ea-input', error && 'ea-input--error', className)} aria-invalid={!!error} {...props}/>
    {error ? <small className="ea-error">{error}</small> : hint ? <small className="ea-hint">{hint}</small> : null}
  </div>;
}
