import { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  RiMenuLine,
  RiCloseLine,
} from 'react-icons/ri';
import logo from '../../assets/logo.jpg';

const NAV_LINKS = [
  { href: '/',           label: 'Home' },
  { href: '/about',      label: 'About' },
  { href: '/programmes', label: 'Programmes' },
  { href: '/mentorship', label: 'Mentorship' },
  { href: '/team',       label: 'Team' },
  { href: '/gallery',    label: 'Gallery' },
  { href: '/contact',    label: 'Contact' },
];

const Navbar = () => {
  const [scrolled, setScrolled]   = useState(false);
  const [menuOpen, setMenuOpen]   = useState(false);
  const location                  = useLocation();

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handler, { passive: true });
    return () => window.removeEventListener('scroll', handler);
  }, []);

  // Close menu on route change
  useEffect(() => { setMenuOpen(false); }, [location]);

  return (
    <>
      <nav className={`navbar${scrolled ? ' scrolled' : ''}`} role="navigation" aria-label="Main navigation">
        <div className="container navbar-inner">
          {/* Logo */}
          <Link to="/" className="nav-logo" aria-label="Sci-Com Academy Home">
            <img src={logo} alt="Sci-Com Academy logo" />
            <div className="nav-logo-text">
              <span className="brand">Sci-Com <span>ACADEMY</span></span>
              <span className="tagline">Spreading Educational Hope</span>
            </div>
          </Link>

          {/* Desktop links */}
          <ul className="nav-links" role="list">
            {NAV_LINKS.map(({ href, label }) => (
              <li key={href}>
                <Link
                  to={href}
                  className={location.pathname === href ? 'active' : ''}
                >
                  {label}
                </Link>
              </li>
            ))}
            <li>
              <Link to="/apply" className="nav-cta">
                Apply Now
              </Link>
            </li>
          </ul>

          {/* Hamburger */}
          <button
            className="nav-hamburger"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen(o => !o)}
          >
            {menuOpen
              ? <RiCloseLine size={24} color="var(--white)" />
              : <RiMenuLine  size={24} color="var(--white)" />
            }
          </button>
        </div>
      </nav>

      {/* Mobile overlay */}
      <div
        className={`mobile-overlay${menuOpen ? ' open' : ''}`}
        onClick={() => setMenuOpen(false)}
        aria-hidden="true"
      />

      {/* Mobile drawer */}
      <nav
        className={`mobile-menu${menuOpen ? ' open' : ''}`}
        aria-label="Mobile navigation"
        aria-hidden={!menuOpen}
      >
        <button
          className="mobile-close"
          onClick={() => setMenuOpen(false)}
          aria-label="Close menu"
        >
          <RiCloseLine />
        </button>
        {NAV_LINKS.map(({ href, label }) => (
          <Link
            key={href}
            to={href}
            className={location.pathname === href ? 'active' : ''}
            tabIndex={menuOpen ? 0 : -1}
          >
            {label}
          </Link>
        ))}
        <Link
          to="/apply"
          className="btn-primary"
          style={{ marginTop: '1rem', justifyContent: 'center' }}
          tabIndex={menuOpen ? 0 : -1}
        >
          Apply Now
        </Link>
      </nav>
    </>
  );
};

export default Navbar;
