import SectionHeader from '../components/shared/SectionHeader';
import Mentorship from '../components/home/Mentorship';

const MentorshipPage = () => (
  <main style={{ paddingTop: '5rem' }}>
    <div className="section container">
      <SectionHeader
        eyebrow="Mentorship"
        title={<span>Your <span style={{ color: 'var(--red)' }}>Mentor Programme</span></span>}
        subtitle="Direct guidance from experienced mining professionals who understand what it takes to succeed."
      />
    </div>
    <Mentorship />
  </main>
);

export default MentorshipPage;
