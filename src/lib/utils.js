export const cn = (...parts) => parts.filter(Boolean).join(' ');
export const slugify = (value = '') => value.toLowerCase().trim()
  .replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
export const getInitials = (value = '') => value.split(/\s+/).filter(Boolean).slice(0, 2).map(x => x[0]).join('').toUpperCase();
export const clamp = (value, min, max) => Math.min(max, Math.max(min, value));
export const unique = values => [...new Set(values)];
