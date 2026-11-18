import SectionHeader from '../components/shared/SectionHeader';
import { RiImageLine } from 'react-icons/ri';

const GalleryPage = () => (
  <main style={{ paddingTop: '5rem' }}>
    <section className="section" aria-labelledby="gallery-title">
      <div className="container">
        <SectionHeader
          eyebrow="Gallery"
          title={<span id="gallery-title">Learning in <span style={{ color: 'var(--red)' }}>Action</span></span>}
          subtitle="A look at the professional environments and focused study behind our programmes."
        />

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '1.5rem',
        }}>
          {Array.from({ length: 6 }).map((_, i) => (
            <div key={i} style={{
              aspectRatio: '16/10',
              background: 'var(--surface)',
              border: '1px solid var(--border)',
              borderRadius: '6px',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '0.75rem',
              color: 'var(--muted-2)',
            }}>
              <RiImageLine style={{ fontSize: '2rem' }} />
              <span style={{ fontSize: '0.8rem', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
                Coming Soon
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  </main>
);

export default GalleryPage;
