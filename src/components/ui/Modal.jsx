import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { X } from 'lucide-react';
export default function Modal({ open, onClose, title, children, size = 'md' }) {
  useEffect(() => {
    if (!open) return;
    const onKey = event => event.key === 'Escape' && onClose?.();
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => { document.removeEventListener('keydown', onKey); document.body.style.overflow = ''; };
  }, [open, onClose]);
  if (!open || typeof document === 'undefined') return null;
  return createPortal(<div className="ea-modal-backdrop" onMouseDown={e => e.target === e.currentTarget && onClose?.()}>
    <section className={`ea-modal ea-modal--${size}`} role="dialog" aria-modal="true" aria-label={title || 'Dialog'}>
      <header><h2>{title}</h2><button type="button" onClick={onClose} aria-label="Close dialog"><X size={20}/></button></header>
      <div className="ea-modal-body">{children}</div>
    </section>
  </div>, document.body);
}
