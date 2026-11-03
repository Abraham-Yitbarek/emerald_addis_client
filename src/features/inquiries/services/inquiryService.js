import apiClient from '../../../services/api/apiClient';
export async function submitInquiry(payload) {
 if(import.meta.env.VITE_API_URL) return apiClient.post('/inquiries', payload);
 // Demo mode: no backend is configured; resolve locally and make that explicit in the UI.
 return { success: true, demo: true, message: 'Your message has been prepared. Connect the API to deliver it to the team.' };
}
