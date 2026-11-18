import PageHero from '../components/shared/PageHero';
import Mentorship from '../components/home/Mentorship';

const MentorshipPage = () => (
  <main>
    <PageHero
      eyebrow="Mentorship"
      title={<span>Your <span className="highlight">Mentor Programme</span></span>}
      subtitle="Direct guidance from experienced mining professionals who understand what it takes to succeed."
    />
    <Mentorship />
  </main>
);

export default MentorshipPage;
