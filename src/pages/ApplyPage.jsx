import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { RiSendPlaneLine } from 'react-icons/ri';
import PageHero from '../components/shared/PageHero';

const ApplyPage = () => {
  const formRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      formRef.current?.children,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, stagger: 0.1, duration: 0.6, ease: 'power2.out', delay: 0.3 }
    );
  }, []);

  return (
    <main>
      <PageHero
        eyebrow="Start Learning"
        title={<span>Apply <span className="highlight">Now</span></span>}
        subtitle="Tell us about yourself and the programme you want to pursue. Our team will be in touch with the next steps."
      />
      <section className="section" aria-label="Application form">
        <div className="container">
          <div className="apply-grid">
            <form ref={formRef} id="application-form" onSubmit={e => e.preventDefault()} aria-label="Application form">
              {[
                { id: 'name', label: 'Full Name', type: 'text', placeholder: 'Your name' },
                { id: 'email', label: 'Email Address', type: 'email', placeholder: 'your@email.com' },
                { id: 'subject', label: 'Programme', type: 'text', placeholder: 'Programme of interest' },
              ].map(({ id, label, type, placeholder }) => (
                <div className="form-field" key={id}>
                  <label htmlFor={id}>{label}</label>
                  <input id={id} type={type} placeholder={placeholder} required />
                </div>
              ))}
              <div className="form-field">
                <label htmlFor="message">Message</label>
                <textarea id="message" rows={5} placeholder="Tell us about yourself and your interest..." required />
              </div>
              <button type="submit" className="btn-primary" id="application-submit-btn">
                <RiSendPlaneLine /> Submit Application
              </button>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ApplyPage;
