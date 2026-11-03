// Small dependency-free in-memory query cache. Replace with TanStack Query
// if the project later needs advanced server-state features.
const cache = new Map();
export const queryClient = {
  get(key) { return cache.get(JSON.stringify(key)); },
  set(key, value) { cache.set(JSON.stringify(key), value); return value; },
  invalidate(key) { cache.delete(JSON.stringify(key)); },
  clear() { cache.clear(); },
};
export default queryClient;
