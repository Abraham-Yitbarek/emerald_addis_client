import projectData from '../data/projectData';
import apiClient from '../../../services/api/apiClient';
export const projectService = {
  getAll: () => import.meta.env.VITE_API_URL ? apiClient.get('/projects') : Promise.resolve(projectData),
  getBySlug: slug => import.meta.env.VITE_API_URL ? apiClient.get(`/projects/${slug}`) : Promise.resolve(projectData.find(p=>p.slug===slug)||null),
};
export default projectService;
