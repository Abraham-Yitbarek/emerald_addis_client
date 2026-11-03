import propertyData from '../data/propertyData';
import apiClient from '../../../services/api/apiClient';
import { API_ENDPOINTS } from '../../../services/api/endpoints';
export const propertyService = {
  async getAll(params = {}) {
    if (import.meta.env.VITE_API_URL) return apiClient.get(`${API_ENDPOINTS.properties}?${new URLSearchParams(params)}`);
    return propertyData;
  },
  async getBySlug(slug) {
    if (import.meta.env.VITE_API_URL) return apiClient.get(`${API_ENDPOINTS.properties}/${slug}`);
    return propertyData.find(item => item.slug === slug) || null;
  },
};
export default propertyService;
