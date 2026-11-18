import { Link } from 'react-router-dom';
import { RiArrowLeftLine, RiHome5Line } from 'react-icons/ri';
import PageHero from '../components/shared/PageHero';

const NotFound = () => (
  <main>
    <PageHero
      eyebrow="Error 404"
      title={<span>Page <span className="highlight">Not Found</span></span>}
      subtitle="The page you're looking for doesn't exist or has been moved."
    />
    <section style={{ minHeight: '45vh', display: 'flex', alignItems: 'center' }}>
      <div className="container" style={{ textAlign: 'center' }}>
      <p style={{ fontSize: '6rem', fontFamily: 'var(--font-heading)', fontWeight: 800, color: 'var(--border-2)', lineHeight: 1 }}>
        404
      </p>
      <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
        <button onClick={() => window.history.back()} className="btn-secondary" id="notfound-back-btn">
          <RiArrowLeftLine /> Go Back
        </button>
        <Link to="/" className="btn-primary" id="notfound-home-btn">
          <RiHome5Line /> Home
        </Link>
      </div>
      </div>
    </section>
  </main>
);

export default NotFound;
