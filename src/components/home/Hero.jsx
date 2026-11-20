import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import {
  RiArrowRightLine,
  RiMapPin2Line,
  RiBuilding2Line,
  RiShieldCheckLine,
} from 'react-icons/ri';

const BADGES = [
  { icon: <RiMapPin2Line />, label: 'South Africa' },
  { icon: <RiBuilding2Line />, label: 'Underground Mining' },
  { icon: <RiShieldCheckLine />, label: 'Ground Safety' },
];

const Hero = () => {
  const heroRef = useRef(null);
  const eyebrowRef = useRef(null);
  const h1Ref = useRef(null);
  const subRef = useRef(null);
  const ctasRef = useRef(null);
  const badgesRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        [eyebrowRef.current, h1Ref.current, subRef.current, ctasRef.current, badgesRef.current],
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: 'power3.out',
          stagger: 0.14,
          delay: 0.2,
        }
      );
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="hero grid-bg" id="hero" ref={heroRef} aria-label="Hero section">
      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div style={{ maxWidth: '720px' }}>
          <div className="hero-eyebrow" ref={eyebrowRef} aria-hidden="true">
            <RiShieldCheckLine />
            Strata Control · Rock Mechanics · Exam Preparation
          </div>
  
          <h1 className="hero-title" ref={h1Ref}>
            Engineering Knowledge.<br />
            Safer <span className="highlight">Ground.</span><br />
            Stronger Careers.
          </h1>

          <p className="hero-subtitle" ref={subRef}>
            Sci-Com Academy provides accessible online education, mentorship and technical support
            for aspiring and practising mining professionals preparing for Strata Control and Rock
            Mechanics examinations across South Africa.
          </p>

          <div className="hero-ctas" ref={ctasRef}>
            <Link to="/programmes" className="btn-primary" id="hero-explore-btn">
              Explore Programmes <RiArrowRightLine />
            </Link>
          </div>

          <div className="hero-badge-row" ref={badgesRef}>
            {BADGES.map(({ icon, label }) => (
              <span className="hero-badge" key={label}>
                {icon} {label}
              </span>
            ))}
          </div>
        </div>
      </div>

    </section>
  );
};

export default Hero;
