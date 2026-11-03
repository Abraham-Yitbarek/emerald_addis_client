import React from 'react';
import { ChevronDown } from 'lucide-react';
export default function Select({ label, options = [], error, hint, id, className = '', ...props }) {
  const fieldId = id || props.name;
  return <div className="ea-field">
    {label && <label htmlFor={fieldId}>{label}{props.required && <span className="ea-required"> *</span>}</label>}
    <div className="ea-select-wrap"><select id={fieldId} className={`ea-input ea-select ${className}`} aria-invalid={!!error} {...props}>
      {options.map(option => typeof option === 'string' ? <option key={option} value={option}>{option}</option> : <option key={option.value} value={option.value}>{option.label}</option>)}
    </select><ChevronDown size={16}/></div>
    {error ? <small className="ea-error">{error}</small> : hint ? <small className="ea-hint">{hint}</small> : null}
  </div>;
}
