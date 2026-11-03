import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import PropertiesPage from '../pages/PropertiesPage';
import PropertyDetailsPage from '../pages/PropertyDetailsPage';
import ProjectsPage from '../pages/ProjectsPage';
import ProjectDetailsPage from '../pages/ProjectDetailsPage';
import AboutPage from '../pages/AboutPage';
import ServicesPage from '../pages/ServicesPage';
import ContactPage from '../pages/ContactPage';
import PrivacyPolicyPage from '../pages/PrivacyPolicyPage';
import NotFoundPage from '../pages/NotFoundPage';

const router = createBrowserRouter([
  { path: '/', element: <App /> },
  { path: '/properties', element: <PropertiesPage /> },
  { path: '/properties/:slug', element: <PropertyDetailsPage /> },
  { path: '/projects', element: <ProjectsPage /> },
  { path: '/projects/:slug', element: <ProjectDetailsPage /> },
  { path: '/about', element: <AboutPage /> },
  { path: '/services', element: <ServicesPage /> },
  { path: '/contact', element: <ContactPage /> },
  { path: '/privacy-policy', element: <PrivacyPolicyPage /> },
  { path: '*', element: <NotFoundPage /> },
]);
export default router;
