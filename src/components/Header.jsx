
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import Logo from './Logo';

const links = [
  ['Home', '/'],
  ['Properties', '/properties'],
  ['Projects', '/projects'],
  ['About us', '/about'],
  ['Services', '/services'],
  ['Contact', '/contact'],
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  const isHome = location.pathname === '/';

  return (
    <header className="site-header">
      <div className="container header-inner">
        <Link to="/">
          <Logo />
        </Link>

        <nav className={open ? 'nav nav-open' : 'nav'}>
          {links.map(([label, href]) => (
            <Link
              key={label}
              to={href}
              onClick={() => setOpen(false)}
            >
              {label}
            </Link>
          ))}

          <Link
            className="nav-mobile-cta"
            to="/contact"
            onClick={() => setOpen(false)}
          >
            Let's talk <ArrowUpRight size={16} />
          </Link>
        </nav>

        <Link className="button button-dark header-cta" to="/contact">
          Get in touch <ArrowUpRight size={16} />
        </Link>

        <button
          className="menu-toggle"
          onClick={() => setOpen(!open)}
          aria-label="Toggle navigation"
          aria-expanded={open}
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>
    </header>
  );
}