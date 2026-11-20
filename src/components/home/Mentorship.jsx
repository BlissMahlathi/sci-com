import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
  RiArrowRightLine,
} from 'react-icons/ri';
import SectionHeader from '../shared/SectionHeader';
import { BENEFITS } from '../../contents/index';  
gsap.registerPlugin(ScrollTrigger);



const Mentorship = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.mentorship-text-col > *',
        { opacity: 0, x: -40 },
        {
          opacity: 1,
          x: 0,
          duration: 0.7,
          stagger: 0.15,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.mentorship-inner',
            start: 'top 78%',
            toggleActions: 'play none none reverse',
          },
        }
      );

      gsap.fromTo(
        '.mentorship-benefit',
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.55,
          stagger: 0.1,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: '.mentorship-benefits',
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="section" id="mentorship" ref={sectionRef} aria-labelledby="mentorship-title">
      <div className="container">
        <div className="mentorship-inner">
          {/* Left: Text */}
          <div className="mentorship-text-col">
            <SectionHeader
              eyebrow="Mentorship Programme"
              title={<span id="mentorship-title">Guidance Beyond the <span style={{ color: 'var(--red)' }}>Lesson.</span></span>}
              subtitle="Mentorship gives learners a place to clarify difficult concepts and build a deliberate study routine."
            />

            <div className="mentorship-quote" role="blockquote">
              <p>
                "Preparation is more than memorising. Work through ideas, connect concepts and practise explaining your thinking clearly."
              </p>
            </div>

            <Link to="/mentorship" className="btn-primary" id="mentorship-cta-btn">
              Explore Mentorship <RiArrowRightLine />
            </Link>
          </div>

          {/* Right: Benefits grid */}
          <div>
            <div className="mentorship-benefits">
              {BENEFITS.map(({ icon: Icon, title, desc }) => (
                <div className="mentorship-benefit" key={title}>
                  <div className="mentorship-benefit-icon">
                    <Icon aria-hidden="true" />
                  </div>
                  <h4>{title}</h4>
                  <p>{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mentorship;
