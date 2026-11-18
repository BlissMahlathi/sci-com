import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { RiUserLine } from 'react-icons/ri';
import SectionHeader from '../shared/SectionHeader';

gsap.registerPlugin(ScrollTrigger);

const TEAM = [
  {
    id: 'godfrey',
    name: 'Godfrey Monama',
    title: 'Head Tutor',
    bio: 'BSc. Mining Engineering (Hons). SCO passed at first attempt. Passed RMC P1 and P2 with distinctions. Blasting certificate holder. Deep and shallow conventional mining experience. 5+ years tutoring experience.',
  },
  {
    id: 'fumani',
    name: 'Fumani Vukeya',
    title: 'Assistant Tutor',
    bio: 'SCO theory passed at first attempt. SCO theory top student Oct 2024. BSc. Geohydrology/Geology (Hons). Surface geotechnical and conventional mining experience. SANIRE Symposium presenter 2026.',
  },
  {
    id: 'tshego',
    name: 'Tshego Rampedi',
    title: 'Assistant Tutor',
    bio: 'SCO passed at first attempt. BSc. Mining Engineering (Hons). RMC Paper 1 top student May 2023. SANIRE Rockstar of Q3 2023. Massive mining and conventional mining experience.',
  },
];

const Team = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.team-card',
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          stagger: 0.18,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.team-grid',
            start: 'top 78%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="section bg-surface-2" id="team" ref={sectionRef} aria-labelledby="team-title">
      <div className="container">
        <SectionHeader
          eyebrow="Our Educators"
          title={<span id="team-title">The People <span style={{ color: 'var(--red)' }}>Behind It.</span></span>}
          subtitle="Experienced mining professionals — active in the industry and committed to your development."
          centered
        />

        <div className="team-grid">
          {TEAM.map(({ id, name, title, bio }) => (
            <div className="team-card" key={id} id={`team-${id}`}>
              <div className="team-avatar" aria-hidden="true">
                <RiUserLine />
              </div>
              <h3 className="team-name">{name}</h3>
              <p className="team-title">{title}</p>
              <p className="team-bio">{bio}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
