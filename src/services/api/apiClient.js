import api from '../../lib/axios';
const baseURL = import.meta.env.VITE_API_URL || '';
const withBase = path => `${baseURL}${path}`;
export const apiClient = {
  get: path => api.get(withBase(path)),
  post: (path, data) => api.post(withBase(path), data),
};
export default apiClient;
