import PageHero from '../components/shared/PageHero';
import Team from '../components/home/Team';

const TeamPage = () => (
  <main>
    <PageHero
      eyebrow="Our Educators"
      title={<span>Meet the <span className="highlight">Team</span></span>}
      subtitle="Experienced mining professionals, active in the industry and committed to your development."
    />
    <Team />
  </main>
);

export default TeamPage;
