import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
  RiStackLine,
  RiCompassLine,
  RiArrowRightLine,
} from 'react-icons/ri';
import { Badge } from '../ui/badge';
import SectionHeader from '../shared/SectionHeader';

gsap.registerPlugin(ScrollTrigger);

const PROGRAMMES = [
  {
    id: 'sco',
    icon: <RiStackLine />,
    title: 'SCO',
    desc: 'Structured preparation for Strata Control Officer candidates through focused online classes, guided study and exam support.',
    details: ['15 days online classes', '17 Aug – 4 Sep 2026'],
    price: 'R5 000.00',
    examBadge: true,
  },
  {
    id: 'rmc',
    icon: <RiCompassLine />,
    title: 'RMC Paper 1',
    desc: 'Focused Rock Mechanics Paper 1 preparation and guided study for candidates who want a structured route to exam readiness.',
    details: ['10 days online classes', '7 – 18 Sep 2026'],
    price: 'R20 000.00',
    examBadge: true,
  },
];

const Programmes = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.programme-card',
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          stagger: 0.18,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.programmes-grid',
            start: 'top 78%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="section bg-surface-2" id="programmes" ref={sectionRef} aria-labelledby="programmes-title">
      <div className="container">
        <SectionHeader
          eyebrow="Learning Pathways"
          title={<span id="programmes-title">Our <span style={{ color: 'var(--red)' }}>Programmes</span></span>}
          subtitle="Professional study with mining context. Explore focused courses and mentorship pathways designed for serious learners."
        />

        <div className="programmes-grid">
          {PROGRAMMES.map(({ id, icon, title, desc, details, price, examBadge }) => (
            <div className="programme-card" key={id} id={`programme-${id}`}>
              <div className="programme-icon">{icon}</div>
              <h3 className="programme-title">{title}</h3>
              <p className="programme-desc">{desc}</p>

              <div className="programme-details">
                {details.map((detail) => (
                  <Badge
                    key={detail}
                    variant={examBadge ? 'accent' : 'default'}
                    className="level-badge"
                  >
                    {detail}
                  </Badge>
                ))}
              </div>

              <div className="programme-price">{price}</div>
              <Link to="/programmes" className="programme-link" aria-label={`Learn more about ${title}`}>
                Learn More <RiArrowRightLine />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Programmes;
