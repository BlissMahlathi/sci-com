import PageHero from '../components/shared/PageHero';
import Programmes from '../components/home/Programmes';

const CoursePage = () => (
  <main>
    <PageHero
      eyebrow="Learning Pathways"
      title={<span>Our <span className="highlight">Programmes</span></span>}
      subtitle="Structured learning pathways from foundational principles to professional examination preparation — designed for mining professionals at every level."
    />
    <Programmes />
  </main>
);

export default CoursePage;
