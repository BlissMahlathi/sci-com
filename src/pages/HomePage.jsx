import Hero         from '../components/home/Hero';
import AboutSnippet  from '../components/home/AboutSnippet';
import Programmes    from '../components/home/Programmes';
import StatsCounter  from '../components/home/StatsCounter';
import Mentorship    from '../components/home/Mentorship';
import Team          from '../components/home/Team';
import CallToAction  from '../components/home/CallToAction';

const HomePage = () => (
  <main id="main-content" aria-label="Sci-Com Academy Home">
    <Hero />
    <AboutSnippet />
    <Programmes />
    <StatsCounter />
    <Mentorship />
    <Team />
    <CallToAction />
  </main>
);

export default HomePage;