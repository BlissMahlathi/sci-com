import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import SectionHeader from '../shared/SectionHeader';
import { FEATURES} from '../../contents/index';
import { STATS } from '../../contents/index';

gsap.registerPlugin(ScrollTrigger);

const AboutSnippet = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.about-feature',
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.1,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: '.about-feature-grid',
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          },
        }
      );

      gsap.fromTo(
        '.about-stat-item',
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.5,
          stagger: 0.12,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: '.about-stat-box',
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      className="section"
      id="about"
      ref={sectionRef}
      aria-labelledby="about-title"
    >
      <div className="container">
        <div className="about-grid">
          {/* Left: Text + Features */}
          <div>
            <SectionHeader
              eyebrow="About Sci-Com Academy"
              title={
                <span id="about-title">
                  Learn. Apply.{" "}
                  <span style={{ color: "var(--red)" }}>Advance.</span>
                </span>
              }
              subtitle="We are a South African mining-focused learning and mentorship platform helping aspiring and practising professionals build competence in Strata Control and Rock Mechanics."
            />

            <div className="about-feature-grid">
              {FEATURES.map(({ icon: Icon, title, desc }) => (
                <div className="about-feature" key={title}>
                  <div className="about-feature-icon">
                    <Icon aria-hidden="true" />
                  </div>
                  <div className="about-feature-text">
                    <h4>{title}</h4>
                    <p>{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Stats grid */}
          <div className="about-visual">
            <div className="about-stat-box">
              {STATS.map(({ id, number, suffix, label }) => (
                <div className="about-stat-item" key={id}>
                  <span className="about-stat-number">
                    {number}
                    <span className="plus">{suffix}</span>
                  </span>
                  <span className="about-stat-label">{label}</span>
                </div>
              ))}
            </div>

            <div
              style={{
                marginTop: "1.5rem",
                padding: "1.5rem",
                background: "var(--surface)",
                border: "1px solid var(--border)",
                borderLeft: "3px solid var(--red)",
                borderRadius: "4px",
              }}
            >
              <p
                style={{
                  fontSize: "0.9rem",
                  color: "var(--white-2)",
                  lineHeight: "1.75",
                  fontStyle: "italic",
                }}
              >
                "SCI-COM Academy exists to help people develop the technical
                knowledge needed for careers and professional examinations in
                underground mining and rock engineering."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSnippet;
