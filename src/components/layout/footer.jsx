import { Link } from 'react-router-dom';
import {
  RiLinkedinBoxLine,
  RiMailLine,
  RiMapPin2Line,
  RiPhoneLine,
} from 'react-icons/ri';
import logo from '../../assets/logo.jpg';

const QUICK_LINKS = [
  { href: '/',           label: 'Home' },
  { href: '/about',      label: 'About Us' },
  { href: '/programmes', label: 'Programmes' },
  { href: '/mentorship', label: 'Mentorship' },
  { href: '/team',       label: 'Team' },
  { href: '/gallery',    label: 'Gallery' },
  { href: '/contact',    label: 'Contact' },
];

const PROGRAMME_LINKS = [
  { href: '/programmes', label: 'Strata Control (SCO)' },
  { href: '/programmes', label: 'RMC Paper 1' },
];

const Footer = () => (
  <footer className="footer" id="footer" aria-label="Site footer">
    <div className="container">
      <div className="footer-grid">
        {/* Brand */}
        <div className="footer-brand">
          <Link to="/" className="footer-logo" aria-label="Sci-Com Academy Home">
            <img src={logo} alt="Sci-Com Academy" />
            <span className="footer-logo-name">Sci-Com <span>ACADEMY</span></span>
          </Link>

          <p className="footer-desc">
            Spreading Educational Hope — providing accessible online education, mentorship and
            technical support for South African mining professionals in Strata Control and Rock
            Mechanics.
          </p>

          <div className="footer-social" aria-label="Social media links">
            <a
              href="https://za.linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              id="footer-linkedin"
            >
              <RiLinkedinBoxLine />
            </a>
            <a href="mailto:ScicomAcademy1@gmail.com" aria-label="Email us" id="footer-email-icon">
              <RiMailLine />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div className="footer-col">
          <h4>Quick Links</h4>
          <ul role="list">
            {QUICK_LINKS.map(({ href, label }) => (
              <li key={label}><Link to={href}>{label}</Link></li>
            ))}
          </ul>
        </div>

        {/* Programmes */}
        <div className="footer-col">
          <h4>Programmes</h4>
          <ul role="list">
            {PROGRAMME_LINKS.map(({ href, label }) => (
              <li key={label}><Link to={href}>{label}</Link></li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div className="footer-col">
          <h4>Contact</h4>
          <ul role="list">
            <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <RiMailLine style={{ color: 'var(--red)', flexShrink: 0 }} aria-hidden="true" />
              <a href="mailto:ScicomAcademy1@gmail.com" id="footer-email-link">
                ScicomAcademy1@gmail.com
              </a>
            </li>
            <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <RiPhoneLine style={{ color: 'var(--red)', flexShrink: 0 }} aria-hidden="true" />
              <a href="tel:+27762861868" style={{ fontSize: '0.85rem', color: 'var(--muted)' }}>
                +27 76 286 1868
              </a>
            </li>
            <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <RiMapPin2Line style={{ color: 'var(--red)', flexShrink: 0 }} aria-hidden="true" />
              <span style={{ fontSize: '0.85rem', color: 'var(--muted)' }}>South Africa</span>
            </li>
          </ul>

          <div style={{ marginTop: '1.5rem', padding: '1rem', background: 'var(--surface-2)', border: '1px solid var(--border)', borderRadius: '4px' }}>
            <p style={{ fontSize: '0.75rem', color: 'var(--muted)', lineHeight: '1.6' }}>
              <strong style={{ color: 'var(--white-2)', display: 'block', marginBottom: '0.25rem' }}>⚠ Note</strong>
              Sci-Com Academy offers training, mentorship and exam preparation. We are not a
              formally accredited higher-education institution.
            </p>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="footer-bottom">
        <p>© 2026 Sci-Com Academy. All rights reserved.</p>
        <p style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <RiMapPin2Line aria-hidden="true" style={{ color: 'var(--red)' }} />
          Made in South Africa
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
