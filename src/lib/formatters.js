export const formatPrice = (value, currency = 'ETB') =>
  new Intl.NumberFormat('en-ET', { style: 'currency', currency, maximumFractionDigits: 0 }).format(Number(value) || 0);
export const formatNumber = value => new Intl.NumberFormat('en-US').format(Number(value) || 0);
export const formatDate = value => value ? new Intl.DateTimeFormat('en', { dateStyle: 'long' }).format(new Date(value)) : '';
export const formatArea = value => `${formatNumber(value)} m²`;
