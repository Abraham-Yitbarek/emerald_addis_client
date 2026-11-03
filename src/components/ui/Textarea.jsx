import React from 'react';
export default function Textarea({ label, error, hint, id, className = '', ...props }) {
  const fieldId = id || props.name;
  return <div className="ea-field">
    {label && <label htmlFor={fieldId}>{label}{props.required && <span className="ea-required"> *</span>}</label>}
    <textarea id={fieldId} className={`ea-input ea-textarea ${error ? 'ea-input--error' : ''} ${className}`} aria-invalid={!!error} {...props}/>
    {error ? <small className="ea-error">{error}</small> : hint ? <small className="ea-hint">{hint}</small> : null}
  </div>;
}
