const canUseStorage = () => typeof window !== 'undefined' && !!window.localStorage;
export const storage = {
  get(key, fallback = null) {
    if (!canUseStorage()) return fallback;
    try { const value = window.localStorage.getItem(key); return value ? JSON.parse(value) : fallback; }
    catch { return fallback; }
  },
  set(key, value) {
    if (!canUseStorage()) return;
    try { window.localStorage.setItem(key, JSON.stringify(value)); } catch { /* storage may be unavailable */ }
  },
  remove(key) { if (canUseStorage()) window.localStorage.removeItem(key); },
};
export default storage;
