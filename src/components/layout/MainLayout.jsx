import React, { useState } from 'react';
import { Menu } from 'lucide-react';
import Navbar from './Navbar';
import MobileMenu from './MobileMenu';
import Footer from './Footer';
import ScrollToTop from './ScrollToTop';
import '../../styles/globals.css';
import '../../styles/animations.css';
export default function MainLayout({ children }) {
  const [menuOpen, setMenuOpen] = useState(false);
  return <div className="ea-site"><ScrollToTop/><Navbar/><button className="ea-mobile-toggle" onClick={() => setMenuOpen(true)} aria-label="Open navigation"><Menu/></button><MobileMenu open={menuOpen} onClose={() => setMenuOpen(false)}/><main>{children}</main><Footer/></div>;
}
