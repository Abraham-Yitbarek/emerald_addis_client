import React from 'react';
import { Link } from 'react-router-dom';
import MainLayout from '../components/layout/MainLayout';
import { ArrowLeft } from 'lucide-react';
export default function NotFoundPage() {
 return <MainLayout><section className="ea-not-found"><span className="ea-eyebrow">404 · Page not found</span><h1>This address doesn't seem to exist.</h1><p>The page may have moved, or the link may be incorrect.</p><Link className="ea-btn ea-btn--primary" to="/"><ArrowLeft size={16}/> Return to homepage</Link></section></MainLayout>;
}
