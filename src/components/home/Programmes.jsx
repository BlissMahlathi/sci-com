import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
  RiArrowRightLine,
} from 'react-icons/ri';
import { Badge } from '../ui/badge';
import SectionHeader from '../shared/SectionHeader';
import { PROGRAMMES } from '../../contents/index';

gsap.registerPlugin(ScrollTrigger);



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
          {PROGRAMMES.map(({ id, icon:Icon, title, desc, details, price, examBadge }) => (
            <div className="programme-card" key={id} id={`programme-${id}`}>
              <div className="programme-icon">
                <Icon size={32} />
              </div>
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
