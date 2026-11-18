import SectionHeader from '../components/shared/SectionHeader';
import Programmes from '../components/home/Programmes';

const CoursePage = () => (
  <main style={{ paddingTop: '5rem' }}>
    <div className="section container">
      <SectionHeader
        eyebrow="Learning Pathways"
        title={<span>Our <span style={{ color: 'var(--red)' }}>Programmes</span></span>}
        subtitle="Structured learning pathways from foundational principles to professional examination preparation — designed for mining professionals at every level."
      />
    </div>
    <Programmes />
  </main>
);

export default CoursePage;
