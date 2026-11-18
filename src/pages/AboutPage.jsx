import SectionHeader from '../components/shared/SectionHeader';
import AboutSnippet from '../components/home/AboutSnippet';
import Team from '../components/home/Team';

const AboutPage = () => (
  <main style={{ paddingTop: '5rem' }}>
    <div className="section container">
      <SectionHeader
        eyebrow="About Sci-Com Academy"
        title={<span>Who We <span style={{ color: 'var(--red)' }}>Are</span></span>}
        subtitle="Professional learning with real industry context. We connect serious classroom preparation with the professional world learners are preparing to enter."
      />
    </div>
    <AboutSnippet />
    <Team />
  </main>
);

export default AboutPage;
