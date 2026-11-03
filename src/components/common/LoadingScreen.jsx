import React from 'react';
import { LoaderCircle } from 'lucide-react';
export default function LoadingScreen({ label = 'Loading Emerald Addis' }) {
  return <div className="ea-loading-screen"><span className="ea-loading-mark">E.</span><LoaderCircle className="ea-spin"/><p>{label}</p></div>;
}
