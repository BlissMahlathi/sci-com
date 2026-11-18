import { Link } from 'react-router-dom';
import { RiArrowLeftLine, RiHome5Line } from 'react-icons/ri';

const NotFound = () => (
  <main style={{ paddingTop: '5rem', minHeight: '80vh', display: 'flex', alignItems: 'center' }}>
    <div className="container" style={{ textAlign: 'center' }}>
      <p style={{ fontSize: '6rem', fontFamily: 'var(--font-heading)', fontWeight: 800, color: 'var(--border-2)', lineHeight: 1 }}>
        404
      </p>
      <h1 style={{ fontSize: '1.5rem', marginTop: '1rem', marginBottom: '0.75rem' }}>
        Page Not Found
      </h1>
      <p style={{ color: 'var(--muted)', marginBottom: '2rem' }}>
        The page you're looking for doesn't exist or has been moved.
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
  </main>
);

export default NotFound;
