import PageHero from '../components/shared/PageHero';
import AboutSnippet from '../components/home/AboutSnippet';
import Team from '../components/home/Team';

const AboutPage = () => (
  <main>
    <PageHero
      eyebrow="About Sci-Com Academy"
      title={<span>Who We <span className="highlight">Are</span></span>}
      subtitle="Professional learning with real industry context. We connect serious classroom preparation with the professional world learners are preparing to enter."
    />
    <AboutSnippet />
    <Team />
  </main>
);

export default AboutPage;
