import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { RiUserLine } from 'react-icons/ri';
import SectionHeader from '../shared/SectionHeader';
import { TEAM } from '../../contents/index';

gsap.registerPlugin(ScrollTrigger);


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
