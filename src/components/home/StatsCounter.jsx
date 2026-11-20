import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {STAT} from "../../contents/index"

gsap.registerPlugin(ScrollTrigger);

const StatsCounter = () => {
  const sectionRef = useRef(null);
  const numberRefs = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      STATS.forEach((stat, i) => {
        const el = numberRefs.current[i];
        if (!el) return;

        ScrollTrigger.create({
          trigger: el,
          start: 'top 85%',
          once: true,
          onEnter: () => {
            gsap.fromTo(
              { val: 0 },
              {
                val: stat.number,
                duration: 2,
                ease: 'power2.out',
                onUpdate: function () {
                  el.textContent = Math.round(this.targets()[0].val).toLocaleString() + stat.suffix;
                },
              }
            );
          },
        });

        gsap.fromTo(
          el.closest('.stat-item'),
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            delay: i * 0.12,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: '.stats-grid',
              start: 'top 80%',
              toggleActions: 'play none none reverse',
            },
          }
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="stats-section" id="stats" ref={sectionRef} aria-label="Key statistics">
      <div className="stats-grid" role="list">
        {STAT.map(({ icon:Icon, number, suffix, label }, i) => (
          <div className="stat-item" key={label} role="listitem">
            <div className="stat-icon">
              <Icon aria-hidden="true" />
            </div>
            <span
              className="stat-number"
              ref={el => (numberRefs.current[i] = el)}
              aria-label={`${number}${suffix} ${label}`}
            >
              0{suffix}
            </span>
            <span className="stat-label">{label}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default StatsCounter;
