import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { RiArrowRightLine } from 'react-icons/ri';

gsap.registerPlugin(ScrollTrigger);

const CallToAction = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.cta-inner > *',
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          stagger: 0.15,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.cta-inner',
            start: 'top 82%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="section cta-section" id="cta" ref={sectionRef} aria-label="Call to action">
      <div className="container">
        <div className="cta-inner">
          <div className="cta-text">
            <h2 className="cta-title">
              Ready to advance your<br />
              <span style={{ color: 'var(--red)' }}>professional career?</span>
            </h2>
            <p className="cta-subtitle">
              Join mining professionals building real technical competence in Strata Control and
              Rock Mechanics with Sci-Com Academy.
            </p>
          </div>

          <div className="cta-actions">
            <Link to="/apply" className="btn-primary" id="cta-register-btn">
              Register Now <RiArrowRightLine />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
