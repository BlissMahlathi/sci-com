import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { RiMailLine, RiLinkedinBoxLine, RiMapPin2Line, RiSendPlaneLine } from 'react-icons/ri';
import SectionHeader from '../components/shared/SectionHeader';

const ContactPage = () => {
  const formRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      formRef.current?.children,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, stagger: 0.1, duration: 0.6, ease: 'power2.out', delay: 0.3 }
    );
  }, []);

  return (
    <main style={{ paddingTop: '5rem' }}>
      <section className="section" aria-labelledby="contact-title">
        <div className="container">
          <SectionHeader
            eyebrow="Get In Touch"
            title={<span id="contact-title">Contact <span style={{ color: 'var(--red)' }}>Us</span></span>}
            subtitle="Ready to prepare for your next mining examination? Reach out and we'll get back to you."
          />

          <div className="contact-grid">
            {/* Contact Info */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', padding: '1.25rem', background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: '6px' }}>
                <RiMailLine style={{ color: 'var(--red)', fontSize: '1.3rem', flexShrink: 0 }} />
                <div>
                  <p style={{ fontSize: '0.75rem', color: 'var(--muted)', marginBottom: '0.2rem', letterSpacing: '0.1em', textTransform: 'uppercase' }}>Email</p>
                  <a href="mailto:info@scicomacademy.co.za" id="contact-email" style={{ color: 'var(--white-2)', fontSize: '0.9rem' }}>info@scicomacademy.co.za</a>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', padding: '1.25rem', background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: '6px' }}>
                <RiLinkedinBoxLine style={{ color: 'var(--red)', fontSize: '1.3rem', flexShrink: 0 }} />
                <div>
                  <p style={{ fontSize: '0.75rem', color: 'var(--muted)', marginBottom: '0.2rem', letterSpacing: '0.1em', textTransform: 'uppercase' }}>LinkedIn</p>
                  <a href="https://za.linkedin.com" target="_blank" rel="noopener noreferrer" id="contact-linkedin" style={{ color: 'var(--white-2)', fontSize: '0.9rem' }}>Sci-Com Academy</a>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', padding: '1.25rem', background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: '6px' }}>
                <RiMapPin2Line style={{ color: 'var(--red)', fontSize: '1.3rem', flexShrink: 0 }} />
                <div>
                  <p style={{ fontSize: '0.75rem', color: 'var(--muted)', marginBottom: '0.2rem', letterSpacing: '0.1em', textTransform: 'uppercase' }}>Location</p>
                  <span style={{ color: 'var(--white-2)', fontSize: '0.9rem' }}>South Africa (Online)</span>
                </div>
              </div>
            </div>

            <aside className="banking-card" aria-labelledby="banking-title">
              <p className="contact-kicker">Secure your place</p>
              <h2 id="banking-title">Banking details</h2>
              <p>Use your full name and programme as the payment reference, then send proof of payment through the contact form.</p>
              <dl>
                <div><dt>Bank</dt><dd>First National Bank</dd></div>
                <div><dt>Account number</dt><dd>63210282941</dd></div>
                <div><dt>Branch code</dt><dd>250655</dd></div>
              </dl>
            </aside>

            {/* Contact Form */}
            <form
              ref={formRef}
              id="contact-form"
              onSubmit={e => { e.preventDefault(); }}
              style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}
              aria-label="Contact form"
            >
              {[
                { id: 'name',    label: 'Full Name',      type: 'text',  placeholder: 'Your name' },
                { id: 'email',   label: 'Email Address',  type: 'email', placeholder: 'your@email.com' },
                { id: 'subject', label: 'Subject',        type: 'text',  placeholder: 'What can we help with?' },
              ].map(({ id, label, type, placeholder }) => (
                <div key={id} style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                  <label htmlFor={id} style={{ fontSize: '0.75rem', color: 'var(--muted)', letterSpacing: '0.1em', textTransform: 'uppercase' }}>{label}</label>
                  <input
                    id={id}
                    type={type}
                    placeholder={placeholder}
                    required
                    style={{
                      background: 'var(--surface)',
                      border: '1px solid var(--border-2)',
                      borderRadius: '4px',
                      padding: '0.75rem 1rem',
                      color: 'var(--white)',
                      fontSize: '0.9rem',
                      outline: 'none',
                      transition: 'border-color 200ms ease',
                      fontFamily: 'var(--font-body)',
                    }}
                  />
                </div>
              ))}

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                <label htmlFor="message" style={{ fontSize: '0.75rem', color: 'var(--muted)', letterSpacing: '0.1em', textTransform: 'uppercase' }}>Message</label>
                <textarea
                  id="message"
                  rows={5}
                  placeholder="Tell us about yourself and your interest..."
                  required
                  style={{
                    background: 'var(--surface)',
                    border: '1px solid var(--border-2)',
                    borderRadius: '4px',
                    padding: '0.75rem 1rem',
                    color: 'var(--white)',
                    fontSize: '0.9rem',
                    outline: 'none',
                    resize: 'vertical',
                    fontFamily: 'var(--font-body)',
                  }}
                />
              </div>

              <button
                type="submit"
                className="btn-primary"
                id="contact-submit-btn"
                style={{ alignSelf: 'flex-start', marginTop: '0.5rem' }}
              >
                <RiSendPlaneLine /> Send Message
              </button>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ContactPage;
